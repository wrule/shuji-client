
export class Client {

}

import * as SocketIOClient from 'socket.io-client'

let client = SocketIOClient.connect('http://localhost:9079')
console.log('客户端已创建...');
client.on('connect', () => {
  console.log('已经连接到服务端');
  let num = 0;
  setInterval(() => {
    console.log('发送数字到服务端 >> ', num);
    client.emit('num', num++);
  }, 3000);
});
client.on('num', (num: number) => {
  console.log('从服务端接受到数字 << ', num);
});
client.on('disconnect', () => {
  console.log('从服务端断开连接')
});
