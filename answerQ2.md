1. What is the difference between forEach, map, filter and reduce ? 

forEach -> foreach takes a callback function and run that callback function on each element of array one by one.
map->
filter -> Filter provides a callback for every element and returns a filtered array.
map -> Map takes a callback and run it against every element on the 
	array but whats makes it unique is it generate a new array based on your existing array.
reduce -> Reduce method of the array object is used to reduce the array to one single value.


2. Explain these using your own words Explain the difference between function declaration and arrow function ? 
    
    --  Difference in the syntax
    --  Regular functions created using function declarations or expressions are constructible and callable. 
        Since regular functions are constructible, they can be called using the new keyword.
        However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword

3. Explain the difference between find and findIndex ? 
    
    -- find returns the value which satisfies the consdition
    -- findIndex returns the index of the value which satisfies the condition

4. If you like to filter out one object element in an array which method do you like to use: filter or find ? 
    -- The find() method returns the first value that matches from the collection. Once it matches the value in     findings, it will not check the remaining values in the array collection.
    -- The filter() method returns the matched values in an array from the collection. It will check all values in the collection and return the matched values in an array.

    The find() method doesn’t work in IE <= 11. The filter() method works in all browsers, including IE9+. 
    The find() method is a better option to use across modern browsers, but if for IE browser, the filter() method is used.
    
5. Explain Explain the difference of var, let and const when we declare a variable ?
    -- var declarations are globally scoped or function scoped while let and const are block scoped.
    -- var variables can be updated and re-declared within its scope; let variables can be updated but not        re-declared; const variables can neither be updated nor re-declared.
    -- They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let  and const variables are not initialized.
    -- While var and let can be declared without being initialized, const must be initialized during declaration.

