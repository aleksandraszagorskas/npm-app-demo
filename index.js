const _ = require('lodash');

const numbers = [1,23,111,25,664,84];
_.each(numbers, (number, i)=>{
    console.log(number);
});