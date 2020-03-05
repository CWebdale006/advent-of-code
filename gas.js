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

let totalAddedGas;

// probably the dumbest way to do this: 
mass.forEach(element => {
    addedFuel = getGas(element);
    console.log("addedFuel is: "+addedFuel);
    if (addedFuel>0) {
        addedFuel2 = getGas(addedFuel);
        console.log("addedFuel2 is: "+addedFuel2)
        if (addedFuel2>0) {
            addedFuel3 = getGas(addedFuel2);
            console.log("addedFuel3 is: "+addedFuel3);
            if (addedFuel3>0) {
                addedFuel4 = getGas(addedFuel3);
                console.log("addedFuel4 is: "+addedFuel4);
                if (addedFuel4>0) {
                    addedFuel5 = getGas(addedFuel4);
                    console.log("addedFuel5 is: "+addedFuel5);
                    if (addedFuel5>0) {
                        addedFuel6 = getGas(addedFuel5);
                        console.log("addedFuel6 is:"+addedFuel6);
                        if (addedFuel6>0) {
                            addedFuel7 = getGas(addedFuel6);
                            console.log("addedFuel7 is:"+addedFuel7);
                            if (addedFuel7<=0) {
                                let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6];
                                totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                return totalAddedGas;
                            }
                            if (addedFuel7>0) {
                                addedFuel8 = getGas(addedFuel7);
                                console.log("addedFuel8 is: "+addedFuel8);
                                if (addedFuel8<=0) {
                                    let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6,addedFuel7];
                                    totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                    return totalAddedGas;
                                }
                                if (addedFuel8>0) {
                                    addedFuel9 = getGas(addedFuel8);
                                    console.log("addedFuel9 is:" + addedFuel9);
                                    if (addedFuel9<=0) {
                                        let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6,addedFuel7,addedFuel8];
                                        totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                        return totalAddedGas;
                                    }
                                    if (addedFuel9>0) {
                                        addedFuel10 = getGas(addedFuel9);
                                        console.log("addedFuel10: " + addedFuel10);
                                        if (addedFuel10<=0) {
                                            let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6,addedFuel7,addedFuel8,addedFuel9];
                                            totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                            return totalAddedGas;
                                        }
                                        if (addedFuel10>0) {
                                            addedFuel11 = getGas(addedFuel10);
                                            console.log("addedFuel11 is: " +addedFuel11);
                                            if (addedFuel11<=0) {
                                                let fuelArray = [addedFuel, addedFuel2, addedFuel3,addedFuel4,addedFuel5,addedFuel6,addedFuel7,addedFuel8,addedFuel9,addedFuel10];
                                                totalAddedGas = fuelArray.reduce((a,b) => a+b,0);
                                                return totalAddedGas;
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

console.log(total+totalAddedGas);

/** shows the total fuel needed */
// console.log(total);

/**
 * Wrong answers: 
 * 3475192 (too low)
 */