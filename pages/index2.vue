<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        this is nuxt index2
      </h1>
      <template>
        <nuxt-link to="/">首页</nuxt-link>
      </template>
      <div>
        <span>show list</span>
        <p>{{list}}</p>
      </div>
      <h2 class="subtitle">
        My superb Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      list: ''
    }
  },
 async asyncData(context) {
     const list = await context.$axios.$get('/getList')
    console.log('1');
    console.log(list);
    return { list }
  },
  mounted () {
    console.log(this.$store.state.keepUser);
    console.log(this.$store.state.ips);
  }
//  asyncData({params}) {
  // 动态获取参数
    // console.log(context);
    //params.slug
//   },
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
