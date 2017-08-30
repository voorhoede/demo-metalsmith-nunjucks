# Static site demo using Metalsmith + Nunjucks

This demo shows how [Metalsmith](http://www.metalsmith.io/) - a pluggable static site generator - can be used in combination with [Nunjucks](https://mozilla.github.io/nunjucks/) - a templating language and render engine in JavaScript.

A live version is available on [`demo-metalsmith-nunjucks.now.sh`](https://demo-metalsmith-nunjucks.now.sh/).

## Setup

Content is located in [`data/`](data/). The app source itself lives in [`src/`](src/).
In [`build.js`](build.js) we configure how we want the static site to be generated using `data/` and `source/`.

The content and app source structure:

```
build.js          <-- config for static site generator

data/             <-- example content
  posts/          <-- a content collection
  about.md        <-- content in Markdown format
  index.html      <-- content in HTML format
  site.json       <-- content in site.json

src/              <-- app modules
  components/     <-- reusable components
  public/         <-- static public assets
    index.min.css <-- example of static asset
  views/          <-- layout files
```

After running `build.js` this results in:

```
build/
  index.html
  index.min.css
  about/index.html
  :post-name/index.html
```

## Scripts

Development requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/) (comes with Node.js).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`build` | Builds entire app to `build/`.
`deploy` | Deploys app to unique URL and aliases it from [`demo-metalsmith-nunjucks.now.sh`](https://demo-metalsmith-nunjucks.now.sh/).
`start` | Serves app on `http://localhost:63825` ("Metal" in T9).
`watch` | Watches all files and rebuilds app on changes.
