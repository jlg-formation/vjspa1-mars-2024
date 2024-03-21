export const stockRoutes = [
  {
    path: '/stock',
    name: 'stock',
    component: () => import('../stock/views/ListView.vue')
  },
  {
    path: '/stock/add',
    name: 'stock/add',
    component: () => import('../stock/views/AddView.vue')
  }
]
