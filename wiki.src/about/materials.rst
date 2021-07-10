.. _materials:

************
参考资料
************

总体原则
============

“一生一芯”计划，鼓励同学们主动探索和积极实践。故而，没有课堂式教学，仅提供关键节点的引导和部分参考资料。绝大部分任务，都需要同学们自己去查资料和动手摸索。

参考书
============

数字电路: 网上教材和公开课很多，同学们可自行去找并有针对性地学习，目标是了解和掌握【时序的概念、寄存器、锁存器等基础概念，学会Verilog编程】

组成原理: 《数字逻辑与计算机组成》袁春风 

体系结构 (基础) : 《计算机组成与设计 硬件/软件接口》

体系结构 (进阶) : 《计算机体系结构量化研究方法》、《超标量处理器设计》姚永斌

* (如上推荐但不限于，因为每个学校的课程和教材会有所区别，请根据各人情况自行调整)

其它参考资料
============

仿真验证环境
------------

1. Verilator: https://www.veripool.org/verilator/

2. RISC-V工具链可以通过apt-get一键安装

3. 模拟器NEMU https://github.com/NJU-ProjectN/nemu

4. 裸机运行时环境AM https://github.com/NJU-ProjectN/nexus-am

5. 差分测试资料 Yu, EasyDiff: An Effective and Efficient Framework for Processor Verification, CRVF 2019, https://crvf2019.github.io/pdf/14.pdf

6. 2018年龙芯杯南京大学二队决赛答辩报告 http://www.nscscc.org/a/wangjie/NSCSCC2018/2018/1010/46.html

RISC-V
------------

| 1. RISC-V指令集手册
|   https://github.com/riscv/riscv-isa-manual

| 2. RISC-V各种资料(如ABI规范等)
|   https://github.com/riscv/

Chisel
------------

| 1. Chisel Bootcamp - 很不错的chisel教程, 支持在线运行chisel代码, 可以边写chisel代码边学习
|   https://github.com/freechipsproject/chisel-bootcamp

.. note::
	第1章是scala入门, 第2章是chisel基础, 第3章是scala高级特性和chisel的混合使用, 第4章是FIRRTL后端相关内容
	学习前两章 = 入门, 学习第3章 = 提高, 第4章可以作为课外阅读材料

| 2. Chisel Users Guide - 比较系统地整理了chisel的特性, 也是不错的入门教程
|   https://github.com/freechipsproject/chisel3/wiki/Short-Users-Guide-to-Chisel

	
| 3. Chisel小抄 - 简明地列出了chisel语言的大部分用法
|   https://chisel.eecs.berkeley.edu/doc/chisel-cheatsheet3.pdf

	
| 4. Chisel API - 详细地列出了chisel库的所有API供参考
|   https://chisel.eecs.berkeley.edu/api/latest/index.html

	
| 5. Chisel示例项目
|   https://github.com/OpenXiangShan/chisel-playground

	
用Chisel开发的RISC-V处理器示例项目
------------------------------------
	
1. https://github.com/ucb-bar/riscv-sodor

2. https://github.com/OSCPU/NutShell

3. https://github.com/freechipsproject/rocket-chip (不适合入门阅读) 

4. https://github.com/OpenXiangShan/XiangShan (非常复杂的处理器) 
							