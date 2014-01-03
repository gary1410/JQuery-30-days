We want an object and want to filter through and take it's content and put it on the page

1) We want to wrap the content into an array of objects

```javascript
  var content = [
    {
      title: 'My awesome blog post',
      thumbnail: 'http://d2o0t5hpnwv4c1.cloudfront.net/1137_terminal/preview.png',
    },
    {
      title: 'My second awesome blog post',
      thumbnail: 'http://d2o0t5hpnwv4c1.cloudfront.net/1133_newrelic/200.jpg',
    },
    {
      title: 'My third blog post',
      thumbnail: 'http://d2o0t5hpnwv4c1.cloudfront.net/1137_terminal/preview.png',
    }
  ],
```

Now how do we get this content on the page?  This is by creating a template.

1)
```javasript
<script id=blogTemplate type=tuts/template>
  <h2> {{title}} </h2>
  <img src={{thumbnail}} alt={{title}}>
</script>
```

2)

```javascript
template = $.trim( $('#blogTemplate').html() )
```

`$.trim()` gets rid of the white space.
`.html()` selects the html after the parent class.

3) now iterate using the $.each method, which can take two parameters, in this case and object and a function, with and index and value (object).
  We use some regext to scan through the content and within the content look at the templates and replace it with the object.

```javascript
  $.each( content, function( index, obj) {
    frag += template.replace( /{{title}}/ig, obj.title ).replace( /{{thumbnail}}/ig, obj.thumbnail)
  })
```
