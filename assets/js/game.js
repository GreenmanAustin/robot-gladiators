var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (!(promptFight.toLowerCase() == "skip") && !(promptFight.toLowerCase() == "fight")) {
        window.alert("You FUCKED UP");

    } else if (promptFight.toLowerCase() == "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye");
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    }
    else {


        enemyHealth = enemyHealth - playerAttack;


        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");


        playerHealth = playerHealth - enemyAttack;



        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    }
}
fight();

