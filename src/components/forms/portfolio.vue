<template>
  <div>
    <h2>Portfolio</h2>
    <el-form>
      <transition-group name="el-zoom-in-top">
      <div class="portfolio-forms" v-for="(form, id) in forms" :key="id">
        <el-form-item label="Upload">
          <el-upload
            action="http://159.89.38.56:5202/upload"
            :multiple="false"
            :limit="1"
            :data="{'id': id}"
            :before-upload="beforeUpload"
            :on-success="fileUploadSuccess">
            <el-button type="primary" slot="trigger" class="button-full">
              Add Portfolio
              <i class="el-icon-circle-plus-outline el-icon-right"></i>
            </el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="File Name" v-if="form.fileName">
          <el-input v-model="form.fileName" disabled></el-input>
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
            class="add-exp-button font-md button-full"
            type="danger"
            icon="el-icon-circle-close-outline"
            @click="remPortfolio(id)">
            Remove Portfolio
          </el-button>
        </el-form-item>
      </div>
      </transition-group>
      <el-form-item class="text-center">
        <el-button class="button-full" icon="el-icon-circle-plus-outline" @click="addPortfolio">Add Another Portfolio</el-button>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button type="info" @click="prev">Previous</el-button>
        <el-button class="button-mid" type="primary" @click="next">Continue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    forms () {
      return this.$store.getters.portfolios
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
      this.saveData(this.forms)
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
    beforeUpload (file) {
      if ((file.size / 1024) / 1024 > 100) {
        this.$message({
          message: 'File Too large',
          showClose: true,
          type: 'error'
        })
        return false
      }
    },
    fileUploadSuccess (res, file, fileList) {
      console.log(file)
      let id = parseInt(res.id)
      this.forms[id].link = res.url
      this.forms[id].fileName = file.name
    }
  }
}
</script>

<style scoped>
.portfolio-forms{
  padding-top: 10px;
  border-top: 2px solid #cfcfcf;
}
.portfolio-forms:first-child{
  padding-top: 0;
  border-top: 0;
}
</style>
