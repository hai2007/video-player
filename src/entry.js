import QuickPaper from 'quick-paper';

// 引入样式
import "@hai2007/style/normalize.css";
import "./styles/common.scss";

import App from './App.paper';

let VideoPlayer = function (options) {

    new QuickPaper({

        // 挂载点
        el: options.el,

        // 启动组件
        render: createElement => createElement(App)

    });

    return {

    };

};

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = VideoPlayer;
} else {
    window.VideoPlayer = VideoPlayer;
}
