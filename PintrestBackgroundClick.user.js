// ==UserScript==
// @name        PintrestBackgroundClick
// @namespace   http://github.com/sbutler/PintrestBackgroundClick
// @description Allow links from pintrest to load in the background
// @include     http://pinterest.com/*
// @version     1
// ==/UserScript==


jQuery(function(){
  jQuery('body').off('click', 'a[rel=nofollow]');
});

