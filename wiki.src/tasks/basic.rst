*************************************
基础: CPU核心构建与调试 (3个月)
*************************************

.. _tasks:

Task 1
=======

时间: 1 Week

1. 实现单周期, addi 指令; 运行 addi 指令, 并得到正确结果

Task 2
=======

时间: 2 Weeks

1. 加上 difftest

2. 实现更多基础指令, 通过 cpu-test 和 riscv-test 测试

Task 3
=======

时间: 2 Weeks

1. 加一条自定义指令, 执行后输出单个字符, 可运行 hello 程序

2. 添加 mcycle 寄存器, 通过 time-test 和所有 benchmark, 运行字符版的超级玛丽

Task 4
=======

时间: 1 Week

1. 实现AXI总线, 接入串口, 并且去掉自定义指令

2. 通过AXI总线访存

Task 5
=======

时间: 1.5 Week(s)

1. 添加mepc, mcause, mstatus特殊寄存器, 

2. 实现ecall指令, 并运行yield-test

Task 6
=======

时间: 1 Week

1. 添加更多的csr，运行rt-thread

Task 7
=======

时间: 2 Weeks

1. 建立流水线框架，实现RV64I基本指令的流水化，解决数据冒险与控制冒险

Task 8
=======

时间: 0.5 Week

1. 接入spi模块，从flash取指令

Task 9
=======

时间: 1 Week(s)

1. 集成到SoC并进行测试