// Objects -------------------------

// Characters and their stats
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

// Messages displayed to user in-game
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

//used for .click event listener functions
let activeCharacter = null;
let firstEnemy = null;
let secondEnemy = null;
let thridEnemy = null;

// unused variables in case I need them later
let enemyHp = [characters[firstEnemy].hp];
let activeCharacterHp = [characters[activeCharacter].hp];
let activeCharacterAp = [characters[activeCharacter].ap];

// Main -------------------------

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
            
            

            //attack button for first enemy
            $('#attackButton').click(function() {

                //check for enemy and player hp 
                if (characters[firstEnemy].hp > 1 && characters[activeCharacter].hp > 1) {
                
                    //reduce enemy hp by active character ap
                    characters[firstEnemy].hp = characters[firstEnemy].hp - characters[activeCharacter].ap;
                    console.log(characters[firstEnemy].hp)
                    //update enemy health on DOM
                    $('#' + firstEnemy + "P").text('Health: ' + characters[firstEnemy].hp);
                    
                    //activeCharacter attack power increments each attack
                    characters[activeCharacter].ap = characters[activeCharacter].ap + 8;
                    console.log('player ap ' + characters[activeCharacter].ap)

                    //reduce activeCharacter hp by firstEnemy cap
                    characters[activeCharacter].hp = characters[activeCharacter].hp - characters[firstEnemy].cap;

                    //update activeCharacter health on DOM
                    $('#' + activeCharacter + "P").text('Health: ' + characters[activeCharacter].hp);
                
                // when player is defeated
                } else if (characters[activeCharacter].hp <= 0) {
                        $('#pMessage').text(messages.playerDefeated);
                        console.log('player health is out')
                // when enemy is defeated
                } else if (characters[firstEnemy].hp <= 0) {
                        $('#pMessage').text(messages.firstEnemyDefeated);
                        console.log('enemy health is out')
                
                };  // *close - check for enemy and player hp 

            }); // *close - attack button for first enemy

        };   // *close - only listens for click if firstEnemy has not been chosen
        
    };   // *close - player can now choose enemy
    
}); // *close - listen for click on character image

// DOM manipulation -------------------------

// add starting hp to dom
$("#lukeSkywalkerP").append('Health: ' + characters.lukeSkywalker.hp);
$("#obiWanP").append('Health: ' + characters.obiWan.hp);
$("#darthMaulP").append('Health: ' + characters.darthMaul.hp);
$("#darthSidiousP").append('Health: ' + characters.darthSidious.hp);

// initial user message
$('#pMessage').text(messages.begin);
