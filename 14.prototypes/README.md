http://msdn.microsoft.com/en-us/magazine/ff852808.aspx

```javascript
function Slider() {
  console.log(this) // 'this' refers to the window
}

var slider = new Slider();
```

when we create a new instance of slider 'this' will refer to slider


------------------------

```javascript
function Slider() {
  this.direction = 'forward'
}

var slider = new Slider();
console.log(slider.direction) //now we can gain access to that, which will return 'forward'
```

------------------------------
Now you can add a methods (this.move)

```javascript
function Slider() {
  this.direction = 'forward'
  this.move = function () {
    console.log('moving');
  };
}

var slider = new Slider();
console.log(slider) //now we can gain access to that, which will return 'forward'

var slider2 = new Slider();
console.dir(slider2);
```

But this creates a method in memory for each instance, which seems silly from a memory point of view.


----------------------------------

now we can create an object that will inherit that method and only exist in memory once.

```javascript
function Slider() {
  this.direction = 'forward';
}

Slider.prototype.move = function(){
  console.log('moving')
}
```

//At this point you can remove the this.move method and both new objects will have access to the move method
//but they're inheriting

```javascript
var slider = new Slider();
slider.move()

var slider2 = new Slider();
slider2.move()
```

// these can be access the same way now.

----------------------------

Let us say if you want to create a new instance of slider you want to pass in the direction

now we can create an object that will inherit that method and only exist in memory once.

```javascript
function Slider(direction, lateral) {
  this.direction = direction;
  this.lateral = lateral;
}

Slider.prototype.move = function(){
  console.log('moving')
}
```

//At this point you can remove the this.move method and both new objects will have access to the move method
//but they're inheriting

```javascript
var slider = new Slider('forward', 'right');
console.log(slider.direction)
console.log(slider.lateral)

var slider2 = new Slider('backward', 'left')
console.log(slider2.direction)
console.log(slider2.lateral)
```
These can be access the same way now.


-------------------------------------------------

```javascript
function Slider(direction, lateral) {
  this.direction = direction;
  this.lateral = lateral;
}

Slider.prototype.move = function(){
  console.log('moving')
}

//At this point you can remove the this.move method and both new objects will have access to the move method
//but they're inheriting

var slider = new Slider('forward', 'right');
console.log(slider.direction)
console.log(slider.lateral)

var slider2 = new Slider('backward', 'left')
console.log(slider2.direction)
console.log(slider2.lateral)
```
------------------------------------------------

another example of how these work

```javascript
function Slider(direction, lateral) {
  this.direction = direction;
  this.lateral = lateral;
}

Slider.prototype.move = function(){
  console.log('moving' + this.direction)
}

//At this point you can remove the this.move method and both new objects will have access to the move method
//but they're inheriting

var slider = new Slider('forward');
slider.move();
//returns movingforward

var slider2 = new Slider('backward');
slider2.move();
//returns movingbackwaord

// these can be access the same way now.
```
