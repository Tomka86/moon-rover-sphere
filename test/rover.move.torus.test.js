import { expect } from 'chai';
import { Rover } from '../src/rover.js';

describe('Movement (torus baseline)', () => {
  it('f/b lépés, x wrap', () => {
    const r = new Rover({ x:0,y:0,heading:'E',width:5,height:4 });
    r.execute('f'); r.execute('f'); r.execute('b'); 
    expect(r.state()).to.deep.equal({ x:1,y:0,heading:'E' });

    r.execute('l'); 
    r.execute('b'); 
    expect(r.state()).to.deep.equal({ x:1,y:0,heading:'N' });

    r.execute('l'); 
    r.execute('f'); r.execute('f'); 
    expect(r.state()).to.deep.equal({ x:4,y:0,heading:'W' });
  });
});
