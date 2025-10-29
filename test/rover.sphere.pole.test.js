import { expect } from 'chai';
import { Rover } from '../src/rover.js';

describe('Spherical wrapping (pole crossing)', () => {
  // H=4 -> y: 0..3 ; északi pólus a felső szél
  it('North pole: flip to S and shift x by W/2', () => {
    const r = new Rover({ x: 0, y: 3, heading: 'N', width: 8, height: 4 });
    r.execute('f'); // egyet lépne N irányba a póluson túl
    expect(r.state()).to.deep.equal({ x: 4, y: 0, heading: 'S' });
  });

  it('South pole: flip to N and shift x by W/2', () => {
    const r = new Rover({ x: 1, y: 0, heading: 'S', width: 8, height: 4 });
    r.execute('f'); // egyet lépne S irányba a póluson túl
    expect(r.state()).to.deep.equal({ x: 5, y: 3, heading: 'N' });
  });
});
