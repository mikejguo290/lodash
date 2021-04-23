const _={
    clamp(number, lower, upper){
        /* 
        clamp takes in three args. a number, an upper bound and lower bound, 
        if the number is smaller than the lower bound, return the lower bound.
        if the number is larger than the upper bound, return the upper bound.
        else, return the provided number as is. 
        */
        const lowerClampedValue=Math.max(number, lower);
        const clampedValue=Math.min(lowerClampedValue, upper)
        //arg > upperBound? Math.min(arg, upperBound) : Math.max(arg, lowerBound);
         
        return clampedValue
    },
    inRange(number, start, end){
        /* 
        inRange checks if number is in range between start and up to but including end.
        returns true if within range and false is not within range. 
        if only two arguments are provided, start is set to 0, 
        if start > end, reverse start and end to support negative ranges. 
        */ 
       /* my gameplan.
        if (start>end){
            const startRange=end;
            const endRange=start;
        }else{
            const startRange=start;
            const endRange=end;
        };
        // check if clamp() of the number is the same as the number
        return number=this.clamp(number, startRange, endRange-1)
       */

        if (end===undefined){
            end=start;
            start=0;
        }
        if (start>end){
            let temp=end;
            end=start;
            start=temp;
        }
        const isInRange = number >= start && number < end ; 
        return isInRange;
    },
    words(string){
        /* 
        .words() takes an argument of type string and splits it into an array of words,
        delimited by space ' ' and returns that array. 

        I plan to define a variable to save the array of strings. save the results
        of string.split(' ').
        */
        const words=string.split(' ')
        return words;
    },
    pad(string, length){
        /* 
        pad takes in two args: a string and a length. 
        pad adds spaces evenly to both sides of the string to make it reach the desired length.
        extra padding is added to the end of the string if an odd amount of padding is required to reach the required length.        
        returns a final string.
        */
        
        // test if string.length is even, if so add half of length-string.length to either side of string
        // if odd, add rounded up amount of half of length-string.length to the end, and regular amount to the start.
        // always round down padding whilst round
       
        if (string.length<length){
            const padding=(length-string.length)/2;
            const frontPaddingLength=Math.floor(padding)
            const backPaddingLength=length-string.length-frontPaddingLength;
            // should ensure frontPadding always rounds down. 
            // use frontPadding as a variable to determine back padding.this should mean both add up to 1 when there is just one unit of difference!
            // drop the logic number is even test as it would be redundant given the set up of the variables.
            let paddedString=' '.repeat(frontPaddingLength)+string+' '.repeat(backPaddingLength);
            return paddedString;
        }else{
            return string; 
        }
    },
    has(obj, key){
        /*
        takes two args. an object and a key
        ckecks if object has a value at the specified key
        will return true if there is a value at key, false if not.
        unlike lodash.has(), this will not accept additional path parameter; will only check for
        unnested values. 
        will also have to return false if the object hasn't got the property key. 
        */
        
        let hasValue = false; // default is false, only set to true if key and key:value exists. 
        if(obj.hasOwnProperty(key)){
            hasValue = obj.key!==undefined? true: false;
        }

        return hasValue;

    },

    invert(obj){
        /*
        invert creates a new object from an object by invertings its key:value pairs.  The keys and values are swapped around.
        */
        /* 
        my plan is to use object.entries() to create an array of key:val pairs , then, create a new object with .fromEntries method.
        Object.entries(obj) is a static method!
        */
        const invertedObj={};
        for (const [key, val] of Object.entries(obj)){
            invertedObj[val]=key;
        }
        return invertedObj;

    },
    findKey(obj, predicate){
        /* 
        takes in an object and a predicate function, which returns a boolean value. 
        it iterates through the key:value pair within the object and calls the predicate function with the value.
        it returns the first key for which value the predicate function returns true.
        if no values return truthy, returns undefined
        */
        for (const key in obj){
            
            const val=obj[key];
            predicateReturnValue=predicate(val);
            
            if(predicateReturnValue===true){
                return key // stop iterating , immediately return key if value is found. would not execute last return. 
            }
            
        }
        return undefined // undefined by default, if the value is not found in the for loop, 
    },
    drop(array, n=1){
        /* 
        .drop() takes two arguments - an array and a number 
        it returns a new array with a slice of the old array with n elements dropped from the beginning. 
        is no value for n is provided, the default number of elements dropped is n. 
        My plan is to use array.slice(n,)
        */
        const droppedArray=array.slice(n);
        return droppedArray;
    },
    dropWhile(array, predicate){
        /*
        dropWhile() takes two arguments. an array and a predicate function. The predicate function takes three arguments, 
        the current element, the current element index and the whole array. 
        dropWhile() returns a slice of the old array, dropping elements from the beginning of the original until the value that enables 
        the predicate function to return a falsy value. 

        My plan is to iterate the array until the predicate function returns a falsy value, at which point return 
        the array slice with the iteration number as starting value of slice. 

        Codecademy used findIndex method, coupled with this.drop() method defined earlier
        let dropNumber=array.findIndex((array[i],i)=>{
            return !predicate(array[i], i, array) // invert predicate return because findIndex returns values associated with truthy return.
        });
        const newArray=this.drop(array, dropNumber)
        return newArray;
        */
        let startingIndex=array.length; // default startingIndex would generate a blank array. 
        for (let i=0; i<array.length; i++){
            if (predicate(array[i], i, array)===false){
                startingIndex=i;
                return array.slice(startingIndex);
            }
        }
        // what to return if predicate never returns false? returns a blank array because all elements are dropped.
        return array.slice(startingIndex);
    

    },
   chunk(array, size=1){
       /*
       .chunk() splits an array into an array of arrays. Each smaller array, the chunk, will be of size number of elements. 
       if the split isn't even. then the final chunk will contain the remaining elements.
       
       My plan is to find the modulus of the length of the array. then get the factor * size = array.length-remainder
       Once the number of chunks is determined. I shall go about adding slices to the array of chunks. 
       last slice will only require a start index to set.

       CodeCademy answer - for loops can skip! and .slice() will use array.length instead of an out of bounds index!
       for (let i=0; i<array.length ; i+=size){
           chunkValue=array.slice(i, i+size);
           chunkArray.push(chunkValue);
       }
       
       */

       const remainder=array.length%size;
       const factor=(array.length-remainder)/size;
       const chunkArray=[]
       let i=0
       let start=0 // initial index of slice start;
       let end=size; // initial index of slice end;
       while (i<factor){
        chunkArray.push(array.slice(start,end))
        start+=size; // shift start index by size number of places.
        end+=size; // shift end index by same amount. 
        i++
       }
       // once the regular size chunks are finished. add the remainder chunk into array of chunks.
       if (remainder!==0){
           chunkArray.push(array.slice(start));
           return chunkArray;
       }
       return chunkArray;
   },
};




// Do not write or modify code below this line.
module.exports = _;