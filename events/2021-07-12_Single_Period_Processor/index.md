### 我们在现在这个阶段主要是做什么，在这些单周期addi基础上去实现其他单周期指令吗？

我们官网上有任务列表，后面的开发可以按照任务列表进行。

### 实现自己的core的时候有什么约束吗？比如接口名等等？

我们的最低要求是至少实现RV64I指令，能跑RT-Thread，其他没有约束，可以按照自己的想法去实现。

### 最终的CPU一定要同步复位吗？

我们建议使用同步复位，如果使用异步复位，要做到异步复位同步撤离。
