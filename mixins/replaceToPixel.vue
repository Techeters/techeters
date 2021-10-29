<script>
export default {
  methods: {
    replaceToPixel(str, pixelStr) {
      return str.replace(pixelStr, `<span class="pixel-str">${pixelStr}</span>`)
    },
  },
}
</script>