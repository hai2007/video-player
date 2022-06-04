const fs = require('fs');
const path = require('path');

module.exports = {

    // 当前配置文件的相对路径上下文
    path: __dirname,

    // package.json路径
    pkg: '.',

    // 定义任务
    task(nodejs, pkg, rootPath) {

        [
            'video-player.js',
            'video-player.min.js'
        ].forEach(item => {

            let filePath = path.join(rootPath, "./build/" + item);

            let banner =
                `/*!
 * video-player - ${pkg.description}
 * ${pkg.repository.url}
 *
 * author ${pkg.author} < https://hai2007.github.io/SweetHome >
 *
 * version ${pkg.version}
 *
 * Copyright (c) 2021-2022 hai2007 走一步，再走一步。
 * Released under the ${pkg.license} license
 *
 * Date:${new Date()}
 */`;

            fs.writeFileSync(filePath, banner + "\n" + fs.readFileSync(filePath));

        });

    }

};
