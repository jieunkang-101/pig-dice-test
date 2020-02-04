import { Player } from './../src/pig-dice.js';

describe('Player', () => {

  test('should correctly define Player turn as 0', () => {
    var player = new Player (10,5,0);
    expect(player.Turn(1)).toEqual(0);
    });

  test('should correctly get player score as 15', () => {
    var player = new Player (10,5,0);
    expect(player.Hold()).toEqual(15);
    }); 

  test('should correctly switch player turn as 1', () => {
    var player = new Player (10,5,0);
    expect(player.Switch(0)).toEqual(1);
    }); 

  test('should correctly show player current score as 5', () => {
    var player = new Player (10,5,0);
    expect(player.checkRoll()).toEqual(5);
    }); 
});