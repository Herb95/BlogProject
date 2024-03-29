---
layout: categories
title: Lua初识
date: 2018-10-26 11:12:18
tags: Lua Study
Schedule: Lua
comments: true
---

## Lua 初识

### Lua 数据类型

- 8 种基本类型:
- nil :表示无效值(条件表达式代表 false)
- boolean:布尔 包含两个值:true 和 false
- number: 表示双精度类型的实浮点数
- string: 字符串有""或者''表示
- userData: 任意存储中的 C 数据结构
- function: Lua 或 C 编写的函数
- thread: 执行独立线路,执行协同程序
- table: 关联数据(associative arrays),索引是数字或者字符串,table 的创建通过"构造表达式"来完成,最简单构造表达式{}(创建一个空表)

#### nil

```nil
nil:空
 print(type(x)=="nil") true
 print(typeI(x)==nil) false
 注: type(X)==nil 结果为 false 的原因是因为 type(type(X))==string
```

#### number

```number
number类型--双精度类型(默认类型修改luaconf.h文中定义)
例如:
print(type(2))
print(type(2.2))
print(type(0.2))
print(type(2e+1))
print(type(2.1231231465e-06))
```

#### string

```string
用 [[]] 表示一块字符串
例如:
html = [[
    <html>
    <head></head>
    <body>
        <a href="https://herb95.github.io/">Graywolf 博客</a>
    </body>
    </html>
]]
print(html)
```

#### 运算

```运算
数字,字符串上进行运算
print("3"+9)
print("3"+"9")
print("3+9")
print("-2e2"*9)
print("e"+2)
结果:
12
12
3+9
-1800
error...
```

**注:字符串连接使用是 ..**
**注:用#来计算字符串的长度**

#### # 运用

```#运用
len="herb95.github.io/"
print(#len)
print(#"herb95.github.io/")
结果:
17
17
```

#### table

```table
tab1 ={}
-- 直接初始化
tab2 ={"1","2","3","4"}
for k,v in pairs(tab2) do
    print(k.. ":" .. v)
end
结果:
1:1
2:2
3:3
4:4
```

**注:lua 表默认初始索引一般以 1 开始**
**table 不会固定长度大小,有新数据添加 table 长度会自动增长,没初始的 table 都是 nil**

#### function

```function
-- function 函数是被看做事"第一类值(First-Class Value),可存变量":
例如:
function add(a,b)
   return a+b
end
print(add(10,20))
add2 = add
print(add(10,30))
结果:
30
40
```

function 可以做匿名函数(anonymous function)的方式参数传递:

```匿名函数
function testFun(tab,fun)
    for k,v in pairs(tab) do
        print(fun(k,v))
    end
end

tab1 = {k1= "1",k2 = "3"};
testFun(tab1,
function(k,v)
    return k.."="..v
end
)
结果:
k1=1
k2=3
```

#### thread 线程

lua 中最主要的线程是协同程序(coroutine),跟线程(thread)差不多,拥有自己独立的栈、 局部变量和指令指针，可与其他协同程序共享全局变量
线程和协程的区别：

> - 线程可以多个运行；
> - 协程任意时刻只能运行一个，并且处于运行状态的协程只有被挂起(suspend)时才会暂停

#### userdata (自定义类型)

是一种用户自定义数据,表示一种有应用程序或 C/C++语言库创建类型,将任意 C/C++任意数据类型的数据(通常是 struct 和指针) 存到 lua 变量中调用
