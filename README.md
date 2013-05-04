# angular truncate

This project is a filter for Angularjs to truncate text strings to a set number of characters and
add ellipses when needed.


## How to use angular truncate


Include the javascript file.
>
``` html
<script src="truncate.js"></script>
```
+ Inject the `truncate` filter into your app module

```javascript
var myApp = angular.module('myApp', ['truncate']);
```

When outputting text apply the filter
```html
 <p>
    {{text | characters:25}}
</p>
```

