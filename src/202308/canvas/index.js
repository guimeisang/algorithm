// stroke()，fill()等函数就是将内容绘制到canvas函数
// arc()，lineTo()，rect()等函数就是设置笔刷状态的函数
// 如果想对context进行方法功能增强，那就在CanvasRenderingContext2D.prototype上添加方法

const canvas = document.getElementById('canvas');
const cxt = canvas.getContext('2d');

// 画小球的抛物线
// var ball = { x: 0, y: 0, r: 10, vx: 50, vy: 0, g: 10 };
// setInterval(() => {
//   if (ball.r + ball.x > canvas.clientWidth) {
//     ball.vx *= -0.5
//   }
//   if (ball.r + ball.y > canvas.clientWidth) {
//     ball.vy *= -0.5;
//   }
//   ball.vy += ball.g; // 竖直方向速度增加
//   ball.y += ball.vy; // 竖直方向位移
//   ball.x += ball.vx; // 水平方向位移
  
//   cxt.fillStyle = 'rgba(255, 255, 255, 0.2)';
//   cxt.fillRect(0, 0, 800, 300);
//   cxt.beginPath();
//   cxt.fillStyle = 'black';
//   cxt.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);
//   cxt.fill();
  
// }, 1000);

// 画渐变色
const gradient = cxt.createRadialGradient(canvas.width/2, canvas.height, 10, canvas.width/2, 0, 100)
gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.25, 'white');
gradient.addColorStop(0.5, 'purple');
gradient.addColorStop(0.75, 'red');
gradient.addColorStop(1, 'yellow');
cxt.fillStyle = gradient;
cxt.rect(0, 0, canvas.width, canvas.height);
cxt.fill();