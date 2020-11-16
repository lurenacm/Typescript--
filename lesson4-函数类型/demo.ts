// 要求返回值是 number 数字类型，下面两种写法等价。
const  foo = (a: number, b: number): number => {
    return a+ b
}

//': (a: number, b: number) => number' 这里的具体意义是函数参数 a, b 类型是number型，返回值是number型，后面的 = 是跟函数的具体实现
const foo1: (a: number, b: number) => number = (a, b) => {
    return a+ b
}


// 返回值是 void 空类型
function sum2(a: number, b: number): void {
    console.log(a+b)
}

// never 类型
function errorFunc(): never {
    throw new Error()
    console.log('never')    // 抛出错误后 这段代码不打印。
}

function abs(): never {
    while (true) {
        
    }
    console.log('never')    // 上面的代码永远是true 这段代码不打印。
}

// 函数参数解构
// 不加入对象类型的注解{a: number, b: number}，返回值则不能保证是预期的类型.
function add({a, b}: {a: number, b: number}): number{
    const c = a+ b
    return c
}
const sum1 = add( {a:1, b:2} )

// 参数为一的正确注解方式
function getNumber({a}: {a: number}) {
    return a
}
const total = getNumber( {a:1} )

// 如这里不能保证放回值是number类型，因为a, b类型为any类型。
function add2({a, b}): number{
    const c = a+ b
    return c
}
