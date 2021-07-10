# 一生一芯信息发布和资料共享网站

## 讲座资料上传

用于讲座时分发的资料请放置到 `/lectures/202x-xx-xx_Keyword` 目录下(每场讲座建立一个独立的文件夹, 命名方法如上所示（日期_关键词).

另外，添加新的报告时，请在 `contents.json` 中仿照已有的记录添加新的记录. 如果不熟悉 JSON 的语法或者不确定添加格式是否正确, 请联系网站负责人代为添加.

上传完毕后，请通知网站管理员需要展示的内容、顺序; 报告定稿后请将导出的PDF版报告一并上传到上述目录, 如果条件允许, 还可以提交一份 Markdown 文档, 每个讲座的根目录下名为 `index.md` 的文档将会被自动渲染为网页正文并展示。(自动渲染还未实现)

## Wiki 编译

编译 Wiki 的环境需要安装 `Sphinx` 和 `sphinx-rtd-theme`.

```sh
pip3 install Sphinx sphinx-rtd-theme
```

上述PIP包安装完成后, 即可编译wiki, 请注意当前目录为 OSCPU/ysyx (Repo 根目录):

```sh
sphinx-build -b html wiki.src wiki
```

## 网站内容勘误

请在此 Repo 下发起 issue 或者联系该网站内列出的的在岗维护人员。