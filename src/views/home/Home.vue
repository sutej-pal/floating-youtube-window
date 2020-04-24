<template>
  <div class="home-main" @mouseenter="showOptions()" @mouseleave="hideOptions">
    <div class="drag-div">
      <div class="header" :class="{'active': isTitleDragActive }" style="-webkit-app-region: drag">
        <h2 v-if="iframeUrl === ''" class="text-white pt-5">Floating YouTube Window</h2>
      </div>
    </div>
    <div class="splash" v-if="iframeUrl === ''">
      <div class="d-flex flex-column h-100 justify-content-center w-75 mx-auto" ref="input-form">
        <input type="text" class="form-control" v-model="newUrl" @keyup.enter="changeVideo('splash')"
               placeholder="Paste YouTube URL and hit Enter">
        <button class="btn btn-sm w-25 mx-auto mt-3" style="min-width: 130px" @click="changeVideo('splash')">Open</button>
      </div>
    </div>
    <iframe v-else width="100%" height="100%" frameborder="0"
            :src="iframeUrl">
    </iframe>
    <button v-if="iframeUrl !== ''" class="btn btn-sm float-right new-url-button"
            @click="$refs['input-form'].classList.toggle('d-none');
            $refs['input-form'].childNodes[1].childNodes[0].select()"
            >New Url
    </button>
    <div class="new-url-form w-75 d-none" ref="input-form">
      <span class="fa fa-times float-right text-white position-absolute"
            style="top:5px;right:5px;cursor: pointer" @click="$refs['input-form'].classList.toggle('d-none')"></span>
      <div class="p-4 w-100">
        <input type="text" class="form-control w-100" v-model="newUrl" @keyup.enter="changeVideo()" @focus="newUrl = ''">
        <!--      <button class="btn w-25 mx-auto mt-3" @click="changeVideo()">Open</button>-->
      </div>
    </div>
  </div>
</template>

<script src="./home.js"/>
<style lang="scss" scoped src="./home.scss"/>
