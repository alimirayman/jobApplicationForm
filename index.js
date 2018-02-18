new Vue({
  el: '#app',
  data: {
    step: 1,
    front_end: false,
    ux_designer: false,
    color: 'primary',
    applicant: {
      name: '',
      email: '',
      contact_number: '',
      apply_for: [
        {
          name: 'Front End Designer',
          check: false,
          color: 'purple darken-1'
        },
        {
          name: 'UX/UI Designer',
          check: false,
          color: 'orange darken-1'
        }
      ],
      previous_jobs: [
        {
          name: '',
          from_year: '',
          to_year: '',
          currently_working: true,
          skills_earned: '',
          descreaption: '',
          reference_link: '' 
        }
      ],
      portfolio: [
        {
          link: '',
          year: 2018,
          skills_used: '' 
        }
      ],
      cv_link: '',
    }
  },
  computed: {
    colors: function () {
      return this.applicant.apply_for
                    .filter(el => el.check)
                    .map(el => el.color)
    },
    checkSelected: function () {
      return this.colors.length > 0
    }
  },
  methods: {
    getColor: function (check, color) {
      return check ? color : 'grey'
    },
    applied: function (obj) {
      obj.check = !obj.check
      this.colorChange()
    },
    colorChange: function () {
      let colors = this.colors
      if (colors.length === 2) this.color = 'cyan'
      else if(colors.length === 1) this.color = colors[0]
      else this.color = 'grey'
    }
  }

});