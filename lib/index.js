'use strict'
const marked = require('marked')
const matcher = require('posthtml-match-helper')
const resolveIndent = require('./resolve-indent')

module.exports = options => tree => {
  const attributes = ['md', 'markdown', '[md]', '[markdown]']

  const processing = node => {
    if (node.content) {
      node.content = tree.render(node.content)
    }

    if (attributes.includes(node.tag)) {
      node.tag = false
      node.content = resolveIndent(node.content)
    }

    if (node.attrs) {
      attributes.forEach(attr => {
        if (Reflect.has(node.attrs, attr)) {
          delete node.attrs[attr]
        }
      })
    }

    if (typeof node.content === 'string') {
      node.content = tree.parser(marked(node.content, options))
    }

    return node
  }

  return new Promise(resolve => {
    tree.match(matcher(attributes.join()), processing)
    resolve(tree)
  })
}
