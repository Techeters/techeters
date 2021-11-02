varying vec2 vUv;
varying vec2 vDUv;
varying vec2 vResolution;
varying float vParallax;

uniform sampler2D uTexture;
uniform float uStrength;
uniform float uTime;
uniform float uVisible;
uniform float uScale;
uniform float uHover;
uniform float uRadius;

const float defaultScale = 0.9;

vec4 tex(in vec2 st) {
   return texture2D(uTexture, st);
}

float roundedBoxSDF(vec2 CenterPosition, vec2 Size, float Radius) {
   return length(max(abs(CenterPosition) - Size + Radius, 0.0)) - Radius;
}

void main() {

    vec2 uv = vUv;

   if(uv.y > 1.) {
      discard;
   }

    if(uv.y < 0.) {
      discard;
   }

   vec2 coords = vDUv * vResolution;
   float edgeSoftness = 1.2;

   float distance = roundedBoxSDF(coords - (vResolution / 2.0), vResolution / 2.0, uRadius);

   float smoothedAlpha = 1.0 - smoothstep(0.0, edgeSoftness * 2.0, distance);

   vec2 newUv = uv;

   newUv += (sin(newUv.y * 10. + (uTime / 5.)) / 500.) * (uStrength);
   newUv += (sin(newUv.x * 10. + (uTime / 15.)) / 500.) * (uStrength);

   vec2 p = (newUv - vec2(0.5, 0.5)) * (defaultScale - uScale) + vec2(0.5, 0.5);

   vec4 img = tex(p);

   vec4 finalTexture = img;

   vec4 color = mix(vec4(0.0), vec4(finalTexture.xyz, smoothedAlpha), smoothedAlpha);

   gl_FragColor = color * uVisible;
}
