const QuickPaperLoaderPlugin = require('@etcpack/quickpaper-loader-plug');
const CommonjsPlug = require('@etcpack/commonjs-plug');

module.exports = {

    // 打包入口
    entry: './src/entry.js',

    // 打包出口
    output: 'build/video-player.js',

    loader: [{
        test: /\.js$/,
        handler: ['@etcpack/babel-loader']
    },
    {
        test: /\.(css|scss)$/,
        handler: ['@etcpack/quickpaper-style-loader', '@etcpack/css-loader', '@etcpack/scss-loader']
    }, {
        test: /\.paper$/,
        handler: ['@etcpack/quickpaper-loader']
    }],
    plug: [
        new QuickPaperLoaderPlugin(),
        new CommonjsPlug()
    ]
};
