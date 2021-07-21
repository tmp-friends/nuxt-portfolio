<template>
  <v-app id="inspire">
    <v-main
      :style="{width:'90%', margin: '3vh auto'}"
    >
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>PORTFOLIO</v-toolbar-title>
    </v-app-bar>

      <nuxt />
      
    </v-main>
    <v-footer
      color="grey darken-2"
      padless
      >
      <v-col
        class="text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Komekami</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiViewDashboard } from '@mdi/js'
import { mdiAccount } from '@mdi/js'
import { mdiImage } from '@mdi/js'
import { mdiForum } from '@mdi/js'

export default {
  data() {
    return {
      svgPath: mdiViewDashboard,mdiAccount,mdiImage,mdiForum,
      drawer: null,
      items: [
        { title: 'Index', icon: mdiViewDashboard, link: '/' },
        { title: 'Profile', icon: mdiAccount, link: '/profile' },
        { title: 'Gallery', icon: mdiImage, link: '/gallery' },
        { title: 'Contact', icon: mdiForum, link: '/contact' }
      ]
    }
  }
}
</script>
