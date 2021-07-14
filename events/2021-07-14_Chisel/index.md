### chisel可以内嵌verilog代码吗，就像C语言内联汇编一样？

chisel可以内嵌verilog代码，chisel3.util包里有一个trait HasBlackBoxInline，调用方法setInline()可以在chisel代码里内嵌verilog代码。

### chisel语言优点是啥？好用吗？

chisel的优点在于可以利用scala语言的高级特性来描述硬件，开发速度和代码量均优于verilog。

### 使用idea的话那波形查看如何实现？编译完再到verilator仿真吗，然后再用gtkwave查看波形？

是的，波形文件查看器可根据自己的情况选择不同的工具。
