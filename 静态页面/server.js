var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    request.url
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    var res = { 'name': 'xiaoo', 'sex': 'man' }

    // 发送响应数据 "Hello World"JSON.stringify(res);
    let str =JSON.stringify(res);
    response.end('var data = '+str);
}).listen(8889);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8889/');