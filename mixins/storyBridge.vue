<script>
export default {
  mounted() {
    this.$storybridge(
      () => {
        // eslint-disable-next-line no-undef
        const storyblokInstance = new StoryblokBridge()

        storyblokInstance.on(['input', 'published', 'change'], event => {
          if (event.action === 'input') {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content
            }
          } else {
            window.location.reload(true)
            setTimeout(() => {
              if (event.story.id === this.story.id) {
                this.story.content = event.story.content
              }
            }, 0)
          }
        })
      },
      error => {
        console.log(error)
      }
    )
  },
}
</script>