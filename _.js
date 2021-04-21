const _={
    clamp(number, lower, upper){
        /* clamp takes in three args. a number, an upper bound and lower bound, 
        if the number is smaller than the lower bound, return the lower bound.
        if the number is larger than the upper bound, return the upper bound.
        else, return the provided number as is. 
        */
        const lowerClampedValue=Math.max(number, lower);
        const clampedValue=Math.min(lowerClampedValue, upper)
        //arg > upperBound? Math.min(arg, upperBound) : Math.max(arg, lowerBound);
         
        return clampedValue
    },
};




// Do not write or modify code below this line.
module.exports = _;