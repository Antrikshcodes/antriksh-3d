"use client";

import * as THREE from "three";

/**
 * Generates photorealistic Golden Honey Oak PBR textures for the desk.
 * Base Color, Roughness Map, and Bump Map.
 */
export function generateOakWoodPBRTextures() {
  if (typeof document === "undefined") {
    return { albedo: null, roughness: null, bump: null };
  }

  const width = 2048;
  const height = 1024;

  // 1. Base Color Canvas
  const albedoCanvas = document.createElement("canvas");
  albedoCanvas.width = width;
  albedoCanvas.height = height;
  const actx = albedoCanvas.getContext("2d")!;

  // 2. Roughness Canvas
  const roughCanvas = document.createElement("canvas");
  roughCanvas.width = width;
  roughCanvas.height = height;
  const rctx = roughCanvas.getContext("2d")!;

  // 3. Bump / Height Canvas
  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = width;
  bumpCanvas.height = height;
  const bctx = bumpCanvas.getContext("2d")!;

  // Base warm golden honey oak tone
  actx.fillStyle = "#cca25c"; // Golden honey base
  actx.fillRect(0, 0, width, height);

  rctx.fillStyle = "#707070"; // Base roughness ~0.44
  rctx.fillRect(0, 0, width, height);

  bctx.fillStyle = "#808080"; // Neutral height
  bctx.fillRect(0, 0, width, height);

  // Planks partition along depth (Y axis on texture corresponds to desk depth)
  const plankCount = 6;
  const plankHeight = height / plankCount;

  for (let p = 0; p < plankCount; p++) {
    const pY = p * plankHeight;
    // Slight color variation per solid oak stave
    const staveVariation = (Math.sin(p * 2.3) * 0.5 + 0.5);
    const staveWarmth = Math.floor(180 + staveVariation * 40);
    const staveGold = Math.floor(145 + staveVariation * 35);
    const staveBrown = Math.floor(80 + staveVariation * 25);

    actx.fillStyle = `rgba(${staveWarmth}, ${staveGold}, ${staveBrown}, 0.22)`;
    actx.fillRect(0, pY, width, plankHeight);

    // Grain lines along length (horizontal X axis)
    const grainLines = 140;
    for (let g = 0; g < grainLines; g++) {
      const lineY = pY + (g / grainLines) * plankHeight;
      const waveFreq = 0.003 + (g % 5) * 0.001;
      const waveAmp = 4 + (g % 7) * 2.5;

      // Albedo grain color
      const isDarkGrain = g % 4 === 0;
      const grainAlpha = isDarkGrain ? 0.28 : 0.14;
      actx.strokeStyle = isDarkGrain ? "rgba(138, 92, 38, " + grainAlpha + ")" : "rgba(225, 185, 115, " + grainAlpha + ")";
      actx.lineWidth = 1 + (g % 3) * 0.8;

      actx.beginPath();
      for (let x = 0; x < width; x += 12) {
        const yOffset = Math.sin(x * waveFreq + p * 1.5) * waveAmp + Math.cos(x * 0.01) * 2;
        if (x === 0) actx.moveTo(x, lineY + yOffset);
        else actx.lineTo(x, lineY + yOffset);
      }
      actx.stroke();

      // Roughness variation along grain (open pores have higher roughness)
      rctx.strokeStyle = isDarkGrain ? "rgba(160, 160, 160, 0.4)" : "rgba(80, 80, 80, 0.3)";
      rctx.lineWidth = actx.lineWidth;
      rctx.beginPath();
      for (let x = 0; x < width; x += 16) {
        const yOffset = Math.sin(x * waveFreq + p * 1.5) * waveAmp;
        if (x === 0) rctx.moveTo(x, lineY + yOffset);
        else rctx.lineTo(x, lineY + yOffset);
      }
      rctx.stroke();

      // Bump variation (pores create micro grooves)
      if (isDarkGrain) {
        bctx.strokeStyle = "rgba(40, 40, 40, 0.35)";
        bctx.lineWidth = 1.2;
        bctx.beginPath();
        for (let x = 0; x < width; x += 16) {
          const yOffset = Math.sin(x * waveFreq + p * 1.5) * waveAmp;
          if (x === 0) bctx.moveTo(x, lineY + yOffset);
          else bctx.lineTo(x, lineY + yOffset);
        }
        bctx.stroke();
      }
    }

    // Subtle natural wood knots (organic swirls)
    if (p === 1 || p === 4) {
      const knotX = p === 1 ? 520 : 1480;
      const knotY = pY + plankHeight * 0.52;
      const knotRad = 24;

      for (let r = knotRad; r > 2; r -= 3) {
        actx.strokeStyle = `rgba(120, 75, 25, ${(knotRad - r) / knotRad * 0.45})`;
        actx.lineWidth = 2;
        actx.beginPath();
        actx.ellipse(knotX, knotY, r * 2.2, r, 0.08, 0, Math.PI * 2);
        actx.stroke();

        bctx.strokeStyle = "rgba(30, 30, 30, 0.4)";
        bctx.beginPath();
        bctx.ellipse(knotX, knotY, r * 2.2, r, 0.08, 0, Math.PI * 2);
        bctx.stroke();
      }
    }

    // Plank seam / chamfer groove between wood planks
    if (p > 0) {
      actx.strokeStyle = "rgba(70, 42, 14, 0.35)";
      actx.lineWidth = 1.5;
      actx.beginPath();
      actx.moveTo(0, pY);
      actx.lineTo(width, pY);
      actx.stroke();

      bctx.strokeStyle = "rgba(20, 20, 20, 0.6)";
      bctx.lineWidth = 2;
      bctx.beginPath();
      bctx.moveTo(0, pY);
      bctx.lineTo(width, pY);
      bctx.stroke();
    }
  }

  // Medullary rays (golden oak signature flecks across grain)
  actx.fillStyle = "rgba(245, 215, 150, 0.16)";
  for (let i = 0; i < 400; i++) {
    const rx = Math.random() * width;
    const ry = Math.random() * height;
    const rlen = 12 + Math.random() * 28;
    const rwidth = 2 + Math.random() * 3;
    actx.fillRect(rx, ry, rlen, rwidth);
  }

  const albedoTexture = new THREE.CanvasTexture(albedoCanvas);
  albedoTexture.wrapS = THREE.ClampToEdgeWrapping;
  albedoTexture.wrapT = THREE.ClampToEdgeWrapping;
  albedoTexture.minFilter = THREE.LinearMipmapLinearFilter;
  albedoTexture.generateMipmaps = true;

  const roughnessTexture = new THREE.CanvasTexture(roughCanvas);
  roughnessTexture.wrapS = THREE.ClampToEdgeWrapping;
  roughnessTexture.wrapT = THREE.ClampToEdgeWrapping;
  roughnessTexture.generateMipmaps = true;

  const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
  bumpTexture.wrapS = THREE.ClampToEdgeWrapping;
  bumpTexture.wrapT = THREE.ClampToEdgeWrapping;
  bumpTexture.generateMipmaps = true;

  return { albedo: albedoTexture, roughness: roughnessTexture, bump: bumpTexture };
}

