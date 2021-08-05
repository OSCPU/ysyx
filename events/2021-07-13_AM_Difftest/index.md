### AM是什么？

AM(Abstract Machine)是南京大学蒋炎岩老师提出的按照计算机发展史将计算机功能抽象地模块化的裸机运行时环境。包括图灵机(TRM)、冯诺依曼机(IOE)、批处理系统(CTE)、分时多任务(VME)四个模块。

### AM在一生一芯中的作用是什么？

后面会用到cpu-tests来验证我们开发的CPU核的正确性，cpu-tests的编译需要依赖AM。

### 可以使用其它的RISC-V编译器编译AM吗？

理论上是可以的，但建议使用我们推荐的编译器进行编译，少踩一些坑。

### time-test程序在哪？

am-kernels/tests/am-tests/src/main.c中有一项"real-time clock test"测试，可以修改其代码，将运行时的默认测试项目修改为"real-time clock test"即可。

### 字符版超级玛丽的程序在哪？

编译超级玛丽需要：  
任天堂模拟器：https://github.com/NJU-ProjectN/fceux-am  
游戏合集：https://box.nju.edu.cn/seafhttp/files/04abf9c2-91f1-4891-97f9-0e1ff56c2020/rom.tar.bz2  
按照README.md编译即可。
