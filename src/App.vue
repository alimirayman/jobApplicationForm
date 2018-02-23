<template>
  <div id="app">
    <el-container>
      <vue-particles
        color="#212121"
        :particleOpacity="0.7"
        linesColor="#424242"
        shapeType="polygon"
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
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  #app {
    font-family: "Raleway",Arial,sans-serif;
  }
  #particles-js {
    background-image: #fafafa;
    background-blend-mode: overlay;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .powered-by{
    position: absolute;
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
  .mb-1{
    margin-bottom: 1rem;
  }
</style>
