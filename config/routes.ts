export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/crawl',
    name: 'crawl',
    icon: 'table',
    routes: [
      {
        path: 'weibo',
        name: 'weibo',
        component: '../pages/DataCrawl/Weibo',
      },
      {
        path: 'detail',
        name: 'ddd',
        component: '../pages/DataCrawl/Weibo/Detail',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'setting',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '监控页',
    icon: 'smile',
    path: '/dashboardmonitor',
    layout: false,
    component: './DashboardMonitor',
  },
  {
    component: './404',
  },
];
