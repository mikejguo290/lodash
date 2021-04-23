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
};




// Do not write or modify code below this line.
module.exports = _;