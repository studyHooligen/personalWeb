# personalWeb
 基于nodeJS+express+HTML的个人网站

## 后台部署须知
为了防止不同平台的区别，部署时需要重新按照模块文件
```
cd ./backStage
rmdir node_modules
npm install
```

## 网站结构

```
graph LR
主页-->滑板页面
主页-->编程语言
主页-->SLAM
主页-->嵌入式
主页-->大学学习/比赛
主页-->个人介绍

滑板页面-->街头滑板
滑板页面-->平花舞板
滑板页面-->速降
滑板页面-->推荐的好装备

编程语言-->C/C++
编程语言-->Matlab
编程语言-->Python
编程语言-->JavaScript

SLAM-->Linux
SLAM-->OpenCV
SLAM-->Eigen
SLAM-->工程线代

嵌入式-->STM32
嵌入式-->RT-Thread
嵌入式-->NB-IOT&5G
嵌入式-->PCB设计

大学学习/比赛-->华科学习
大学学习/比赛-->全国大学生电子设计竞赛
大学学习/比赛-->数学建模
大学学习/比赛-->其他

个人介绍-->网站搭建
个人介绍-->我的GitHub
个人介绍-->和我合作
个人介绍-->描述
```

### 主页
- 采用静态为主，弱动态
- 主要任务为引导到别的详细内容模块
- 纯HTML5和JS写吧

### 子页
- 采用动态的为主，只有背景框架静态
- 所有技术内容/笔记都采用markdown语言，采用MD渲染引擎即使渲染为主

# 数据库
## 存储内容
- 浏览情况记录
- 联系我的人记录
- markdown文件记录（有可能不用存到数据库里吧，后面看看）
## 数据库
MongoDB

# 服务框架
NodeJS+Express+HTML5+Markdown-JS