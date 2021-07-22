<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <v-container
      class="fill-height"
      fluid
    >
    <v-dialog
      v-model="dialog"
      width="80vw"
      max-width="430px"
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
                :src="createUrl(item.id)"
                :alt="item.name"
                aspect-ratio="1"
                class="grey darken-4"
                v-bind="attrs"
                v-on="on"
                @click="selectModal(item.id)"
              >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>              
              </v-img>
            </v-col>
          </v-row>
        </v-fade-transition>
      </template>

      <!-- モーダル部分 -->
      <div class="modalContainer">
        <v-img
          :src=selectedUrl
          contain
        >
        </v-img>
      </div>
        <v-btn
          class="modal prev"
          elevation="2"
          icon
          large
          outlined
          raised
          @click="selectBtn(-1)"
        >
          <v-icon>{{ leftIcon }}</v-icon>
        </v-btn>
        <v-btn
          class="modal next"
          elevation="2"
          icon
          large
          outlined
          raised
          @click="selectBtn(1)"
        >
          <v-icon>{{ rightIcon }}</v-icon>
        </v-btn>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { mdiChevronLeft } from '@mdi/js'
import { mdiChevronRight } from '@mdi/js'

export default {
  data() {
    return {
      leftIcon: mdiChevronLeft,
      rightIcon: mdiChevronRight,
      dialog: false,
      selectedId: null,
      selectedUrl: null,
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
    // 一覧表示画像のURLを生成
    createUrl(id) {
      return '//res.cloudinary.com/komekami/portfolio/'+id+'.jpg'
    },
    // 選択された画像のidとurlを格納
    selectModal(id) {
      this.selectedId = id,
      this.selectedUrl = '//res.cloudinary.com/komekami/portfolio/'+this.selectedId+'.jpg'
    },
    // モーダル時のボタン
    selectBtn(i) {
      // 条件判定（最初の画像と最後の画像）
      if(!((this.selectedId == this.items[0].id && i < 0) || (this.selectedId == this.items[this.items.length-1].id && i > 0))){
        this.selectedId += i
        this.selectedUrl = '//res.cloudinary.com/komekami/portfolio/'+this.selectedId+'.jpg'        
      }
    }
  }
}
</script>

<style scoped>
  .v-btn{
    position: absolute;  
    top: 90vh;
    left: 50%;
    z-index: 1;
  }
  .prev {
    transform: translateX(-120%);
  }
  .next {
    transform: translateX(20%);
  }
</style>
