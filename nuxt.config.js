export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'myddle-cafe-website',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {src: '~/plugins/bootstrap.js', mode: 'client'}
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources'
    ],

    styleResources: {
        scss: [
            '~/assets/scss/main.scss'
        ]
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/toast',
        '@nuxtjs/recaptcha',
    ],

    toast: {
        position: 'top-right',
        duration: 3000,
    },

    recaptcha: {
        hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        version: 3,     // Version
        size: 'invisible'       // Size: 'compact', 'normal', 'invisible' (v2)
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
