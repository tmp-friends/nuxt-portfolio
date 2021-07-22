import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'komekami-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'こめかみのポートフォリオサイトです' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'komekami-portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: '//komekami.info/' },
      { hid: 'og:title', property: 'og:title', content: 'komekami-portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'こめかみのポートフォリオサイトです' },
      { hid: 'og:image', property: 'og:image', content: '//res.cloudinary.com/komekami/portfolio/0.jpg' },
      { name: 'twitter:card', content: 'summary' },      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-purgecss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: {
      icons: 'mdiSvg'
    },
    optionsPath: './vuetify.options.js',
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  purgeCSS: {
    enabled: true,
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      './node_modules/vuetify/dist/vuetify.js',
      'assets/**/*.scss'
    ],
    styleExtensions: ['.css'],
    whitelist: ['v-application', 'v-application--wrap', 'layout', 'row', 'col'],
    whitelistPatterns: [
      /^v-((?!application).)*$/,
      /^theme--*/,
      /.*-transition/,
      /^justify-*/,
      /^p*-[0-9]/,
      /^m*-[0-9]/,
      /^text--*/,
      /--text$/,
      /^row-*/,
      /^col-*/,
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    dir: 'public'
  }
}
