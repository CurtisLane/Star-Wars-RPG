// Objects -------------------------

// containers for each character. include varied health ponts(hp), attack power(ap)[increases each attack], and counter attack power(cap).
let characters = {
    lukeSkywalker: {
        hp: 350, //health power, decreases based on ap or cap of attacker.
        ap: 8, //must increase after each attack, for loop, add 12ap each event(button press, attack)
        cap: 25, // counter attack points, only applies to enemy, does not change
    },

    obiWan: {
        hp: 400, //health power, decreases based on ap or cap of attacker.
        ap: 8, //must increase after each attack, for loop, add 9ap each event(button press, attack)
        cap: 35, // counter attack points, only applies to enemy, does not change
    },

    darthMaul: {
        hp: 500, //health power, decreases based on ap or cap of attacker.
        ap: 8, //must increase after each attack, for loop, add 10ap each event(button press, attack)
        cap: 55, // counter attack points, only applies to enemy, does not change
    },

    darthSidious: {
        hp: 600, //health power, decreases based on ap or cap of attacker.
        ap: 8, //must increase after each attack, for loop, add 4ap each event(button press, attack)
        cap: 65, // counter attack points, only applies to enemy, does not change
    },
}

// Messages displayed to user
let messages = {
    begin: "Choose your character!",
    attack: "Click the attack button.",
    firstEnemy: "Choose your first enemy.",
    firstEnemyDefeated: "You defeated the first enemy, choose your next enemy.",
    secondEnemyDefeated: "You defeated the second enemy, choose your final opponent!",
    thirdEnemyDefeated: "You win! Congradulations!",
    playerDefeated: "You lose. Try again.",
}

// Global variables -------------------------

const imgDivIds = ['#lukeSkywalker','#obiWan','#darthMaul','#darthSidious']
let activeCharacter = null;
let firstEnemy = null;
let secondEnemy = null;
let thridEnemy = null;




// Main -------------------------

// Clicking a character will turn it's background to green and all others to red

//listen for click on character image
$('.characterImageDiv').click(function(event) {
    
    //only listens if character has not been chosen
    if (activeCharacter === null) {
            
        //make all images background red
        $('.characterImageDiv').each(function(index, element) {
            $(element).addClass('redBackground').removeClass('greenBackground');
        });
            
        //make clicked image background green
        $(this).addClass('greenBackground').removeClass('redBackground');

        //change message to user
        $('#pMessage').text(messages.firstEnemy);

        //set activeCharacter to id of clicked element
        activeCharacter = $(this).attr('id');  

    //player can now choose firstEnemy    
    } else if ($(this).attr('class').includes('redBackground')) {
        
        //only listens for click if firstEnemy has not been chosen
        if (firstEnemy === null){
            $(this).addClass('chosenEnemy');
            
            //attack button appears on screen
            $('#attackButton').removeClass('zeroOpacity');
            
            //change message to user
            $('#pMessage').text(messages.attack);

            //set firstEnemy to id of clicked  element
            firstEnemy = $(this).attr('id');

            // enemy hp is reduced by player ap(incremented) and player hp is reduced by enemy cap
            if (characters[firstEnemy].hp >= 1 && characters[activeCharacter].hp >=1) {
                $('#attackButton').click(function() {
                    
                    //reduce enemy hp by active character ap
                    characters[firstEnemy].hp = characters[firstEnemy].hp - characters[activeCharacter].ap;
                    
                    //update enemy health on DOM
                    $('#' + firstEnemy + "P").text('Health: ' + characters[firstEnemy].hp);
                    
                    //activeCharacter attack power increments each attack
                    characters[activeCharacter].ap = characters[activeCharacter].ap + 8;
                    console.log('player ap j' + characters[activeCharacter].ap)

                    //reduce activeCharacter hp by firstEnemy cap
                    characters[activeCharacter].hp = characters[activeCharacter].hp - characters[firstEnemy].cap;

                    //update activeCharacter health on DOM
                    $('#' + activeCharacter + "P").text('Health: ' + characters[activeCharacter].hp);

                });
            } else if (characters[activeCharacter].hp <= 0) {
                $('#pMessage').text(messages.playerDefeated);
                console.log('player health <= 0')
            } else {
                $('#pMessage').text(messages.firstEnemyDefeated);
                console.log('enemy health <= 0')
            };

        }
        
    }
    
});

     

//after choosing enemy make attack button appears. 
//clicking button subtracts your ap from their hp. 
//ap increments each attack.

//enemy character only has counter attack power[never changes]

// DOM manipulation -------------------------

// add hp to dom
$("#lukeSkywalkerP").append('Health: ' + characters.lukeSkywalker.hp);
$("#obiWanP").append('Health: ' + characters.obiWan.hp);
$("#darthMaulP").append('Health: ' + characters.darthMaul.hp);
$("#darthSidiousP").append('Health: ' + characters.darthSidious.hp);

// user message
$('#pMessage').text(messages.begin);

// Function calls -------------------------