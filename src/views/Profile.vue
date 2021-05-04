<template>
  <div>
    <h1>Profile page</h1>
    <div class="avatar" v-if="avatarShowState">
      <img :src='avatarState' alt="avatar">
    </div>
    <h2>
      {{fullNameState}}
    </h2>
    <h3>
      {{ageState}} years old
    </h3>
    <Button @click.prevent="hideAvatar">Hide avatar</Button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Profile',
    beforeRouteLeave() {
      console.log('PROFILE PAGE IS CLOSED')
    },
    computed: {
      ...mapGetters(
              ['fullNameState', 'ageState', 'avatarState', 'avatarShowState']
      )
    },
    methods: {
      ...mapActions(['toggleAvatar']),
      hideAvatar() {
        this.toggleAvatar();
      }
    }
  }
</script>

<style scoped>
  .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border: 2px solid green;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar img {
    max-width: 100%;
  }
</style>