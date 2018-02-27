<template>
  <el-card class="box-card text-center">
    <h1>
      Login
    </h1>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Eamil">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="button-full" type="primary" @click="submit">Login</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'LOGIN'
    }),
    async submit () {
      try {
        await this.login(this.form)
        this.$router.push('/applicant')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
