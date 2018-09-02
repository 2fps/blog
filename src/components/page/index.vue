<template>
    <contentlogo></contentlogo>
</template>

<script>
import ContentLogo from '../ContentLogo'

export default {
  components: {
    'contentlogo': ContentLogo
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>