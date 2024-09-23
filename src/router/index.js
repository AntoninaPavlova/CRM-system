import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '@/pages/StartPage.vue';
import DepartmentsPage from '@/pages/DepartmentsPage.vue';
import StaffPage from '@/pages/StaffPage.vue';
import { Routes } from '@/consts/Routes';

const routes = [
  {
    ...Routes.START,
    component: StartPage,
  },
  {
    ...Routes.DEPARTMENTS,
    component: DepartmentsPage,
  },
  {
    ...Routes.STAFF,
    component: StaffPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
