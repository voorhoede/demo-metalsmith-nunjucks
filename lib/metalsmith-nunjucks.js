const multimatch = require('multimatch')
const nunjucks = require('nunjucks')
const path = require('path')

const defaults = {
  directory: '',
  env: new nunjucks.Environment(
    new nunjucks.FileSystemLoader(''), 
    {
      watch: false, 
      noCache: true
    }
  ),
  pattern: '**/*.html',
}

/**
 * Render file contents with provided Nunjucks Environment (`options.env`).
 * By default contents all HTML files (`**\/*.html`) are rendered.
 * You can change this by changing `options.pattern`.
 * 
 * @param {Object}                [options]
 * @param {nunjucks.Environment}  [options.env]
 * @param {string}                [options.pattern='**\/*.html']
 */
function renderContents(options = {}) {
  const { env, pattern } = Object.assign({}, defaults, options)

  return function (files, metalsmith, done){
    const metadata = metalsmith.metadata()
    setImmediate(done)

    Object.keys(files)
      .filter(filename => multimatch(filename, pattern).length)
      .forEach(filename => {
        const item = files[filename]
        const data = Object.assign({}, metadata, item)
        const html = env.renderString(item.contents.toString(), data)
        item.contents = new Buffer(html)
      });
  };
}

/**
 * Render file using layout with provided Nunjucks Environment (`options.env`).
 * By default contents all HTML files (`**\/*.html`) are rendered.
 * You can change this by changing `options.pattern`.
 * If layouts are in a subdirectory of the environment's search path, you can
 * set it using `options.directory`
 * 
 * @param {Object}                [options]
 * @param {string}                [options.directory='']
 * @param {nunjucks.Environment}  [options.env]
 * @param {string}                [options.pattern='**\/*.html']
 */
function renderLayout(options = {}) {
  const { env, directory, pattern } = Object.assign({}, defaults, options)
  
  return function (files, metalsmith, done){
    const metadata = metalsmith.metadata()
    setImmediate(done)

    Object.keys(files)
      .filter(filename => multimatch(filename, pattern).length)
      .forEach(filename => {
        const item = files[filename]
        const data = Object.assign({}, metadata, item)
        const html = env.render(path.join(directory, item.layout), data)
        item.contents = new Buffer(html)
      });
  };
}

module.exports = {
    renderContents,
    renderLayout,
}
