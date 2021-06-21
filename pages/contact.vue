<template>
  <div class="contact">
    <h1>Contact</h1>
    <v-container>
      <v-form
        ref="form"
        v-model="contactFormValidation.valid"
        lazy-validation
      >
        <v-text-field
          v-model="contactForm.name"
          :rules="contactFormValidation.nameRules"
          label="name"
          required
        ></v-text-field>
        <v-text-field
          v-model="contactForm.email"
          :rules="contactFormValidation.emailRules"
          label="email"
          required
        ></v-text-field>
        <v-textarea
          v-model="contactForm.contents"
          :rules="contactFormValidation.contentsRules"
          label="contents"
          required
        ></v-textarea>
        <v-btn
          :loading="contactForm.loading"
          :disabled="!contactFormValidation.valid"
          @click="sendMail()"
          color=primary
          block
          large
        >submit
        </v-btn>
      </v-form>
    </v-container>
    <v-snackbar
      v-model="snackBar.show"
      :color="snackBar.color"
      bottom
      right
      :timeout="6000"
    >
    {{snackBar.message}}
    </v-snackbar>
  </div>
</template>

<script>
import { functions } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        contents: '',
        loading: false
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '必須項目です'],
        emailRules: [
          v => !!v || '必須項目です',
          v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'メールアドレスが正しくありません'
        ],
        contentsRules: [v => !!v || '必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }
  },
  methods: {
    sendMail() {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true
        const mailer = functions.httpsCallable('sendMail')

        mailer(this.contactForm)
          .then(() => {
            this.formReset()
            this.showSnackBar(
              'success',
              'お問い合わせありがとうございます。送信が完了しました。'
            )
          })
          .catch((err) => {
            this.showSnackBar(
              'error',
              '送信に失敗しました。時間をおいて再度お試しください。'
            )
            console.log(err)
          })
          .finally(() => {
            this.contactForm.loading = false
          })
      }
    },
    showSnackBar(color, message) {
      this.snackBar.message = message
      this.snackBar.color = color
      this.snackBar.show = true
    },
    formReset() {
      this.$refs.form.reset()
    }
  }
}
</script>
