.. _materials:

************
参考资料
************

总体原则
============

“一生一芯”计划，鼓励同学们主动探索和积极实践。故而，没有课堂式教学，仅提供关键节点的引导和部分参考资料。绝大部分任务，都需要同学们自己去查资料和动手摸索。

参考书
============

:数字电路:

	网上教材和公开课很多，同学们可自行去找并有针对性地学习，目标:

	1. 了解和掌握时序的概念、寄存器、锁存器等基础概念

	2. 学会Verilog编程

:组成原理:

	《数字逻辑与计算机组成》 [袁春风]

:体系结构 (基础):

	《计算机组成与设计 硬件/软件接口》

:体系结构 (进阶):

	《计算机体系结构量化研究方法》, 《超标量处理器设计》 [姚永斌]

.. note::
	如上推荐但不限于，因为每个学校的课程和教材会有所区别，请根据各人情况自行调整

其它参考资料
============

仿真验证环境
------------


:Verilator:

	`[Veripool.org] Verilator Official Website <https://www.veripool.org/verilator/>`_

:RISC-V 工具链:

	`[GitHub] riscv/riscv-gnu-toolchain <https://github.com/riscv/riscv-gnu-toolchain#risc-v-gnu-compiler-toolchain>`_

:模拟器 NEMU:

	`[GitHub] NJU-ProjectN/nemu <https://github.com/NJU-ProjectN/nemu>`_

:裸机运行时环境:

	`[GitHub] NJU-ProjectN/nexus-am <https://github.com/NJU-ProjectN/nexus-am>`_ - Abstract Machine (AM)

:差分测试:
	
	`[CRVF2019] Yu, EasyDiff: An Effective and Efficient Framework for Processor Verification <https://crvf2019.github.io/pdf/14.pdf>`_

:2018龙芯杯决赛:

	`[nscscc.org] 南京大学二队报告 <http://www.nscscc.org/a/wangjie/NSCSCC2018/2018/1010/46.html>`_

RISC-V
------------

:RISC-V指令集手册:

	`[GitHub] riscv/riscv-isa-manual  <https://github.com/riscv/riscv-isa-manual>`_

:RISC-V 各种资料:

	`[GitHub] riscv <https://github.com/riscv/>`_ (如ABI规范等)

Chisel
------------

:`Chisel Bootcamp <https://github.com/freechipsproject/chisel-bootcamp>`_:

	很不错的chisel教程, 支持在线运行chisel代码, 可以边写chisel代码边学习

.. note::

	第1章是scala入门, 第2章是chisel基础, 第3章是scala高级特性和chisel的混合使用, 第4章是FIRRTL后端相关内容.

	学习前两章 = 入门, 学习第3章 = 提高, 第4章可以作为课外阅读材料.

:`Chisel Users Guide <https://github.com/freechipsproject/chisel3/wiki/Short-Users-Guide-to-Chisel>`_:

	比较系统地整理了chisel的特性, 也是不错的入门教程
	
:`Chisel 小抄 <https://github.com/freechipsproject/chisel-cheatsheet/releases/latest/download/chisel_cheatsheet.pdf>`_:

	简明地列出了chisel语言的大部分用法

:`Chisel API <https://chisel.eecs.berkeley.edu/api/latest/index.html>`_:

	详细地列出了chisel库的所有API供参考
	
:`Chisel 示例项目 <https://github.com/OpenXiangShan/chisel-playground>`_:

	可以作为模板使用
	
用Chisel开发的RISC-V处理器示例项目
------------------------------------
	
1. https://github.com/ucb-bar/riscv-sodor

2. https://github.com/OSCPU/NutShell

3. https://github.com/freechipsproject/rocket-chip (不适合入门阅读) 

4. https://github.com/OpenXiangShan/XiangShan (非常复杂的处理器) 

.. |br| raw:: html

	<br>