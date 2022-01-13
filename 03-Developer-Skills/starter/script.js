// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temps = [17, 21, 23];

function doForecast(temps) {
    let obj = '';

    // loop through each value{
    for (let i = 0; i < temps.length; i++) {
        let t = String(temps[i]);
        //     variable to iterate and hold day of forecast;
        let d = 'day';
        if (i >= 1) {
            d = 'days'
        }
        //     variable to concatenate language with value;
        let f = (t + '° in ' + (i + 1) + ' ' + d + '. ');
        //         push the string to the array;
        obj = obj + f;
    }
    console.log(obj);
    return obj;
}
console.log(doForecast(temps));
