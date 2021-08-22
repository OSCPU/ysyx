### 取指和访存的仲裁器需要实现2 to 1，还是2 to 2的interconnect呢？

除了clock和reset，还有2个AXI4-FULL接口，其中一个是master端的RAM&MMIO接口，另一个是slave端的DMA接口，DMA接口可以不用。如果把CLINT当作AXI slave，那么至少需要2 to 2的interconnect。下图是我们给出的一个芯片内外设之间连接的参考示例图，其中axi_rw属于自定义的模块，可以根据CPU的需要添加或者删除。
   
<center><img src="./2021-08-19_QA_Session/ysyx.svg" style=" width: 90%;"/></center>

### 例程中给出的axi_rw模块中的自定义信号可以增加或者删除吗？

可以根据自己的需求修改，只要保证接入AXI interconnect的信号符合AXI协议即可。

### difftest进行axi访存时是不支持size小于8字节的读出是吗？

difftest框架由于最初是专门为香山项目而设计的，不会出现size小于8字节的情况，但而"一生一芯"可能会出现这种情况，我们的例程中直接指定每次读size为8字节，并使用掩码和位移使最终读取的结果符合预期。你也可以自己修改difftest的源码来实现读取size小于8字节。

### 运行马里奥是必做的吗？

如果通过了time-test，那么可以选择跳过运行马里奥。

### 用verilog写cache，里面的reg会在后端被综合为ram吗?

不会综合成ram，只会综合成寄存器堆。
