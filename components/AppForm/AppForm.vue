<template>
  <form class="form" novalidate @submit.prevent="onSubmit">
    <div class="form__inputs">
      <app-input
        v-for="input in form.inputs"
        :id="input.id"
        ref="inputs"
        :key="input.name"
        :type="input.type"
        :name="input.name"
        :required="input.required"
        :label="input.label"
        :validation="input.validation"
        :validation-text="input.validationText"
        @inputValue="inputValue"
      >
      </app-input>
    </div>
    <app-button type="submit" class="form__btn" :disabled="isLoading">
      Submit
    </app-button>
    <transition name="fade">
      <div v-if="error" class="form__error" @click="error = false">Error</div>
    </transition>
  </form>
</template>


<script>
import AppButton from '../AppButton.vue'
import AppInput from './AppInput.vue'

const URL = 'https://service.emotion-agency.com/techeters-api/mail/mail.php'

export default {
  components: { AppInput, AppButton },
  data() {
    return {
      error: false,
    }
  },
  computed: {
    form() {
      return {
        inputs: [
          {
            required: true,
            id: 'name',
            name: 'Name',
            label: 'Name',
            type: 'text',
            validation: 'required',
            validationText: 'field is required',
            error: true,
            value: '',
          },
          {
            required: true,
            id: 'email',
            name: 'Email',
            label: 'Email',
            type: 'email',
            validation: 'email',
            validationText: 'incorrect email',
            error: true,
            value: '',
          },
          {
            required: false,
            id: 'industry',
            name: 'Company Industry',
            label: 'Company Industry',
            type: 'text',
            error: false,
            value: '',
          },
          {
            required: false,
            id: 'size',
            name: 'Company Size',
            label: 'Company Size',
            type: 'text',
            error: false,
            value: '',
          },
          {
            required: false,
            id: 'url',
            name: 'Website URL',
            label: 'Website URL',
            type: 'text',
            error: false,
            value: '',
          },
          {
            required: false,
            id: 'info',
            name: 'More Info',
            label: 'More Info',
            type: 'textarea',
            validation: 'maxlength(1000)',
            validationText: 'the maximum length is exceeded',
            error: false,
            file: true,
            value: '',
          },
        ],
      }
    },
    isLoading() {
      return this.$store.app.loader
    },
  },
  methods: {
    inputValue(data) {
      const idx = this.form.inputs.findIndex(el => el.id === data.id)
      this.form.inputs[idx].value = data.value
      this.form.inputs[idx].error = data.error
    },

    async onSubmit() {
      const inputs = this.form.inputs
      const isError = inputs.find(el => el.error)

      if (isError) {
        this.emmitError()
        return
      }

      const formData = new FormData()
      inputs.forEach(el => {
        formData.append(el.name, el.value)
      })

      try {
        this.$store.commit('app/setLoading', true)
        await fetch(URL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        })
        this.showThankyou()
        this.resetForm()
      } catch (error) {
        console.log(error.message)
        this.error = true
      } finally {
        setTimeout(() => {
          this.$store.commit('app/setLoading', false)
        }, 400)
      }
    },
    emmitError() {
      this.$refs.inputs.forEach(input => input.throwError())
    },
    resetForm() {
      this.form.inputs?.forEach(inp => {
        inp.type === 'email' && (inp.error = true)
        inp.value = ''
      })

      this.$refs.inputs.forEach(input => input.reset())
      this.error = false
    },
    showThankyou() {
      this.$store.commit('app/setThankyou', true)
      this.$store.commit('app/setPopup', false)
    },
  },
}
</script>



