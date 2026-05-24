module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/myportfolio/' : '/',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end();
    }
}