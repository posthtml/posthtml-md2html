'use strict'

const test = require('ava')
const plugin = require('../lib')
const { readFileSync } = require('fs')
const path = require('path')
const posthtml = require('posthtml')
const fixtures = path.join(__dirname, 'fixtures')

test('header witch markdown', (t) => {
  return compare(t, 'header-witch-markdown')
})

test('markdown witch code html', (t) => {
  return compare(t, 'markdown-witch-code-html')
})

test('markdown witch code in html', (t) => {
  return compare(t, 'markdown-witch-code-in-html')
})

test('markdown witch code js', (t) => {
  return compare(t, 'markdown-witch-code-js')
})

test('markdown witch options', (t) => {
  return compare(t, 'markdown-witch-options', {
    whitespace: '  ',
    breaks: true,
    headerIds: false
  })
})

test('md with indent', (t) => {
  return compare(t, 'md-with-indent')
})

function compare (t, name, options) {
  const html = readFileSync(path.join(fixtures, `${name}.html`), 'utf8')
  const expected = readFileSync(path.join(fixtures, `${name}.expected.html`), 'utf8')

  return posthtml([plugin(options)])
    .process(html)
    .then((res) => t.deepEqual(res.html, expected))
}
