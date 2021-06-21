<template>
  <div class="profile">
    <h1>Profile</h1>
      <v-container fluid>
      <v-row
        dense
        justify="center"
      >
        <v-col cols="12" sm="6" align="center">
          <v-card
            color="grey darken-2"
            class="mx-auto"
            max-width="400"
            outlined
            shaped
          >
            <v-img
              class="text--primary align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
              src="https://res.cloudinary.com/komekami/portfolio/0.jpg"
            >
              <v-card-title>こめかみ (Komekami)</v-card-title>
            </v-img>
            <v-card-actions>
              <div class="btn">
                <!-- Twitterボタン -->
                <v-btn
                  elevation="5"
                  raised
                  outlined
                  target="_blank"
                  href="https://twitter.com/temple_circle"
                >
                Twitter
                </v-btn>
                <!-- Pixivボタン -->
                <v-btn
                  elevation="5"
                  raised
                  outlined
                  target="_blank"
                  href="https://www.pixiv.net/users/21060316"
                >
                Pixiv
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- Twitterタイムライン -->
        <v-col cols="12" sm="6" align="center">
          <div class="twitter-widget">
            <v-timeline
              :id="user_id"
              :source-type="'profile'"
              :options="{ 'height': twitterHeight, 'width': twitterWidth }" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
export default {
  components: {
    'v-timeline': Timeline
  },
  data () {
    return {
      user_id: 'temple_circle',
      twitterHeight: '70vh',
      twitterWidth: '400'
    }
  }
}
</script>

<style scoped>
  .v-btn{
    float: left;
    margin:10% 10px;
  }
</style>
