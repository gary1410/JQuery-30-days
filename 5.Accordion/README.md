JQuery in 30 Days Lesson 5 - The Accordion
==================================

Key Concepts
------------

`.first-child`
`.nth-child`
`.nth-last-child(n)` will read from bottom up
`siblings`

Event Delegation
----------------
```javascript
$(dd).on('mouseenter', 'dt', function(){
  some code here
}
```
this creates a "listening" zone and optimizes the dom.  No need to put an event listener on every single dt.  Just have it "zoned-off" and make it register on dt
