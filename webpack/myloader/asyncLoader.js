module.exports = function (source) {
  const callback = this.async()
  setTimeout(() => {
    callback(null, `${source.replace(/;/g, '')}`)
  }, 3000);
}