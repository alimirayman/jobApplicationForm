<template>
  <div>
    <h2>Personal Information</h2>
    <el-form :model="form" ref="ruleForm">
      <el-form-item
        label="Full Name"
        prop="name"
        :rules="[
          { required: true, message: 'Please input your full name', trigger: 'blur' }
        ]">
        <el-input
          v-model="form.name"
          placeholder="Mir Ayman Ali"
          ></el-input>
      </el-form-item>
      <el-form-item
        label="Email Address"
        prop="email"
        :rules="[
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: 'blur' }
        ]">
        <el-input
          v-model="form.email"
          placeholder="ayman@karigor.io"
          ></el-input>
      </el-form-item>
      <el-form-item
        label="Contact Number"
        prop="contact_number"
        :rules="[
          { required: true, message: 'Please input contact number', trigger: 'blur' },
        ]">
        <el-input type="tel" v-model="form.contact_number" placeholder="+8801444444444"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="button-full" type="primary" @click="next">Continue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    form: 'data'
  }),
  methods: {
    ...mapActions({
      saveData: 'SAVE_DATA',
      nextStep: 'NEXT_STEP'
    }),
    next () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.saveData(this.form)
        } else {
          return false
        }
      })
    }
  }
}
</script>
