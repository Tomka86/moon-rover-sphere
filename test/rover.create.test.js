import { expect } from 'chai';
import { Rover } from '../src/rover.js';

describe('Rover creation', () => {
  it('kezdő állapot: x,y,heading', () => {
    const rover = new Rover({ x: 2, y: 3, heading: 'N', width: 10, height: 8 });
    expect(rover.state()).to.deep.equal({ x: 2, y: 3, heading: 'N' });
  });
});
