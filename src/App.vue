<template>
  <div id="app">
    <el-container>
      <vue-particles
        color="#FAFAFA"
        :particleOpacity="0.7"
        linesColor="#F5F5F5"
        shapeType="polygon"
        :style="dynamicBackground"
        >
      </vue-particles>
      <router-view/>
      <el-footer>
        <div class="powered-by">
          Powered By, <a href="https::/karigor.io" class="company">Karigor</a>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      dynamicColor: '',
      colors: [
        // '#006064',
        // '#004D40',
        // '#01579B'
        '#0277BD',
        '#00838F',
        '#00695C',
        '#1565C0'
      ]
    }
  },
  computed: {
    dynamicBackground () {
      return { backgroundColor: this.dynamicColor }
    }
  },
  methods: {
    changeColor () {
      let i = 0
      let vm = this
      setInterval(() => {
        if (++i === this.colors.length) i = 0
        vm.dynamicColor = vm.colors[i]
      }, 5000)
    }
  },
  created () {
    this.changeColor()
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  #app {
    font-family: "Raleway",Arial,sans-serif;
  }
  #particles-js {
    /* background-color: #01579B; */
    background-color: #1565C0;
    background-blend-mode: overlay;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: background 2s ease-in-out;
  }
  .powered-by{
    position: fixed;
    color: #ffffff;
    bottom: 10px;
    right: 10px;
  }
  .text-center{
    text-align: center;
  }
  .font-bold{
    font-weight: bold;
  }
  .font-lg{
    font-size: 2rem;
  }
  .font-md{
    font-size: 1rem;
  }
  .mb-1{
    margin-bottom: 1rem;
  }
</style>
