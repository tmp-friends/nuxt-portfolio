<template>
  <div class="top">
    <v-container
      class="fill-height"
      fluid
    >
      <v-carousel
        cycle
        height="70vh"
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item,index) in items"
          :key="index"
          :src="createUrl(item.id)"
          :alt="item.name"
          contain
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 5,
          name: 'いばらの女王'
        },
        {
          id: 4,
          name: 'START DASH SENSATION'
        },
        {
          id: 1,
          name: 'サマーメイドコーデ'
        },
        {
          id: 2,
          name: '赤城あんな'
        }
      ]
    }
  },
  methods: {
    createUrl(image_id) {
      return '//res.cloudinary.com/komekami/portfolio/'+image_id+'.jpg'
    }
  }
}
</script>

<style scoped>
  .top{
    padding-top: 20px;
  }
</style>
