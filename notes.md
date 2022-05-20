# Javascript Notes

## Object types

### Arrays
* good for manipulating data

### Sets 
* unique values
* good for removing duplicates from array.
* does not have keys or indexes
* Better performance

### Objects 
* easy to write and access values with. Can use functions as values.

### Maps
* keys can have any data type, easy to iterate, easy to compute size, better performance


## Higher order function receives another function as an argument
```
    functionName(‘argument’, callbackFunction);
```

## Arrow function with parameters and callback
```
    const funcName = arg1 => arg2 => callback;
```

## Bind() and Call()
* method.bind(object) binds “this” to target object

* method.call(object) calls on another object to change “this” declaration

## immediately invoked functions
```
    (function () {
        console.log('This will never run again');
    })();
```
OR
```	
    () => arrow function
```

## Function Closures
* Function stored in object runs once and remembers variables inside
* Called from outside (global), the variables are passed into global object

```
    const closureObject = function(){	
        return function(){
            do something
        } 
    }

    const globalObj = closureObj();
```

## Arrays
### Slice
```
    array.slice(startIndex, endIndex);
```
* **Does not modify original array**

### Splice
```
    array.splice(index, deleteCount)
```
* Removes entries after the index
* **Modifies original array.**
  

### Spread operator
```
    [...array]
```

### reverse
```
    array.reverse();
```
* **Modifies original array**


### concat
```
    array.concat(array2);
```
* Combines one array with another (argument)
* **Modifies original array**
* Can also use `[...array1, ...array2]` << **Does not modify original**

### join
```
    array.join('char');
```

### at
```
    array.at(index)
```
* ES2022 standard
* works on strings
* Can be used to extract array index from either beginning or end
* Used as alternative to [index]
* Good for method chaining

### for
```    
    for (const iterable of array){
        do something
    }
```
* will get index along with entries:
```
    for (const [i, iterable] of array.entries())
``` 

### forEach
```
    array.forEach(function(iterable){
        do something
    })
```
```
    array.forEach(function(entryName[, index, array])){
        do something
    }
```
* You cannot break out of a forEach loop

### Map
```
    arr.map(function(element, index, array){
        return (doing something to element);
    })
```
* performs an action on each array value

### Filter
```
    arr.filter(function(iterable){
        return filter condition;
    })
```
* Passes elements that match condition into new array

### Reduce
```
    arr.reduce(function (accumulator, current, index, arr) {
        return accumulator + current;
    }, [initial value of accumulator]);
```
* reduce elements to one single value
* Does not create a new array

### Chaining 
```
    arr.method().method().method();
```
* Only works if the first method returns an array


## Math
### abs([number])
* Gets absolute value (removes negative values)

## Ternary operator
```
    (obj > value ? [do this] : [or do this])
```

## Arrow notation
```
const obj = (arg1 [,arg2] => [what to return]);
```
* do not need to use 'return' and leave off semicolon after return