<template>
  <div>
    <h2>CV</h2>
    <el-form :model="form" ref="ruleForm">
      <el-form-item
        label="Upload CV"
        prop="cv_link"
        :rules="[
          { required: true, message: 'Please upload your cv', trigger: 'blur' }
        ]">
        <el-upload
          action="http://159.89.38.56:5202/upload"
          :multiple="false"
          :limit="1"
          :before-upload="beforeUpload"
          :on-success="fileUploadSuccess"
          class="button-mid">
          <el-button class="button-full" type="primary" slot="trigger">
            Add CV
            <i class="el-icon-circle-plus-outline el-icon-right"></i>
          </el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="File Name" v-if="form.fileName">
        <el-input v-model="form.fileName" disabled></el-input>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button type="info" @click="prev">Previous</el-button>
        <el-button class="button-mid" type="success" @click="next" :loading="loading">Submit<span v-if="loading">ting</span> </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    form () {
      return this.$store.getters.cv
    }
  },
  methods: {
    ...mapActions({
      saveData: 'SAVE_CV',
      apply: 'APPLY',
      nextStep: 'NEXT_STEP',
      prevStep: 'PREV_STEP'
    }),
    async next () {
      this.loading = true
      await this.saveData(this.form)
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.apply()
          this.loading = false
        } else {
          console.log('error submit!!')
          this.loading = false
          return false
        }
      })
    },
    prev () {
      this.saveData(this.form)
      this.prevStep()
    },
    beforeUpload (file) {
      if ((file.size / 1024) / 1024 > 200) {
        this.$message({
          message: 'File Too large',
          showClose: true,
          type: 'error'
        })
        return false
      }
    },
    fileUploadSuccess (res, file, fileList) {
      this.form.cv_link = res.url
      this.form.fileName = file.name
    }
  }
}
</script>
