### AXI Interconnect需要自己写吗？

总线的仲裁逻辑是需要自己确定的，所以Interconnect需要自己写。

### 在自己的CPU上运行字符版的超级玛丽后，画面不会动，difftest也不会报错，这种现象正常吗

在PC上仿真CPU的速度比较慢，可能要等一段时间画面才会动，只要diffttest不报错就说明指令的实现是正确的。

### 如何在仿真的环境中给CPU传递中断？

我们的基础任务只要求实现定时器中断，不需要外部给CPU传递中断，只要定时器计数溢出后产生中断反馈给CPU即可。
