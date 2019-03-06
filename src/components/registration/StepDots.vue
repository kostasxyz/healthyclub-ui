<template>
  <div class="hc-step-dots text-xs-center pt-2">
    <v-icon size="14" v-for="n in length" :key="`hc-step-dot-${n}`" class="mx-1" :color="currentColor(n)">lens</v-icon>
  </div>
</template>


<script>
export default {
  name: 'step-dots',

  props: {
    length: {
      type: Number,
      required: true,
      default: 0
    },
    
    current: {
      type: Number,
      required: true,
      default: 1
    }
  },

  methods: {
    currentColor(n) {
      return n === this.current ? 'primary' : 'teal lighten-5'
    }
  }
}
</script>
