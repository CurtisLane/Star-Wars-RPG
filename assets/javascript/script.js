// containers for each character. include varied health ponts(hp), attack power(ap)[increases each attack], and counter attack power(cap).
let lukeSkywalker = {
    hp: 350, //health power, decreases based on ap or cap of attacker.
    ap: 0, //must increase after each attack, for loop, add 8ap each event(button press, attack)
    cap: 25, // counter attack points, only applies to enemy, does not change
}

let obiWan = {
    hp: 400, //health power, decreases based on ap or cap of attacker.
    ap: 0, //must increase after each attack, for loop, add 9ap each event(button press, attack)
    cap: 35, // counter attack points, only applies to enemy, does not change
}

let darthMaul = {
    hp: 500, //health power, decreases based on ap or cap of attacker.
    ap: 0, //must increase after each attack, for loop, add 10ap each event(button press, attack)
    cap: 55, // counter attack points, only applies to enemy, does not change
}


//enemy character only has counter attack power[never changes]

//