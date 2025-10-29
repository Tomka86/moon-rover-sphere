export class Rover {
  constructor({ x, y, heading, width, height, obstacles = [] }) {
    this.x = x; this.y = y; this.heading = heading;
    this.W = width; this.H = height;
    this.obstacles = new Set(obstacles.map(p => `${p.x},${p.y}`));
    this.obstacleReport = null;
  }
  state() { return { x: this.x, y: this.y, heading: this.heading }; }
  execute(cmds) { return { ...this.state(), obstacle: null }; } // később
}
