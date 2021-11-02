float parallax(float offset, float scrollHeight, float activator) {
  float pKoef = 1.;
  float parallax =  offset / scrollHeight * pKoef * activator;

  return parallax;
}