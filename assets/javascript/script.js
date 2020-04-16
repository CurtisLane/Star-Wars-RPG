// Objects -------------------------

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

// Messages displayed to user
let messages = {
    begin: "Choose your character!",
    attack: "You've chosen your enemy, now click the attack button.",
    firstEnemy: "Choose your first enemy.",
    firstEnemyDefeated: "You defeated the first enemy, choose your next enemy.",
    secondEnemyDefeated: "You defeated the second enemy, choose your final opponent!",
    thirdEnemyDefeated: "You win! Congradulations!",
    playerDefeated: "You lose. Try again.",
}

// Global variables -------------------------

const imgDivIds = ['#lukeSkywalker','#obiWan','#darthMaul','#darthSidious']

// Main -------------------------

// Clicking a character will turn it's background to green and all others to red

for (i=0; i<=imgDivIds.length; i++) {    
    let thisOne = imgDivIds[i];
    $(thisOne).click(function(event) {
        $(thisOne).addClass('greenBackground');
        $('.characterImageDiv:not(thisone)').addClass('redBackground');
        console.log('clicked');
        console.log(event)
        return event;
    }) 
}

//after choosing enemy make attack button appears. clicking button subtracts your ap from their hp. ap increments each attack.

//enemy character only has counter attack power[never changes]

// DOM manipulation -------------------------

// add hp to dom
$("#lukeHp").append(characters.lukeSkywalker.hp);
$("#obiHp").append(characters.obiWan.hp);
$("#maulHp").append(characters.darthMaul.hp);
$("#sidiousHp").append(characters.darthSidious.hp);

// user message
$('#pMessage').text(messages.begin);

// Function calls -------------------------