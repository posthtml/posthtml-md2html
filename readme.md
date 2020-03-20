# posthtml-md2html <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][cover]][cover-badge]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

[posthtml-md2html] is a markdown plugin for [PostHTML] that lets you use markdown within HTML elements in an easy and intuitive way. 

Main features:

- Works on any tag with a `md` or `markdown` property
- Knows when to write inline or block-level content
- Will replace element if tag is `<md>` or `<markdown>`
- Will treat `pre` tag with `md` or `markdown` property as `<md>` tag

Before:
``` html
<markdown># Heading with *italics*</markdown>
<markdown>**Bold** paragraph</markdown>
<div markdown>

  | Head | row |
  |------|-----|
  | Data | row |

</div>
<main markdown>
> # Title
>
> This is blockquote paragraph
</main>
```

After:
``` html
<h1 id="heading-with-italics">Heading with <em>italics</em></h1>

<p><strong>Bold</strong> paragraph</p>

<div><table>
<thead>
<tr>
<th>Head</th>
<th>row</th>
</tr>
</thead>
<tbody><tr>
<td>Data</td>
<td>row</td>
</tr>
</tbody></table>
</div>
<main><blockquote>
<h1 id="title">Title</h1>
<p>This is blockquote paragraph</p>
</blockquote>
</main>
```


## Install

```bash
npm i -S posthtml posthtml-md2html
```

> **Note:** This project is compatible with node v10+

## Usage

``` js
const fs = require('fs');
const posthtml = require('posthtml');
const posthtmlPlugin = require('posthtml-md2html');

posthtml()
    .use(posthtmlPlugin({ /* options */ }))
    .process(html/*, options */)
    .then(result => fs.writeFileSync('./after.html', result.html));
```

## Options

All options are passed to [marked](https://github.com/markedjs/marked) directly

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

[npm]: https://img.shields.io/npm/v/posthtml-md2html.svg
[npm-url]: https://npmjs.com/package/posthtml-md2html

[deps]: https://david-dm.org/posthtml/posthtml-md2html.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-md2html

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[build]: https://travis-ci.org/posthtml/posthtml-md2html.svg?branch=master
[build-badge]: https://travis-ci.org/posthtml/posthtml-md2html?branch=master

[cover]: https://coveralls.io/repos/posthtml/posthtml-md2html/badge.svg?branch=master
[cover-badge]: https://coveralls.io/r/posthtml/posthtml-md2html?branch=master


[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
