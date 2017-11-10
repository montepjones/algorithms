
// mean is the average of the arrays
function getMean(arr) {
    return arr.reduce((prev , curr) => prev + curr) / arr.length;

}
// The Median is the middle number of the sorted array if there are a odd number of values, 
// if there are an even number the median is the mid point or average of the central two values.
function getMedian(arr) {
    arr.sort((a, b) => a - b);
    var half = Math.floor(arr.length / 2);
    if (arr.length %2 === 0)
        return (arr[half - 1] + arr[half]) / 2.0 ;
    else 
        return arr[half];    


}


function getMode(array) {
    let modeObj = {};
    // create modeObj;
    array.forEach(num => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });
    // console.log(arrObj);
    
    let maxFrequency = 0;
    let modes = [];
    for (var num in modeObj) {
         if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }

    }
    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    }
    return modes
    
}

function meanMeadianMode(arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr),
    }
    
}

//  getMode([2, 2, 3, 41, 0, 4, 100, 23]);
console.log(meanMeadianMode([1, 2, 3, 4, 5, 4, 6, 1, ]));
