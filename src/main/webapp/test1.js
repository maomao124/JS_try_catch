/**
 * Project name(项目名称)：JS_try_catch
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 19:56
 * Version(版本): 1.0
 * Description(描述)： 无
 */

try
{
    var title = "JavaScript";
    document.write(title);
    // 调用一个未定义的变量
    document.write(str);
    // 若发生错误，则不会执行以下行
    alert("所有语句都已成功执行。");
}
catch (error)
{
    // 处理错误
    alert("错误信息: " + error.message);
}
// 继续执行下面的代码
document.write("<p>Hello World!</p>");