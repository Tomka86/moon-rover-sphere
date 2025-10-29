import { expect } from 'chai';
import { Rover } from '../src/rover.js';

describe('Movement (torus baseline)', () => {
  it('f/b lépés, x wrap', () => {
    const r = new Rover({ x:0,y:0,heading:'E',width:5,height:4 });
    r.execute('f'); r.execute('f'); r.execute('b'); // -> (1,0)
    expect(r.state()).to.deep.equal({ x:1,y:0,heading:'E' });

    r.execute('l'); // N
    r.execute('b'); // N hátra -> y+1 => (1,1)
    expect(r.state()).to.deep.equal({ x:1,y:1,heading:'N' });

    r.execute('l'); // W
    r.execute('f'); r.execute('f'); // x: 1->0->4
    expect(r.state()).to.deep.equal({ x:4,y:1,heading:'W' });
  });
});
