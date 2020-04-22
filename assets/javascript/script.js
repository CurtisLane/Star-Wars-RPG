$(document).ready(function() { // waits till page has loaded to run code
    
    // Objects -------------------------

    // Characters and their stats
    let characters = {
        lukeSkywalker: {
            hp: 115, // health power, decreases based on ap or cap of attacker.
            ap: 8, // attack power, reduce enemy hp, increase by 8 after each attack
            cap: 5, // counter attack power, reduce player hp, does not change
        },

        obiWan: {
            hp: 110, // health power, decreases based on ap or cap of attacker.
            ap: 8, // attack power, reduce enemy hp, increase by 8 after each attack
            cap: 10, // counter attack ower, reduce player hpy, does not change
        },

        darthMaul: {
            hp: 110, // health power, decreases based on ap or cap of attacker.
            ap: 2, // attack power, reduce enemy hp, increase by 8 after each attack
            cap: 25, // counter attack ower, reduce player hpy, does not change
        },

        darthSidious: {
            hp: 120, // health power, decreases based on ap or cap of attacker.
            ap: 8, // attack power, reduce enemy hp, increase by 8 after each attack
            cap: 20, // counter attack ower, reduce player hpy, does not change
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
                
                // move firstEnemy to fighting area
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
                        
                        //update enemy health on DOM
                        $('#' + firstEnemy + "P").text('Health: ' + characters[firstEnemy].hp);
                        
                        //activeCharacter attack power increments each attack
                        characters[activeCharacter].ap = characters[activeCharacter].ap + 8;

                        // check for enemy hp before counter attack
                        if (characters[firstEnemy].hp > 0){
                            
                            //reduce activeCharacter hp by firstEnemy cap
                            characters[activeCharacter].hp = characters[activeCharacter].hp - characters[firstEnemy].cap;

                            //update activeCharacter health on DOM
                            $('#' + activeCharacter + "P").text('Health: ' + characters[activeCharacter].hp);
                        
                            // when player is defeated
                            if (characters[activeCharacter].hp <= 0) {
                                
                                // diplay message to user
                                $('#pMessage').text(messages.playerDefeated);
                                
                                // health replaced by "Defeated"
                                $('#' + activeCharacter + 'P').text('Defeated!');
                                
                                // background color change from green to gray
                                $('#' + activeCharacter).removeClass('greenBackground').addClass('grayBackground');
                                
                                // reset button appears on screen, reloads page
                                $('#resetButton').removeClass('zeroOpacity').click(function(){
                                    location.reload();
                                });
                            };
                        
                        // when enemy is defeated
                        } else if (characters[firstEnemy].hp <= 0) {
                            
                            // display message to user
                            $('#pMessage').text(messages.firstEnemyDefeated);
                            
                            // change background color from red to gray
                            $('#' + firstEnemy).addClass('grayBackground').removeClass('redBackground chosenEnemy'); 
                            
                            // change health to "Defeated"
                            $('#' + firstEnemy + 'P').text('Defeated!');

                        };  // *close - check for enemy hp before counter attack
                    
                    };  // *close - check for enemy and player hp 

                }); // *close - attack button for first enemy
                
            }
            
            // listen for click on second enemy
            if ($(this).attr('class').includes('redBackground') && characters[firstEnemy].hp <= 0){ 
            
                // only listens for click if secondEnemy has not been chosen
                if (secondEnemy === null){
                    
                    // move secondEnemy to fighting area
                    $(this).addClass('chosenEnemy');
                
                    // change message to user
                    $('#pMessage').text(messages.attack);

                    // set secondEnemy to id of clicked element
                    secondEnemy = $(this).attr('id');

                    // attack button for second enemy
                    $('#attackButton').click(function() {

                        // check for enemy and player hp 
                        if (characters[activeCharacter].hp > 0 && characters[secondEnemy].hp > 0) {
                        
                            //reduce enemy hp by active character ap
                            characters[secondEnemy].hp = characters[secondEnemy].hp - characters[activeCharacter].ap;

                            //update enemy health on DOM
                            $('#' + secondEnemy + "P").text('Health: ' + characters[secondEnemy].hp);
                            
                            //activeCharacter attack power increments each attack
                            characters[activeCharacter].ap = characters[activeCharacter].ap + 8;

                            // check for enemy hp before counter attack
                            if (characters[secondEnemy].hp > 0){
                                
                                //reduce activeCharacter hp by secondEnemy cap
                                characters[activeCharacter].hp = characters[activeCharacter].hp - characters[secondEnemy].cap;

                                //update activeCharacter health on DOM
                                $('#' + activeCharacter + "P").text('Health: ' + characters[activeCharacter].hp);
                            
                                // when player is defeated
                                if (characters[activeCharacter].hp <= 0) {
                                    
                                    // update user message
                                    $('#pMessage').text(messages.playerDefeated);
                                    
                                    // change health to "Defeated"
                                    $('#' + activeCharacter + 'P').text('Defeated!');
                                    
                                    // change background color from red to gray
                                    $('#' + activeCharacter).removeClass('greenBackground').addClass('grayBackground');
                                    
                                    //reset button appears on screen
                                    $('#resetButton').removeClass('zeroOpacity').click(function(){
                                        location.reload();
                                    });  
                                };
                            
                            // when enemy is defeated
                            } else if (characters[secondEnemy].hp <= 0) {
                                
                                // update message to user
                                $('#pMessage').text(messages.secondEnemyDefeated);

                                // change background color from red to gray
                                $('#' + secondEnemy).addClass('grayBackground').removeClass('redBackground chosenEnemy');
                                
                                // change health to "Defeated"
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
                    
                    // move thirdEnemy to fighting area
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

                            //update enemy health on DOM
                            $('#' + thirdEnemy + "P").text('Health: ' + characters[thirdEnemy].hp);
                            
                            //activeCharacter attack power increments each attack
                            characters[activeCharacter].ap = characters[activeCharacter].ap + 8;

                            // check for enemy hp before counter attack
                            if (characters[thirdEnemy].hp > 0){
                                
                                //reduce activeCharacter hp by thirdEnemy cap
                                characters[activeCharacter].hp = characters[activeCharacter].hp - characters[thirdEnemy].cap;

                                //update activeCharacter health on DOM
                                $('#' + activeCharacter + "P").text('Health: ' + characters[activeCharacter].hp);
                            
                                // when player is defeated
                                if (characters[activeCharacter].hp <= 0) {
                                    
                                    // update message to user
                                    $('#pMessage').text(messages.playerDefeated);
                                   
                                    // change health to "Defeated"
                                    $('#' + activeCharacter + 'P').text('Defeated!');
                                   
                                    // change background color from green to gray
                                    $('#' + activeCharacter).removeClass('greenBackground').addClass('grayBackground');
                                    
                                    //reset button appears on screen
                                    $('#resetButton').removeClass('zeroOpacity').click(function(){
                                        location.reload();
                                    
                                    });   
                                };
                            
                            // when enemy is defeated
                            } else if (characters[thirdEnemy].hp <= 0) {
                                
                                // update user message
                                $('#pMessage').text(messages.thirdEnemyDefeated);
                                
                                // change background color from red to gray
                                $('#' + thirdEnemy).addClass('grayBackground').removeClass('redBackground chosenEnemy');
                                
                                // change health to "Defeated"
                                $('#' + thirdEnemy + 'P').text('Defeated!');
                                
                                // reset button appears, reloads page
                                $('#resetButton').removeClass('zeroOpacity').click(function(){
                                    location.reload();
                                });
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

}); // *close document ready function