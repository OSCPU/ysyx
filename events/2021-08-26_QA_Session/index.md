### 不管difftest和nemu可以吗，就按照接口接上当成黑盒子跑?

理论上是可以的，直接根据difftest报错信息调试自己的CPU。但如果能了解difftest和nume的原理，会更方便自己调试bug。

### 添加axi总线后，load与store指令通过不了，axi_rw.v中自己添加的write代码不能保证正确性，有什么更好的解决办法呢？

首先要确保load逻辑的正确性，因为测试store必须要使用load，可以先通过riscv-tests中和load相关的测试再测store。其次要保证axi通信的时序符合axi规范的要求，测试时根据波形来找bug，必要时在cpu或difftest中添加打印来方便自己调试。

### assign赋值的波形都和预期不一样怎么办？

这种问题往往是因为错误的连线造成的，可以断开模块的所有外部连接，单独测试模块内部的波形是否符合预期，然后再逐步检查模块外部的连接是否正确。

### 测试axi时序时，发现valid和ready总是错位一个时钟周期，但却能正常握手，这是怎么回事？

verilator的仿真策略是只记录组合逻辑电路的最终状态，不记录中间值。假设当前master处于读地址状态(ar_valid=1，ar_ready=0，clock=0)，在某时刻slave(difftest)拉高ar_ready，并且拉高clock，然后开始评估电路状态，此时master判断握手成功(ar_valid=1，ar_ready=1)，状态机切下一状态(ar_valid=0，r_valid=1)，评估完成，difftest记录此时组合逻辑电路的最终状态波形(ar_valid=0，ar_ready=1)，就出现了valid和ready错位的情况，但CPU的实现逻辑是正确的，所以不必担心。
