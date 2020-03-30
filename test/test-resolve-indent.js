'use strict'

const test = require('ava')
const { readFileSync } = require('fs')
const path = require('path')
const resolveIndent = require('../lib/resolve-indent')
const fixtures = path.join(__dirname, 'fixtures')

test('markdown code', (t) => {
  compare(t, 'code-block')
})

test('markdown code with indent', (t) => {
  compare(t, 'code-block-with-indent')
})

function compare (t, name) {
  const html = readFileSync(path.join(fixtures, `${name}.html`), 'utf8')
  const expected = readFileSync(path.join(fixtures, `${name}.expected.html`), 'utf8')

  t.deepEqual(resolveIndent(html), expected)
}
