<template>
  <div>
    <Input></Input>
    <Hot></Hot>
    <History></History>
    <Spin v-show="showLoad">
      <Icon type="load-d" size=30 class="demo-spin-icon-load" color="#ddd"></Icon>
    </Spin>
    <Result></Result>
  </div>
</template>

<script>
  import Input from './search/Input.vue'
  import Hot from './search/Hot.vue'
  import History from './search/History.vue'
  import Result from './search/Result.vue'
  export default {
    components: {
      Input,
      Hot,
      History,
      Result
    },
    computed: {
      showLoad () {
        return this.$store.state.search.showLoad
      }
    }
  }
</script>

<style>

</style>
