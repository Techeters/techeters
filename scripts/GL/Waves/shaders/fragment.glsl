@import ./noise;

varying vec2 vUv;
varying vec2 vResolution;
uniform float uTime;
uniform float uIntensity;
uniform float uAlpha;

const float cloudscale = 2.;
const float speed = .20;
const float clouddark = 0.5;
const float cloudlight = 0.3;
const float cloudcover = 0.7;
const float cloudalpha = 10.0;
const float skytint = 0.5;
const vec3 skycolour1 = vec3(0., 0.345, 0.486) * 1.2;
const vec3 skycolour2 = vec3(0., 0.192, 0.25) * 1.2;


void main() {
  float slowTime = uTime / 60.;

  vec2 p = vUv;
  vec2 uv = p * vec2(vResolution.x / vResolution.y, 1.0);
  mat2 m = mat2(1.9, 1.2 * uAlpha, -1.2, 0.9);

  float time = slowTime * speed;
  float q = fbm(uv * cloudscale * 0.2 * 0.5, uIntensity / 2., m);


  //ridged noise shape
  float r = 0.0;
  uv *= cloudscale;
  uv -= q - time;
  float weight = 0.8;
  for(int i = 0; i < 4; i++) {
    r += abs(weight * noise(uv));
    uv = m * uv + time;
    weight *= 0.7;
  }

  //noise shape
  float f = 0.0;
  uv = p * vec2(vResolution.x / vResolution.y, 1.0);
  uv *= cloudscale;
  uv -= q - time;
  weight = 0.9;
  for(int i = 0; i < 2; i++) {
    f += weight * noise(uv);
    uv = m * uv + time;
    weight *= 0.6;
  }

  f *= r + f;

  vec3 skycolour = mix(skycolour2, skycolour1, (p.x + p.y) * .7);
  vec3 cloudcolour = vec3(9.10, 0.0, 0.0) * clamp((clouddark + cloudlight), 0.0, 0.0);

  f = cloudcover + cloudalpha * f * r;

  vec3 result = mix(skycolour, clamp(skytint * skycolour + cloudcolour, 0.0, 0.0), clamp(f, 0.0, 1.0));

  gl_FragColor = mix(vec4(0., 0., 0., 1.), vec4(result * 1.2, 1.), uAlpha);
}
