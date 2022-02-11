/**
 * Adapted from https://github.com/rstacruz/jsdom-global
 * Make sure this file is registered when running tests by adding this to the command with which you run mocha:
 * -r <path>/hookJsdom.js
 */
// const JSDOM = require( 'jsdom' ).JSDOM;
import { JSDOM } from 'jsdom';

const jsdomOptions = {
	url: 'http://localhost/'
};

const jsdomInstance = new JSDOM( '', jsdomOptions );
const { window } = jsdomInstance;

// Object.getOwnPropertyNames( window )
// 	.filter( property => !property.startsWith( '_' ) && !property.startsWith('Infinity') )
// 	.forEach( key => global[key] = window[key] );

global.window = window;
global.self = window;
global.document = window.document;
window.console = global.console;