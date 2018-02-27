<template>
  <el-card class="box-card">
    <h1 class="text-center">
      Applicants
    </h1>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="applied_for[0].applicant_id"
        label="ID"
        width="70">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operations"
        width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="checkDetails(scope.$index, tableData)" type="text" size="small">Detail</el-button>
          <el-button type="text" size="small">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  computed: {
    tableData () {
      return this.$store.getters.applicants
    }
  },
  methods: {
    checkDetails (index, data) {
      let id = data[index].applied_for[0].applicant_id
      this.$router.push({path: '/applicant/' + id})
    }
  },
  created () {
    this.$store.dispatch('GET_APPLICANT')
  }
}
</script>
