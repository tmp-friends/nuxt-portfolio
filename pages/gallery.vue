<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <v-container
      class="fill-height"
      fluid
    >
    <v-dialog
      v-model="dialog"
      width="65vw"
      max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-fade-transition mode="out-in">
          <v-row>
            <v-col
              v-for="item in items"
              :key="item.id"
              cols="6"
              sm="4"
              lg="3"
            >
              <v-img
                :src="createUrl(item)"
                :alt="item.name"
                aspect-ratio="1"
                class="grey darken-4"
                v-bind="attrs"
                v-on="on"
                @click="selectModal(createUrl(item))"
              ></v-img>
            </v-col>
          </v-row>
        </v-fade-transition>
      </template>
        <v-img
          :src=selectedImage
          contain
        >
        </v-img>
      </v-dialog>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      selectedImage: null,
      items: [
        {
          id: 1,
          name: 'サマーメイドコーデ'
        },
        {
          id: 2,
          name: '赤城あんな'
        },
        {
          id: 3,
          name: '桃山みらい'
        },
        {
          id: 4,
          name: 'START DASH SENSATION'
        },
        {
          id: 5,
          name: 'いばらの女王'
        },
        {
          id: 6,
          name: '華園しゅうか'
        },
        {
          id: 7,
          name: 'ガァルマゲドン'
        },
        {
          id: 8,
          name: 'SoLaMiSMILE'
        },
        {
          id: 9,
          name: 'シオリ'
        },
        {
          id: 10,
          name: 'アイカツプラネット!'
        },
        {
          id: 11,
          name: 'ブルーエンプレスコーデ'
        },
        {
          id: 12,
          name: '硝子ドール'
        },
        {
          id: 13,
          name: '紫吹蘭'
        },
        {
          id: 14,
          name: 'タルト・タタン'
        },
        {
          id: 15,
          name: '鎌倉高校前駅'
        },
        {
          id: 16,
          name: '江ノ島シーキャンドル'
        },
        {
          id: 17,
          name: '氷上スミレ'
        },
        {
          id: 18,
          name: '梅雨'
        }
      ]
    }
  },
  methods: {
    selectModal(url) {
      this.selectedImage = url
    },
    createUrl(image) {
      return '//res.cloudinary.com/komekami/portfolio/'+image.id+'.jpg'
    }
  }
}
</script>
