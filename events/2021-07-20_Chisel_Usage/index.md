## Chisel 生成的 Verilog 代码中的模块名称可以自定义吗？

可以的，你可以通过覆盖掉`desiredName` 或者使用 Chisel 官方优化插件 `chisel3-plugin`来自定义模块名。

```scala
override val desiredName = "YourName"
```

## 请问 Scala 语法糖相关的资料推荐吗？

我们主要精力还是放在电路本身，就不用系统地学习 Scala了。这些语法糖可以看看 UCB 的 GitHub repo，多阅读大神们的代码，你会收获颇丰的。

除此以外，有遇到什么问题再去搜解决方法就好，慢慢就知道这些语法怎么使用了。
