<template>
  <div class="songs">
    <ul>
      <li v-for="n in 5" @click="showMiniPlay">
        <p class="title">Libertango</p>
        <p class="desc">马友友/Horacio Malvicino/Leonardo Marconi/Antonio Agri·Piazzolla: Soul of the Tango</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      showMiniPlay () {
        this.$store.dispatch('changeShowMiniPlay');
      }
    }
  }
</script>

<style>

</style>
