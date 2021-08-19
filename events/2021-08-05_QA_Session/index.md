### time-test测试和mcycle寄存器有关联吗？

time-test需要实现__am_timer_uptime函数，该函数可以通过mcycle寄存器获取时钟周期数来计算时间。在仿真阶段，该时间值不需要保证准确性，只需要测试程序能跑起来即可。

### 如何测试写的AXI是否正确呢？

可以根据AXI协议的时序自己编写一个slave端程序来测试，我们也提供了一个[uart ip](https://github.com/OSCPU/peripheral/tree/uart-axi/uart)，可以用来测试自己写的master端的正确性。

### 先加CSR后加流水线和先加流水线后加CSR有什么区别?

在单周期的基础上添加功能比在流水线要更加简单并且更容易调试，对于以学习为目的同学，我们建议按照我们基础任务的流程来开发。

### 流片时CPU对外的接口有哪些？

除了clock和reset，还有3个AXI4-FULL接口，分别是两个master端的RAM和MMIO接口，一个slave端的DMA接口，其中DMA可以不用。
