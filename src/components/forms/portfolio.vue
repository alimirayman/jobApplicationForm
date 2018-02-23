<template>
  <div>
    <h2>Portfolio</h2>
    <el-form>
      <transition-group name="el-zoom-in-top">
      <div class="portfolio-forms" v-for="(form, id) in forms" :key="id">
        <el-form-item label="Upload">
          <el-upload
            action="http://159.89.38.56:5202/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="1"
            :before-upload="beforeUpload"
            :on-success="fileUploadSuccess"
            :file-list="form.fileList">
            <el-button type="primary" slot="trigger">
              Add Portfolio
              <i class="el-icon-circle-plus-outline el-icon-right"></i>
            </el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="Year">
          <el-date-picker
            v-model="form.year"
            type="year"
            placeholder="Pick a year">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Skills Used">
          <el-input v-model="form.skills_used" placeholder="vue, ux design, react"></el-input>
        </el-form-item>
        <el-form-item class="text-center">
          <el-button
            class="add-exp-button font-md"
            type="danger"
            icon="el-icon-circle-close-outline"
            @click="remPortfolio(id)">
            Remove Portfolio
          </el-button>
        </el-form-item>
      </div>
      </transition-group>
      <el-form-item class="text-center">
        <el-button class="another-button" icon="el-icon-circle-plus-outline" @click="addPortfolio">Add Another Portfolio</el-button>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button type="info" @click="prev">Previous</el-button>
        <el-button type="primary" @click="next">Continue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      fileList: [],
      forms: [{
        link: '',
        year: '',
        skills_used: ''
      }]
    }
  },
  methods: {
    ...mapActions({
      saveData: 'SAVE_PORTFOLIO',
      nextStep: 'NEXT_STEP',
      prevStep: 'PREV_STEP'
    }),
    next () {
      this.saveData(this.forms)
      this.nextStep()
    },
    prev () {
      // this.saveData(this.form)
      this.prevStep()
    },
    addPortfolio () {
      let exp = {
        link: '',
        year: '',
        skills_used: ''
      }
      this.forms.push(exp)
    },
    remPortfolio (id) {
      this.$alert('Remove Portfolio', {
        confirmButtonText: 'Remove',
        callback: action => {
          if (action === 'confirm') {
            this.forms.splice(id, 1)
            this.$message({
              type: 'error',
              message: 'Portfolio Removed'
            })
          }
        }
      })
    },
    handlePreview () {
      console.log('handlePreview')
    },
    handleRemove () {
      console.log('handleRemove')
    },
    beforeUpload (file) {
      if ((file.size / 1024) / 1024 > 100) {
        console.log('File too large')
        return false
      }
    },
    beforeRemove () {
      console.log('beforeRemove')
    },
    fileUploadSuccess (res, file, fileList) {
      // console.log(id)
      this.fileList.push = res
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

<style scoped>
.el-form{
  max-width: 20em;
  margin: 0 auto;
  text-align: right
}
.portfolio-forms{
  padding-top: 10px;
  border-top: 2px solid #cfcfcf;
}
.portfolio-forms:first-child{
  padding-top: 0;
  border-top: 0;
}
.another-button{
  min-width: 50%;
}
</style>
