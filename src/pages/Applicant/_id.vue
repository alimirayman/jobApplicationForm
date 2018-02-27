<template>
  <el-card class="box-card">
    <h1 class="text-center">
      {{ applicant.name }}
    </h1>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <dl>
          <dt>Applied For</dt>
          <dd> {{ applicant.applied_for.filter(el=>el.check).map(el=>el.name).join(', ') }} </dd>
        </dl>
        <dl>
          <dt>Contact Number</dt>
          <dd> {{ applicant.contact_number }} </dd>
        </dl>
        <dl>
          <dt>CV link</dt>
          <dd><a :href="applicant.cv_link" target="_blank">Link</a></dd>
        </dl>
        <dl>
          <dt>Email</dt>
          <dd>{{ applicant.email }}</dd>
        </dl>
        <dl>
          <dt>Portfolios</dt>
          <dd>
            <el-row :gutter="12" class="row-big">
              <el-col v-for="portfolio in applicant.portfolio" :key="portfolio.id" :span="12">
                <img :src="portfolio.link">
                <p>{{portfolio.skills_user}} - {{ portfolio.year | year }}</p>
              </el-col>
            </el-row>
          </dd>
        </dl>
        <dl>
          <dt>Previous Jobs</dt>
          <dd>
            <el-row :gutter="12" class="row-big">
              <el-col v-for="job in applicant.previous_jobs" :key="job.id" :span="24">
                <el-card>
                  <div>
                    <strong>{{job.title}} ( {{ (job.from_year | year) || 'not given' }} - {{ (job.to_year | year) || 'current' }} )</strong>
                    <div class="bottom clearfix">
                      <p> <strong>Description</strong> => {{ job.description }}</p>
                      <p> <strong>Skills</strong> => {{ job.skills_earned }}</p>
                      <p> <strong>Refference</strong> => <a :href="job.reference_link">Link</a></p>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </dd>
        </dl>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-button class="button-full" type="info" @click.native.prevent="$router.push('/applicant')">Back</el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="button-full" type="danger" @click="deleteApplicant">Delete</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    applicant () {
      return this.$store.getters.getApplicant(this.id)
    }
  },
  methods: {
    deleteApplicant () {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          this.$store.dispatch('DELETE_APPLICANT', {id: this.id})
          this.$router.push('/applicant')
        })
        .catch(_ => {})
    }
  },
  filters: {
    year (val) {
      let date = new Date(val)
      return date.getFullYear()
    }
  }
}
</script>

<style scoped>
  dt{
    font-weight: bold
  }
  img{
    max-width: 100%;
  }
  .row-big{
    padding: 10px 0;
  }
</style>
