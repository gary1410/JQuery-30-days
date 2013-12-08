 ```javascript
 $('div.content').hide()
 $('h1').on('click', function(){
   $(this).next().slideDown('fast');
  })
```
1. Grab the content with element div and class of id and hide it
2. When you click on `h1` slide down that content
  * select the `h1` tag
  * on click, use an anonymous function
3. Inside the function `this` will refer to whatever is clicked in this case the h1
4. Whatever comes next, which is the content with p-tags, I want to have it slide down.

```javascript
$('div.content').hide()
  $.fx.speeds._default = 2000;
  // use this if you don't want to hardcode in the speeds all the time.  This is in the jquery docs.
  $('h1').on('click', function(){
  $(this).next().slideDown();
})

You can reset the default to something else if you don't like it.

```javascript
$('div.content').hide()
  $.fx.speeds.tortoise = 2000;
  // you can rename the default to whatever you like
  $('h1').on('click', function(){
  $(this).next().slideDown('tortoise');
})

example of going into the doc and renaming the defaults.