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
};




// Do not write or modify code below this line.
module.exports = _;