@import ./roundCorners;
@import ./blur;

varying vec2 vUv;
varying vec2 vDUv;
varying vec2 vResolution;

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

void main() {

   vec2 uv = vUv;

   if(uv.y > 1.) {
      discard;
   }

   if(uv.y < 0.) {
      discard;
   }

   vec2 newUv = uv;
   float angle = 1.55;

   newUv += (sin(newUv.y * 10. + (uTime / 5.)) / 500.) * (uStrength * 2.);
   newUv += (sin(newUv.x * 10. + (uTime / 15.)) / 500.) * (uStrength * 2.);

   vec2 p = (newUv - vec2(0.5, 0.5)) * (defaultScale - uScale) + vec2(0.5, 0.5);
   vec2 offset = uStrength / 50.0 * vec2(cos(angle), sin(angle));

   float t = uStrength;
   float _Speed = 3.0;

   float res = t * _Speed * 3.0 + 0.01;

   if(abs(res) > 0.) {
      p *= vResolution.xy / res;
      p = floor(p);
      p /= vResolution.xy / res;

      p += res * 0.002;
   }

   vec4 cr = vec4(BlurredPixel(p + offset * 0.6, uTexture, uStrength), 1.0);
   vec4 cga = vec4(BlurredPixel(p, uTexture, uStrength), 1.0);
   vec4 cb = vec4(BlurredPixel(p - offset * 0.7, uTexture, uStrength), 1.0);

   vec4 img = vec4(cr.r, cga.g, cb.b, 1.);

   vec4 finalTexture = img;

   vec4 color = roundCorners(vDUv, vResolution, uRadius, finalTexture);

   gl_FragColor = color * uVisible;

}
