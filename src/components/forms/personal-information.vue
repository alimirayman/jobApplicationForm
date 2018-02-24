<template>
  <div>
    <h2>Personal Information</h2>
    <el-form :model="form">
      <el-form-item label="Full Name">
        <el-input v-model="form.name" placeholder="Mir Ayman Ali"></el-input>
      </el-form-item>
      <el-form-item label="Email Address">
        <el-input v-model="form.email" placeholder="ayman@karigor.io"></el-input>
      </el-form-item>
      <el-form-item label="Contact Number">
        <el-input v-model="form.contact_number" placeholder="+8801444444444"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="button-full" type="primary" @click="next">Continue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    form: 'data'
  }),
  methods: {
    ...mapActions({
      saveData: 'SAVE_DATA',
      nextStep: 'NEXT_STEP'
    }),
    next () {
      this.saveData(this.form)
      this.nextStep()
    },
    handlePreview () {
      console.log('handlePreview')
    },
    handleRemove () {
      console.log('handleRemove')
    },
    beforeUpload (file) {
      if ((file.size / 1024) / 1024 > 200) {
        console.log('File too large')
        return false
      }
    },
    beforeRemove () {
      console.log('beforeRemove')
    },
    fileUploadSuccess (res, file, fileList) {
      console.log(res.url)
      this.fileList = fileList
    },
    submitUpload () {
      this.$refs.upload.submit()
    }
  },
  watch: {
    fileList (val) {
      console.log(this.fileList)
    }
  }
}
</script>
