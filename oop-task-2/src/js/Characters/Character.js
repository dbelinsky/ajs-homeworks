export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || (name.length < 2 || name.length > 10)) {
            throw new Error('Name must be between 2 and 10 characters long');
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('Invalid character type');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health === 0) {
          throw new Error('Нельзя повысить левел умершего');
        }
    
        this.level += 1;
        this.attack += (this.attack * 0.2);
        this.defence += (this.defence * 0.2);
        this.health = 100;
      }

    damage(points) {
        if (!this.health) {
            this.health = 0;
            return;
        }
        this.health -= points * (1 - defence / 100);
    }
}