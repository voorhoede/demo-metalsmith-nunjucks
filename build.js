const Metalsmith = require('metalsmith')
const assets = require('metalsmith-assets')
const chalk = require('chalk')
const collections = require('metalsmith-collections')
const dateFilter = require('nunjucks-date-filter')
const layoutByCollection = require('./lib/layout-by-collection')
const markdown = require('metalsmith-markdown')
const metadata = require('metalsmith-metadata')
const metalNunjucks = require('./lib/metalsmith-nunjucks')
const nunjucks = require('nunjucks')
const permalinks = require('metalsmith-permalinks')

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src'), {watch: false, noCache: true})
env.addFilter('formatDate', dateFilter)

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
    }
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':title'
  }))
  .use(layoutByCollection({
    'posts': 'post.html'
  }))
  .use(metalNunjucks.renderContents({ 
    env
  }))
  .use(metalNunjucks.renderLayout({
    env,
    directory: 'views'
  }))
  .build((err) => {
    if (err) {
      throw err
    } else {
      console.log(chalk.green('✓ Build successful.'))
    }
  })
