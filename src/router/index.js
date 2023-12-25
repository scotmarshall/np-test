import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/np-test/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/np-test/artists',
    name: 'artistsView',
    component: () => import(/* webpackChunkName: "artists" */ '../views/ArtistsView.vue')
  },
  {
    path: '/np-test/venues',
    name: 'venuesView',
    component: () => import(/* webpackChunkName: "venues" */ '../views/VenuesView.vue')
  },
  {
    path: '/np-test/gig/:id',
    name: 'gigSingle',
    component: () => import(/* webpackChunkName: "gigSingle" */ '../views/GigSingle.vue'),
  },
  {
    path: '/np-test/artist/:id',
    name: 'artistSingle',
    component: () => import(/* webpackChunkName: "artistSingle" */ '../views/ArtistSingle.vue'),
  },
  {
    path: '/np-test/venue/:id',
    name: 'venueSingle',
    component: () => import(/* webpackChunkName: "venueSingle" */ '../views/VenueSingle.vue'),
  },
  {
    path: '/np-test/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
