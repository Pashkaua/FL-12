

class Fighter {
    constructor(obj) {
        let health = obj.hp;

        this.getName = () => obj.name;
        this.getDamage = () => obj.damage;
        this.getStrength = () => obj.strength;
        this.getAgility = () => obj.agility;
        this.getHealth = () => health;

        this.wins = 0;
        this.loses = 0;


        this.logCombatHistory = () => console.log(`Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.loses}`);

        this.heal = (hpPoint) => {
            health += hpPoint;
        };

        this.dealDamage = (damPoints) => {
            health -= damPoints;
            if (health < 0) {
                health = 0;
            }
        }

        this.addWin = () => this.wins + 1;

        this.addLoss = () => this.loses - 1;


        this.attack = (defender) => {

            let max = 100;

            let defenderHp = defender.getHealth();

            let attackResult = max - (defender.getStrength() + defender.getAgility());

            let rand = Math.floor(Math.random() * max);


            if (rand > attackResult) {
                defenderHp - this.getDamage();
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);

            } else {
                console.log('Commodus attack missed');
            }
        }
    }
}


const myFighter = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });

const myFighter1 = new Fighter({ name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15 });
const myFighter2 = new Fighter({ name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20 });


myFighter1.attack(myFighter2);

