---
title: 部署个人博客方法
abbrlink: 4441
date: 2018-10-21 09:39:43
tags:
---

部署个人博客命令
npm+hexo

- npm install hexo-cli -g #安装 Hexo
- npm install hexo-deployer-git --save #部署 hexo 到 git page 的 deployer

- hexo init #初始化
- hexo generate #简化 hexo g 生成
- hexo server #简化 hexo s 启动服务器

#### 配置 github

- cd ~/.ssh #查看本机是否存在 SSH Key ###**存在**
- clip <~/.ssh/id_rsa.pub #复制公钥到 clipboard
- 登录 github 设置秘钥
- ssh -T git@github.com #测试秘钥

### **不存在**

- ssh-keygen -t rsa -C "your_email@example.com"

  - 弹出界面
  - 直接回车:默认文件进行存储
    - 输入特定的文件名
    - 输入密码(可不输入直接回车)
    - 确认密码
  - 执行存在那一步

- 创建库
- 选择设置的 SSH 并复制
- 打开本地 hexo 项目 编辑 \_config.yml
- 修改
  ```
  deploy:
  type: git
  repo: "复制的SSH"
  branch: master
  ```
- 在 Hexo 文件下执行
- hexo g -d
- 报错 not fount:git
- 重新安装 npm install hexo-deployer-git --save
- 再次执行 hexo g -d
- 浏览器输入 github 生成的外链 https://xxxx.github.io/

### 美化自己博客

#### 主题

- 下载网址:https://hexo.io
- 克隆主题到 theme 目录
- 修改配置文件 \_config.yml

```
   theme: hexo-theme-chan
```

返回项目根目录 执行语句

- hexo g
- hexo s
- http://localhost:4000/

### 部署到 Github

- hexo clean #清除缓存
- hexo g -d

### Hexo 编写文章

1.发表新篇

- hexo n "NewPage"
- 生成地址在 \项目\Hexo\source_post\NewPage.md
- 推送服务器上
- hexo g
- hexo d
- 注: 合并命令 hexo d -g

### 域名关联

- hexo\source\ 创建 CNAME
  内容是你的域名
- 提交 hexo g -d
- 修改 DNS

```DNS
f1g1ns2.dnspod.net
f1g1ns1.dnspod.net
```

- 域名解析
- 打开https://www.dnspod.cn/ 注册账户
- 添加域名
- 添加记录
- 1.主记录为@
- 2.www
- 记录值相同 博客主页对应 ip
- 获取 ip ping "github 博客地址"
- 等生效
