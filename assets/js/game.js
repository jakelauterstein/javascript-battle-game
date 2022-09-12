let playerName = window.prompt("Enter a name for your robot fighter:");
let playerHealth = 100;
let playerAttack = 10;

let enemyName = 'Roborto';
let enemyHealth = 50;
let enemyAttack = 12;


const fight = function(){
  alert('Welcome to Robot Gladiators!');

   //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log('enemy health is ' + enemyHealth);

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log('player health is ' + playerHealth);

  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}

}

fight();