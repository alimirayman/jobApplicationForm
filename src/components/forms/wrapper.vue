<template>
  <div>
    <el-steps :active="step" align-center finish-status="success">
      <el-step title="Personal Info."></el-step>
      <el-step title="Portfolio"></el-step>
      <el-step title="Experience"></el-step>
      <el-step title="CV"></el-step>
    </el-steps>
    <el-collapse-transition>
      <personal-information v-if="step === 0"></personal-information>
      <portfolio v-if="step === 1"></portfolio>
      <experience v-if="step === 2"></experience>
      <cv v-if="step === 3"></cv>
    </el-collapse-transition>
    <el-button @click="nextStep">Next</el-button>
  </div>
</template>

<script>
import personalInformation from '@/components/forms/personal-information'
import portfolio from '@/components/forms/portfolio'
import experience from '@/components/forms/previous-experience'
import cv from '@/components/forms/cv'

export default {
  data () {
    return {
      step: 0
    }
  },
  methods: {
    nextStep () {
      if (this.step++ > 4) this.step = 0
    }
  },
  components: {
    personalInformation,
    portfolio,
    experience,
    cv
  }
}
</script>
