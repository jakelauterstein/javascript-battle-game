

const randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
}

const getPlayerName = function() {

  let name = prompt("Enter your robot's name");
  while (name === "" || name === null || name === undefined || name.match(/^ *$/) !== null){
    alert('You need to enter a valid name');
    name = prompt("Enter your robot's name");
  }
  console.log('Your name is' + name);
  return name;
}

const playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack:10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
}
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

const fightOrSkip = function() {
  let promptFight = prompt('Would you like to fight or skip this round? Enter FIGHT or SKIP to proceed. Skipping subtracts $10 from your bank');
  promptFight = promptFight.toLowerCase();
    // Enter the conditional recursive function call here!
  if (promptFight === '' || promptFight === null || promptFight.match(/^ *$/) !== null) {
    alert('Enter a valid option');
    return fightOrSkip();
  }

  if (promptFight === 'skip') {
    confirmSkip = confirm('Are you sure you want to skip?')

    if (confirmSkip) {
      alert('Round skipped, goodbye!');
      playerInfo.playerMoney = playerInfo.money - 10;

      return true;
      
    } else {
      return fightOrSkip();
    }
  }

  return false;
}

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    if(fightOrSkip()) {
      break;
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    let damageToEnemy = randomNumber(playerInfo.attack -3, playerInfo.attack);
    let damageToPlayer = randomNumber(enemy.attack -3, enemy.attack);

    enemy.health = Math.max(0, enemy.health - damageToEnemy);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    playerInfo.health = Math.max(0, playerInfo.health - damageToPlayer);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  } // end of while loop
}; // end of fight function

// fight each enemy-robot by looping over them and fighting them one at a time
// function to start a new game
var startGame = function() {
  
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      console.log('post-fight confirm');

      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length -1) {
        let storeConfirm = confirm('The fight is over, visit the store before the next round?');

        if (storeConfirm) {
          shop();
        }
      }

      if (playerInfo.health <= 0) {
        break;
      }
    }
   
  }
  endGame();
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
      playerInfo.refillHealth();
      break;
    case "UPGRADE": // new case
    case "upgrade": 
      playerInfo.upgradeAttack();
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
