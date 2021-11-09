varying vec2 vUv;
varying vec2 vDUv;
varying vec2 vResolution;

uniform float uStrength;
uniform float uViewportY;

float roundedBoxSDF(vec2 CenterPosition, vec2 Size, float Radius) {
    return length(max(abs(CenterPosition)-Size+Radius,0.0))-Radius;
}

void main() {
  vec3 pos = position;
  
  vUv = bgCover(size, resolution, uv);
  vDUv = uv;
  vResolution = size.xy;

  vec4 newPosition = modelViewMatrix * vec4(pos, 1.0);

  float scrollValue = -uStrength;

  newPosition.z += sin((newPosition.y + newPosition.y) / uViewportY * 4. * PI) * scrollValue;

  gl_Position = projectionMatrix * newPosition;
}


