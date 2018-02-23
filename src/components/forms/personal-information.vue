<template>
  <div>
    <h2>Personal Information</h2>
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
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
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
