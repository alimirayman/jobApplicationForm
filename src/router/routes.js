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
    path: '*',
    component: load('Page404')
  }
]

export default routes
