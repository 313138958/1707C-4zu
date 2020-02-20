- **表达式**：声明 结构赋值
- **内置对象**：(字符串，数值，对象，函数，正则)扩展，symbol
- **语句与运算**： Class Module Iterator
- **异步编程**：Promise，Generator，Async

### **声明**

- **const 命令**：声明常量
- **let 命令**：声明变量
  > 作用
  > let ：值是可修改的 没有提升。
  > const ：值是不可修改的。
-

> 重点难点

```javascript
//变量提升
 let 禁止变量提升
 const 没有提升
 var 有提升但是结果是undefined
//暂时性死区
var i = 2;
if(true){
  i='abd';
  let i
}
console.log(i)
// 之后再打印就会报错 Cannot access 'i' before initialization
```
### **变量解构赋值**

```javascript
//变量包括
// 数组 对象 字符串 数值 布尔 参数...
```
- **对象解构**

  ```javascript
  //提取Math对象中的log, sin, cos属性
    const {log,sin,cos}=Math
  ```

- **数组解构**

  - 例子：let as = [1, 2, 3];
          let [a, b ,c] = as;

- **函数参数解构**
- - 数组解构：
          let as = [1, 2, 3];
          let [a, b ,c] = as;
  - 对象解构：
let { foo, bar } = { foo: "aaa", bar: "bbb" };
> 应用场景 for
- 列举两个
<!-- let t;
t=a
b=t
a=b
[a,b]=[b,a] -->

const [x,y,z]=Fun(){}

### **字符串扩展**

- **startsWith()**：什么作用 
<!-- 判断字符串 是不是以什么字母开头.   -->
- **endsWith()**：什么作用
 <!-- 判断字符串 是不是以什么字母结尾 -->
### **对象扩展**

```javascript
//用Object.assign()扩展数组
var arr = [1, 2, 3, [4, 5], {a: 6, b: 7}]
var arr3 = [...arr]
var arr4 = Object.assign([],arr)
```

### **数组扩展**

```javascript
//扩展运算符(...)与rest参数的区别
// ES6引入rest参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
//举例克隆数组：
const data=[2,3,4]
const data1=[...data]
//举例合并数组：
let arr ={a:1,b:2}
let arr2=Object.assgin({},arr,{c:3})
console.log(arr2)
//举例拼接数组：
let arr=["a","b"]
let arr2=[1,2]
arr2.forEach(item=>{
     arr.push(arr2[i])
})
   console.log(arr)
```
### Symbol
```javascript
//消除魔法字符串

function getArea(shape,options){
  let area=0;
  switch(shape){
    case "triangle":
    area = .5 *shape.width*options.height
    break
  }
  return area
}
const area=getArea("triangle",{width:100,height:100})
console.log(area)
```
### **Set**
```javascript
//[2, 3, 5, 4, 5, 2, 2]去重
new Set()
let arr = [1, 2, 2, 3];
let set = new Set(arr);
```
### **WeakSet**
> 应用场景
<!-- 存储DOM节点时候，DOM节 点移动或者删除，不用担心节点从文档中廳除引发内存泄漏DC垃圾回收机制 -->
### **Class**

```javascript
//ES5 实现 Person构造函数 参数name age 方法toString

//ES6 实现 Person构造函数 参数name age 方法toString
```

### **Module**

- 命令

- - **export**：规定模块对外接口 以'react'为例

  - - **默认导出**：export  default
    - **单独导出**：export 
    - **按需导出**：export {name,age}
    - **改名导出**：export {name as username}

- - **import**：导入模块内部功能 以'react'为例

  - - **默认导入**：import Person from "./"
    - **整体导入**：import * as React from "React"
    - **按需导入** import {name,age} from  "./"
    - **改名导入**：import {name as username}from  "./"
    - **复合导入**：import React,{component} form "react"
