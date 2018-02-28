# 轮询

## 作用

通过传入的轮询执行函数和执行间隔时间来对一个轮训的开始和结束进行控制

##使用方法

### 引入

根据具体路径引入模块儿

import pollingmode from './index.js';

### 开始一个轮询

开始一个间隔时间是3000ms的轮询，如果第二个参数是空则默认的间隔时间是5000ms
pollingmode.beginPolling(callback, 3000)

### 结束一个轮询问

清除创建的轮询

pollingmode.stopPolling();