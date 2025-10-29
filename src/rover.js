const LEFT  = { N: 'W', W: 'S', S: 'E', E: 'N' };
const RIGHT = { N: 'E', E: 'S', S: 'W', W: 'N' };
const STEP = {
  N: { dx: 0, dy: 1 },   
  E: { dx: 1, dy: 0 },
  S: { dx: 0, dy: -1 },  
  W: { dx: -1, dy: 0 }
};

export class Rover {
  constructor({ x, y, heading, width, height, obstacles = [] }) {
    this.x = x;
    this.y = y;
    this.heading = heading;
    this.W = width;
    this.H = height;
    this.obstacles = new Set(obstacles.map(p => `${p.x},${p.y}`));
    this.obstacleReport = null;
  }

  state() {
    return { x: this.x, y: this.y, heading: this.heading };
  }

  move(delta) {
    const s = STEP[this.heading];
    let nx = this.x + delta * s.dx;
    let ny = this.y + delta * s.dy;


    nx = (nx % this.W + this.W) % this.W;

 
    if (this.heading === 'N' && ny >= this.H) {
      ny = 0;
      this.heading = 'S';
      nx = (nx + Math.floor(this.W / 2)) % this.W;
    } else if (this.heading === 'S' && ny < 0) {
      ny = this.H - 1;
      this.heading = 'N';
      nx = (nx + Math.floor(this.W / 2)) % this.W;
    } else {

      if (ny < 0) ny = 0;
      if (ny >= this.H) ny = this.H - 1;
    }

    return { nx, ny };
  }

  execute(cmds) {
    this.obstacleReport = null;

    for (const c of cmds) {
      if (c === 'l') {
        this.heading = LEFT[this.heading];
      } else if (c === 'r') {
        this.heading = RIGHT[this.heading];
      } else if (c === 'f' || c === 'b') {
        const { nx, ny } = this.move(c === 'f' ? +1 : -1);

       
        const key = `${nx},${ny}`;
        if (this.obstacles.has(key)) {
          this.obstacleReport = `obstacle at (${nx},${ny})`;
          break; 
        }

        this.x = nx;
        this.y = ny;
      }
      
    }

    return { ...this.state(), obstacle: this.obstacleReport };
  }
}



