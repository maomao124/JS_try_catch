/**
 * Project name(项目名称)：JS_try_catch
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 19:59
 * Version(版本): 1.0
 * Description(描述)： 无
 */


// 接收用户输入的参数
//window.prompt()指示浏览器显示带有可选消息的对话框，提示用户输入一些文本，并等待用户提交文本或取消对话框。
var num = prompt("输入一个0到100的数字");
// 获取当前时间
var date = Date.now();
try
{
    if (num > 0 && num <= 100)
    {
        console.log(Math.pow(num, num)); // 指数幂的基
    }
    else
    {
        console.log("输入的值无效!");
    }
}
catch (e)
{
    console.log(e.message);
}
finally
{
    // 显示执行代码所用的时间
    console.log("代码执行花费了：" + (Date.now() - date) + "ms");
}