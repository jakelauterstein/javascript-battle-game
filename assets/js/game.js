alert('Welcome to Robot Gladiators!');
let playerName = window.prompt("Enter a name for your robot fighter:");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble']
let enemyHealth = 50;
let enemyAttack = 12;


const fight = function(enemyName){
  while (enemyHealth > 0 && playerHealth > 0) {
    let promptFight = prompt('Would you like to fight or skip? Enter "FIGHT" to fight or "SKIP" to skip');

    if (promptFight === 'SKIP' || promptFight === 'skip') {
      let confirmSkip = confirm('Are you sure you want to skip?');
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      } 
    }
    
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );      
    
    if (enemyHealth <= 0) {
      window.alert(enemyName + 'has died!')
   
      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

      playerHealth = playerHealth - enemyAttack;
    
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
  
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          break;
        
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
  } // end of while loop
}  // end of fight function

for(let i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    alert('Welcome to round ' + (i+1) + '!')

    let pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
  }   else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
  
}