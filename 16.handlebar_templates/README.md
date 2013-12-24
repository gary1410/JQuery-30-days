1. Create your handlebars template in between script tags

```html
<ul class="tweets">
  <script id="template" type="text/x-handlebars-template">
    <li>
      <h2>{{author}}</h2>
      <p>{{tweet}}</p>
    </li>
  </script>
</ul>
```

2. Create some data

```javascript
(function(){
  var data = {
    author: 'Jeffrey Way'
    tweet: '30 Days to Learn Jquery Rocks'
  };

  Handlebars.compile($('template').html())
})
```

`Handlebars` is global because of the handlebars script.  When we say `.compile()` it wants to recieve a path to where your template was stored.  It's going to go into the html template and grab everything that's within the `id=template`

`Handlebars.compile($('template').html())`


3.  When you console.log 'Handlebars.complie($('template').html())` you get the follwoing

```javascript
function (context, options) {
    if (!compiled) {
      compiled = compile();
    }
    return compiled.call(this, context, options);
  }
```
`context` is an object the data that you're trying to bind.

4.  Store `template(data)` into a `var temp`

```javascript
(function(){
  var data = {
    author: 'Jeffrey Way'
    tweet: '30 Days to Learn Jquery Rocks'
  };

  var template = Handlebars.compile($('template').html())
  var temp = template(data);
})
```
So far this says calls on Handlebars to take the template that we have an compile it.  This gives us `template` which is a function (console.log to find out) to trigger.

When we call `template()` we pass in our objecte `template(data)` called data and takes the data to dynamically attach it to the curly braces.

Then we can append it wherever we need to.

5.  Append it to wherever you like

ex.  `$(document.body).append(template(data))`
but we want this in our `ul tags`
ex.  `$(ul.tweets).append(template(data))`

```javascript
(function(){
  var data = {
    author: 'Jeffrey Way'
    tweet: '30 Days to Learn Jquery Rocks'
  };

  var template = Handlebars.compile($('template').html());
  $(ul.tweets).append(template(data));

})
```

5. Now what if we had an array of objects like this...

```javascript
  var data = [
  {
    author: 'Jeffrey Way',
    tweet: '30 Days to Learn Jquery Rocks'
  },
  {
    author: 'John Doe',
    tweet: '<strong>30 Days</strong> to Learn jQuery Rocks'
  }
  ];
```

in the handlebars templating you want to use the `{{#each}}, which is another way of saying `if`.  Then you want to `{{#each this}} or this is items in the array.

```html
<ul class="tweets">

  <script id="template" type="text/x-handlebars-template">
    {{#each this}}
      <li>
        <h2>{{author}}</h2>
        <p>{{{tweet}}}</p>  //This will escape the <strong></stron> tags
      </li>
    {{/each}}
  </script>
</ul>
```html

6.  Now what if we only want to render the age but only for a specific person

`<h2>{{author}} {{#if age}}<span>-{{age}}</span>{{/if}}</h2>`

We use {{#if age}} and {{/if}} to wrap our span tags around.


```html
<ul class="tweets">
  <script id="template" type="text/x-handlebars-template">
    {{#each this}}
      <li>
        <h2>{{author}} {{#if age}}<span>-{{age}}</span>{{/if}}</h2>
        <p>{{{tweet}}}</p>
      </li>
    {{/each}}
  </script>
</ul>
```


7.  You can do more conditional statements in Handlebars

```html
  {{#if quote}}
    <h5>{{quote}}</h5>
  {{else}}
    <h5>Author does not have a quote.</h5>
  {{/if}}
```

8.  How to register your own helpers.


var data = [
    {
      author: { first: 'Jeffrey', last: 'Way', age: 27 },
      tweet: '30 Days to Learn Jquery Rocks',
      quote: 'YOLO'
    },
    {
      author: { first: 'John', last: 'Doe'},
      tweet: '<strong>30 Days</strong> to Learn jQuery Rocks',
      age: 45
    }
  ];

  1. First create a helper function that will combine the object author and it's objects.

  `Handlebars.registerHelper('fullName')`

  `fullname` will be registered within our template.  It has to be the same name as the template name.  Can't call it `banana` on either ends.

  2.  Next is to create a function which needs to receive something...

    `Handlebars.registerHelper('fullName' function(author))`

  3.  Then you need to explicity return your objects.

Handlebars.registerHelper('fullName', function( author ){
    return author.first + ' ' + author.last + '-' + author.age;
  });

  4.  In the template you'll notice we pass in `{{fullName author}}`

  old
  ####
  ```html
  <ul class="tweets">
    <script id="template" type="text/x-handlebars-template">
      {{#each this}}
        <li>
          <h2>{{author}} {{#if age}}<span>-{{age}}</span>{{/if}}</h2>
          <p>{{{tweet}}}</p>
        </li>
      {{/each}}
    </script>
  </ul>
  ```
  new
  ####

  ```html
  <ul class="tweets">
    <script id="template" type="text/x-handlebars-template">
      {{#each this}}
      <li>
        <h2>{{fullName author}}</h2>
        <p>{{{tweet}}}</p>
      </li>
      {{/each}}
    </script>
  </ul>
  </script>
  ```
10. In sum.

We created a helper and we called it `fullname` then we sent in the contents by passing it `author` which is equal to the object in our data array then it gets passed into the `<h2>{{fullname author}}</h2>

We can easily pass in the age as well

`Handlebars.registerHelper('fullName', function( author ){
    return author.first + ' ' + author.last + '-' + author.age;`