# hypress.io
[![Netlify Status](https://api.netlify.com/api/v1/badges/a4a20817-c0fe-434f-8f09-5429e30ee8a0/deploy-status)](https://app.netlify.com/sites/hypress-io/deploys)
[![Build_Status](https://api.travis-ci.org/hypress/hypress.io.svg?branch=master)](https://travis-ci.org/hypress/hypress.io)
[![Last commit](https://img.shields.io/github/last-commit/hypress/hypress.io.svg?style=flat)](https://github.com/hypress/hypress.io)

This repository represents the source of the [hypress] project page.

## Development
To run a local development server with a copy of the current project page, install all node dependencies with yarn and run the development script.

```bash
yarn
yarn dev
```

This will create a local server at port 3000.

### Change content
The content comes in most cases from `src/markdown`. Each markdown file represents 
a html file. By default, the html files will be rendered using the `src/pug/templates/default.pug` template. You can 
tell the generator to use a different template by setting the `_template` var.

```markdown
[_template]: #null (default)
```

### Change CSS
To change css edit the files in `src/scss`. Make sure to include your file within the include tree under `ìndex.scss`.

### Change JavaScript
To change JavaScript edit the files in ``src/js``.

### Assets
You can drop assets into the `src/assets` folder. 

### Set custom vars
You can set custom vars by use a link symbol with an underscore at the beginning if its name. The generator will resolve 
the title content to the template. 

## Build
To build a release version, run the build script.

```bash
yarn build
```

This will create a folder named `build` in your root directory with a ready to release bundle.

## Contributing
This project is open for contributions.

[hypress]: http://hypress.io
