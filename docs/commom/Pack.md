# 项目打包优化及分析工具推荐

## 打包分析工具 视图分析依赖文件

> 分析项目的文件大小及引用情况，以便更好的实施文件分包、CDN引入等相关优化方案，那么下面有两种工具推荐

### [webpack-bundle-analyzer](#)


### [rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer)

#### 安装

```js
// npm 
npm install rollup-plugin-visualizer -D
// yarn 
yarn add rollup-plugin-visualizer -D
```

#### 配置

```ts
// 一般在vite.config.js使用
import { defineConfig, type ConfigEnv, loadEnv } from 'vite';
export default defineConfig(({ command, mode:ConfigEnvs }) => {
    const env = loadEnv(mode.mode, process.cwd());
    return {
        plugins: [
          visualizer({
              emitFile: true,//是否被触摸
              filename: "test.html",//生成分析网页文件名
              open: true,//在默认用户代理中打开生成的文件
              gzipSize: true,//从源代码中收集 gzip 大小并将其显示在图表中
              brotliSize: true,//从源代码中收集 brotli 大小并将其显示在图表中
          })
        ],
    }
 })
```

> 执行完npm run build后会在根目录下生成stats.html(默认名)


