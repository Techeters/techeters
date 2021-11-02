varying vec2 vUv;
varying vec2 vResolution;

void main() {
  vec3 pos = position;
  vUv = uv;
  vResolution = size;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}