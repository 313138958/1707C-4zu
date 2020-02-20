- **表达式**： 声明，解构，赋值
- **内置对象**： 字符串扩展，数值扩展，对象扩展，函数扩展，正则扩展，Symbol,Map,Set,WeekMap Proxy Reflect
- **语句与运算**：Class,Module
- **异步编程**： Promise,async

### **声明**

- **const命令**：声明常量
- **let命令**：声明变量

> 作用
- 

> 重点难点

```javascript

//变量提升
let 具有变量提升

//暂时性死区
var str="123"
if(true){
    str="456"
    let str
}
console.log(str)
```

### **变量解构赋值**

```javascript

//变量包括
var const let function class improt
```

- **对象解构**

  ```javascript

  //提取Math对象中的log, sin, cos属性
  const {log,sin,cos}=Math
  ```

- **数组解构**

  - 例子：const [a,b,c,d]=[1,2,3,4]

- **函数参数解构**

    function num([a=1,b=2]){
        return a+b
    }
    num([])

- - 数组解构：const [a,b,c,d]=[1,2,3,4]
  - 对象解构：const {log,sin,cos}={log:1,sin:2,cos:3}

> 应用场景

- 列举两个  function num(a,b,c=3){
                console.log(a+b+c)
                return a+b+c
            }
            num(1,2)

            function num([a=1,b=2]){
                return a+b
            }
            num([])

### **字符串扩展**

- **startsWith()**：什么作用 :判断字符串以什么开头
- **endsWith()**：什么作用   :判断字符串以什么结尾

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

//举例克隆数组：
const arr=[1,2] 
const arr1=[...arr]

//举例合并数组：
let arr=[1,2,3]
let arr1=[4,5,6]
let arr3=[...arr,...arr1]
//举例拼接数组：
let arr=[1,2,3]
let arr1=[4,5,6]
let arr3=arr.concat(arr1)
console.log(arr3)
```

### Symbol

```javascript
//消除魔法字符串

const obj = {
    triangle: Symbol("triangle"),
    name: Symbol("name")
}
function Func(shape,options){ //reducers redux
    let num = 0;
    switch(shape){
        case obj.triangle:
            num = .5 * options.width * options.height
            break;
    }
    return num
}
const num = Func(obj.triangle,{width:100,height:100})
console.log(num);
```

### **Set**

```javascript
//[2, 3, 5, 4, 5, 2, 2]去重
const aaa = new Set()
const arr = [2, 3, 5, 4, 5, 2, 2]
arr.forEach(x => aaa.add(x));
console.log(aaa)
```

### **WeakSet**

> 应用场景
<!-- 存储DOM节点时候，DOM节点移动或者删除，不用担心节点从文档中删除引发内存泄漏 DC垃圾回收机制 -->
- 

### **Class**

```javascript
//ES5 实现 Person构造函数 参数name age 方法toString

 function Point(name,age){
    this.name = name;
    this.age = age;
}
Point.prototype.toString = function(){
    return '(' + this.name + "," + this.age + ")"
}
var obj = new Point(111,222);
console.log(obj);
//ES6 实现 Person构造函数 参数name age 方法toString
class Point{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    toString(){
        return '(' + this.name + "," + this.age + ")"
    }
}
let obj = new Point(111,222);
console.log(obj);
```

### **Module**

- 命令

- - **export**：规定模块对外接口 以'react'为例

  - - **默认导出**：export default 
    - **单独导出**：export 
    - **按需导出**：export {name}
    - **改名导出**：export {name as username}

- - **import**：导入模块内部功能 以'react'为例

  - - **默认导入**：import rea from './react'
    - **整体导入**：import *as React from 'react'
    - **按需导入**：import  {name} from './react'
    - **改名导入**：import  {name as username} from './react'
    - **复合导入**：import  React, {component} from './react'
