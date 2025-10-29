import { expect } from 'chai';
import { Rover } from '../src/rover.js';

describe('Turning', () => {
  it('balra fordul (l)', () => {
    const r = new Rover({ x:0,y:0,heading:'N',width:5,height:5 });
    r.execute('l');
    expect(r.state().heading).to.equal('W');
  });
  it('jobbra fordul (r)', () => {
    const r = new Rover({ x:0,y:0,heading:'N',width:5,height:5 });
    r.execute('r');
    expect(r.state().heading).to.equal('E');
  });
});
