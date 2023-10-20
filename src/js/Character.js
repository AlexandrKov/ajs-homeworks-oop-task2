export default class Character {
    constructor(name, type) {
        if(name.length < 2 || name.length > 10) {
            throw new Error("Имя не меньше 2 символов и не больше 10");
        }
        if(typeof name !== "string") {
            throw new Error("Имя должно быть строкой");
        }
        const players = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        if(!players.includes(type)) {
            throw new Error("Такого персонажа нет");
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if(this.health === 0) {
            throw new Error("нельзя повысить левел умершего");
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if(this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        }
        if(this.health < 0) {
            this.health = 0;
        }
    }
}