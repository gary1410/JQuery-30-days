Bind, Live, Delegate
====================

+All of these use the ```.on()``` method call.  Just stick to ```.on('click')``` with some anonymous function.
+Typically you want to say ```.on('click' function(){})```


-------------

```javascript
(function(){
  $('h2').live('click', function(){
//     We're attaching the event handler to the document, it's part of the document, but it's deprecated
     console.log('clicked');
     $(this).clone().appendTo('body');
   });
})();
```

-------------

```javascript
(function(){
  $('h2').bind('click', function(){
    console.log('clicked');
    $(this).clone(true).appendTo('body');
    //true will retain event handlers
  });
})();
```