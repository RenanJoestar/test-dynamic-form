import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/general',
    name: 'General',
    meta: {
      title: 'General',
    },
    component: () =>
      import(/* webpackChunkName: "general" */ '../views/General.vue'),
  },
  {
    path: '/basic',
    name: 'Basic',
    meta: {
      title: 'Basic',
    },
    component: () =>
      import(/* webpackChunkName: "basic" */ '../views/Basic.vue'),
  },
  {
    path: '/text-fields',
    name: 'Text Fields',
    meta: {
      title: 'Text Fields',
    },
    component: () =>
      import(/* webpackChunkName: "text-fields" */ '../views/TextFields.vue'),
  },
  {
    path: '/number-fields',
    name: 'Number Fields',
    meta: {
      title: 'Number Fields',
    },
    component: () =>
      import(/* webpackChunkName: "text-fields" */ '../views/NumberFields.vue'),
  },
  {
    path: '/select-fields',
    name: 'Select Fields',
    meta: {
      title: 'Select Fields',
    },
    component: () =>
      import(/* webpackChunkName: "text-fields" */ '../views/SelectFields.vue'),
  },
  {
    path: '/textarea-fields',
    name: 'TextArea Fields',
    meta: {
      title: 'TextArea Fields',
    },
    component: () =>
      import(
        /* webpackChunkName: "text-fields" */ '../views/TextAreaFields.vue'
      ),
  },
  {
    path: '/checkbox-fields',
    name: 'Checkbox Fields',
    meta: {
      title: 'Checkbox Fields',
    },
    component: () =>
      import(
        /* webpackChunkName: "checkbox-fields" */ '../views/CheckboxFields.vue'
      ),
  },
  {
    path: '/radio-fields',
    name: 'Radio Fields',
    meta: {
      title: 'Radio Fields',
    },
    component: () =>
      import(/* webpackChunkName: "radio-fields" */ '../views/RadioFields.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login',
    },
    component: () =>
      import(/* webpackChunkName: "campaigns" */ '../views/Login.vue'),
  },
  {
    path: '/toggle-visibility',
    name: 'Toggle Visibility',
    meta: {
      title: 'Toggle Visibility',
    },
    component: () =>
      import(
        /* webpackChunkName: "toggle-visibility" */ '../views/ToggleVisibility.vue'
      ),
  },
  {
    path: '/reset-after-submit',
    name: 'Reset after submit',
    meta: {
      title: 'Reset after submit',
    },
    component: () =>
      import(
        /* webpackChunkName: "reset-after-submit" */ '../views/ResetAfterSubmit.vue'
      ),
  },
  {
    path: '/reset-form',
    name: 'Reset Form Manually',
    meta: {
      title: 'Reset Form Manually',
    },
    component: () =>
      import(/* webpackChunkName: "reset-form" */ '../views/ResetForm.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
