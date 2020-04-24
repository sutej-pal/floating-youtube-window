<template>
  <div class="home-main">
    <div class="drag-div" style="-webkit-app-region: drag"></div>
    <div class="splash" v-if="iframeUrl === ''">
      <div class="d-flex flex-column w-75 pt-5 mx-auto" ref="input-form">
        <h3 class="text-secondary">Paste YouTube url</h3>
        <input type="text" class="form-control" v-model="newUrl" @keyup.enter="changeVideo('splash')">
<!--        <button class="btn w-25 mx-auto mt-3" style="min-width: 130px" @click="changeVideo('splash')">Open</button>-->
      </div>
    </div>
    <iframe v-else width="100%" height="100%" frameborder="0"
            :src="iframeUrl">
    </iframe>
    <div class="new-url">
      <button class="btn float-right" @click="$refs['input-form'].classList.toggle('d-none')">New Url</button>
    </div>
    <div class="new-url-form flex-column w-75 d-none p-2" ref="input-form">
      <input type="text" class="form-control" v-model="newUrl" @keyup.enter="changeVideo()">
<!--      <button class="btn w-25 mx-auto mt-3" @click="changeVideo()">Open</button>-->
    </div>
  </div>
</template>

<script src="./home.js"/>
<style lang="scss" scoped>
  .home-main {
    height: 100%;
    overflow: hidden;
    position: relative;
    .drag-div {
      position: absolute;
      right: 0;
      left: 0;
      height: 10%;
      z-index: 10;
    }
    .splash {
      height: 100%;
      width: 100%;
      background: rgba(44, 62, 80, 0.38);
    }

    .new-url {
      position: absolute;
      top: 50%;
      right: 0;
      height: 30px;
      width: 130px;

      &:hover {

        button {
          display: block;
        }
      }

      button {
        display: none;
      }
    }
    .new-url-form {
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      background: rgba(44, 62, 80, 0.33);
      button {
        min-width: 130px;
      }
    }
  }
</style>
