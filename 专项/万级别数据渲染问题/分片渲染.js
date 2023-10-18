// 实现思路：每几十毫秒渲染20个，这个间隔时间可以使用requestAnimationFrame
// 以下为简化代码
setTimeout(() => {
  const total = 10000
  const once = 20
  const loopCount = total / once
  let countOfRender = 0
  function add() {
    // 片段Fragment
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < once; i++) {
      // ...
      fragment.appendChild(li);
    }
    countOfRender++
    loop()
  }
  function loop() {
    if(countOfRender < loopCount) {
      window.requestAnimationFrame(add)
    }
  }
})