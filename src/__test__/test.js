import Character from "../js/Character";
import Bowman from "../js/Bowman";
import Swordsman from "../js/Swordsman";
import Magician from "../js/Magician";
import Daemon from "../js/Daemon";
import Undead from "../js/Undead";
import Zombie from "../js/Zombie";

test("Имя(строка) персоанажа", () => {
    expect(() => new Character(7, "Bowman")).toThrow()
})

test("Проверка на кол-во символов(2)", () => {
    expect(() => new Character("c", "Bowman")).toThrow()
})

test("Проверка на тип", () => {
    expect(() => new Character("Oleg", "BoBo")).toThrow()
})

test("Проверка на кол-во символов(10)", () => {
    expect(() => new Character("abcdifjklmnop", "Bowman")).toThrow()
})

test("Проверка levelUp на повышение", () => {
    const pers = new Bowman("alex", "Bowman");
    pers.levelUp();
    expect(pers).toEqual({
        name: 'alex',
        type: 'Bowman',
        level: 2,
        attack: 30,
        defence: 30,
        health: 100,
    })
})

test("Проверка на 0", () => {
    const pers = new Bowman("alex", "Bowman");
    pers.health = 0;
    expect(() => pers.levelUp()).toThrow('Нельзя повысить левел умершего!');
})

test('Метод damage должен уствновить health = 0, при health < 0', () => {
    const pers = new Bowman('alex', 'Bowman');
    const expectedHealth = 0;
    pers.damage(200);
    pers.health = 0;
    expect(pers.health).toEqual(expectedHealth);
  });

test('Метод damage должен правильно изменять значение health', () => {
    const pers = new Bowman('alex', 'Bowman');
    const expectedHealth = 99.05;
    pers.damage(1);
    expect(pers.health).toEqual(expectedHealth);
  });

  test('Метод damage не должен изменять значение health, если health равно 0', () => {
    const pers = new Bowman('alex', 'Bowman');
    pers.health = 0;
    const result = {
      name: 'alex',
      type: 'Bowman',
      health: 0,
      level: 1,
      attack: 25,
      defence: 25,
    };
    pers.damage(20);
    expect(pers).toEqual(result);
  });




test("выполнение верно(Bowman)", () => {
    const pers = new Bowman("alex", "Bowman");
    expect(pers).toEqual({
        name: "alex",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
})

test("выполнение верно(Daemon)", () => {
    const pers = new Daemon("alex", "Daemon");
    expect(pers).toEqual({
        name: "alex",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
})

test("выполнение верно(Magician)", () => {
    const pers = new Magician("alex", "Magician");
    expect(pers).toEqual({
        name: "alex",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
})

test("выполнение верно(Undead)", () => {
    const pers = new Undead("alex", "Undead");
    expect(pers).toEqual({
        name: "alex",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
})

test("выполнение верно(Swordsman)", () => {
    const pers = new Swordsman("alex", "Swordsman");
    expect(pers).toEqual({
        name: "alex",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
})

test("выполнение верно(Zombie)", () => {
    const pers = new Zombie("alex", "Zombie");
    expect(pers).toEqual({
        name: "alex",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
})