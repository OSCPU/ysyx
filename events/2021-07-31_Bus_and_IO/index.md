### 为什么内存要用 DRAM 而不是 SRAM？

相比 SRAM，DRAM 造价低，面积小，在内存大小需求越来越大的今天，DRAM 成为了内存的最好选择。尽管 DRAM 的访存速度会慢很多，但通过一些手段 (如 cache 等) 可以使得访存速度与 SRAM 变得十分接近。

### 现在需要实现哪些外设？

目前仅需要实现简易的计时器和串口便可以在 verilator 上进行 RT-Thread 的仿真。最终还需要添加 SPI-flash 设备，从闪存中加载指令和数据进内存。

### 流片用的内存是什么参数？有仿真用的文件吗？

流片用的内存是 AXI4 接口，其中地址线位宽为 32，数据线位宽为 64，其余参数暂未完全确定。如果有仿真需求，可以自己实现一个仿真用 AXI4 接口的内存。

### 进一步阅读：

AXI 手册：https://developer.arm.com/documentation/ihi0022/h  
* 不建议阅读最新版 H.c 的手册，因为里面除了把 master 和 slave 等术语换成了更加西方政治正确的词语以外没有任何区别，徒增我们的阅读和沟通成本。

AM 运行时环境介绍：https://oscpu.github.io/ysyx/events/events.html?EID=2021-07-13_AM_Difftest

