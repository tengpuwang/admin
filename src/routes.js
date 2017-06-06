/**
 * Created by shumin on 16-10-10.
 */

import containers from './views/_container/container.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: (resolve) => {
      require(['./views/index.vue'], resolve)
    },
    children: [
      {
        path: 'city',
        name: 'city',
        component: containers,
        children: [{
          path: '',
          name: 'city.list',
          component: (resolve) => {
            require(['./views/cities/list.vue'], resolve)
          },
        },
          {
            path: 'add',
            name: 'city.add',
            component: (resolve) => {
              require(['./views/cities/add.vue'], resolve)
            }
          }
        ]
      },

      {
        path: 'site',
        name: 'site',
        component: containers,
        children: [
          {
            path: '',
            name: 'site.list',
            component: (resolve) => {
              require(['./views/sites/list.vue'], resolve)
            },
          },
          {
            path: 'add',
            name: 'site.add',
            component: (resolve) => {
              require(['./views/sites/add.vue'], resolve)
            },
          }
        ]
      },

      {
        path: 'info',
        name: 'info',
        component: containers,
        children: [
          {
            path: '',
            name: 'info.list',
            component: (resolve) => {
              require(['./views/infos/list.vue'], resolve)
            },
          },
          {
            path: 'add',
            name: 'info.add',
            component: (resolve) => {
              require(['./views/infos/add.vue'], resolve)
            },
          }
        ]
      },
      // 广告
      {
        path: 'adsenses',
        name: 'adsenses',
        component: containers,
        children: [
          {
            path: ':index',
            name: 'adsenses.list',
            component: (resolve) => {
              require(['./views/adsenses/list.vue'], resolve)
            },
          }
        ]
      },
      {
        path: 'category',
        name: 'category',
        component: containers,
        children: [
          {
            path: '',
            name: 'category.list',
            component: (resolve) => {
              require(['./views/categories/list.vue'], resolve)
            },
          },
          {
            path: 'add',
            name: 'category.add',
            component: (resolve) => {
              require(['./views/categories/add.vue'], resolve)
            },
          }
        ]
      }

    ]
  },

  // 登录
  {
    path: '/login',
    name: 'login',
    component: (resolve) => {
      require(['./views/login.vue'], resolve)
    }
  },

  // 404
  {
    path: '/404',
    name: '404',
    component: (resolve) => {
      require(['./views/404.vue'], resolve)
    }
  },

  // 500
  {
    path: '/500',
    name: '500',
    component: (resolve) => {
      require(['./views/500.vue'], resolve)
    }
  }
];

export default routes;
