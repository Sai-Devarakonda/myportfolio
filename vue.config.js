module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/myportfolio/' : '/',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}