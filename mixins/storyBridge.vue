<script>
export default {
  mounted() {
    this.$storybridge(
      () => {
        // eslint-disable-next-line no-undef
        const storyblokInstance = new StoryblokBridge()

        storyblokInstance.on(['input', 'published', 'change'], event => {
          console.log(event, this.story.content)
          if (event.action === 'input') {
            if (event.story.id === this.story.id) {
              console.log('updating')
              this.story = event.story
              this.$forceUpdate()
              this.$nextTick(() => {
                this.story = event.story
                this.$forceUpdate()
                window.location.reload(true)
              })
            }
          } else {
            window.location.reload(true)
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