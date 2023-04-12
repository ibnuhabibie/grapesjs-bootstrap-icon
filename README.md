# GrapesJS Bootstrap Icon

This plugin adds some of the basic form components and blocks which help in working with forms easier

[Demo](https://codepen.io/ibnuhabibie/pen/WNgVRrj)
<br/>

Available components:
`bootstrapIcon`

## Options

| Option | Description | Default|
| --------------- | -------------------------------- | ----------------------------------------------------------------------------------------|
|`label`|Block name| Bootstrap Icon |
|`media`|Block media|`html`|
|`category`|Block category|Basic|
|`modalTitle`|Modal title|Bootstrap Icon Picker|



## Download

* CDN
  * `https://unpkg.com/grapesjs-bootstrap-icon`
* NPM
  * `npm i grapesjs-bootstrap-icon`
* GIT
  * `git clone https://github.com/ibnuhabibie/grapesjs-bootstrap-icon.git`



## Usage

Directly in the browser

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-bootstrap-icon.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      fromElement: 1,
      container : '#gjs',
      plugins: ['gjs-bootstrap-icon'],
      pluginsOpts: {
        'gjs-bootstrap-icon': {/* ...options */}
      }
  });
</script>
```

Modern javascript

```js
import grapesjs from 'grapesjs';
import gjsBootstrapIcon from 'grapesjs-bootstrap-icon';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [gjsBootstrapIcon],
  pluginsOpts: {
    [gjsBootstrapIcon]: { /* options */ }
  }
  // or
  plugins: [
    editor => gjsBootstrapIcon(editor, { /* options */ }),
  ],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/ibnuhabibie/grapesjs-bootstrap-icon.git
$ cd grapesjs-bootstrap-icon
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```


## License

BSD 3-Clause