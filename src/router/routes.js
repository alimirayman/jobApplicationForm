function load (component) {
  return () => import(`@/pages/${component}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Job-Application-Form',
    component: load('Application')
  },
  {
    path: '/applicant',
    name: 'Applicants-List',
    component: load('Applicant')
  },
  {
    path: '/applicant/:id',
    props: true,
    name: 'Individual-Applicant',
    component: load('Applicant/_id')
  },
  {
    path: '/login',
    name: 'Admin-Login',
    component: load('Login')
  },
  {
    path: '*',
    component: load('Page404')
  }
]

export default routes
