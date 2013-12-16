This will hide all of the content

```javascript
$('div.content').hide()
```

We can then grab all the h1 tags and on click run an anonymous function that will select `($this)` and says `.next()` then `.slidedown()`

You can then pass parameters of `fast` or `slow`.

`slow` defaults at 600ms and `fast' defaults to 200ms.
defaults is at 400ms

```javascript
$('h1').on('click', function(){
  $(this).next().slideDown('slow');
})
```

this is setting the default in jquery.

`$.fx.speeds._default = 2000`

setting custom default like this

`$.fx.speeds.tortoise = 5000;`

Always refer to the jquery source and search for `fast` so you can look at the documention.

