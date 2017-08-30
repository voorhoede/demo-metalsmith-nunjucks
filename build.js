const Metalsmith = require('metalsmith')
const assets = require('metalsmith-assets')
const chalk = require('chalk')
const collections = require('metalsmith-collections')
const inplace = require('metalsmith-in-place')
const layoutByCollection = require('./lib/layout-by-collection')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const metadata = require('metalsmith-metadata')
const nunjucks = require('nunjucks')
const permalinks = require('metalsmith-permalinks')

nunjucks.configure('src', {watch: false, noCache: true})

Metalsmith(__dirname)
  .source('./data')
  .use(assets({
    source: 'src/public',
    destination: '',
  }))
  .use(metadata({
    site:  'site.json'
  }))
  .use(collections({
      posts: {
        pattern: 'posts/**/*.md',
        sortBy: 'date',
        reverse: true
      }}))
  .use(markdown())
  .use(permalinks({
    pattern: ':title'
  }))
  .use(layoutByCollection({
    'posts': 'post.html'
  }))
  .use(inplace({
    engine: 'nunjucks',
    pattern: '**/*.html'
  }))
  .use(layouts({
    engine: 'nunjucks',
    pattern: '**/*.html',
    directory: 'src/views'
  }))
  .build((err) => {
    if (err) {
      throw err
    } else {
      console.log(chalk.green('✓ Build successful.'))
    }
  })
