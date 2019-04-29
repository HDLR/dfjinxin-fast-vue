# dfjinxin-fast-vue

## 代码下载后在工程当前路径运行，下载所有依赖包
```
yarn install
```

### 运行工程
```
yarn run serve
```

### 工程打包
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### 系统配置

.env环境全局系统变量
.env.develoment开发环境系统变量
.env.prodution正式环境系统变量

VUE_APP_PROXY_TARGET：
对应访问后台dfjinxin-fast的地址

VUE_APP_BASE_CONTENT：
对应工程webpack的context-path，如VUE_APP_BASE_CONTENT为/dfjinxin-fast，dfjinxin-fast-vue启动后，
访问地址为http://localhost:8001/dfjinxin-fast/

VUE_APP_SYS_PORT：
dfjinxin-fast-vue访问端口号

