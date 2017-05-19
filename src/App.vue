<template>
  <div>
    <v-header></v-header>
    <div class="bodydetial">
      <div class="bodydetialleft">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
      <div class="bodydetialright">
        <v-detial></v-detial>
      </div>    
    </div>
    
  </div>
</template>

<script>
  import { Event } from './pub.js';
  import vHeader from './components/header/header';
  import vDetial from './components/detial/detial';
  export default {
    created() {
      Event.$on('my-event', text => {
        this.userId = text;
      });
    },
    methods: {
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
    .slide-fade-enter-active
      transition all .3s ease
    .slide-fade-leave-active
      transition all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    .slide-fade-enter, .slide-fade-leave-to
      transform translateX(-10px)
      opacity 0
  .bodydetialright
    box-sizing border-box
    flex 1
    margin-top 30px
    margin-left 30px
    margin-right 30px
    background-color #efefef
    border 1px solid #ddd
    box-shadow: 0px 1px 3px 0px #ddd;
    border-top 5px solid #ddd
    position relative
    overflow hidden
</style>
