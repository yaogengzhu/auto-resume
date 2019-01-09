# auto-resume

# 命令行
> npm run dev
进入开发模式，可以编写html以及css进行美化

> npm run build
编译成静态资源，以及生成pdf文件

# 使用方式
* 将仓库fork到自己的仓库，clone到本地
* 运行npm run dev
* 编写resume.md文档或者html以及css文件
* 运行npm run build
* push 到 github 自己的仓库
* 访问https://你自己github的名称.github.io/auto-resume 例如 https://Richard-Choooou.github.io/auto-resume


# 使用帮助

* 如果修改了仓库名，那么访问的目录地址也需要相应的修改
* 每次push后可能需要过几分钟才能看到静态资源的更新
* 如果有自己的域名，那么可以在编译后的docs目录下添加cname文件进行域名解析
* 如果需要进行pdf的在线下载，可以使用相对路径./pdf/resume.pdf访问到pdf文件

# 注意事项
如果页面404，则需要进行如下设置
![img1](https://user-images.githubusercontent.com/23492006/50876816-defe9c00-1409-11e9-97be-ad1c2a54ac11.png)
![img2](https://user-images.githubusercontent.com/23492006/50876819-e2922300-1409-11e9-9462-bb7bcefc99a1.png)
![img3](https://user-images.githubusercontent.com/23492006/50876820-e58d1380-1409-11e9-9ca9-99cd9680f525.png)
