
class Fighter {
    constructor(obj) {
        let health = obj.hp;

        this.getName = () => obj.name;
        this.getDamage = () => obj.damage;
        this.getStrength = () => obj.strength;
        this.getAgility = () => obj.agility;
        this.getHealth = () => health;

        let wins = 0;
        let loses = 0;


        this.logCombatHistory = () => console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${loses}`);

        this.heal = (hpPoints) => {
            health += hpPoints;
        };

        this.dealDamage = (damPoints) => {
            health -= damPoints;
            if (health < 0) {
                health = 0;
            }
        }

        this.addWin = () => wins++;

        this.addLoss = () => loses--;

        this.attack = (defender) => {

            const max = 100;
            let rand = Math.floor(Math.random() * max);

            let attackResult = max - (defender.getStrength() + defender.getAgility());

            if (rand > attackResult) {
                defender.dealDamage(this.getDamage());

                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        }
    }
}


function battle(fighter1, fighter2) {

    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight. `);
        return;
    }
    if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight. `);
        return;
    }

    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {

        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }

    if (!fighter1.getHealth()) {

        fighter1.addLoss();
        fighter2.addWin();
        console.log(`${fighter2.getName()} has won !`);
    }
    if (!fighter2.getHealth()) {

        fighter2.addLoss();
        fighter1.addWin();
        console.log(`${fighter1.getName()} has won !`);
    }
}


const myFighter1 = new Fighter({ name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15 });
const myFighter2 = new Fighter({ name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20 });

battle(myFighter1, myFighter2);
battle(myFighter1, myFighter2);