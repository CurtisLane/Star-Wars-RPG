// containers for each character. include varied health ponts(hp), attack power(ap)[increases each attack], and counter attack power(cap).
let characters = {
    lukeSkywalker: {
        hp: 350, //health power, decreases based on ap or cap of attacker.
        ap: 0, //must increase after each attack, for loop, add 12ap each event(button press, attack)
        cap: 25, // counter attack points, only applies to enemy, does not change
    },

    obiWan: {
        hp: 400, //health power, decreases based on ap or cap of attacker.
        ap: 0, //must increase after each attack, for loop, add 9ap each event(button press, attack)
        cap: 35, // counter attack points, only applies to enemy, does not change
    },

    darthMaul: {
        hp: 500, //health power, decreases based on ap or cap of attacker.
        ap: 0, //must increase after each attack, for loop, add 10ap each event(button press, attack)
        cap: 55, // counter attack points, only applies to enemy, does not change
    },

    darthSidious: {
        hp: 600, //health power, decreases based on ap or cap of attacker.
        ap: 0, //must increase after each attack, for loop, add 4ap each event(button press, attack)
        cap: 65, // counter attack points, only applies to enemy, does not change
    },
}

// select character by clicking(put inside for loop, create array of id's)
const imgDivIds = ['#lukeSkywalker','#obiWan','#darthMaul','#darthSidious']
for (i=0; i<=imgDivIds.length; i++) {
    let thisOne = imgDivIds[i];
    $(thisOne).click(function(event) {
        $(thisOne).addClass('greenBackground');
        $('.characterImageDiv:not(thisone)').addClass('redBackground');
        console.log('clicked');
        console.log(event)
    }) 
    
}



// button press triggers attack function

// attack function reduces enemy hp by your ap

//enemy character only has counter attack power[never changes]

// add hp to dom
$("#lukeHp").append(characters.lukeSkywalker.hp);
$("#obiHp").append(characters.obiWan.hp);
$("#maulHp").append(characters.darthMaul.hp);
$("#sidiousHp").append(characters.darthSidious.hp);