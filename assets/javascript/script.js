$(document).ready(function() {    
    
    // Objects -------------------------

    // Characters and their stats
    let characters = {
        lukeSkywalker: {
            hp: 120, //health power, decreases based on ap or cap of attacker.
            ap: 8, //must increase after each attack, for loop, add 12ap each event(button press, attack)
            cap: 6, // counter attack points, only applies to enemy, does not change
        },

        obiWan: {
            hp: 100, //health power, decreases based on ap or cap of attacker.
            ap: 8, //must increase after each attack, for loop, add 9ap each event(button press, attack)
            cap: 5, // counter attack points, only applies to enemy, does not change
        },

        darthMaul: {
            hp: 150, //health power, decreases based on ap or cap of attacker.
            ap: 8, //must increase after each attack, for loop, add 10ap each event(button press, attack)
            cap: 20, // counter attack points, only applies to enemy, does not change
        },

        darthSidious: {
            hp: 180, //health power, decreases based on ap or cap of attacker.
            ap: 8, //must increase after each attack, for loop, add 4ap each event(button press, attack)
            cap: 25, // counter attack points, only applies to enemy, does not change
        },
    }

    // Messages displayed to user in-game
    let messages = {
        begin: "Choose your character!",
        attack: "Click the attack button.",
        firstEnemy: "Choose your first enemy.",
        firstEnemyDefeated: "You defeated the first enemy, choose your next enemy.",
        secondEnemyDefeated: "You defeated the second enemy, choose your final opponent!",
        thirdEnemyDefeated: "You win! Congratulations!",
        playerDefeated: "You lose. Try again.",
    }

    // Global variables -------------------------

    //used for .click event listener functions
    let activeCharacter = null;
    let firstEnemy = null;
    let secondEnemy = null;
    let thirdEnemy = null;

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
                    if (characters[activeCharacter].hp > 0 && characters[firstEnemy].hp > 0) {
                    
                        //reduce enemy hp by active character ap
                        characters[firstEnemy].hp = characters[firstEnemy].hp - characters[activeCharacter].ap;
                        console.log(characters[firstEnemy].hp);
                        //update enemy health on DOM
                        $('#' + firstEnemy + "P").text('Health: ' + characters[firstEnemy].hp);
                        
                        //activeCharacter attack power increments each attack
                        characters[activeCharacter].ap = characters[activeCharacter].ap + 8;
                        console.log('player ap ' + characters[activeCharacter].ap);

                        // check for enemy hp before counter attack
                        if (characters[firstEnemy].hp > 0){
                            //reduce activeCharacter hp by firstEnemy cap
                            characters[activeCharacter].hp = characters[activeCharacter].hp - characters[firstEnemy].cap;

                            //update activeCharacter health on DOM
                            $('#' + activeCharacter + "P").text('Health: ' + characters[activeCharacter].hp);
                        
                            // when player is defeated
                            if (characters[activeCharacter].hp <= 0) {
                                $('#pMessage').text(messages.playerDefeated);
                                $('#' + activeCharacter + 'P').text('Defeated!');
                                //reset button appears on screen
                                $('#resetButton').removeClass('zeroOpacity').click(function(){
                                    location.reload();
                                });
                            };
                        
                        // when enemy is defeated
                        } else if (characters[firstEnemy].hp <= 0) {
                            $('#pMessage').text(messages.firstEnemyDefeated);
                            console.log('enemy defeated');
                            $('#' + firstEnemy).addClass('grayBackground').removeClass('redBackground chosenEnemy'); 
                            $('#' + firstEnemy + 'P').text('Defeated!');

                        };  // *close - check for enemy hp before counter attack
                    
                    };  // *close - check for enemy and player hp 

                }); // *close - attack button for first enemy
                
            }
            
            //listen for click on second enemy
            if ($(this).attr('class').includes('redBackground') && characters[firstEnemy].hp <= 0){ 
            
                //only listens for click if secondEnemy has not been chosen
                if (secondEnemy === null){
                    
                    $(this).addClass('chosenEnemy');
                
                    //change message to user
                    $('#pMessage').text(messages.attack);

                    //set secondEnemy to id of clicked element
                    secondEnemy = $(this).attr('id');

                    //attack button for second enemy
                    $('#attackButton').click(function() {

                        //check for enemy and player hp 
                        if (characters[activeCharacter].hp > 0 && characters[secondEnemy].hp > 0) {
                        
                            //reduce enemy hp by active character ap
                            characters[secondEnemy].hp = characters[secondEnemy].hp - characters[activeCharacter].ap;
                            console.log(characters[secondEnemy].hp);
                            //update enemy health on DOM
                            $('#' + secondEnemy + "P").text('Health: ' + characters[secondEnemy].hp);
                            
                            //activeCharacter attack power increments each attack
                            characters[activeCharacter].ap = characters[activeCharacter].ap + 8;
                            console.log('player ap ' + characters[activeCharacter].ap);

                            // check for enemy hp before counter attack
                            if (characters[secondEnemy].hp > 0){
                                //reduce activeCharacter hp by secondEnemy cap
                                characters[activeCharacter].hp = characters[activeCharacter].hp - characters[secondEnemy].cap;

                                //update activeCharacter health on DOM
                                $('#' + activeCharacter + "P").text('Health: ' + characters[activeCharacter].hp);
                            
                                // when player is defeated
                                if (characters[activeCharacter].hp <= 0) {
                                    $('#pMessage').text(messages.playerDefeated);
                                    $('#' + activeCharacter + 'P').text('Defeated!');
                                    //reset button appears on screen
                                    $('#resetButton').removeClass('zeroOpacity').click(function(){
                                        location.reload();
                                    });  
                                };
                            
                            // when enemy is defeated
                            } else if (characters[secondEnemy].hp <= 0) {
                                $('#pMessage').text(messages.secondEnemyDefeated);
                                console.log('enemy defeated');
                                $('#' + secondEnemy).addClass('grayBackground').removeClass('redBackground chosenEnemy');
                                $('#' + secondEnemy + 'P').text('Defeated!');
  
                            };
                        
                        };  // *close - check for enemy and player hp 

                    }); // *close - attack button for second enemy

                }; // *close - only listens for click if secondEnemy has not been chosen

            };   // *close - listen for click on second enemy


            //listen for click on third enemy
            if ($(this).attr('class').includes('redBackground') && characters[secondEnemy].hp <= 0){ 
            
                //only listens for click if secondEnemy has not been chosen
                if (thirdEnemy === null){
                    
                    $(this).addClass('chosenEnemy');
                
                    //change message to user
                    $('#pMessage').text(messages.attack);

                    //set thirdEnemy to id of clicked element
                    thirdEnemy = $(this).attr('id');

                    //attack button for second enemy
                    $('#attackButton').click(function() {

                        //check for enemy and player hp 
                        if (characters[activeCharacter].hp > 0 && characters[thirdEnemy].hp > 0) {
                        
                            //reduce enemy hp by active character ap
                            characters[thirdEnemy].hp = characters[thirdEnemy].hp - characters[activeCharacter].ap;
                            console.log(characters[thirdEnemy].hp);
                            //update enemy health on DOM
                            $('#' + thirdEnemy + "P").text('Health: ' + characters[thirdEnemy].hp);
                            
                            //activeCharacter attack power increments each attack
                            characters[activeCharacter].ap = characters[activeCharacter].ap + 8;
                            console.log('player ap ' + characters[activeCharacter].ap);

                            // check for enemy hp before counter attack
                            if (characters[thirdEnemy].hp > 0){
                                //reduce activeCharacter hp by thirdEnemy cap
                                characters[activeCharacter].hp = characters[activeCharacter].hp - characters[thirdEnemy].cap;

                                //update activeCharacter health on DOM
                                $('#' + activeCharacter + "P").text('Health: ' + characters[activeCharacter].hp);
                            
                                // when player is defeated
                                if (characters[activeCharacter].hp <= 0) {
                                    $('#pMessage').text(messages.playerDefeated);
                                    $('#' + activeCharacter + 'P').text('Defeated!');
                                    //reset button appears on screen
                                    $('#resetButton').removeClass('zeroOpacity').click(function(){
                                        location.reload();
                                    });   
                                };
                            
                            // when enemy is defeated
                            } else if (characters[thirdEnemy].hp <= 0) {
                                $('#pMessage').text(messages.thirdEnemyDefeated);
                                console.log('enemy defeated');
                                $('#' + thirdEnemy).addClass('grayBackground').removeClass('redBackground chosenEnemy');
                                $('#' + thirdEnemy + 'P').text('Defeated!');
                            };
                        
                        };  // *close - check for enemy and player hp 

                    }); // *close - attack button for third enemy

                }; // *close - only listens for click if thirdEnemy has not been chosen

            };   // *close - listen for click on second enemy

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

});

// add reset button if player is defeated
// make attack button disappear again when choosing next enemy
//display to user your ap vs enemy cap