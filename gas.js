/**
 * Author: Connor J Webdale 
 * Date: 3.5.20
 * 
 * filname: gas.js
 */

 /** initializing our mass variable with the given 
  * information*/
 let mass = [
    90903,
    135889,
    120859,
    137397,
    56532,
    92489,
    87979,
    149620,
    137436,
    62999,
    71672,
    61022,
    139765,
    69690,
    109513,
    67615,
    77803,
    146519,
    96432,
    129440,
    67912,
    143886,
    126992,
    129921,
    122339,
    61684,
    149706,
    52779,
    106421,
    145896,
    145977,
    76585,
    136021,
    63976,
    97063,
    114899,
    118570,
    102196,
    129126,
    98521,
    136186,
    68054,
    72452,
    92433,
    145851,
    98487,
    149980,
    114477,
    125479,
    62351,
    131559,
    115553,
    129371,
    147164,
    83125,
    146200,
    68621,
    55982,
    79131,
    64907,
    95570,
    132347,
    76889,
    96461,
    123627,
    128180,
    113508,
    70342,
    139386,
    131234,
    140377,
    119825,
    80791,
    52090,
    62615,
    101366,
    138512,
    113752,
    77912,
    64447,
    146047,
    94578,
    82228,
    116731,
    123488,
    103839,
    120854,
    54663,
    129242,
    51587,
    149536,
    71096,
    110104,
    145155,
    139278,
    78799,
    62410,
    64645,
    112849,
    60402,
 ];

 /** the function to get the gas value for a mass 
  * argument
  */
 function getGas(mass) {
     mass = mass / 3; // divides by 3
     mass = Math.floor(mass); // rounds down
     mass = mass - 2; // subtracts 2
     return mass; // returns the new value
 }
// fuel for mass 
for (let i = 0; i < mass.length; i++) {
    mass[i] = getGas(mass[i]);
}

// ^^^left over from part 1

// initializes 2 variables, the first is going to be used as an array but the second only as a number
let totalAddedGas;
let totalAddedGasFinal = 0;

/** each element is going to be the added amount of gas for that 
 * module 
 */
// probably the dumbest way to do this: 
mass.forEach(element => {
    addedFuel = getGas(element); // getting the gas needed to propel the gas for the module 
    if (addedFuel>0) { // if it's more than 0, that gas will need MORE gas to propel it
        addedFuel2 = getGas(addedFuel); // so we get the gas needed to propel the gas needed to propel the gas for the module 
        if (addedFuel2>0) { // repeating the process, getting gas for gas for gas and so on and so forth 
            addedFuel3 = getGas(addedFuel2);
            if (addedFuel3>0) {
                addedFuel4 = getGas(addedFuel3);
                if (addedFuel4>0) {
                    addedFuel5 = getGas(addedFuel4);
                    if (addedFuel5>0) {
                        addedFuel6 = getGas(addedFuel5);
                        if (addedFuel6>0) {
                            addedFuel7 = getGas(addedFuel6);
                            /** things change here, and the gas can start to be negative or 0. if that is the case, we 
                             * want to add all that gas (except for the negative/0 value) into an array
                             */
                            if (addedFuel7<=0) {
                                // making the array 
                                let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6];
                                // adding the array into a variable 
                                totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                // adding that variable into a global number to get a grand total 
                                totalAddedGasFinal = totalAddedGasFinal + totalAddedGas;
                            }
                            if (addedFuel7>0) { 
                                /** repeats same logic as above, just with one more iteration of getting
                                 * gas
                                 */
                                addedFuel8 = getGas(addedFuel7);
                                if (addedFuel8<=0) {
                                    let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6,addedFuel7];
                                    totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                    totalAddedGasFinal = totalAddedGasFinal + totalAddedGas;
                                }
                                if (addedFuel8>0) {
                                    addedFuel9 = getGas(addedFuel8);
                                    if (addedFuel9<=0) {
                                        let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6,addedFuel7,addedFuel8];
                                        totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                        totalAddedGasFinal = totalAddedGasFinal + totalAddedGas;
                                    }
                                    if (addedFuel9>0) {
                                        addedFuel10 = getGas(addedFuel9);
                                        if (addedFuel10<=0) {
                                            let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6,addedFuel7,addedFuel8,addedFuel9];
                                            totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                            totalAddedGasFinal = totalAddedGasFinal + totalAddedGas;
                                        }
                                        if (addedFuel10>0) {
                                            addedFuel11 = getGas(addedFuel10);
                                            if (addedFuel11<=0) {
                                                let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6,addedFuel7,addedFuel8,addedFuel9,addedFuel10];
                                                totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                                totalAddedGasFinal = totalAddedGasFinal + totalAddedGas;
                                            }
                                        }
                                    } 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});

/** adds all numbers from the mass array */
total = mass.reduce((a,b) => a+b,0);

// adds the total gas needed to propel the modules with the total amount of gas needed 
// to propel that gas 
console.log(total+totalAddedGasFinal);

/**
 * Wrong answers: 
 * 3475192 (too low)
 */