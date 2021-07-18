### 什么是Difftest？

Difftest源自软件工程领域，全程Diffrenttial Testing。核心思想是对于根据统一规范的两种实现，给定相同的有定义的输入，它们的行为应当一致。

### 一个正确实现的单周期cpu，是否可以理解为模拟器？

如果能保证cpu的实现正确，那么该cpu可以作为正确的参考进行difftest。

### nemu包含现有的所有riscv指令吗？

nemu包含了能支持linux运行的指令，足够我们现阶段的测试。

### nemu作为一个"黄金模型"，怎么保证nemu模拟指令行为的正确性？

我们使用nemu和qemu进行过difftest，可以认为nemu的实现是正确的，如果不相信nemu，也可以使用qemu进行difftest。
