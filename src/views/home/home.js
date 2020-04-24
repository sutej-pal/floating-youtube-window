export default {
  data() {
    return {
      youTubeUrl: '',
      newUrl: '',
      iframeUrl: '',
      areOptionsVisible: false,
      isTitleDragActive: false
    }
  },
  methods: {
    changeVideo(from) {
      if (this.newUrl === '') {
        return
      }
      let videoId;
      const temp = this.newUrl.split('?v=');
      if (temp[1].includes('&')) {
        videoId = temp[1].split('&')[0];
      } else {
        videoId = temp[1];
      }
      this.iframeUrl = 'https://www.youtube.com/embed/' + videoId;
      if (from !== 'splash') {
        this.$refs['input-form'].classList.toggle('d-none')
      }
    },
    showOptions() {
      this.areOptionsVisible = true;
    },
    hideOptions() {
      this.areOptionsVisible = false
    }
  }
}
