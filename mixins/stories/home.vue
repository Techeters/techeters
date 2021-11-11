<script>
import { getLink } from '~/scripts/utils/getLink'
import { getStory } from '~/scripts/utils/getStory'
export default {
  asyncData(context) {
    return getStory(context.app, '/home/')
  },

  computed: {
    secondScreenText() {
      return this.story.content.second_screen_text
    },
    thirdScreenText1() {
      return this.story.content.third_screen_text_1
    },
    thirdScreenText2() {
      return this.story.content.third_screen_text_2
    },
    home4Items() {
      const items = this.story.content.items
      return items.map((item, idx) => ({ ...item, img: `/img/${idx + 3}.jpg` }))
    },
    services() {
      return this.story.content.services
    },
    sixthScreen() {
      return {
        title: this.story.content.sixth_screen_title,
        text: this.story.content.sixth_screen_text,
      }
    },
    publications() {
      const items = this.story.content.publications
      return items.map((item, idx) => ({
        ...item,
        link: getLink(item.link),
        img: `/img/${idx + 7}.jpg`,
      }))
    },
  },
}
</script>