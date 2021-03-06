/*global require*/

// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke  = require('bespoke'),
    bullets  = require('bespoke-bullets'),
    cube     = require('bespoke-theme-cube'),
    keys     = require('bespoke-keys'),
    touch    = require('bespoke-touch'),
    scale    = require('bespoke-scale'),
    hash     = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    state    = require('bespoke-state');

// Bespoke.js
bespoke.from('article', [
    bullets('li, .bullet'),
    cube(),
    keys(),
    touch(),
    scale(),
    hash(),
    progress(),
    state()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
