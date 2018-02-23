<template>
  <div>
    <el-steps :active="step" align-center finish-status="success">
      <el-step title="Personal Info."></el-step>
      <el-step title="Portfolio"></el-step>
      <el-step title="Experience"></el-step>
      <el-step title="CV"></el-step>
    </el-steps>
    <div class="wrapper">
      <el-collapse-transition>
        <personal-information v-if="step === 0"></personal-information>
        <portfolio v-if="step === 1"></portfolio>
        <experience v-if="step === 2"></experience>
        <cv v-if="step === 3"></cv>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import personalInformation from '@/components/forms/personal-information'
import portfolio from '@/components/forms/portfolio'
import experience from '@/components/forms/previous-experience'
import cv from '@/components/forms/cv'

export default {
  computed: {
    ...mapGetters([
      'step'
    ])
  },
  components: {
    personalInformation,
    portfolio,
    experience,
    cv
  }
}
</script>

<style>
  .wrapper {
    max-width: 40em;
    margin: 20px auto;
  }
</style>
