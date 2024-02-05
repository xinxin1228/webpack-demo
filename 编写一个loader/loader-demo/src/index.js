module.exports = function (source) {
  // console.log('source', source)

  console.log('loader 执行了 》》》》》》》》》》》》》》》》》》')
  const { version, webpack, mode } = this
  const options = this.getOptions()

  console.log('x', version, webpack, mode)

  const newSource = `
  /**
   * Loader API Version: ${version}
   * Is this in "webpack mode": ${webpack}
   */
  /**
   * Original Source From Loader
   */
  ${source}`

  return newSource
}
