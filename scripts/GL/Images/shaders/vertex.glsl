@import ./parallax;

varying vec2 vUv;
varying vec2 vDUv;
varying vec2 vResolution;

uniform float uStrength;
uniform float uClicked;
uniform float uViewportY;
uniform float uScrollHeight;
uniform float uOffsetY;
uniform float uParallax;

float roundedBoxSDF(vec2 CenterPosition, vec2 Size, float Radius) {
    return length(max(abs(CenterPosition)-Size+Radius,0.0))-Radius;
}

void main() {
  vec3 pos = position;
  
  vUv = bgCover(size, resolution, uv);
  vDUv = uv;
  vResolution = size.xy;

  vec4 newPosition = modelViewMatrix * vec4(pos, 1.0);

  float scrollValue = -uStrength * 1.5;

  newPosition.z += sin(newPosition.y / uViewportY * 2. * PI) * scrollValue;

  gl_Position = projectionMatrix * newPosition;
}


