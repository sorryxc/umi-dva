export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/goods/detail' },
      {
        path: '/goods',
        name: 'goods',
        routes: [
          {
            path: '/goods/detail',
            name: 'goods-detail',
            component: './Goods/GoodsDetail',
          },
        ],
      },
      {
        component: './Error/Page404',
      },
    ],
  },
];
