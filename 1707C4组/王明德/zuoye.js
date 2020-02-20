// 表达式  : 可以声明 也可以结构赋值
// 内置对象: 对象扩展 数值扩展 正则扩展 字符串扩展 symbol
// 语句与运算 
// 异步编程 : Promise Async generator




//const命令:声明常量 const arr = []
//let命令:声明变量  let arr = []

//作用域 :全局作用域  函数作用域 局部作用域 块级作用域 

//变量提升
// console.log(aaa)
// let aaa=1

//暂时性死区

// var abc=111
// if(true){
// abc="qwr";
// let abc
// }
// console.log(abc)

// startsWith()：什么作用   判断第一个字母是不是大写字母
// endsWith()：什么作用     判断最后一个字母是不是大写字母

//用Object.assign()扩展数组
// let ssw = {name:'sss',age:18}
// let ssr = Object.assign({},ssw)
// console.log(ssr,ssw)

//提取Math对象中的log, sin, cos属性

// let Math ={ log:'ss',sin:'fff',cos:'wwww' }
// let { log, sin , cos}  = Math 
// console.log(log,sin,cos)

// 举例克隆数组 :consr arr1=[1,2,3]
// const arr2 = [...arr1];

// 举例合并数组 :let arr={a:1,b:2}
//                 let arr2=Object.assign({},arr,{c:3})
//                 console.log(arr2)

// 举例拼接数组 : let arr=["a","b"]
//                 let arr2=[1,2]
//                 for(let i=0;i<arr2.length;i++){
//                      arr.push(arr2[i])
//                     }
//                    console.log(arr)





// 数组解构:  let aaa=["a","b","c"]
//                  let [d,e]=aaa
//                  console.log(d)
//                  console.log(e)

// 对象解构 : const [x,...y]=[1,2,3,4]
//                  console.log(x,y)

 //消除魔法字符串

 const Types = {
     Myname : Symbol('name'),
     MyNumber:Symbol('MyNumber')
 }

 function reduer(state,action){
    let sum;
    switch (state) {
        case Types.Myname:
            sum = action.width *  action.height
            break;
        case  Types.MyNumber:
             sum = action.width - action.height
            break;
    }
    return sum
 }

 const result = reduer(Types.MyNumber,{width:100,height:100})
 console.log(result)



//去重
// let a = new Set()
// let arr = [1,2,3,4,5,5,5,2,2]
// arr.map(item => a.add(item))

// console.log(a)


// function Person(name,age){
//     this.name = name;
//     this.age  = age;
// }
// Person.prototype.toString = function () {
//     return '(' + this.name + ',' + this.age + ')';
// }
// var p = new Person('mingde', 18);
// console.log(p)

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     toString() {
//         return '(' + this.name + ',' + this.age + ')';
//     }
// }
// var p = new Person('mingde', 18);
// console.log(p)
//   - **默认导出**：export default
//   - **单独导出**：export 
//   - **按需导出**：export { Component } from 'react'
//   - **改名导出**：export { name as username } from 'xxx'

// - - **import**：导入模块内部功能 以'react'为例

// - - **默认导入**：import xxx from 'xxx'
//   - **整体导入**：import * as xx from 'xxx'
//   - **按需导入**：import { xxx }  from 'xxxx'
//   - **改名导入**：import { name as userame } from 'xxxx'
//   - **复合导入**：import React,{Component} from 'react'