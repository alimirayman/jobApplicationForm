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
        <div class="powered-by font-bold">
          Powered By, <a href="https://karigor.io/" target="_blank">Karigor</a>
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
    bottom: 16px;
    right: 16px;
  }
  .powered-by a, .curious a {
    color: #f5f5f5;
  }
  .text-center{
    text-align: center;
  }
  .font-bold{
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    .font-lg{
      font-size: 2rem;
    }
    .font-md{
      font-size: 1rem;
    }
  }
  .mb-1{
    margin-bottom: 1rem;
  }
  .mt-1{
    margin-top: 1rem;
  }
  .button-small {
    min-width: 33%;
  }
  .button-half {
    min-width: 50%;
  }
  .button-mid {
    min-width: 65%;
  }
  .button-full {
    min-width: 100%;
  }
  .el-main {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .el-card {
    background-color: #F5F5F5;
  }
  .el-form{
    max-width: 20em;
    margin: 0 auto;
    text-align: right
  }
  .el-upload{
    min-width: 65%;
  }
  @media screen and (max-width: 768px) {
    .button-mid {
      min-width: 60%;
    }
    .el-upload{
      min-width: 60%;
    }
  }
</style>
