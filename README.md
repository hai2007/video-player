# [Video Player - 视频播放器](https://hai2007.github.io/video-player/)

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/video-player/issues)，欢迎参与维护！

- 你可以查看[在线用例](https://hai2007.github.io/video-player/)来快速体验！

## 如何引入

我们推荐你使用npm的方式安装和使用：

```bash
npm install --save @hai2007/video-player
```

当然，你也可以通过CDN的方式引入：

```html
<script src="https://unpkg.com/@hai2007/video-player@1"></script>
```

## 如何使用

- 特别注意：当前最后一个可用版本（非beta和alpha版本）请查看master分支的说明！

```js
import VideoPlayer from '@hai2007/video-player';

new VideoPlayer({

    // 挂载点(必选)
    el: document.getElementById('root')

});
```

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/video-player/blob/master/LICENSE)

Copyright (c) 2021-2022 [hai2007](https://hai2007.github.io/SweetHome/) 走一步，再走一步。
