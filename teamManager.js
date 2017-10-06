function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.printStats = function() {
        console.log("Name: " + this.name + "\nProfession: " + this.profession +
            "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength +
            "\nHitpoints: " + this.hitpoints);
        console.log("\n----------------------\n")
    }
    this.isAlive = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is still alive!")
            return true;
        } else {
            console.log(this.name + " is dead!");
            return false;
        }
    }
    this.attack = function(character2) {
        character2.hitpoints -= this.strength;
    }
    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    }
}

var warrior = new Character("Kyle", "Coder", "Male", 27, 50, 100);
var rogue = new Character("Shannon", "Dancer", "Female", 23, 25, 100);

while (warrior.isAlive() === true && rogue.isAlive() === true) {
    warrior.attack(rogue);
    rogue.attack(warrior);
    warrior.printStats();
    rogue.printStats();


}