
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'htmlBase', component: () => import('pages/HtmlBase.vue'), alias: '' },
      { path: 'vueBase', component: () => import('pages/VueBase.vue') }
    ]
  },
  {
    path: '/end',
    component: () => import('layouts/End.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
