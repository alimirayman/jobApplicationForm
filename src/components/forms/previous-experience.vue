<template>
  <div>
    <h2>Experience</h2>
    <el-form>
      <transition-group name="el-zoom-in-top">
        <div class="experience-forms" v-for="(form, id) in forms" :key="id">
          <el-form-item label="Job Place">
            <el-input v-model="form.title" placeholder="Google Inc"></el-input>
          </el-form-item>
          <el-form-item label="Skills Earned">
            <el-input v-model="form.skills_earned" placeholder="Vue, Java, PhotoShop"></el-input>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="form.description" placeholder="I worked on..."></el-input>
          </el-form-item>
          <el-form-item label="Refference Link">
            <el-input v-model="form.reference_link" placeholder="https://developers.google.com/ayman"></el-input>
          </el-form-item>
          <el-form-item label="Job Timespan">
            <el-row>
              <el-col :span="24">
                <el-date-picker
                  class="button-full"
                  v-model="form.from_year"
                  type="date"
                  placeholder="Start date">
                </el-date-picker>
              </el-col>
              <el-col :span="24">
                <el-date-picker
                  class="button-full mt-1"
                  v-model="form.to_year"
                  type="date"
                  placeholder="End date"
                  v-if="!form.currently_working">
                </el-date-picker>
              </el-col>
              <el-col :span="24" class="text-center">
                <el-switch
                  v-model="form.currently_working"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="Currently Working">
                </el-switch>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button
              class="button-full mb-1 font-md"
              type="danger"
              icon="el-icon-circle-close-outline"
              @click="remExperience(id)">
              Remove Experience
            </el-button>
          </el-form-item>
        </div>
      </transition-group>
      <el-button class="font-md button-full mb-1" @click="addExperience" icon="el-icon-circle-plus-outline">
        Add Experience
      </el-button>
      <el-form-item>
        <el-button type="info" @click="prev">Previous</el-button>
        <el-button class="button-mid" type="primary" @click="next">Continue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    forms: 'previous_jobs'
  }),
  methods: {
    ...mapActions({
      saveData: 'SAVE_EXPERIENCE',
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
    addExperience () {
      let exp = {
        name: '',
        from_year: '',
        to_year: '',
        currently_working: true,
        skills_earned: '',
        descreaption: '',
        reference_link: ''
      }
      let ind = this.forms.length - 1
      if (ind === -1 || !(this.forms[ind].name === '')) {
        this.forms.push(exp)
      }
    },
    remExperience (id) {
      this.$alert('Remove Experience from ' + this.forms[id].name, 'Remove Experience', {
        confirmButtonText: 'Remove',
        callback: action => {
          if (action === 'confirm') {
            this.forms.splice(id, 1)
            this.$message({
              type: 'error',
              message: 'Experience Removed'
            })
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.experience-forms{
  padding-top: 10px;
  border-top: 2px solid #cfcfcf;
}
.experience-forms:first-child{
  padding-top: 0;
  border-top: 0;
}
</style>
