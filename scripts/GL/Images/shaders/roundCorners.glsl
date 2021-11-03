float roundedBoxSDF(vec2 CenterPosition, vec2 Size, float Radius) {
   return length(max(abs(CenterPosition) - Size + Radius, 0.0)) - Radius;
}

vec4 roundCorners(vec2 uv, vec2 res, float radius, vec4 texture) {
   vec2 coords = uv * res;
   float edgeSoftness = 1.2;

   float distance = roundedBoxSDF(coords - (res / 2.0), res / 2.0, radius);

   float smoothedAlpha = 1.0 - smoothstep(0.0, edgeSoftness * 2.0, distance);

   return mix(vec4(0.0), vec4(texture.xyz, smoothedAlpha), smoothedAlpha);

}