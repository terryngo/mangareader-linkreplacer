// ==UserScript==
// @name           MangareaderLinkReplacer
// @namespace      https://github.com/terryngo
// @description    Replaces all mangareader links with mangapanda on all sites (unless you are on mangareader itself).
// @include        *
// @version        1.0
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==
//alert('Hello, World!');
$(document).ready(function() {
    var urlToReplace = 'mangareader.net';
    var urlToReplaceWith = 'mangapanda.com';
    $("a[href*=urlToReplace]").each(function() {
        this.href = this.href.replace(urlToReplace, urlToReplaceWith);
    });
}); //end ready
