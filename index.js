// Code your solution in this file!
const returnFirstTwoDrivers = arr => {
    let b = []
    b.push(arr[0])
    b.push(arr[1]);
    return b
}   // simpler code is: return drivers.slice(0,2);

const returnLastTwoDrivers = arr => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplyValue => function(n) {
    return multiplyValue * n;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrOfDrivers, n) => n(arrOfDrivers)