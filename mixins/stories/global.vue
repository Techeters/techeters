<script>
import { getStory } from '~/scripts/utils/getStory'
export default {
  data() {
    return {
      story: {
        footer: {},
        contacts: {},
      },
    }
  },
  async fetch() {
    const footerData = await getStory(this, '/global/footer/')
    const contactsData = await getStory(this, '/global/contacts/')
    this.story.footer = footerData.story
    this.story.contacts = contactsData.story
  },

  methods: {
    getField(story, field) {
      return this.story[story].content[field]
    },
  },
}
</script>