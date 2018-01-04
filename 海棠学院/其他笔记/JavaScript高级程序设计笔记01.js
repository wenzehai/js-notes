/*
* 第三章：数据类型
* 五种基本数据类型：Undefined、Null、Boolean、Number、String
*typeof null 结果为Object，是因为null被认为是一个空对象指针。
* undefined实际上是派生自null值的，因此ECMA-262规定对他们的相等性测试要返回true。例如alert(null == undefined)  //true
* Number类型不区分整形和浮点型，注意0.1+0.2 不等于0.3的情况。
*
* Object类型：
* 对象其实就是一组数据和功能的集合。
* 创建对象的方法：
*   一：var obj1 = new Object();
*       obj1.name = 'wenzehai';
*       obj1.age = 18;
*
*   二: var obj2 = {
*       obj1.name = 'wenzehai';
*       obj1.age = 18;
*       }
*
* Object类型所具有的属性适用于所有它的实例。
*   constructor（构造函数属性）:保存着用于创建当前对象的函数。
*   hasOwnProperty(propertyName):用于检查给定的属性在当前对象实例中是否存在。propertyName必须以字符串形式指定。
*   isPrototypeOf(object):用于检查传入的对象是否是当前对象的原型。
*   propertyIsEnumerable(propertyName):用于检查给定的属性是否能够使用for-in语句来枚举。propertyName必须以字符串形式指定。
*   toLocaleString():返回对象的字符串表示，该字符串与执行环境的地区对应。
*   toString():返回对象的字符串表示。
*   valueOf():返回对象的字符串、数值或布尔值表示。
*
*逻辑与或非的操作细则。
*
*
*
* for-in枚举对象的属性名称。
*   例：for(propName in window) {
*       document.write(propName);
*       }
*
* 第四章：作用域
*
*
* 第五章：引用类型
* 引用类型：Object、Array、Date、RegExp、Function
* 基本包装类型：Boolean、Number、String
*
*
*
*
*
* */