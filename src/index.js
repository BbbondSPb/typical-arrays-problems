function min(array) {
    let min = 0;
    if (array == undefined) {
        return min
    }
    for (let i = 0; i < array.length; i++) {
        if (min > array[i] || min === 0) {
            min = array[i];
        }
    }
    return min
};

function max(array) {
    let max = 0;
    if (array == undefined) {
        return max
    }
    for (let i = 0; i < array.length; i++) {
        if (max < array[i] || max === 0) {
            max = array[i];
        }
    }
    return max
};

function avg(array) {
    let avg = 0;
    let st = 0;
    if (array == undefined || array.length == 0) {
        return avg
    }
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === "number") {
            avg = avg + array[i];
        } else {
            st++;
        } 
        
    }
    return avg / (array.length - st)
};


