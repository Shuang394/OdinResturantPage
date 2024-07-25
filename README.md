# OdinResturantPage
https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page
Odin's Resturant Page assignment, with the main topic being on webpack and npm


# Setup steps:
1. Run "npm init -y" to setup a package.json file, which contains information about your project and its plugins, modules and dependencies among many other information

2. Run "npm install webpack webpack-cli --save-dev" to install webpack, webpack-cli and add it to your development dependencies in your package.json

3. Create a webpack.config.js file to configure webpack

A standard template for it will be:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

4. Install html-webpack-plugin, which is a useful plugin that helps you automatically setup your css and js files into your html file. Make sure to setup the template as well.

Start by typing: npm install --save-dev html-webpack-plugin

Next, import the webpack plugin into your webpack config file: 

```javascript
const HtmlWebPackPlugin = require('html-webpack-plugin');
```

Then setup the plugin inside the webpack.config.js

```javascript
plugins: [
    new HtmlWebPackPlugin ({
        template: './src/index.html',
        title: 'Insert title of your webpage',
        filename: 'name of the html file',
        inject: 'body', //or head
        scriptLoading: 'defer', //if inject was head
    })
]



