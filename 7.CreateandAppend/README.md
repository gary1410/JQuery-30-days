Create and Append
=================

+ This lesson was about Creating tags and Appending and Prepending things

Methods used
-----------------
+ `.appendto()`
+ `.prependto()`
+ `.prepend()`
+ `.append()`
+ `.after()` "Select a tag and append it after that tag  .after() appends things"
+ `.first().before()` "get the first paragraph tag you find and add content before it."

+ `$('<h2></h2>')` Jquery in this instance knows how to create tags


Here this is saying create the tags and set the text and class by using an object.  If you're creating an element you're going to say insertAfter or insertBefore

`$('<h2></h2>', {
  text: 'Hello from JavaScript',
  class: 'myClass',
}).insertAfter('p:nth-child(3)');`

`$('<h2></h2>', {
  text: 'Hello from JavaScript',
  class: 'myClass',
}).insertBefore('p:nth-child(3)');`


This says, get the `<h1>` and append to the article.  This will physically move the h1 tag

`$('h1').appendTo('article')`

This says get the collection of `$('p')` and after each collection we're going to append `<h1>` to each one of those

$('p').after( $('h1') );

But you can use below to only get the first paragraph tag and then append the '<h1>' tags after that.

`$('p').eq(0).after( $('h1') );`


This is function that grabs a `<span>` with text, creates blockquote tags an uses an object to set the class and text to prepend it ot the closest `<p>`

  var co = $('span.co').each(function(){
    var $this = $(this);
    $('<blockquote></blockquote>', {
        class: 'co',
        text: $this.text()
    }).prependTo( $this.closest('p') );

  })