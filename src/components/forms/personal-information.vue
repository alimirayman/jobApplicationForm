<template>
  <div>
    <!-- <h2>Personal Information</h2> -->
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
        <el-button type="primary" @click="next">Continue</el-button>
      </el-form-item>
    </el-form>
    <!-- <el-upload
      action="http://159.89.38.56:5202/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="1"
      ref="upload"
      :before-upload="beforeUpload"
      :on-success="fileUploadSuccess"
      :file-list="fileList"
      :auto-upload="false">
      <el-button size="small" type="primary" slot="trigger">Click to upload</el-button>
      <el-button size="small" type="success" @click="submitUpload">Send to Server</el-button>
    </el-upload> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      fileList: [],
      form: {
        name: '',
        email: '',
        contact_number: ''
      }
    }
  },
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
