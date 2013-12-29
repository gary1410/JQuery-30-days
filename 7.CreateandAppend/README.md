Create and Append
=================

This lesson was about Creating tags and Appending and Prepending things

Methods used
-----------------
+ `.appendto()`
+ `.prependto()`
+ `.prepend()`
+ `.append()`
+ `.after()` "Select a tag and append it after that tag  .after() appends things"
+ `.first().before()` "get the first paragraph tag you find and add content before it."

+ `$('<h2></h2>')` Jquery in this instance knows how to create tags

##### Creating tags as objects and then using them with `.insertAfter` or `.insertBefore`#####

+ Here this is saying create the tags and set the text and class by using an object.  If you're creating an element you're going to say insertAfter or insertBefore

```javascript
$('<h2></h2>', {
  text: 'Hello from JavaScript',
  class: 'myClass',
}).insertAfter('p:nth-child(3)');
```

```javascript
$('<h2></h2>', {
  text: 'Hello from JavaScript',
  class: 'myClass',
}).insertBefore('p:nth-child(3)');
```

### Example of `.appendTo` ### 

This says, get the `<h1>` and append to the article.  This will physically move the h1 tag

`$('h1').appendTo('article')`

### Example of `.after` ###

This says get the collection of `$('p')` and after each collection we're going to append `<h1>` to each one of those

`$('p').after( $('h1') );`

### Example of `.eq(0)` and `.after` ###

But you can use below to only get the first paragraph tag and then append the `<h1>` tags after that.

`$('p').eq(0).after( $('h1') );`

### Example of using `.each` ###

This is a function that grabs a `<span>` with text, creates blockquote tags an uses an object to set the class and text to prepend it to the closest `<p>`

  ```javascript
  var co = $('span.co').each(function(){
    var $this = $(this);
    $('<blockquote></blockquote>', {
        class: 'co',
        text: $this.text()
    }).prependTo( $this.closest('p') );
  });
  ```
