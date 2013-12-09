```javascript

var box = $('div.box'),
  fontSize = parseInt( box.css('font-size'), 10);

  $('button').on('click', functin() {
    box.css('font-size', 'fontSize =+5');
  });

* you can just say '+=5' to increase the value of the font.
* ```var box = $('div.box')``` You're only quierying the dom one time by doing this.  Better for performance

```javascript
  var box = $('div.box');
  $('button').on('click', function(){
      // box.animate({
      //   'fontSize': '+=5',
      //   'width': '+=300'
      //   }, 500, 'swing' );
      // });

      box.animate({
        'fontSize': '+=5'
      }, {
        duration: 500,
        complete: function() {
          console.log('complete');
        },
        step: function() {
          console.log('The current font-size is:' + $(this).css('fontSize'));
        }
    });
  });
```

  *To see the duration and step for each animate method.  The options are 'duration', 'complete', 'queue'.  You're sending in objects as parameters here.

  var box = $('div.box');
  $('button').on('click', function(){


```javascript
var box = $('div.box');
  $('button').on('click', function(){
      box
        .animate({
            'fontSize': '+=5'
        }, { duration: 500 }) // here you pass another parameter as an object called duration.  You send into two parameters.
        .animate({ 'fontSize': '+=10'}, 3000)
  });
})();

```
* you can stack each animation if you choose to

```javascript
  var box = $('div.box');
  $('button').on('click', function(){
    box
      .animate({
          'fontSize': '+=5'
      }, { duration: 500 })
      .animate({ 'top': '500'}, { duration: 3000}) // 3000 is the duration.  You can write it without braces
  });
```

* if you set `queue` to `false` it'll execute all at the same time.  If you set `queue` `true`, it'll animate incrementally.

```javascript
 var box = $('div.box'),
    w = $(window).width() / 2 - box.outerWidth() / 2;
    // .outWidth will take into account width and padding, border
    h = $(window).height() / 2 - box.outerHeight() /2;

  $('button').on('click', function(){
    box.animate({
      'left': w,
      'position': 'absolute'
    })
    .animate({
      'top': h
    }, {duration: 2000, queue: false}); //dyanmically apply the button value by passing an object

  });
  ```

  * This teaches you how to center the box and window height

```javascript
  var box = $('div.box');

  $('button').on('click', function() {
    box.addClass('rounded')
  })
```

*You can add a rounded class here via jquery

then...

```css
<style>
    .box{
      width: 400px;
      background: red;
      padding: 2em;
      position: relative;
      -webkit-transition: border-radius 1s;
    }

    .rounded{
      border-radius: 50px;
    }

    </style>
```

if you wanted to add a transitio to the border radius you can then use css transitions to set it.