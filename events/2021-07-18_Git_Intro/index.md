### 什么是 Git？

Git 是一种分布式版本控制系统, 它是一种分布式的, 能够记录一个或多个文件内容变化的, 并且能够在将来查阅特定历史版本和修订情况的系统．

### 合并分支时有冲突怎么办？

你需要通过 `git status` 查看有冲突的文件, 然后手动修改有冲突的文件, 使用 `git add <file>` 标记某个文件的冲突已经修改完成．当所有的冲突都解决后, 使用 `git commit` 来产生一次合并提交．

### origin 是什么意思？它和 master 有什么区别？

origin 是远程仓库的名字, 它并没有任何特殊的含义和用处, 唯一的特别之处在于 `git clone` 后, Git 会把源仓库命名为 origin．  
master 是一个分支名, 在通常情况下, 它是默认的分支默认名字 (在BLM运动后, 有的人正在使用 main 来取代 master), 它与 origin 是两个不同概念上的东西．

### 进一步阅读
https://git-man.tanghaojin.site/  
https://git-scm.com/book/zh/v2
