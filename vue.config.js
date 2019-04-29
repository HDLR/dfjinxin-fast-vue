module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? this.baseSys
    //     : this.baseSys,
    publicPath: process.env.VUE_APP_BASE_CONTENT,

    // 输出文件目录
    outputDir: 'dist',

    // webpack-dev-server 相关配置
    devServer: {
        port: process.env.VUE_APP_SYS_PORT,
        // historyApiFallback: {
        //     index: process.env.VUE_APP_BASE_CONTENT + '/index.html'
        // },
        open: false,//项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
        // proxy: {
        //     '/proxyApi': {//代理api
        //         target: process.env.VUE_APP_PROXY_TARGET,//服务器api地址
        //         changeOrigin: true,//是否跨域
        //         ws: true, // proxy websockets
        //         pathRewrite: {//重写路径
        //             "^/proxyApi": ''
        //         }
        //     }
        // }
    },

    // 输出文件目录
    outputDir: '../dfjinxin-fast/src/main/resources/static/',
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
};