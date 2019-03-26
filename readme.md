JSON is pretty much used everywhere

The following are the data types supported by json:
    1. an object (JSON object)
    2. an array
    3. a string
    2. a number
    5. a boolean
    6. Null


basic attributes:
    meta: this is the object describing the data;
    data: applies only on objects, represents the schema of object data,
    label: a direct hook to the data it self,
    types: defines the types allowed to the key in json object as per JSON Schema,
    changeKeyName: if set true assigns label as key, default is false. if string key is the assigned string,
    objChk: applicable if types has object,
    arrChk: applicable if types has array,
    strChk: applicable if types has string,
    boolChk: applicable if types has boolean,
    nullChk: applicable if types has null,
    numChk:  applicable if types has number,
    check: fn(obj), this is for custom checks,
    transform: fn(x), return the new value to the key

data type related attributes:
    objChk: this key contains `meta` for objects 
    arrChk: this key contains `meta` for array 
    strChk: this key contains `meta` for strings 
    numChk: this key contains `meta` for number 
    boolChk: this key contains `meta` for boolean 
    nullChk: this key contains `meta` for null  

type checks:

1. objChks:
        lengthChk: applicable for array and objects, allows function to check length and return true or false,
        ignoreKeyCase: if set true key will be matched without case sensitivity, default is false.
        alias: its an array of string which is alternative to the key.
2. arrChk:
        lengthChk: applicable for array and objects, allows function to check length and return true or false,
3. strChk:
        allowedValues: array of values allowed;
        allowedValuesIgnoreCase: array of values allowed case insensitive;
3. numChk:
        allowedValues: array of values allowed;
5. boolChk:  // no checks for boolean, but can have basic checks
6. nullChk:  // no checks for null, but can have basic checks
