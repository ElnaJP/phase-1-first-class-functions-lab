const  scubaDrivers = (['Antonia', 'Nuru', 'Amari', 'Mo']);
const returnFirstTwoDrivers = function scubaDrivers () {
return (['Antonia', 'Nuru']);
};

const returnLastTwoDrivers = function scubaDrivers () {
    return (['Amari', 'Mo']);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers,];
 
function createFareMultiplier(number)  {
 return function (fare) {
return fare * number
}
 }

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(scubaDrivers, fn) {
    return fn(scubaDrivers);
}

