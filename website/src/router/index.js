import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'
import AboutPage from '../views/AboutView.vue'
import StartPage from '../views/StartView.vue'
import FilmTrivia from '../views/FilmTriviaView.vue'
import RelationshipTrivia from '../views/RelationshipTriviaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/start-page',
      name: 'start-page',
      component: StartPage,
    },
    {
      path: '/film-trivia',
      name: 'film-trivia',
      component: FilmTrivia,
    },
    {
      path: '/relationship-trivia',
      name: 'relationship-trivia',
      component: RelationshipTrivia,
    }
  ],
})

export default router
