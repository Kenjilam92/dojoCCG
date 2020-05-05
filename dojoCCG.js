class Card {
    constructor (name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    display(){
        console.log(`${this.name}- cost: ${this.cost}, power: ${this.power}, resiliance: ${this.res}`);
    }
    attack(target){
        // reduce target res by power
        this.display();
        target.display();
        console.log(this.name,'attacks',target.name)
        target.res -= this.power;
        target.display();
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        //reduce target stat by magnitude
        this.display();
        target.display();
        console.log(this.name,'effect is played on',target.name)
        if(this.stat === 'p'){
            target.power += this.magnitude;
            }
        else {
            target.res += this.magnitude;
            }
        target.display();
        }

    display(){
        console.log(`${this.name}- cost: ${this.cost}, stat: ${this.stat}, magnitude: ${this.magnitude}`)
    }
}

const pikachu = new Unit ('Pikachu', 3, 5, 15);
const thunderbolt = new Effect('Thunderbolt', 2, 'r', -5);
const charmander = new Unit ('Charmander', 3, 4, 20);
const fireflame = new Effect('Fireflame', 3, 'p', -4);

pikachu.attack(charmander);

charmander.attack(pikachu);

thunderbolt.play(charmander);

fireflame.play(pikachu);
