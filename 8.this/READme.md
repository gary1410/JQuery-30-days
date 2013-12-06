'this' refers to the parent window object

```javascript
function doSomething(e) {
  e.preventDefault();
  console.log(e);
  console.log(this);
}

$('a').on('click', doSomething);
```

the anchor tag has a link to it and to prevent the default action of going to the link you want to say e.preventDefault

***************

```var obj = {
  doIt: function(e){
    e.preventDefault();
    console.log(this);
  }
}

$('a').on('click', doSomething);```


`this` in this case refers to the anchor object instead of the defined 'var obj'

*******************

```var obj = {
  doIt: function(e){
    e.preventDefault();
    console.log(this);
  }
}

$('a').on('click', function() {
  obj.doIt()
  e.preventDefault();
});```

Instead what we can do is pass our event an anonymous function.  The `.doIt()` method no longer related to the anchor, it's not longer going to recieve an event object.

**********************

```var obj = {
  doIt: function(){
    console.log(this);
  }
}

$('a').on('click', function(e) {
  obj.doIt.call(this);
  e.preventDefault();
});```

***********************

But if you want this to be referred to the `<a>` then your'e going to have it calling the 'doIt' method can `call(this)`


```var obj = {
  doIt: function(){
    console.log(this);
  }
}

$('a').on('click', function(e) {
  obj.doIt.call(this);
  e.preventDefault();
});```

***************************

```var obj = {
  doIt: function(){
  console.log(this)
  e.preventDefault();
  }
}

$('a').on('click', $.proxy(obj.doIt, obj))```

when doIt is call, we want to make sure this is referring to obj