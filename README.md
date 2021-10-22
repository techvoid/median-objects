# Median-Objects

> Calculate median of an Array of Objects.

## Installation

```sh
$ npm install median-objects
```

## Usage Example

```js
const median = require('median-objects')

let testData1 = [
    { name:'P1', age:26 },
    { name:'P2', age:25 },
    { name:'P3', age:27 }, 
 ]

let testData2 = [
    { name:'P1', age:26 },
    { name:'P2', age:25 },
    { name:'P3', age:27 }, 
    { name:'P4', age:22 }, 
 ]
 
let result1 = median(testData1,"age")
if(!result.error){
  console.log(result1.value)
} // → 26

let result2 = median(testData2,"age")
if(!result.error){
  console.log(result1.value)
} // → 25.5
```
## API

### median(Array,"Object-key")

If there are no errors, returns:

`{ error: false, value: MedianValue}`

If errors are found, returns:

`{ error: true, message: 'Corresponding Error-message' }`

#### Array

Type: `Array of Objects`

#### Object-key

Type: `String`
* Object-key is the key name of the object inside Array of which median is to be calculated
