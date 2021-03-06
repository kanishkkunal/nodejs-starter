/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./resources/icons/${name}.svg`);

// Uncomment and add your analytics code below
// exports.analytics = "UA-00000000-00";

exports.menu = {
  main: [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
  ],
  social: [
    { url: '#', title: 'Facebook', icon: 'facebook' },
    { url: '#', title: 'Github', icon: 'github' },
  ],
  footer: [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
  ]
}