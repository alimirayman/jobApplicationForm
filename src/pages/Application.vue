<template>
  <div>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="16" :xl="12">
          <el-card class="box-card text-center">
            <h1 class="font-lg font-bold">Apply<span v-if="selected">ing</span> For</h1>
            <el-row :gutter="20" class="row-bg">
              <el-col :xs="24" :sm="12" v-for="(apply, id) in applyFor" :key="id">
                <el-button class="checkButton font-md font-bold" @click="selectType(id)" :type="checkType(apply.check)">
                  {{ apply.name }}
                  <i class="el-icon-success el-icon-right" v-if="apply.check"></i>
                </el-button>
              </el-col>
            </el-row>
            <transition name="el-zoom-in-top">
              <applicant-form v-if="selected"></applicant-form>
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
  computed: {
    ...mapGetters([
      'applyFor'
    ]),
    selected () {
      return this.applyFor.filter(el => el.check).length > 0
    }
  },
  methods: {
    checkType (check) {
      return check ? 'success' : 'info'
    },
    selectType (id) {
      this.applyFor[id].check = !this.applyFor[id].check
      this.$store.dispatch('SAVE_APPLY_FOR', this.applyFor)
    }
  },
  watch: {
    selected (val) {
      if (!val) this.checked = false
    }
  },
  components: {
    applicantForm
  }
}
</script>

<style scoped>
.el-main {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-card {
  background-color: #F5F5F5;
}
.checkButton {
  width: 100%;
  margin-bottom: 0.78rem;
}
.el-row{
  margin: 20px 0;
}
</style>
