<template>
  <div>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="16" :xl="12">
          <el-card class="box-card text-center">
            <h1 class="font-lg font-bold">Apply<span v-if="selected">ing</span> for</h1>
            <el-row type="flex" justify="center" :gutter="20" class="row-bg">
              <el-col :xs="12" :md="10"  v-for="(apply, id) in applyFor" :key="id">
                <el-button class="checkButton" @click="apply.check = !apply.check" :type="checkType(apply.check)">
                  {{ apply.name }}
                  <i class="el-icon-success" v-if="apply.check"></i>
                </el-button>
              </el-col>
            </el-row>
            <transition name="el-zoom-in-top">
              <el-button v-if="selected && !checked" round type="danger" @click="nextForm">
                Select
                <i class="el-icon-caret-right el-icon-right"></i>
              </el-button>
              <applicant-form v-if="selected & checked"></applicant-form>
            </transition>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import applicantForm from '../components/forms/wrapper'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      step: 0,
      checked: false
    }
  },
  computed: {
    ...mapGetters([
      'applyFor'
    ]),
    selected () {
      return this.applyFor.filter(el => el.check).length > 0
    }
  },
  methods: {
    nextStep () {
      if (this.step++ > 4) this.step = 0
    },
    checkType (check) {
      return check ? 'success' : 'primary'
    },
    nextForm () {
      this.checked = true
    }
  },
  components: {
    applicantForm
  }
}
</script>

<style scoped>
.el-main{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.checkButton {
  width: 100%;
}
.el-row{
  margin: 20px 0;
}
</style>
