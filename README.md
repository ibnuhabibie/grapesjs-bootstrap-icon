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
|`media`|Block media| <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>|
|`category`|Block category|`Basic`|
|`modalTitle`|Modal title|`Bootstrap Icon Picker`|



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