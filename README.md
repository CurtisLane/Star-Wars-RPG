# unit-4-game
## Star Wars role playing game using jQuery

### Directories:
* Root
    * [index.html](./index.html)
    * [assets](./assets)
        * [css](./assets/css)
            * [reset.css](./assets/css/reset.css)
            * [style.css](./assets/css/reset.css)
        * [favicon](.assets/favicon)
            * [favicon.ico](./assets/favicon/favicon.ico)
        * [font](./assets/font)
            * [sf_distant_galaxy](./assets/font/sf_distant_galaxy)
        * [images](./assets/images)
        * [javascript](./assets/javascript)
            * [script.js](./assets/javascript/script.js)

### Functions: 
    1. Message displayed to user: Choose your character.
        1. Clicking any of the four images will select your character.
        1. Selected character background turns green, all others become red.
    1. Message displayed to user: Choose your first enemy.
        1. Clicking any of the three images with a red background will move that image to the enemy fighting area.
    1. Attack button appears, message displayed to user: Click the attack button.
        1. Clicking the attack button reduces the enemy health by a certain attack power.
        1. Player attack power increases with every attack.
        1. Player health is then reduced by the amount of enemy counter attack power.
        1. Enemy counter attack power does not change.
    1. If the enemy runs out of health before the player, message displayed to user: You defeated the firs (or 'second') enemy, choose your next enemy (or 'final opponent').
        1. Enemy is moved back in line with other images and background turns gray.
        1. Reset button appears which reloads the page.
    1. If the player runs out of health before the enemy, message displayed to user: You lose. Try again.
        1. Player background becomes gray.
        1. Reset button appears which reloads the page.
    1. If the player defeats all three enemies, message displayed to user: You win, Congratulations!
        1. Reset button appears which reloads the page. 


