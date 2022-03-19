/**
 * Project name(项目名称)：JS_try_catch
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 20:04
 * Version(版本): 1.0
 * Description(描述)：
 */

// 错误类型	说明
// EvalError	使用 eval() 函数时发出错误，会抛出该错误
// InternalError	由 JavaScript 引擎内部错误导致的异常，会抛出该错误
// RangeError	范围错误，当使用了超出允许范围的数值时，会抛出该错误
// SyntaxError	语法错误，当代码中存在任何语法错误时，会抛出该错误
// TypeError	类型错误，当使用的值不是预期类型时，会抛出该错误，例如对数字调用字符串方法，对字符串调用数组方法等
// URIError	URI 错误，当使用 URI 相关函数但传入 URI 参数时，会抛出该错误
// ReferenceError	参数错误，当尝试使用未定义的变量、函数、对象时，会抛出该错误


function f(number)
{
    if (number < 0)
    {
        throw new Error("不能为负数");
    }
    else
    {
        document.write(Math.sqrt(number) + "<br>");
    }
}

try
{
    f(123);
    f(4);
    f(30);
    f(-3);
    f(22);
    document.write("执行完成" + "<br>");
}
catch (e)
{
    alert(e.message);
}