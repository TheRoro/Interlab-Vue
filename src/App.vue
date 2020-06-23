<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
    #app{
        padding-left: 0;
        margin-left: 0;
        border-left: 0;
    }
</style>
