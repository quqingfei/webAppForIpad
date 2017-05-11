<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="bodydetial">
      <div class="bodydetialleft">
        <router-view></router-view>
      </div>
      <div class="bodydetialright">
        <v-detial :person="person"></v-detial>
      </div>    
    </div>
    
  </div>
</template>

<script>
  import vHeader from './components/header/header';
  import vDetial from './components/detial/detial';
  export default {
    data() {
      return {
        seller: {
          type: Object
        },
        person: {
          type: Object
        }
      };
    },
    created() {
    },
    components: {
      vHeader,
      vDetial
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.bodydetial
  background-color #f0f3f4
  position absolute
  top 64px
  bottom 0px
  width 100%
  display flex
  .bodydetialleft
    clear both
    float left
    width 39.3%
    flex 0 0 39.3%
    margin-top 30px
    margin-bottom 14px
    margin-left 30px
    background-color #FFFFFF
    box-sizing border-box
    border 1px solid #ddd
    box-shadow: 0px 1px 3px 0px #ddd;
    border-top 5px solid #ddd
    position relative
    overflow hidden
  .bodydetialright
    box-sizing border-box
    flex 1
    margin-top 30px
    margin-left 30px
    margin-right 30px
    background-color #FFFFFF
    border 1px solid #ddd
    box-shadow: 0px 1px 3px 0px #ddd;
    border-top 5px solid #ddd
    overflow hidden
</style>
