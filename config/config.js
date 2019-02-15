// https://umijs.org/config/
// import path from 'path';
import path from 'path';
import pageRoutes from './router.config';

export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true,
      },
      dynamicImport: { webpackChunkName: true },
      title: {
        defaultTitle: 'wanke-cloud',
      },
      pwa: {
        manifestOptions: {
          srcPath: 'src/manifest.json',
        },
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
          swSrc: 'src/service-worker.js',
          swDest: 'service-worker.js',
          exclude: [/\.html$/],
        },
      },
      hd: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      dll: true,
      hardSource: true,
    }],
  ],
  routes: pageRoutes,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  targets: {
    android: 5,
    ios: 7,
    chrome: 58,
    ie: 9,
  },
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }
      return localName;
    },
  },
  hash: true,
  manifest: {
    basePath: '/',
  },
  devServer: {
    open: true
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  outputPath: './dist',
  // proxy: {
  //   '/server/api/': {
  //     target: 'https://preview.pro.ant.design/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/server': '' },
  //   },
  // },
};
