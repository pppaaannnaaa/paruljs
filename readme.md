JSON is pretty much used everywhere

The following are the data types supported by json:
    1. a string
    2. a number
    3. an object (JSON object)
    4. an array
    5. a boolean
    6. Null


basic attributes:
    meta: this is the object describing the data;
    data: applies only on objects, represents the schema of object data,
    label: a direct hook to the data it self,
    types: defines the types allowed to the key in json object as per JSON Schema,
    changeKeyName: if set true assigns label as key, default is false. if string key is the assigned string,
    lengthChk: applicable for array and objects, allows function to check length and return true or false,
    objChk: applicable if types has object,
    arrChk: applicable if types has array,
    strChk: applicable if types has string,
    boolChk: applicable if types has boolean,
    nullChk: applicable if types has null,
    numChk:  applicable if types has number,

data type related attributes:
    objChk: this key contains `meta` for objects 
    arrChk: this key contains `meta` for array 
    boolChk: this key contains `meta` for boolean 
    nullChk: this key contains `meta` for null  
    numChk: this key contains `meta` for number 