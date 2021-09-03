### time-test测试和mcycle寄存器有关联吗？

time-test需要实现__am_timer_uptime函数，该函数可以通过mcycle寄存器获取时钟周期数来计算时间。在仿真阶段，该时间值不需要保证准确性，只需要测试程序能跑起来即可。

### 如何测试写的AXI是否正确呢？

目前的`香山difftest框架`支持测试一部分`AXI`功能，可以先用其测试自己的master端，在完成前端开发后，接入[一生一芯计划仿真用SoC工程](https://github.com/OSCPU/ysyxSoC)来测试自己的CPU是否符合SoC接入规范。

### 先加CSR后加流水线和先加流水线后加CSR有什么区别?

在单周期的基础上添加功能比在流水线要更加简单并且更容易调试，对于以学习为目的同学，我们建议按照我们基础任务的流程来开发。

### 流片时CPU对外的接口有哪些？

除了clock和reset，还有2个AXI4-FULL接口，其中一个是master端的RAM&MMIO接口，另一个是slave端的DMA接口，DMA接口可以不用。
