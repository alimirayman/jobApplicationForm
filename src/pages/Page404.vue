<template>
  <div>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col class="text-center">
          <p class="font-large">404</p>
          <p class="curious">We know you are curious. That's why we want to Hire you. It's very simple actually. Go to <router-link to="/">Job Application Page</router-link>, fill up the form and we'll call you
          </p>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<style scoped>
.el-main{
  color: #f5f5f5;
}
.font-large{
  margin: 0;
  font-size: 10rem;
  font-weight: bold;
}
.el-col{
  max-width: 40em;
}
</style>
