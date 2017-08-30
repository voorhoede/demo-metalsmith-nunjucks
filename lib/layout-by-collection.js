/**
 * Metalsmith Layout By Collection Plugin
 * 
 * Set the `layout` property of each file if `layout` is not yet set.
 * You need to pass an object with collection names as keys and layout names as values.
 * 
 * Example usage
 * 
 * Metalsmith(__dirname)
 *   .use(layoutByCollection({
 *     posts: 'post.html',
 *     anotherCollectionName: 'another-template.html',
 *   }))
 * 
 * @param {Object} options
 */
function plugin(options) {
  const layouts = options.layouts || options

  return function (files, metalsmith, done){
    setImmediate(done)

    Object.keys(files).forEach(filename => {
      const item = files[filename]
      const collection = item.collection[0]
      item.layout = item.layout || layouts[collection]
    });
  };
}

module.exports = plugin