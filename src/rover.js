const LEFT  = { N:'W', W:'S', S:'E', E:'N' };
const RIGHT = { N:'E', E:'S', S:'W', W:'N' };

export class Rover {
  constructor(opts){ /* mint előbb */ 
    this.x=opts.x; this.y=opts.y; this.heading=opts.heading;
    this.W=opts.width; this.H=opts.height;
    this.obstacles = new Set((opts.obstacles||[]).map(p=>`${p.x},${p.y}`));
    this.obstacleReport=null;
  }
  state(){ return { x:this.x, y:this.y, heading:this.heading }; }
  execute(cmds){
    this.obstacleReport = null;
    for(const c of cmds){
      if(c==='l') this.heading = LEFT[this.heading];
      else if(c==='r') this.heading = RIGHT[this.heading];
      // mozgás később
    }
    return { ...this.state(), obstacle: this.obstacleReport };
  }
}
