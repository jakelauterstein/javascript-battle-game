var playerName = window.prompt("What is your robot's name?");
var playerHealth = 50;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

const randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
}

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    let damageToEnemy = randomNumber(playerAttack -3, playerAttack);
    let damageToPlayer = randomNumber(enemyAttack -3, enemyAttack);

    enemyHealth = Math.max(0, enemyHealth - damageToEnemy);
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = Math.max(0, playerHealth - damageToPlayer);
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } // end of while loop
}; // end of fight function

// fight each enemy-robot by looping over them and fighting them one at a time
// function to start a new game
var startGame = function() {
  
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = randomNumber(40, 60);

      fight(pickedEnemyName);

      console.log('post-fight confirm');

      // if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length -1) {
        let storeConfirm = confirm('The fight is over, visit the store before the next round?');

        if (storeConfirm) {
          shop();
        }
      }

      if (playerHealth <= 0) {
        break;
      }
    }
   
  }
  endGame();
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
}

const shop = function() {
  let shopOptionPrompt = prompt(
    'Would you like to REFILL your Health, UPGRADE your Attack, or LEAVE the store? Please enter refill, upgrade, or leave.'
  )

  switch(shopOptionPrompt) {
    case "REFILL": // new case (fall thru)
    case "refill": 
      if (playerMoney >= 7){
        alert("Refilling player's health by 20 for 7 dollars");
        playerHealth += 20;
        playerMoney -= 7;
        console.log(playerHealth, playerMoney);
      } else {
          alert('You do not have enough money!')
      }
     
      break;
    case "UPGRADE": // new case
    case "upgrade": 
    if (playerMoney >= 7){
      alert("Upgrading player's attack by 6 for 7 dollars");
      playerAttack += 6;
      playerMoney -= 7;
      console.log(playerAttack, playerMoney);
    } else {
      alert('You do not have enough money!')
    }
      break;
    case 'LEAVE':
    case "leave": 
      alert("Come back soon!");
      break;
      default: 
      alert('Pick a valid option');
      shop();
      break;
  }
}

// start the game when the page loads
startConfirm = confirm('Would you like to start the robot gladiators game?');

if (startConfirm) {
  startGame();
} else {
  alert("Please refresh to start the game over when you're ready!")
}
