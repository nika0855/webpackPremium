import $ from 'jquery';

$('<h1 />')
  .text('Hello word from JQuery')
  .css({
    textAlign: 'center',
    color: 'blue',
    backgroundColor: '#f2f2f2'
  })
  .appendTo($('header'));