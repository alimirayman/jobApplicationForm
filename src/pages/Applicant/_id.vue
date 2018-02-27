<template>
  <el-card class="box-card text-center">
    <h1>
      Your name is {{ id }}
    </h1>
    <pre>
      {{ applicantData }}
    </pre>
  </el-card>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    applicantData () {
      return this.$store.getters.getApplicant(this.id)
    }
  }
}
</script>
