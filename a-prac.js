


function practer() {
    console.warn('PRAccccterrr');

}





// ES6 Modules
// ECMAScript (ES6) modules have been supported in Node.js since v8.5, with the --experimental-modules flag. All files involved must have the .mjs extension.

// // module.mjs
// export function hello() {
//   return "Hello";
// }
// // main.mjs
// import { hello } from 'module'; // or './module'
// let val = hello();  // val is "Hello";
// ECMAScript modules in browsers
// Browsers have had support for loading ECMAScript modules directly (no tools like Webpack required) since Safari 10.1, Chrome 61, Firefox 60, and Edge 16. Check the current support at caniuse.

// <script type="module">
//   import { hello } from './hello.mjs';
//   hello('world');
// </script>
// // hello.mjs
// export function hello(text) {
//   const div = document.createElement('div');
//   div.textContent = `Hello ${text}`;
//   document.body.appendChild(div);
// }