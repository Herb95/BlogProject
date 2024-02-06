---
title: List
tags: "C#"
Schedule: "C#"
abbrlink: e4fa5726
date: 2018-10-29 22:22:45
---

## List 集合之基本使用

#### 泛型

> 泛型是 C#2.0 中的新增元素(C++中称为模板),主要用于解决一系列类似的问题.这种机制允许将类名左为参数传递给泛型类型,并生成相应的对象.将泛型(类,接口,方法,委托等)看做模板可能更好解释,模板中的变体部分将被作为参数传进来的类名所代替,从而得到一个新的类型定义.

##### 如何创建

> 利用 System.Collections.Generic 命名空间下面的 List 泛型类创建集合.
> **语法:**
>
> - List<T> ListOfT = new List<T>();

#### ArrayList

> 动态数组(ArrayList)代表可被单独索引的对象的有序集合.基本可以替代数组,与数组不同的是,在使用索引在指定的位置添加和移除项目,动态数组自动重新调整他的大小.它也允许在列表中进行冬天内存分配、增加、搜索、排序各项。
> **常用属性**:
>
> > - Capacity 获取或设置 ArrayList 可以包含的元素个数
> > - Count 获取 ArrayList 中实际包含的元素个数
> > - IsFixedSize 获取一个值,表示 ArrayList 是否具有固定大小
> > - IsReadOnly 获取一个值,表示 ArrayList 是否只读
> > - item 获取或设置指定索引处的元素
>
> **常用方法**:
>
> > - public virtual int Add(object value); 在 ArrayList 的末尾添加一个对象.
> > - public virtual void AddRange(ICollection c); 在 ArrayList 的末尾添加 ICollection 的元素.
> > - public virtual void Clear(); 从 ArrayList 中移除所有的元素.
> > - public virtual bool Contains(object item); 判断某个元素是否在 ArrayList 中.
> > - public virtual ArrayList GetRange(int index,int count); 返回一个 ArrayList,表示源 ArrayList 中元素的子集.
> > - public virtual int IndexOf(object); 返回某个值在 ArrayList 中第一次出现的索引,索引从零开始.
> > - public virtual void Insert(int index,objcet value); 在 ArrayList 的指定索引处,插入一个元素.
> > - public virtual void InsertRange(int index,ICollection c); 在 ArrayList 的指定索引出,插入某个集合的元素
> > - public virtual void Remove(object obj); 在 ArrayList 中移除第一次出现的指定对象.
> > - public virtual void RemoveAt(int index); 移除 ArrayList 的指定索引出的元素.
> > - public virtual void RemoveRange(int index,int count); 从 ArrayList 中移除某个范围的元素.
> > - public virtual void Reverse(); 逆转 ArrayList 中元素的顺序.
> > - public virtual void SetRange(int index,ICollection c); 复制某个集合的元素到 ArrayList 中某个范围的元素上.
> > - public virtual void Sort(); 对 ArrayList 中的元素进行排序.
> > - public virtual void TrimToSize(); 设置容量为 ArrayList 中的实际个数.

#### List<T> 介绍

> List<T>是一个 C#内置的一个类,是类我们就可以实例化对象
> List<T>本质和数组是一样的,**因为 List<T>这个类的内部其实维护了一个数组**
> List<T>比数组灵活,这个类封装了很多方便我们操作这个内部数组的各种方法,可以方便对数组进行增加、删除、修改等操作，且 List<T>的长度可以动态改变,实例化中 List<T>类对象时,不需要指定长度.

#### List<T> 基本使用

> - **创建泛型集合**
>   > 引入命名空间: using System.Collections.Generic;
>   > List<类型> 集合名 = new List<类型>();

> - **常用属性**
>   > - Capacity 用于获取或设置 List 可容纳元素的数量.当数量超过容量时,这个值会自动增长.可以设置这个值以减少容量,也可以调用 trin()方法减少容量已适合实际的元素数目
>   > - Count 获取数组当前元素数量

> - **常用方法**
>   > - list.Add(Value); 添加数据到集合中
>   > - list[索引] 取出指定索引位置的数据 索引和数组一样从 0 开始
>   > - list.Count 获取集合长度
>   > - list.RemoveAt(索引) 删除指定索引位置的数据. 删除后,后面的数据索引自动调整
>   > - list[索引] = 新值; 给指定索引的数据重新赋值
>   > - list.item(); 通过制定索引获取或设置元素,对于 list 类来说,他是一个索引器.
>   > - list.AddRange(); 公有方法,在 list 尾部添加实现了 IConllection 接口的多个元素
>   > - list.BinarySearch(); 重载公有方法,用于排序的 list 内使用二分查找来定位指定元素
>   > - list.Clear(); 移除所有元素
>   > - list.Contains() 测试是否存在 List 内
>   > - list.CopyTo() 重载公有方法,把一个 list 拷贝到一堆数组内
>   > - list.Exists() 测试一个元素是否在 List 内
>   > - list.Find() 查找并返回 List 内的出现第一个匹配元素
>   > - list.FindAll() 查找并返回 List 内的所有匹配元素
>   > - list.GetEnumerator() 重载的公有方法,返回一个用于迭代 List 的枚举器
>   > - list.Getrange\*() 拷贝指定范围的元素到新的 list 内
>   > - list.IndexOf() 重载的公有方法,查找并返回每一个匹配元素的索引
>   > - list.Insert() 在 List 内插入一个元素
>   > - list.InsertRange() 在 list 中插入一组元素
>   > - list.LastIndexOf() 重载的公有方法,查找并返回最后一个匹配元素的索引
>   > - list.Remove() 移除与指定元素的第一个匹配
>   > - list.RemoveRange() 移除指定范围的元素
>   > - list.Reverse() 反转 list 内元素的顺序
>   > - list.Sort() 对 list 内的元素进行排序
>   > - list.ToArray() 把 list 内的元素拷贝到一个新的数组内
>   > - list.trimToSize() 将容量设置为 List 中元素的实际数目

#### Dictionary<K,V> 介绍

> Dictionary 集合是一种**键值对**集合.该集合每个数据都是两个部分组成,键和值,在键值集合中,根据键找值
> 键值集合中,键必须是唯一的,值是可以是重复的.
> List<T>泛型集合,只是限定数据 T 的类型,在 Dictionary<K,V>泛型集合中,分别对键(K)和值(V)的类型

#### Dictionary<K,V> 基本方法

> 创建 Dictionary 需要引用命名空间 using System.Collection.Generic;
> Dictionary<K 类型,V 类型> 集合名 = new Dictionary<K 类型,V 类型>();
>
> - **常用属性**
>   > - dir.Add(K,V); 添加数据
>   > - dir[K] 取出对应键名所对应的数据
>   > - dir.Count 获取集合的长度
>   > - dir.Remove(K); 删除指定键名所对应的数据
>   > - dir[K] = (new V); 给指定键名所对应的数据重新赋值
> - **常用方法**
>   > - ContainsKey(K) 判断当前字典集合中对否包含某个键
>   > - ContainsValue(V) 判断当前字典集合中是否包含某个值

> - 遍历集合

```
foreach(var item in dic.Keys)
{
    Console.WriteLie("{0}:{1}",item,dic[itme]);
}
```
