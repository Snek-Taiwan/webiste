(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={volume:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
  </svg>`,volumeMute:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon svg-muted">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>`,pause:`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="svg-icon">
    <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
    <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
  </svg>`,play:`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="svg-icon">
    <polygon points="6 3 20 12 6 21 6 3"></polygon>
  </svg>`,gamepad:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <line x1="6" y1="12" x2="10" y2="12"></line>
    <line x1="8" y1="10" x2="8" y2="14"></line>
    <line x1="15" y1="13" x2="15.01" y2="13"></line>
    <line x1="18" y1="11" x2="18.01" y2="11"></line>
    <rect x="2" y="6" width="20" height="12" rx="4"></rect>
  </svg>`,swipe:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
  </svg>`,flame:`<svg width="32" height="32" viewBox="0 0 24 24" fill="url(#flameGradient)" stroke="#ff9100" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="svg-flame">
    <defs>
      <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#ff1744" />
        <stop offset="60%" stop-color="#ff9100" />
        <stop offset="100%" stop-color="#ffd700" />
      </linearGradient>
    </defs>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
  </svg>`,xLogo:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="svg-x">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>`,camera:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>`,restart:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
    <polyline points="3 3 3 8 8 8"></polyline>
  </svg>`,chevronUp:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>`,chevronDown:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>`,chevronLeft:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>`,chevronRight:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>`,back:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>`,trophy:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
  </svg>`,gift:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <polyline points="20 12 20 22 4 22 4 12"></polyline>
    <rect x="2" y="7" width="20" height="5"></rect>
    <line x1="12" y1="22" x2="12" y2="7"></line>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
  </svg>`,sparkles:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
  </svg>`,close:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`},t=class{ctx=null;muted=!1;isUnlocked=!1;constructor(){let e=localStorage.getItem(`snek_game_muted`);e!==null&&(this.muted=e===`true`)}unlock(){if(!this.isUnlocked)try{let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.ctx.state===`suspended`&&this.ctx.resume(),this.isUnlocked=!0)}catch{}}isMuted(){return this.muted}toggleMute(){return this.muted=!this.muted,localStorage.setItem(`snek_game_muted`,String(this.muted)),this.muted}canPlay(){return!this.muted&&(this.ctx||this.unlock(),this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume(),!!this.ctx)}playEat(){if(!this.canPlay()||!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(587.33,e),t.frequency.exponentialRampToValueAtTime(880,e+.08),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.1)}playAda(){if(!this.canPlay()||!this.ctx)return;let e=this.ctx.currentTime;[659.25,830.61,1046.5].forEach((t,n)=>{if(!this.ctx)return;let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`triangle`,r.frequency.setValueAtTime(t,e+n*.05),i.gain.setValueAtTime(.2,e+n*.05),i.gain.exponentialRampToValueAtTime(.001,e+n*.05+.15),r.connect(i),i.connect(this.ctx.destination),r.start(e+n*.05),r.stop(e+n*.05+.16)})}playChili(){if(!this.canPlay()||!this.ctx)return;let e=this.ctx.currentTime;[440,554.37,659.25,880].forEach((t,n)=>{if(!this.ctx)return;let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`sawtooth`,r.frequency.setValueAtTime(t,e+n*.04),i.gain.setValueAtTime(.15,e+n*.04),i.gain.exponentialRampToValueAtTime(.001,e+n*.04+.12),r.connect(i),i.connect(this.ctx.destination),r.start(e+n*.04),r.stop(e+n*.04+.14)})}playBoost(){if(!this.canPlay()||!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(440,e+.06),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.08)}playDie(){if(!this.canPlay()||!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`square`,t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(50,e+.35),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.38),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.4)}playHighScore(){if(!this.canPlay()||!this.ctx)return;let e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{if(!this.ctx)return;let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`triangle`,r.frequency.setValueAtTime(t,e+n*.1),i.gain.setValueAtTime(.22,e+n*.1),i.gain.exponentialRampToValueAtTime(.001,e+n*.1+.3),r.connect(i),i.connect(this.ctx.destination),r.start(e+n*.1),r.stop(e+n*.1+.32)})}},n=class{particles=[];update(e){let t=e/16.66;for(let e=this.particles.length-1;e>=0;e--){let n=this.particles[e];n.x+=n.vx*t,n.y+=n.vy*t,n.alpha-=n.decay*t,n.size=Math.max(0,n.size-.05*t),(n.alpha<=0||n.size<=0)&&this.particles.splice(e,1)}}render(e){if(this.particles.length!==0){e.save();for(let t of this.particles)e.globalAlpha=Math.max(0,Math.min(1,t.alpha)),e.fillStyle=t.color,t.shape===`square`?e.fillRect(t.x-t.size/2,t.y-t.size/2,t.size,t.size):(e.beginPath(),e.arc(t.x,t.y,t.size,0,Math.PI*2),e.fill());e.restore()}}emitEat(e,t){for(let n=0;n<16;n++){let r=Math.PI*2*n/16+(Math.random()-.5)*.5,i=1.5+Math.random()*3.5;this.particles.push({x:e,y:t,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:2.5+Math.random()*3.5,color:Math.random()>.3?`#00e676`:`#69f0ae`,alpha:1,decay:.03+Math.random()*.02,shape:Math.random()>.5?`circle`:`square`})}}emitSuperEat(e,t){for(let n=0;n<28;n++){let n=Math.random()*Math.PI*2,r=2+Math.random()*5;this.particles.push({x:e,y:t,vx:Math.cos(n)*r,vy:Math.sin(n)*r,size:3+Math.random()*4,color:Math.random()>.4?`#ffd700`:`#00b0ff`,alpha:1,decay:.02+Math.random()*.015,shape:`spark`})}}emitBurnDash(e,t,n){for(let r=0;r<3;r++){let r=(Math.random()-.5)*.8,i=n+Math.PI+r,a=1+Math.random()*2.5;this.particles.push({x:e+(Math.random()-.5)*8,y:t+(Math.random()-.5)*8,vx:Math.cos(i)*a,vy:Math.sin(i)*a,size:2+Math.random()*3,color:Math.random()>.5?`#ff9100`:`#ff3d00`,alpha:.9,decay:.05+Math.random()*.03,shape:`circle`})}}emitDeath(e,t){for(let n=0;n<35;n++){let n=Math.random()*Math.PI*2,r=2+Math.random()*6;this.particles.push({x:e,y:t,vx:Math.cos(n)*r,vy:Math.sin(n)*r,size:3+Math.random()*5,color:Math.random()>.5?`#ff1744`:`#00e676`,alpha:1,decay:.025+Math.random()*.02,shape:`square`})}}clear(){this.particles=[]}},r=class{canvas;ctx;callbacks;soundManager;particleSystem;width=440;height=560;px=220;py=400;pvx=0;pvy=0;playerSize=18;isRocketBoosting=!1;rocketTimer=0;gravity=.38;jumpForce=-10.5;rocketForce=-22;cameraY=0;highestAltitude=0;currentAltitude=0;platforms=[];nextPlatformY=0;isRunning=!1;lastTime=0;animFrameId=null;mascotImg=new Image;imageLoaded=!1;constructor(e,r){this.canvas=e;let i=e.getContext(`2d`);if(!i)throw Error(`No 2D context`);this.ctx=i,this.callbacks=r,this.soundManager=new t,this.particleSystem=new n,this.mascotImg.src=`./assets/face/SNEK_0002.webp`,this.mascotImg.onload=()=>{this.imageLoaded=!0},this.initCanvasSize()}initCanvasSize(){let e=window.devicePixelRatio||1;this.canvas.width=this.width*e,this.canvas.height=this.height*e,this.ctx.scale(e,e)}start(){this.soundManager.unlock(),this.px=this.width/2,this.py=460,this.pvx=0,this.pvy=this.jumpForce,this.cameraY=0,this.highestAltitude=0,this.currentAltitude=0,this.isRocketBoosting=!1,this.rocketTimer=0,this.particleSystem.clear(),this.initPlatforms(),this.isRunning=!0,this.lastTime=performance.now(),this.callbacks.onAltitudeChange(0,0),this.loop(this.lastTime)}setHorizontalMove(e){this.pvx=e*4.8}initPlatforms(){for(this.platforms=[],this.platforms.push({id:`plat_0`,x:this.width/2-40,y:500,w:80,h:14,type:`GREEN_CANDLE`}),this.nextPlatformY=440;this.nextPlatformY>-300;)this.spawnPlatform(this.nextPlatformY),this.nextPlatformY-=55+Math.random()*25}spawnPlatform(e){let t=Math.random(),n=`GREEN_CANDLE`,r=70;t<.12&&Math.abs(e)>200?(n=`ADA_ROCKET`,r=60):t<.28&&Math.abs(e)>300?(n=`RED_BROKEN`,r=65):t<.45&&Math.abs(e)>150&&(n=`MOVING_CLOUD`,r=75);let i=20+Math.random()*(this.width-r-40);this.platforms.push({id:`plat_${e}_${Math.random()}`,x:i,y:e,w:r,h:14,type:n,vx:n===`MOVING_CLOUD`?Math.random()>.5?1.5:-1.5:0,startX:i})}loop=e=>{if(!this.isRunning)return;let t=e-this.lastTime;this.lastTime=e,this.update(t),this.render(),this.animFrameId=requestAnimationFrame(this.loop)};destroy(){this.isRunning=!1,this.animFrameId!==null&&cancelAnimationFrame(this.animFrameId)}update(e){this.particleSystem.update(e),this.isRocketBoosting&&(this.rocketTimer-=e,this.particleSystem.emitBurnDash(this.px,this.py+10,-Math.PI/2),this.rocketTimer<=0&&(this.isRocketBoosting=!1)),this.isRocketBoosting||(this.pvy+=this.gravity),this.px+=this.pvx,this.py+=this.pvy,this.px<-10?this.px=this.width+10:this.px>this.width+10&&(this.px=-10);for(let e of this.platforms)e.type===`MOVING_CLOUD`&&e.vx&&(e.x+=e.vx,(e.x<=10||e.x+e.w>=this.width-10)&&(e.vx=-e.vx));if(this.pvy>0&&!this.isRocketBoosting){for(let e of this.platforms)if(!e.broken&&this.px+this.playerSize*.7>e.x&&this.px-this.playerSize*.7<e.x+e.w&&this.py+this.playerSize>=e.y&&this.py+this.playerSize<=e.y+e.h+this.pvy+3){this.py=e.y-this.playerSize,e.type===`ADA_ROCKET`?(this.isRocketBoosting=!0,this.rocketTimer=2200,this.pvy=this.rocketForce,this.soundManager.playAda(),this.particleSystem.emitSuperEat(this.px,this.py)):e.type===`RED_BROKEN`?(e.broken=!0,this.pvy=this.jumpForce*.75,this.soundManager.playDie(),this.particleSystem.emitDeath(e.x+e.w/2,e.y+e.h/2)):(this.pvy=this.jumpForce,this.soundManager.playEat(),this.particleSystem.emitEat(this.px,this.py+this.playerSize));break}}let t=this.height*.45;for(this.py-this.cameraY<t&&(this.cameraY=this.py-t),this.currentAltitude=Math.max(0,Math.floor(-this.cameraY/6)),this.currentAltitude>this.highestAltitude&&(this.highestAltitude=this.currentAltitude,this.callbacks.onAltitudeChange(this.currentAltitude,this.highestAltitude));this.nextPlatformY>this.cameraY-200;)this.spawnPlatform(this.nextPlatformY),this.nextPlatformY-=55+Math.random()*25;for(let e=this.platforms.length-1;e>=0;e--)this.platforms[e].y>this.cameraY+this.height+100&&this.platforms.splice(e,1);this.py-this.cameraY>this.height+50&&this.handleGameOver()}handleGameOver(){this.isRunning=!1,this.soundManager.playDie(),this.callbacks.onGameOver(this.highestAltitude)}render(){let e=this.ctx;e.save();let t=Math.min(1,this.highestAltitude/2e3),n=e.createLinearGradient(0,0,0,this.height);n.addColorStop(0,`#05070a`),n.addColorStop(1,t>.5?`#060a12`:`#0b0e17`),e.fillStyle=n,e.fillRect(0,0,this.width,this.height),e.fillStyle=`#ffffff`;for(let t=0;t<20;t++){let n=t*73%this.width,r=((t*127-this.cameraY*.2)%this.height+this.height)%this.height;e.globalAlpha=.3+t%5*.12,e.fillRect(n,r,2,2)}e.globalAlpha=1,e.save(),e.translate(0,-this.cameraY),this.particleSystem.render(e);for(let t of this.platforms)t.broken||(e.save(),t.type===`GREEN_CANDLE`?(e.fillStyle=`#00e676`,e.shadowColor=`#00e676`,e.shadowBlur=8,e.beginPath(),e.roundRect(t.x,t.y,t.w,t.h,6),e.fill(),e.strokeStyle=`#69f0ae`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+t.w/2,t.y-4),e.lineTo(t.x+t.w/2,t.y+t.h+4),e.stroke()):t.type===`ADA_ROCKET`?(e.fillStyle=`#ffd700`,e.shadowColor=`#ffd700`,e.shadowBlur=12,e.beginPath(),e.roundRect(t.x,t.y,t.w,t.h,6),e.fill(),e.fillStyle=`#000`,e.font=`bold 9px monospace`,e.textAlign=`center`,e.fillText(`BOOST`,t.x+t.w/2,t.y+10)):t.type===`RED_BROKEN`?(e.fillStyle=`#ff1744`,e.shadowColor=`#ff1744`,e.shadowBlur=6,e.beginPath(),e.roundRect(t.x,t.y,t.w,t.h,4),e.fill(),e.strokeStyle=`#000`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+t.w*.45,t.y),e.lineTo(t.x+t.w*.55,t.y+t.h),e.stroke()):t.type===`MOVING_CLOUD`&&(e.fillStyle=`#00b0ff`,e.shadowColor=`#00b0ff`,e.shadowBlur=8,e.beginPath(),e.roundRect(t.x,t.y,t.w,t.h,8),e.fill()),e.restore());if(e.save(),e.translate(this.px,this.py),this.isRocketBoosting?(e.shadowColor=`#ffd700`,e.shadowBlur=20):(e.shadowColor=`#00e676`,e.shadowBlur=10),this.imageLoaded&&this.mascotImg.complete){let t=this.playerSize*2.2;e.drawImage(this.mascotImg,-t/2,-t/2,t,t)}else e.fillStyle=`#00e676`,e.beginPath(),e.arc(0,0,this.playerSize,0,Math.PI*2),e.fill();e.restore(),e.restore(),e.restore()}},i=class{container;engine=null;cleanups=[];constructor(e){this.container=e}mount(){this.container.innerHTML=`
      <div class="game-view moonrun-view">
        <!-- Top HUD -->
        <header class="arcade-header">
          <div class="brand-section">
            <button id="btn-back-lobby" class="icon-btn back-btn" title="返回大廳" aria-label="返回大廳">
              ${e.back}
            </button>
            <span class="brand-title">MOON RUN</span>
          </div>

          <div class="hud-stats">
            <div class="stat-item">
              <span class="stat-label">ALTITUDE</span>
              <span id="stat-alt" class="stat-value score">0 M</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">HIGH</span>
              <span id="stat-high-alt" class="stat-value high-score">0 M</span>
            </div>
          </div>

          <div class="hud-actions">
            <button id="btn-audio" class="icon-btn" title="切換音效" aria-label="切換音效">
              ${e.volume}
            </button>
          </div>
        </header>

        <!-- Canvas Arena Container -->
        <main class="canvas-container">
          <div class="canvas-wrapper moonrun-wrapper">
            <canvas id="moonrun-canvas"></canvas>

            <!-- Game Over Modal -->
            <div id="gameover-modal" class="modal-overlay">
              <div class="game-modal">
                <h2 class="modal-title">CRASH LANDED</h2>
                <div class="modal-stats-grid">
                  <div class="modal-stat-box" style="grid-column: span 2;">
                    <span class="modal-stat-label">最高攀升高度</span>
                    <span id="modal-alt" class="modal-stat-val primary">0 M</span>
                  </div>
                </div>

                <div class="modal-actions">
                  <button id="btn-restart" class="btn-primary">
                    ${e.restart}
                    <span>LAUNCH AGAIN</span>
                  </button>
                  <div class="share-row">
                    <button id="btn-share-x" class="btn-secondary">
                      ${e.xLogo}
                      <span>SHARE TO X</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Left / Right Touch Control Zone -->
        <nav class="moonrun-touch-deck" aria-label="Steering Controls">
          <button id="ctrl-left" class="moonrun-steer-btn" aria-label="向左移動">
            ${e.chevronLeft}
            <span>LEFT</span>
          </button>
          <button id="ctrl-right" class="moonrun-steer-btn" aria-label="向右移動">
            <span>RIGHT</span>
            ${e.chevronRight}
          </button>
        </nav>
      </div>
    `;let t=this.container.querySelector(`#moonrun-canvas`),n=this.container.querySelector(`#btn-back-lobby`),i=this.container.querySelector(`#stat-alt`),a=this.container.querySelector(`#stat-high-alt`),o=this.container.querySelector(`#btn-audio`),s=this.container.querySelector(`#gameover-modal`),c=this.container.querySelector(`#modal-alt`),l=this.container.querySelector(`#btn-restart`),u=this.container.querySelector(`#btn-share-x`),d=this.container.querySelector(`#ctrl-left`),f=this.container.querySelector(`#ctrl-right`);n.addEventListener(`click`,()=>{window.location.hash=`#/`});let p=0;this.engine=new r(t,{onAltitudeChange:(e,t)=>{p=e,i.textContent=`${e.toLocaleString()} M`,a.textContent=`${t.toLocaleString()} M`},onGameOver:e=>{p=e,c.textContent=`${e.toLocaleString()} M`,s.classList.add(`active`)}});let m=this.engine;o.addEventListener(`click`,()=>{m.soundManager.toggleMute(),o.innerHTML=m.soundManager.isMuted()?e.volumeMute:e.volume}),l.addEventListener(`click`,()=>{s.classList.remove(`active`),m.start()}),u.addEventListener(`click`,()=>{let e=`我在 SNEK Moon Run 衝向月球，最高攀升 ${p.toLocaleString()} 公尺！你能飛得比我更高嗎？\n\n#SNEK #MoonRun #Cardano #ToTheMoon $SNEK`,t=`https://twitter.com/intent/tweet?text=${encodeURIComponent(e)}&url=https%3A%2F%2Fsnek-taiwan.github.io%2Fgame%2F%23%2Fgame%2Fmoonrun`;window.open(t,`_blank`,`noopener,noreferrer`)});let h=(e,t)=>{let n=n=>{n.preventDefault(),n.stopPropagation(),e.classList.add(`active`),m.setHorizontalMove(t)},r=t=>{t.preventDefault(),t.stopPropagation(),e.classList.remove(`active`),m.setHorizontalMove(0)};e.addEventListener(`touchstart`,n,{passive:!1}),e.addEventListener(`touchend`,r,{passive:!1}),e.addEventListener(`touchcancel`,r,{passive:!1}),e.addEventListener(`mousedown`,n),e.addEventListener(`mouseup`,r),e.addEventListener(`mouseleave`,r)};h(d,-1),h(f,1);let g=e=>{e.code===`ArrowLeft`||e.code===`KeyA`?m.setHorizontalMove(-1):(e.code===`ArrowRight`||e.code===`KeyD`)&&m.setHorizontalMove(1)},_=e=>{[`ArrowLeft`,`KeyA`,`ArrowRight`,`KeyD`].includes(e.code)&&m.setHorizontalMove(0)};return window.addEventListener(`keydown`,g),window.addEventListener(`keyup`,_),this.cleanups.push(()=>{window.removeEventListener(`keydown`,g),window.removeEventListener(`keyup`,_)}),m.start(),()=>{this.engine&&=(this.engine.destroy(),null),this.cleanups.forEach(e=>e()),this.cleanups=[],this.container.innerHTML=``}}},a={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}})}else _.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),a,!1);var o=a.exports;a.exports.create;var s=`snek_arcade_high_score`,c=`snek_arcade_history`,l=class{async getHighScore(){let e=localStorage.getItem(s);if(!e)return 0;let t=parseInt(e,10);return isNaN(t)?0:t}async saveScore(e){let t=await this.getHighScore(),n=e.score>t;n&&localStorage.setItem(s,String(e.score));try{let t=localStorage.getItem(c),n=t?JSON.parse(t):[];n.unshift(e);let r=n.slice(0,20);localStorage.setItem(c,JSON.stringify(r))}catch{}return{isNewHighScore:n}}async getRecentScores(e=10){try{let t=localStorage.getItem(c);return t?JSON.parse(t).slice(0,e):[]}catch{return[]}}},u=class{foods=[];gridWidth;gridHeight;coinImage=new Image;imageLoaded=!1;adaSpawnTimer=0;constructor(e=24,t=24){this.gridWidth=e,this.gridHeight=t,this.coinImage.src=`./assets/token/Snek-Square-BG 200x200.webp`,this.coinImage.onload=()=>{this.imageLoaded=!0}}reset(e){this.foods=[],this.adaSpawnTimer=0,this.spawnRegularCoin(e)}getRandomEmptyCell(e){let t=new Set;e.forEach(e=>t.add(`${e.x},${e.y}`)),this.foods.forEach(e=>t.add(`${e.position.x},${e.position.y}`));let n=[];for(let e=0;e<this.gridWidth;e++)for(let r=0;r<this.gridHeight;r++)t.has(`${e},${r}`)||n.push({x:e,y:r});return n.length===0?null:n[Math.floor(Math.random()*n.length)]}spawnRegularCoin(e){let t=this.getRandomEmptyCell(e);t&&this.foods.push({id:`coin_${Date.now()}_${Math.random()}`,type:`snek_coin`,position:t,points:10,growth:1,spawnTimeMs:performance.now(),color:`#00e676`})}spawnAdaGem(e){let t=this.getRandomEmptyCell(e);t&&this.foods.push({id:`ada_${Date.now()}`,type:`ada_gem`,position:t,points:50,growth:2,durationMs:9e3,spawnTimeMs:performance.now(),color:`#00b0ff`})}update(e,t,n){let r=performance.now();for(let e=this.foods.length-1;e>=0;e--){let t=this.foods[e];t.durationMs&&r-t.spawnTimeMs>=t.durationMs&&this.foods.splice(e,1)}this.foods.some(e=>e.type===`snek_coin`)||this.spawnRegularCoin(t),n>=30&&(this.adaSpawnTimer+=e,!this.foods.some(e=>e.type===`ada_gem`)&&this.adaSpawnTimer>15e3&&(Math.random()<.35?(this.spawnAdaGem(t),this.adaSpawnTimer=0):this.adaSpawnTimer=1e4))}checkCollision(e){let t=this.foods.findIndex(t=>t.position.x===e.x&&t.position.y===e.y);if(t!==-1){let e=this.foods[t];return this.foods.splice(t,1),e}return null}render(e,t){let n=performance.now();for(let r of this.foods){let i=r.position.x*t+t/2,a=r.position.y*t+t/2;e.save(),e.translate(i,a);let o=1+Math.sin(n/180)*.08;if(e.scale(o,o),r.type===`snek_coin`){let n=t*1.1;e.shadowColor=`#00e676`,e.shadowBlur=12,this.imageLoaded&&this.coinImage.complete?e.drawImage(this.coinImage,-n/2,-n/2,n,n):(e.beginPath(),e.arc(0,0,t/2.2,0,Math.PI*2),e.fillStyle=`#00e676`,e.fill())}else if(r.type===`ada_gem`){let i=t*1.15;if(e.shadowColor=`#00b0ff`,e.shadowBlur=16,e.rotate(n/500),e.fillStyle=`#00b0ff`,e.beginPath(),e.moveTo(0,-i/2),e.lineTo(i/2,0),e.lineTo(0,i/2),e.lineTo(-i/2,0),e.closePath(),e.fill(),e.fillStyle=`#ffffff`,e.beginPath(),e.arc(0,0,i*.22,0,Math.PI*2),e.fill(),r.durationMs){let t=n-r.spawnTimeMs,a=Math.max(0,1-t/r.durationMs);e.beginPath(),e.arc(0,0,i*.65,-Math.PI/2,-Math.PI/2+Math.PI*2*a),e.strokeStyle=`#ffd700`,e.lineWidth=2.5,e.stroke()}}e.restore()}}},d=class{callbacks;isBoosting=!1;touchStartX=0;touchStartY=0;lastTriggerX=0;lastTriggerY=0;minSwipeDistance=20;isTouching=!1;hapticsEnabled=!0;constructor(e){this.callbacks=e,this.initKeyboard()}setHaptics(e){this.hapticsEnabled=e}vibrate(e){if(this.hapticsEnabled&&`vibrate`in navigator)try{navigator.vibrate(e)}catch{}}initKeyboard(){window.addEventListener(`keydown`,e=>{switch([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(e.code)&&e.preventDefault(),e.code){case`ArrowUp`:case`KeyW`:this.callbacks.onDirection(`UP`);break;case`ArrowDown`:case`KeyS`:this.callbacks.onDirection(`DOWN`);break;case`ArrowLeft`:case`KeyA`:this.callbacks.onDirection(`LEFT`);break;case`ArrowRight`:case`KeyD`:this.callbacks.onDirection(`RIGHT`);break;case`Space`:this.isBoosting||(this.isBoosting=!0,this.callbacks.onBoostChange(!0));break;case`KeyP`:case`Escape`:this.callbacks.onPauseToggle();break;case`KeyR`:this.callbacks.onRestart()}}),window.addEventListener(`keyup`,e=>{e.code===`Space`&&this.isBoosting&&(this.isBoosting=!1,this.callbacks.onBoostChange(!1))})}bindTouchSwipe(e){let t=0;e.addEventListener(`touchstart`,e=>{if(e.touches.length>0){this.isTouching=!0,this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.lastTriggerX=this.touchStartX,this.lastTriggerY=this.touchStartY;let n=performance.now();n-t<280&&(this.setBoosting(!this.isBoosting),this.vibrate(20)),t=n}},{passive:!1}),e.addEventListener(`touchmove`,e=>{if(!this.isTouching||e.touches.length===0)return;e.preventDefault();let t=e.touches[0].clientX,n=e.touches[0].clientY,r=t-this.lastTriggerX,i=n-this.lastTriggerY,a=Math.abs(r),o=Math.abs(i);if(Math.max(a,o)>=this.minSwipeDistance){if(a>o){let e=r>0?`RIGHT`:`LEFT`;this.callbacks.onDirection(e),this.vibrate(8)}else{let e=i>0?`DOWN`:`UP`;this.callbacks.onDirection(e),this.vibrate(8)}this.lastTriggerX=t,this.lastTriggerY=n}},{passive:!1});let n=()=>{this.isTouching=!1};e.addEventListener(`touchend`,n,{passive:!0}),e.addEventListener(`touchcancel`,n,{passive:!0})}triggerDirection(e){this.callbacks.onDirection(e),this.vibrate(10)}setBoosting(e){this.isBoosting!==e&&(this.isBoosting=e,this.callbacks.onBoostChange(e),e&&this.vibrate(15))}},f=class{segments=[];direction=`RIGHT`;inputQueue=[];growPending=0;state=`normal`;eatTimer=0;headImages={normal:new Image,eating:new Image,boosting:new Image,dead:new Image};imagesLoaded=!1;constructor(e={x:10,y:10},t=4){this.reset(e,t),this.loadSprites()}loadSprites(){this.headImages.normal.src=`./assets/face/SNEK_0000.webp`,this.headImages.eating.src=`./assets/face/SNEK_0002.webp`,this.headImages.boosting.src=`./assets/face/SNEK_0004.webp`,this.headImages.dead.src=`./assets/face/SNEK_0008.webp`;let e=0,t=()=>{e++,e>=4&&(this.imagesLoaded=!0)};Object.values(this.headImages).forEach(e=>{e.onload=t})}reset(e={x:10,y:10},t=4){this.segments=[];for(let n=0;n<t;n++)this.segments.push({x:e.x-n,y:e.y});this.direction=`RIGHT`,this.inputQueue=[],this.growPending=0,this.state=`normal`,this.eatTimer=0}get head(){return this.segments[0]}queueDirection(e){let t=this.inputQueue.length>0?this.inputQueue[this.inputQueue.length-1]:this.direction;this.isOpposite(t,e)||t===e||this.inputQueue.length<2&&this.inputQueue.push(e)}isOpposite(e,t){return e===`UP`&&t===`DOWN`||e===`DOWN`&&t===`UP`||e===`LEFT`&&t===`RIGHT`||e===`RIGHT`&&t===`LEFT`}setEating(e=300){this.eatTimer=e}update(e,t){this.eatTimer>0&&(this.eatTimer-=e,this.eatTimer<=0&&(this.eatTimer=0)),this.state!==`dead`&&(this.state=this.eatTimer>0?`eating`:t?`boosting`:`normal`)}move(){this.inputQueue.length>0&&(this.direction=this.inputQueue.shift());let e=this.head,t={x:e.x,y:e.y};switch(this.direction){case`UP`:--t.y;break;case`DOWN`:t.y+=1;break;case`LEFT`:--t.x;break;case`RIGHT`:t.x+=1}return this.segments.unshift(t),this.growPending>0?this.growPending--:this.segments.pop(),t}grow(e=1){this.growPending+=e}checkSelfCollision(){let e=this.head;for(let t=1;t<this.segments.length;t++)if(this.segments[t].x===e.x&&this.segments[t].y===e.y)return!0;return!1}getAngle(){switch(this.direction){case`RIGHT`:return 0;case`DOWN`:return Math.PI/2;case`LEFT`:return Math.PI;case`UP`:return-Math.PI/2}}render(e,t,n){let r=this.segments.length;for(let i=r-1;i>=1;i--){let a=this.segments[i],o=a.x*t+t/2,s=a.y*t+t/2,c=1-i/r*.35,l=(t/2-1.5)*c;e.save(),e.beginPath(),e.arc(o,s,l,0,Math.PI*2),n?(e.fillStyle=i%2==0?`#ff9100`:`#00e676`,e.shadowColor=`#ff5722`,e.shadowBlur=10):(e.fillStyle=`hsl(145, 100%, ${45+(r-i)/r*15}%)`,e.shadowColor=`#00e676`,e.shadowBlur=6),e.fill(),e.beginPath(),e.arc(o-l*.25,s-l*.25,l*.3,0,Math.PI*2),e.fillStyle=`rgba(255, 255, 255, 0.35)`,e.shadowBlur=0,e.fill(),e.restore()}let i=this.head,a=i.x*t+t/2,o=i.y*t+t/2,s=this.getAngle();e.save(),e.translate(a,o),e.rotate(s);let c=this.headImages[this.state],l=t*1.5;this.imagesLoaded&&c&&c.complete&&c.naturalWidth>0?(this.state===`boosting`?(e.shadowColor=`#ff3d00`,e.shadowBlur=14):this.state===`dead`?(e.shadowColor=`#ff1744`,e.shadowBlur=14):(e.shadowColor=`#00e676`,e.shadowBlur=8),e.drawImage(c,-l/2,-l/2,l,l)):(e.beginPath(),e.arc(0,0,t/2,0,Math.PI*2),e.fillStyle=this.state===`dead`?`#ff1744`:`#00e676`,e.fill()),e.restore()}},p=class{canvas;ctx;callbacks;gridWidth=24;gridHeight=24;cellSize=25;logicalWidth=600;logicalHeight=600;snake;foodManager;particleSystem;soundManager;storage;inputManager;state=`READY`;score=0;highScore=0;isBoosting=!1;foodsEaten=0;startTimeMs=0;durationSeconds=0;lastTime=0;moveTimer=0;screenShakeTime=0;screenShakeIntensity=0;boostDrainTimer=0;animationFrameId=null;constructor(e,r){this.canvas=e;let i=e.getContext(`2d`);if(!i)throw Error(`Cannot get 2D context`);this.ctx=i,this.callbacks=r,this.snake=new f({x:8,y:12},4),this.foodManager=new u(this.gridWidth,this.gridHeight),this.particleSystem=new n,this.soundManager=new t,this.storage=new l,this.inputManager=new d({onDirection:e=>this.handleDirection(e),onBoostChange:e=>this.handleBoost(e),onPauseToggle:()=>this.togglePause(),onRestart:()=>this.start()}),this.initCanvasSize(),this.loadHighScore(),this.startLoop()}initCanvasSize(){this.logicalWidth=this.gridWidth*this.cellSize,this.logicalHeight=this.gridHeight*this.cellSize;let e=window.devicePixelRatio||1;this.canvas.width=this.logicalWidth*e,this.canvas.height=this.logicalHeight*e,this.ctx.scale(e,e)}async loadHighScore(){this.highScore=await this.storage.getHighScore(),this.callbacks.onScoreUpdate(this.score,this.highScore,this.snake.segments.length)}handleDirection(e){this.state===`READY`&&this.start(),this.state===`PLAYING`&&(this.soundManager.unlock(),this.snake.queueDirection(e))}handleBoost(e){this.state===`PLAYING`&&e&&this.score>0?(this.isBoosting=!0,this.soundManager.playBoost()):this.isBoosting=!1}togglePause(){this.state===`PLAYING`?(this.state=`PAUSED`,this.callbacks.onStateChange(this.state)):this.state===`PAUSED`&&(this.state=`PLAYING`,this.lastTime=performance.now(),this.callbacks.onStateChange(this.state))}start(){this.soundManager.unlock(),this.score=0,this.foodsEaten=0,this.isBoosting=!1,this.startTimeMs=performance.now(),this.durationSeconds=0,this.moveTimer=0,this.screenShakeTime=0,this.boostDrainTimer=0,this.snake.reset({x:8,y:12},4),this.foodManager.reset(this.snake.segments),this.particleSystem.clear(),this.state=`PLAYING`,this.lastTime=performance.now(),this.callbacks.onScoreUpdate(this.score,this.highScore,this.snake.segments.length),this.callbacks.onStateChange(this.state)}async handleGameOver(){this.state=`GAME_OVER`,this.snake.state=`dead`,this.isBoosting=!1,this.soundManager.playDie(),this.inputManager.vibrate([60,40,100]),this.triggerScreenShake(400,10),this.particleSystem.emitDeath(this.snake.head.x*this.cellSize+this.cellSize/2,this.snake.head.y*this.cellSize+this.cellSize/2),this.durationSeconds=Math.floor((performance.now()-this.startTimeMs)/1e3);let e={score:this.score,highScore:Math.max(this.score,this.highScore),length:this.snake.segments.length,durationSeconds:this.durationSeconds,foodsEaten:this.foodsEaten,date:new Date().toISOString()};(await this.storage.saveScore(e)).isNewHighScore&&this.score>0&&(this.highScore=this.score,this.soundManager.playHighScore(),o({particleCount:80,spread:70,origin:{y:.6},colors:[`#00e676`,`#ffd700`,`#00b0ff`]})),this.callbacks.onScoreUpdate(this.score,this.highScore,this.snake.segments.length),this.callbacks.onStateChange(this.state,e)}triggerScreenShake(e,t){this.screenShakeTime=e,this.screenShakeIntensity=t}getTickInterval(){let e=120-Math.min(50,Math.floor(this.score/30)*5);return this.isBoosting&&(e=Math.max(45,e/1.7)),Math.max(50,e)}startLoop(){let e=t=>{this.lastTime||=t;let n=t-this.lastTime;this.lastTime=t,this.update(n),this.render(),this.animationFrameId=requestAnimationFrame(e)};this.lastTime=performance.now(),this.animationFrameId=requestAnimationFrame(e)}destroy(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId)}update(e){if(this.particleSystem.update(e),this.screenShakeTime>0&&(this.screenShakeTime-=e,this.screenShakeTime<=0&&(this.screenShakeTime=0)),this.state!==`PLAYING`)return;if(this.snake.update(e,this.isBoosting),this.foodManager.update(e,this.snake.segments,this.score),this.isBoosting){this.boostDrainTimer+=e;let t=this.snake.head.x*this.cellSize+this.cellSize/2,n=this.snake.head.y*this.cellSize+this.cellSize/2;this.particleSystem.emitBurnDash(t,n,this.snake.getAngle()),this.boostDrainTimer>=2e3&&(this.boostDrainTimer=0,this.score>0?(this.score=Math.max(0,this.score-1),this.callbacks.onScoreUpdate(this.score,this.highScore,this.snake.segments.length)):this.isBoosting=!1)}this.moveTimer+=e;let t=this.getTickInterval();this.moveTimer>=t&&(this.moveTimer=0,this.step())}step(){let e=this.snake.move();if(e.x<0||e.x>=this.gridWidth||e.y<0||e.y>=this.gridHeight||this.snake.checkSelfCollision()){this.handleGameOver();return}let t=this.foodManager.checkCollision(e);if(t){this.score+=t.points,this.foodsEaten++,this.snake.grow(t.growth),this.snake.setEating(300);let n=e.x*this.cellSize+this.cellSize/2,r=e.y*this.cellSize+this.cellSize/2;t.type===`ada_gem`?(this.soundManager.playAda(),this.inputManager.vibrate([20,30,20]),this.particleSystem.emitSuperEat(n,r),this.triggerScreenShake(200,6)):(this.soundManager.playEat(),this.inputManager.vibrate(12),this.particleSystem.emitEat(n,r)),this.callbacks.onScoreUpdate(this.score,this.highScore,this.snake.segments.length)}}render(){let e=this.ctx;if(e.save(),this.screenShakeTime>0){let t=this.screenShakeTime/400,n=(Math.random()-.5)*this.screenShakeIntensity*t,r=(Math.random()-.5)*this.screenShakeIntensity*t;e.translate(n,r)}e.fillStyle=`#0a0e14`,e.fillRect(0,0,this.logicalWidth,this.logicalHeight),e.strokeStyle=`rgba(0, 230, 118, 0.04)`,e.lineWidth=1;for(let t=0;t<=this.logicalWidth;t+=this.cellSize)e.beginPath(),e.moveTo(t,0),e.lineTo(t,this.logicalHeight),e.stroke();for(let t=0;t<=this.logicalHeight;t+=this.cellSize)e.beginPath(),e.moveTo(0,t),e.lineTo(this.logicalWidth,t),e.stroke();e.strokeStyle=this.isBoosting?`#ff3d00`:`#00e676`,e.lineWidth=3,e.shadowColor=this.isBoosting?`#ff3d00`:`#00e676`,e.shadowBlur=this.isBoosting?18:10,e.strokeRect(1.5,1.5,this.logicalWidth-3,this.logicalHeight-3),e.shadowBlur=0,this.particleSystem.render(e),this.foodManager.render(e,this.cellSize),this.snake.render(e,this.cellSize,this.isBoosting),this.state===`READY`?this.renderReadyOverlay(e):this.state===`PAUSED`&&this.renderPausedOverlay(e),e.restore()}renderReadyOverlay(e){e.fillStyle=`rgba(10, 14, 20, 0.75)`,e.fillRect(0,0,this.logicalWidth,this.logicalHeight),e.textAlign=`center`,e.fillStyle=`#00e676`,e.shadowColor=`#00e676`,e.shadowBlur=18,e.font=`900 42px "Courier New", monospace, sans-serif`,e.fillText(`SNEK ARCADE`,this.logicalWidth/2,this.logicalHeight/2-40),e.shadowBlur=0,e.fillStyle=`#ffffff`,e.font=`bold 18px monospace`,e.fillText(`PRESS SPACE / ARROWS TO PLAY`,this.logicalWidth/2,this.logicalHeight/2+15),e.fillStyle=`#8b949e`,e.font=`14px monospace`,e.fillText(`HOLD SPACE OR BOOST: BURN DASH`,this.logicalWidth/2,this.logicalHeight/2+55)}renderPausedOverlay(e){e.fillStyle=`rgba(10, 14, 20, 0.7)`,e.fillRect(0,0,this.logicalWidth,this.logicalHeight),e.textAlign=`center`,e.fillStyle=`#ffd700`,e.shadowColor=`#ffd700`,e.shadowBlur=15,e.font=`bold 36px monospace`,e.fillText(`GAME PAUSED`,this.logicalWidth/2,this.logicalHeight/2),e.shadowBlur=0,e.fillStyle=`#ffffff`,e.font=`16px monospace`,e.fillText(`PRESS P OR ESC TO RESUME`,this.logicalWidth/2,this.logicalHeight/2+45)}},m=class{static async generateCard(e,t,n){let r=document.createElement(`canvas`),i=1200;r.width=i,r.height=675;let a=r.getContext(`2d`);if(!a)return r;let o=a.createLinearGradient(0,0,i,675);o.addColorStop(0,`#0a0e14`),o.addColorStop(.5,`#0d1520`),o.addColorStop(1,`#05070a`),a.fillStyle=o,a.fillRect(0,0,i,675),a.strokeStyle=`rgba(0, 230, 118, 0.05)`,a.lineWidth=1;for(let e=0;e<i;e+=40)a.beginPath(),a.moveTo(e,0),a.lineTo(e,675),a.stroke();for(let e=0;e<675;e+=40)a.beginPath(),a.moveTo(0,e),a.lineTo(i,e),a.stroke();a.strokeStyle=`#00e676`,a.lineWidth=4,a.shadowColor=`#00e676`,a.shadowBlur=24,a.strokeRect(20,20,1160,635),a.shadowBlur=0,a.fillStyle=`#ffffff`,a.font=`bold 36px "Courier New", monospace, sans-serif`,a.fillText(`SNEK ARCADE | TAIWAN`,60,90),a.fillStyle=`#00e676`,a.font=`20px monospace`,a.fillText(`CARDANO MEME COMMUNITY POWERHOUSE`,60,125);let s=1080;a.fillStyle=`rgba(0, 230, 118, 0.04)`,a.strokeStyle=`rgba(0, 230, 118, 0.3)`,a.lineWidth=2,a.fillRect(60,170,s,340),a.strokeRect(60,170,s,340),a.fillStyle=`#8b949e`,a.font=`bold 24px monospace`,a.fillText(`FINAL SCORE / 最終戰績`,100,230),a.fillStyle=`#00e676`,a.shadowColor=`#00e676`,a.shadowBlur=20,a.font=`900 110px monospace`,a.fillText(e.toLocaleString(),100,345),a.shadowBlur=0;let c=Math.floor(n/60),l=n%60,u=`${c}:${l<10?`0`:``}${l}`;return a.fillStyle=`#ffffff`,a.font=`bold 28px monospace`,a.fillText(`LENGTH: ${t} BLOCKS`,100,420),a.fillText(`TIME ALIVE: ${u}`,100,465),a.fillStyle=`#ffd700`,a.font=`bold 24px monospace`,a.fillText(`PLAY NOW: https://snek-taiwan.github.io/game`,60,620),r}static shareToTwitter(e,t){let n=`SNEK Arcade 戰報：拿下 ${e} 分 (長度 ${t} 節)！\n你能超越這條巨蟒嗎？\n\n#SNEK #Cardano #SnekTaiwan $SNEK`,r=`https://twitter.com/intent/tweet?text=${encodeURIComponent(n)}&url=https%3A%2F%2Fsnek-taiwan.github.io%2Fgame`;window.open(r,`_blank`,`noopener,noreferrer`)}static downloadCanvas(e,t=`snek-arcade-score.png`){let n=document.createElement(`a`);n.href=e.toDataURL(`image/png`),n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}},h=class{container;engine=null;cleanups=[];constructor(e){this.container=e}mount(){this.container.innerHTML=`
      <div class="game-view snake-view">
        <!-- Arcade Header / HUD -->
        <header class="arcade-header">
          <div class="brand-section">
            <button id="btn-back-lobby" class="icon-btn back-btn" title="返回大廳" aria-label="返回大廳">
              ${e.back}
            </button>
            <span class="brand-title">SNEK</span>
          </div>

          <div class="hud-stats">
            <div class="stat-item">
              <span class="stat-label">SCORE</span>
              <span id="hud-score" class="stat-value score">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">HIGH</span>
              <span id="hud-high-score" class="stat-value high-score">0</span>
            </div>
            <div class="stat-item length-stat">
              <span class="stat-label">LEN</span>
              <span id="hud-length" class="stat-value">4</span>
            </div>
          </div>

          <div class="hud-actions">
            <button id="btn-mode" class="icon-btn" title="切換按鍵 / 滑動模式" aria-label="切換模式">
              ${e.gamepad}
            </button>
            <button id="btn-audio" class="icon-btn" title="切換音效" aria-label="切換音效">
              ${e.volume}
            </button>
            <button id="btn-pause" class="icon-btn" title="暫停遊戲" aria-label="暫停遊戲">
              ${e.pause}
            </button>
          </div>
        </header>

        <!-- Main Game Canvas Container -->
        <main class="canvas-container">
          <div class="canvas-wrapper">
            <canvas id="game-canvas"></canvas>

            <!-- Game Over Modal -->
            <div id="gameover-modal" class="modal-overlay">
              <div class="game-modal">
                <h2 id="modal-title" class="modal-title">GAME OVER</h2>

                <div class="modal-stats-grid">
                  <div class="modal-stat-box">
                    <span class="modal-stat-label">本次得分</span>
                    <span id="modal-score" class="modal-stat-val primary">0</span>
                  </div>
                  <div class="modal-stat-box">
                    <span class="modal-stat-label">歷史最高</span>
                    <span id="modal-high-score" class="modal-stat-val">0</span>
                  </div>
                  <div class="modal-stat-box">
                    <span class="modal-stat-label">蛇身長度</span>
                    <span id="modal-length" class="modal-stat-val">4</span>
                  </div>
                  <div class="modal-stat-box">
                    <span class="modal-stat-label">存活時間</span>
                    <span id="modal-time" class="modal-stat-val">0:00</span>
                  </div>
                </div>

                <div class="modal-actions">
                  <button id="btn-restart" class="btn-primary">
                    ${e.restart}
                    <span>PLAY AGAIN</span>
                  </button>
                  <div class="share-row">
                    <button id="btn-share-x" class="btn-secondary">
                      ${e.xLogo}
                      <span>SHARE TO X</span>
                    </button>
                    <button id="btn-download-card" class="btn-secondary">
                      ${e.camera}
                      <span>SAVE CARD</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Mobile Ergonomic Dual-Thumb Control Deck -->
        <nav id="mobile-deck" class="mobile-control-deck" aria-label="Mobile Controls">
          <!-- Left: Cross D-Pad with Beveled Chevrons -->
          <div class="dpad-cross-container">
            <button id="ctrl-up" class="dpad-cross-btn dpad-up" aria-label="向上">
              ${e.chevronUp}
            </button>
            <div class="dpad-middle-row">
              <button id="ctrl-left" class="dpad-cross-btn dpad-left" aria-label="向左">
                ${e.chevronLeft}
              </button>
              <div class="dpad-center-core"></div>
              <button id="ctrl-right" class="dpad-cross-btn dpad-right" aria-label="向右">
                ${e.chevronRight}
              </button>
            </div>
            <button id="ctrl-down" class="dpad-cross-btn dpad-down" aria-label="向下">
              ${e.chevronDown}
            </button>
          </div>

          <!-- Right: Turbo Burn Dash Button with Gradient Flame -->
          <div class="turbo-btn-container">
            <button id="ctrl-boost" class="turbo-boost-btn" aria-label="燃燒衝刺">
              ${e.flame}
              <span class="boost-text">BOOST</span>
            </button>
          </div>
        </nav>

        <!-- Desktop-only instructions bar -->
        <footer class="desktop-instructions">
          <span><span class="key-badge">WASD / ARROWS</span> MOVE</span>
          <span><span class="key-badge">SPACE</span> BURN DASH</span>
          <span><span class="key-badge">P</span> PAUSE</span>
          <span><span class="key-badge">R</span> RESTART</span>
        </footer>
      </div>
    `;let t=this.container.querySelector(`#game-canvas`),n=this.container.querySelector(`.canvas-wrapper`),r=this.container.querySelector(`#mobile-deck`),i=this.container.querySelector(`#btn-back-lobby`),a=this.container.querySelector(`#hud-score`),o=this.container.querySelector(`#hud-high-score`),s=this.container.querySelector(`#hud-length`),c=this.container.querySelector(`#btn-mode`),l=this.container.querySelector(`#btn-audio`),u=this.container.querySelector(`#btn-pause`),d=this.container.querySelector(`#gameover-modal`),f=this.container.querySelector(`#modal-title`),h=this.container.querySelector(`#modal-score`),g=this.container.querySelector(`#modal-high-score`),_=this.container.querySelector(`#modal-length`),v=this.container.querySelector(`#modal-time`),y=this.container.querySelector(`#btn-restart`),b=this.container.querySelector(`#btn-share-x`),x=this.container.querySelector(`#btn-download-card`),S=this.container.querySelector(`#ctrl-up`),C=this.container.querySelector(`#ctrl-down`),w=this.container.querySelector(`#ctrl-left`),T=this.container.querySelector(`#ctrl-right`),E=this.container.querySelector(`#ctrl-boost`),D=null;i.addEventListener(`click`,()=>{window.location.hash=`#/`}),this.engine=new p(t,{onScoreUpdate:(e,t,n)=>{a.textContent=e.toLocaleString(),o.textContent=t.toLocaleString(),s.textContent=n.toString()},onStateChange:(t,n)=>{if(t===`GAME_OVER`&&n){D=n;let e=n.score>0&&n.score>=n.highScore;f.textContent=e?`NEW HIGH SCORE!`:`GAME OVER`,f.className=e?`modal-title new-record`:`modal-title`,h.textContent=n.score.toLocaleString(),g.textContent=n.highScore.toLocaleString(),_.textContent=n.length.toString();let t=Math.floor(n.durationSeconds/60),r=n.durationSeconds%60;v.textContent=`${t}:${r<10?`0`:``}${r}`,d.classList.add(`active`)}else d.classList.remove(`active`);t===`PAUSED`?u.innerHTML=e.play:u.innerHTML=e.pause}});let O=this.engine,k=()=>{l.innerHTML=O.soundManager.isMuted()?e.volumeMute:e.volume};k(),l.addEventListener(`click`,e=>{e.stopPropagation(),O.soundManager.toggleMute(),k()});let A=localStorage.getItem(`snek_ctrl_mode`)===`swipe`,j=()=>{A?(c.innerHTML=e.swipe,c.title=`目前：全螢幕滑動手勢 (點擊切換為按鍵)`,r.classList.add(`deck-hidden`)):(c.innerHTML=e.gamepad,c.title=`目前：雙手按鍵模式 (點擊切換為純滑動)`,r.classList.remove(`deck-hidden`))};j(),c.addEventListener(`click`,e=>{e.stopPropagation(),A=!A,localStorage.setItem(`snek_ctrl_mode`,A?`swipe`:`dpad`),j()}),u.addEventListener(`click`,e=>{e.stopPropagation(),O.togglePause()}),y.addEventListener(`click`,e=>{e.stopPropagation(),d.classList.remove(`active`),O.start()}),b.addEventListener(`click`,e=>{e.stopPropagation(),D&&m.shareToTwitter(D.score,D.length)}),x.addEventListener(`click`,async e=>{if(e.stopPropagation(),D){let e=await m.generateCard(D.score,D.length,D.durationSeconds);m.downloadCanvas(e,`snek-score-${D.score}.png`)}}),O.inputManager.bindTouchSwipe(n);let M=(e,t)=>{e.addEventListener(`touchstart`,n=>{n.preventDefault(),n.stopPropagation(),O.handleDirection(t),e.classList.add(`active`)},{passive:!1});let n=()=>e.classList.remove(`active`);e.addEventListener(`touchend`,n,{passive:!0}),e.addEventListener(`touchcancel`,n,{passive:!0}),e.addEventListener(`click`,e=>{e.stopPropagation(),O.handleDirection(t)})};M(S,`UP`),M(C,`DOWN`),M(w,`LEFT`),M(T,`RIGHT`);let N=e=>{e.preventDefault(),e.stopPropagation(),E.classList.add(`active`),O.handleBoost(!0)},P=e=>{e.preventDefault(),e.stopPropagation(),E.classList.remove(`active`),O.handleBoost(!1)};return E.addEventListener(`touchstart`,N,{passive:!1}),E.addEventListener(`touchend`,P,{passive:!1}),E.addEventListener(`touchcancel`,P,{passive:!1}),E.addEventListener(`mousedown`,N),E.addEventListener(`mouseup`,P),E.addEventListener(`mouseleave`,P),n.addEventListener(`click`,()=>{O.soundManager.unlock(),O.state===`READY`&&O.start()}),()=>{this.engine&&=(this.engine.destroy(),null),this.cleanups.forEach(e=>e()),this.cleanups=[],this.container.innerHTML=``}}},g=class{canvas;ctx;callbacks;soundManager;particleSystem;width=440;height=440;px=220;py=220;pvx=0;pvy=0;hp=100;maxHp=100;speed=2.4;playerSize=18;level=1;exp=0;nextExp=5;kills=0;elapsedTime=0;venomCount=1;venomCooldown=420;venomTimer=0;orbitCount=1;orbitSpeed=.05;orbitAngle=0;enemies=[];projectiles=[];expGems=[];isRunning=!1;isPaused=!1;lastTime=0;spawnTimer=0;animFrameId=null;invulnerableTimer=0;headImage=new Image;imageLoaded=!1;constructor(e,r){this.canvas=e;let i=e.getContext(`2d`);if(!i)throw Error(`No 2D context`);this.ctx=i,this.callbacks=r,this.soundManager=new t,this.particleSystem=new n,this.headImage.src=`./assets/face/SNEK_0004.webp`,this.headImage.onload=()=>{this.imageLoaded=!0},this.initCanvasSize()}initCanvasSize(){let e=window.devicePixelRatio||1;this.canvas.width=this.width*e,this.canvas.height=this.height*e,this.ctx.scale(e,e)}start(){this.soundManager.unlock(),this.px=this.width/2,this.py=this.height/2,this.pvx=0,this.pvy=0,this.hp=100,this.maxHp=100,this.speed=2.4,this.level=1,this.exp=0,this.nextExp=5,this.kills=0,this.elapsedTime=0,this.venomCount=1,this.orbitCount=1,this.enemies=[],this.projectiles=[],this.expGems=[],this.particleSystem.clear(),this.isRunning=!0,this.isPaused=!1,this.lastTime=performance.now(),this.callbacks.onHpChange(this.hp,this.maxHp),this.callbacks.onExpChange(this.exp,this.nextExp,this.level),this.callbacks.onKillsChange(this.kills),this.callbacks.onTimerChange(0),this.loop(this.lastTime)}pause(){this.isPaused=!0}resume(){this.isPaused=!1,this.lastTime=performance.now()}setMoveVector(e,t){this.pvx=e,this.pvy=t}applyUpgrade(e){switch(e){case`MULTI_VENOM`:this.venomCount=Math.min(4,this.venomCount+1);break;case`BURN_AURA`:this.orbitCount=Math.min(4,this.orbitCount+1),this.orbitSpeed+=.015;break;case`SLITHER_SPEED`:this.speed*=1.2;break;case`DIAMOND_HANDS`:this.maxHp+=25,this.hp=this.maxHp,this.callbacks.onHpChange(this.hp,this.maxHp);break;case`MEGA_BURN`:for(let e of this.enemies)this.particleSystem.emitDeath(e.x,e.y),this.expGems.push({id:`gem_${Math.random()}`,x:e.x,y:e.y,value:1});this.kills+=this.enemies.length,this.enemies=[],this.callbacks.onKillsChange(this.kills)}this.resume()}loop=e=>{if(!this.isRunning)return;let t=e-this.lastTime;this.lastTime=e,this.isPaused||this.update(t),this.render(),this.animFrameId=requestAnimationFrame(this.loop)};destroy(){this.isRunning=!1,this.animFrameId!==null&&cancelAnimationFrame(this.animFrameId)}update(e){this.elapsedTime+=e/1e3,this.callbacks.onTimerChange(Math.floor(this.elapsedTime)),this.particleSystem.update(e),this.invulnerableTimer>0&&(this.invulnerableTimer-=e),this.px=Math.max(this.playerSize,Math.min(this.width-this.playerSize,this.px+this.pvx*this.speed)),this.py=Math.max(this.playerSize,Math.min(this.height-this.playerSize,this.py+this.pvy*this.speed)),this.spawnTimer+=e;let t=Math.max(500,1500-this.elapsedTime*15);this.spawnTimer>=t&&(this.spawnTimer=0,this.spawnEnemy());for(let e=this.enemies.length-1;e>=0;e--){let t=this.enemies[e],n=this.px-t.x,r=this.py-t.y,i=Math.hypot(n,r);if(i>0&&(t.x+=n/i*t.speed,t.y+=r/i*t.speed),i<this.playerSize+t.size&&this.invulnerableTimer<=0&&(this.hp-=12,this.invulnerableTimer=600,this.soundManager.playDie(),this.callbacks.onHpChange(Math.max(0,this.hp),this.maxHp),this.hp<=0)){this.handleGameOver();return}}this.venomTimer+=e,this.venomTimer>=this.venomCooldown&&this.enemies.length>0&&(this.venomTimer=0,this.fireVenom());for(let t=this.projectiles.length-1;t>=0;t--){let n=this.projectiles[t];n.x+=n.vx,n.y+=n.vy,n.life-=e;let r=!1;for(let e=this.enemies.length-1;e>=0;e--){let t=this.enemies[e];if(Math.hypot(n.x-t.x,n.y-t.y)<t.size+4){t.hp-=n.damage,this.particleSystem.emitEat(n.x,n.y),r=!0,t.hp<=0&&this.killEnemy(e);break}}(r||n.life<=0)&&this.projectiles.splice(t,1)}this.orbitAngle+=this.orbitSpeed;for(let e=0;e<this.orbitCount;e++){let t=this.orbitAngle+e*Math.PI*2/this.orbitCount,n=this.px+Math.cos(t)*45,r=this.py+Math.sin(t)*45;for(let e=this.enemies.length-1;e>=0;e--){let i=this.enemies[e];Math.hypot(n-i.x,r-i.y)<i.size+8&&(i.hp-=1.5,this.particleSystem.emitBurnDash(n,r,t),i.hp<=0&&this.killEnemy(e))}}for(let e=this.expGems.length-1;e>=0;e--){let t=this.expGems[e],n=Math.hypot(this.px-t.x,this.py-t.y);n<60&&(t.x+=(this.px-t.x)/n*5,t.y+=(this.py-t.y)/n*5,n<this.playerSize+6&&(this.exp+=t.value,this.expGems.splice(e,1),this.soundManager.playEat(),this.exp>=this.nextExp?this.handleLevelUp():this.callbacks.onExpChange(this.exp,this.nextExp,this.level)))}}spawnEnemy(){let e=Math.floor(Math.random()*4),t=0,n=0;switch(e){case 0:t=Math.random()*this.width,n=-20;break;case 1:t=this.width+20,n=Math.random()*this.height;break;case 2:t=Math.random()*this.width,n=this.height+20;break;case 3:t=-20,n=Math.random()*this.height}let r=Math.random()>.6;this.enemies.push({id:`enemy_${Date.now()}_${Math.random()}`,x:t,y:n,hp:r?15:30,maxHp:r?15:30,speed:r?1.5:.85,size:r?10:14,type:r?`RED_CANDLE`:`BEAR`,color:r?`#ff1744`:`#ff5252`})}fireVenom(){let e=null,t=1/0;for(let n of this.enemies){let r=Math.hypot(this.px-n.x,this.py-n.y);r<t&&(t=r,e=n)}if(!e)return;let n=Math.atan2(e.y-this.py,e.x-this.px);for(let e=0;e<this.venomCount;e++){let t=n+(e-(this.venomCount-1)/2)*.22;this.projectiles.push({x:this.px,y:this.py,vx:Math.cos(t)*7,vy:Math.sin(t)*7,damage:20,life:1500})}this.soundManager.playBoost()}killEnemy(e){let t=this.enemies[e];this.enemies.splice(e,1),this.kills++,this.callbacks.onKillsChange(this.kills),this.particleSystem.emitDeath(t.x,t.y),this.expGems.push({id:`gem_${Math.random()}`,x:t.x,y:t.y,value:1})}handleLevelUp(){this.level++,this.exp=0,this.nextExp=Math.floor(this.nextExp*1.5),this.soundManager.playHighScore(),this.callbacks.onExpChange(this.exp,this.nextExp,this.level);let e=[{id:`MULTI_VENOM`,title:`MULTI-VENOM`,desc:`毒液發射數量 +1`,category:`WEAPON`},{id:`BURN_AURA`,title:`BURN SHIELD`,desc:`增加烈焰旋轉護盾與速度`,category:`WEAPON`},{id:`SLITHER_SPEED`,title:`AGILE SLITHER`,desc:`提升移動速度 +20%`,category:`STATS`},{id:`DIAMOND_HANDS`,title:`DIAMOND HANDS`,desc:`生命回滿並提高上限 +25`,category:`STATS`},{id:`MEGA_BURN`,title:`MEGA BURN`,desc:`全螢幕引爆清除當前所有怪獸`,category:`SPECIAL`}].sort(()=>.5-Math.random()).slice(0,3);this.pause(),this.callbacks.onLevelUp(e)}handleGameOver(){this.isRunning=!1,this.soundManager.playDie(),this.particleSystem.emitDeath(this.px,this.py),this.callbacks.onGameOver(this.kills,Math.floor(this.elapsedTime),this.level)}render(){let e=this.ctx;e.save(),e.fillStyle=`#0a0e14`,e.fillRect(0,0,this.width,this.height),e.strokeStyle=`rgba(0, 230, 118, 0.05)`,e.lineWidth=1;for(let t=0;t<this.width;t+=30)e.beginPath(),e.moveTo(t,0),e.lineTo(t,this.height),e.stroke();for(let t=0;t<this.height;t+=30)e.beginPath(),e.moveTo(0,t),e.lineTo(this.width,t),e.stroke();e.strokeStyle=`#00e676`,e.lineWidth=2,e.shadowColor=`#00e676`,e.shadowBlur=10,e.strokeRect(1,1,this.width-2,this.height-2),e.shadowBlur=0,this.particleSystem.render(e);for(let t of this.expGems)e.fillStyle=`#00e676`,e.shadowColor=`#00e676`,e.shadowBlur=8,e.beginPath(),e.arc(t.x,t.y,4,0,Math.PI*2),e.fill(),e.shadowBlur=0;for(let t of this.projectiles)e.fillStyle=`#69f0ae`,e.shadowColor=`#00e676`,e.shadowBlur=10,e.beginPath(),e.arc(t.x,t.y,4.5,0,Math.PI*2),e.fill(),e.shadowBlur=0;for(let t=0;t<this.orbitCount;t++){let n=this.orbitAngle+t*Math.PI*2/this.orbitCount,r=this.px+Math.cos(n)*45,i=this.py+Math.sin(n)*45;e.fillStyle=`#ff9100`,e.shadowColor=`#ff3d00`,e.shadowBlur=14,e.beginPath(),e.arc(r,i,7,0,Math.PI*2),e.fill(),e.shadowBlur=0}for(let t of this.enemies)e.save(),e.translate(t.x,t.y),t.type===`RED_CANDLE`?(e.fillStyle=`#ff1744`,e.shadowColor=`#ff1744`,e.shadowBlur=8,e.fillRect(-t.size/2,-t.size/2,t.size,t.size*1.5),e.strokeStyle=`#ff8a80`,e.lineWidth=1.5,e.beginPath(),e.moveTo(0,-t.size/2-4),e.lineTo(0,t.size/2+4),e.stroke()):(e.fillStyle=`#d50000`,e.beginPath(),e.arc(0,0,t.size,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(-t.size*.7,-t.size*.7,t.size*.4,0,Math.PI*2),e.arc(t.size*.7,-t.size*.7,t.size*.4,0,Math.PI*2),e.fill()),e.restore();if(e.save(),e.translate(this.px,this.py),this.invulnerableTimer>0&&Math.floor(performance.now()/80)%2==0&&(e.globalAlpha=.4),this.imageLoaded&&this.headImage.complete){let t=this.playerSize*2.2;e.shadowColor=`#00e676`,e.shadowBlur=12,e.drawImage(this.headImage,-t/2,-t/2,t,t)}else e.fillStyle=`#00e676`,e.beginPath(),e.arc(0,0,this.playerSize,0,Math.PI*2),e.fill();e.restore(),e.restore()}},_=class{container;engine=null;cleanups=[];constructor(e){this.container=e}mount(){this.container.innerHTML=`
      <div class="game-view survivor-view">
        <!-- Top HUD -->
        <header class="arcade-header">
          <div class="brand-section">
            <button id="btn-back-lobby" class="icon-btn back-btn" title="返回大廳" aria-label="返回大廳">
              ${e.back}
            </button>
            <span class="brand-title">SURVIVOR</span>
          </div>

          <div class="survivor-hud-center">
            <div class="bar-row">
              <span class="bar-tag hp-tag">HP</span>
              <div class="progress-track hp-track">
                <div id="hp-bar-fill" class="progress-fill hp-fill" style="width: 100%;"></div>
              </div>
            </div>
            <div class="bar-row">
              <span id="level-badge" class="bar-tag exp-tag">LV.1</span>
              <div class="progress-track exp-track">
                <div id="exp-bar-fill" class="progress-fill exp-fill" style="width: 0%;"></div>
              </div>
            </div>
          </div>

          <div class="hud-stats">
            <div class="stat-item">
              <span class="stat-label">KILLS</span>
              <span id="stat-kills" class="stat-value score">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">TIME</span>
              <span id="stat-time" class="stat-value">0:00</span>
            </div>
          </div>

          <div class="hud-actions">
            <button id="btn-audio" class="icon-btn" title="切換音效" aria-label="切換音效">
              ${e.volume}
            </button>
          </div>
        </header>

        <!-- Canvas Arena Container -->
        <main class="canvas-container">
          <div class="canvas-wrapper survivor-wrapper">
            <canvas id="survivor-canvas"></canvas>

            <!-- Level Up Selection Modal -->
            <div id="levelup-modal" class="modal-overlay">
              <div class="game-modal upgrade-modal">
                <span class="upgrade-header-pill">LEVEL UP!</span>
                <h3 class="upgrade-modal-title">CHOOSE TALENT</h3>
                <div id="upgrade-cards-list" class="upgrade-cards-list"></div>
              </div>
            </div>

            <!-- Game Over Modal -->
            <div id="gameover-modal" class="modal-overlay">
              <div class="game-modal">
                <h2 class="modal-title">DEFEATED</h2>
                <div class="modal-stats-grid">
                  <div class="modal-stat-box">
                    <span class="modal-stat-label">擊殺數量</span>
                    <span id="modal-kills" class="modal-stat-val primary">0</span>
                  </div>
                  <div class="modal-stat-box">
                    <span class="modal-stat-label">生存時間</span>
                    <span id="modal-time" class="modal-stat-val">0:00</span>
                  </div>
                  <div class="modal-stat-box" style="grid-column: span 2;">
                    <span class="modal-stat-label">最終等級</span>
                    <span id="modal-level" class="modal-stat-val" style="color: var(--gold-color);">LV. 1</span>
                  </div>
                </div>

                <div class="modal-actions">
                  <button id="btn-restart" class="btn-primary">
                    ${e.restart}
                    <span>PLAY AGAIN</span>
                  </button>
                  <div class="share-row">
                    <button id="btn-share-x" class="btn-secondary">
                      ${e.xLogo}
                      <span>SHARE TO X</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Touch Virtual Joystick Area -->
        <nav id="survivor-touch-zone" class="survivor-joystick-zone" aria-label="Touch Joystick">
          <div id="joystick-base" class="joystick-base">
            <div id="joystick-stick" class="joystick-stick"></div>
          </div>
          <span class="joystick-hint">TOUCH AND DRAG TO MOVE</span>
        </nav>
      </div>
    `;let t=this.container.querySelector(`#survivor-canvas`),n=this.container.querySelector(`#btn-back-lobby`),r=this.container.querySelector(`#hp-bar-fill`),i=this.container.querySelector(`#exp-bar-fill`),a=this.container.querySelector(`#level-badge`),o=this.container.querySelector(`#stat-kills`),s=this.container.querySelector(`#stat-time`),c=this.container.querySelector(`#btn-audio`),l=this.container.querySelector(`#levelup-modal`),u=this.container.querySelector(`#upgrade-cards-list`),d=this.container.querySelector(`#gameover-modal`),f=this.container.querySelector(`#modal-kills`),p=this.container.querySelector(`#modal-time`),m=this.container.querySelector(`#modal-level`),h=this.container.querySelector(`#btn-restart`),_=this.container.querySelector(`#btn-share-x`),v=this.container.querySelector(`#survivor-touch-zone`),y=this.container.querySelector(`#joystick-base`),b=this.container.querySelector(`#joystick-stick`);n.addEventListener(`click`,()=>{window.location.hash=`#/`});let x=0,S=0,C=1;this.engine=new g(t,{onHpChange:(e,t)=>{let n=Math.max(0,Math.min(100,e/t*100));r.style.width=`${n}%`},onExpChange:(e,t,n)=>{let r=Math.max(0,Math.min(100,e/t*100));i.style.width=`${r}%`,a.textContent=`LV.${n}`},onKillsChange:e=>{x=e,o.textContent=e.toString()},onTimerChange:e=>{S=e;let t=Math.floor(e/60),n=e%60;s.textContent=`${t}:${n<10?`0`:``}${n}`},onLevelUp:e=>{u.innerHTML=e.map(e=>`
          <button class="upgrade-card-btn" data-id="${e.id}">
            <div class="upgrade-card-head">
              <span class="upgrade-title">${e.title}</span>
              <span class="upgrade-cat ${e.category.toLowerCase()}">${e.category}</span>
            </div>
            <p class="upgrade-desc">${e.desc}</p>
          </button>
        `).join(``),u.querySelectorAll(`.upgrade-card-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`);t&&this.engine&&(l.classList.remove(`active`),this.engine.applyUpgrade(t))})}),l.classList.add(`active`)},onGameOver:(e,t,n)=>{x=e,S=t,C=n,f.textContent=e.toString();let r=Math.floor(t/60),i=t%60;p.textContent=`${r}:${i<10?`0`:``}${i}`,m.textContent=`LV. ${n}`,d.classList.add(`active`)}});let w=this.engine;c.addEventListener(`click`,()=>{w.soundManager.toggleMute(),c.innerHTML=w.soundManager.isMuted()?e.volumeMute:e.volume}),h.addEventListener(`click`,()=>{d.classList.remove(`active`),w.start()}),_.addEventListener(`click`,()=>{let e=`我在 SNEK Survivor 割草生還 ${S} 秒，斬獲 ${x} 隻怪獸 (達到等級 LV.${C})！你能超越我嗎？\n\n#SNEK #Survivor #Cardano $SNEK`,t=`https://twitter.com/intent/tweet?text=${encodeURIComponent(e)}&url=https%3A%2F%2Fsnek-taiwan.github.io%2Fgame%2F%23%2Fgame%2Fsurvivor`;window.open(t,`_blank`,`noopener,noreferrer`)});let T={},E=()=>{let e=0,t=0;(T.KeyW||T.ArrowUp)&&--t,(T.KeyS||T.ArrowDown)&&(t+=1),(T.KeyA||T.ArrowLeft)&&--e,(T.KeyD||T.ArrowRight)&&(e+=1);let n=Math.hypot(e,t);n>0?w.setMoveVector(e/n,t/n):w.setMoveVector(0,0)},D=e=>{T[e.code]=!0,E()},O=e=>{T[e.code]=!1,E()};window.addEventListener(`keydown`,D),window.addEventListener(`keyup`,O),this.cleanups.push(()=>{window.removeEventListener(`keydown`,D),window.removeEventListener(`keyup`,O)});let k=null,A=null,j=0,M=0;v.addEventListener(`touchstart`,e=>{e.touches.length>0&&(k=e.touches[0].identifier,A=y.getBoundingClientRect(),j=A.left+A.width/2,M=A.top+A.height/2,b.style.transition=`none`)},{passive:!1}),v.addEventListener(`touchmove`,e=>{if(k!==null)for(let t=0;t<e.touches.length;t++){let n=e.touches[t];if(n.identifier===k){e.preventDefault();let t=n.clientX-j,r=n.clientY-M,i=Math.hypot(t,r),a=Math.atan2(r,t),o=Math.min(36,i),s=Math.cos(a)*o,c=Math.sin(a)*o;b.style.transform=`translate(${s}px, ${c}px)`,i>5?w.setMoveVector(t/i,r/i):w.setMoveVector(0,0);break}}},{passive:!1});let N=()=>{k=null,b.style.transition=`transform 0.15s ease`,b.style.transform=`translate(0px, 0px)`,w.setMoveVector(0,0)};return v.addEventListener(`touchend`,N,{passive:!0}),v.addEventListener(`touchcancel`,N,{passive:!0}),w.start(),()=>{this.engine&&=(this.engine.destroy(),null),this.cleanups.forEach(e=>e()),this.cleanups=[],this.container.innerHTML=``}}},v=[{id:`snake`,title:`SNEK Classic`,subtitle:`RETRO ARCADE / 極速燃燒`,description:`吃代幣變長，啟動 Burn Dash 燃燒衝刺！挑戰全台最高分並產出迷因戰績卡。`,badge:`HOT`,tags:[`街機`,`極速反應`,`雙手操控`],bannerImg:`./assets/banner/Snek Banana 1200x630.webp`,iconImg:`./assets/face/SNEK_0000.webp`,status:`playable`,featured:!0},{id:`survivor`,title:`SNEK Survivor`,subtitle:`ROGUELITE / 蛇蛇倖存者`,description:`迎戰熊市與紅K棒怪獸！自動發射毒液彈，升級雙頭蛇、旋轉烈焰護盾與鑽石手天賦。`,badge:`NEW`,tags:[`生存割草`,`天賦構築`,`單手走位`],bannerImg:`./assets/banner/Snek Banana 1200x630.webp`,iconImg:`./assets/face/SNEK_0004.webp`,status:`playable`},{id:`moonrun`,title:`SNEK Moon Run`,subtitle:`VERTICAL JUMPER / 登月衝天`,description:`踩著綠色大陽線踏板衝向月球！避開崩跌紅K棒，拾取黃金 ADA 火箭極速噴射登頂。`,badge:`NEW`,tags:[`無盡彈跳`,`登月迷因`,`左右觸控`],bannerImg:`./assets/banner/Snek Banana 1200x630.webp`,iconImg:`./assets/face/SNEK_0002.webp`,status:`playable`}],y=class{container;storage;cleanups=[];constructor(e){this.container=e,this.storage=new l}async mount(){let t=await this.storage.getHighScore();this.container.innerHTML=`
      <div class="lobby-view">
        <!-- Lobby Top Header -->
        <header class="lobby-header">
          <div class="lobby-brand">
            <img src="./assets/token/Snek-Round-BG.svg" alt="SNEK" class="brand-logo" />
            <div class="brand-text-col">
              <span class="brand-title">SNEK ARCADE</span>
              <span class="brand-badge">TAIWAN HUB</span>
            </div>
          </div>
          <div class="lobby-user-stats">
            <span class="lobby-stat-label">HIGH SCORE</span>
            <span class="lobby-stat-val">${t.toLocaleString()}</span>
          </div>
        </header>

        <!-- Scrollable Main Content -->
        <div class="lobby-scroll-content">
          <!-- Hero Feature Banner -->
          <section class="lobby-hero-card">
            <div class="hero-bg-wrapper">
              <img src="./assets/banner/Snek Banana 1200x630.webp" alt="Snek Hero" class="hero-bg-img" />
              <div class="hero-overlay"></div>
            </div>
            <div class="hero-content">
              <span class="hero-pill">
                ${e.flame}
                <span>FEATURED GAME</span>
              </span>
              <h2 class="hero-title">SNEK CLASSIC</h2>
              <p class="hero-desc">吃代幣變長，啟動 Burn Dash 燃燒衝刺！挑戰全台蛇友最高分並生成專屬迷因戰績卡。</p>
              <button id="btn-hero-play" class="btn-hero-cta">
                ${e.play}
                <span>即刻開玩 · PLAY NOW</span>
              </button>
            </div>
          </section>

          <!-- Section Title -->
          <div class="lobby-section-header">
            <h3 class="section-title">ALL GAMES / 所有遊戲</h3>
            <span class="section-count">${v.length} 款小遊戲</span>
          </div>

          <!-- Game Cards Grid -->
          <div class="lobby-games-grid">
            ${v.map(e=>this.renderGameCard(e)).join(``)}
          </div>
        </div>

        <!-- Bottom Platform Navigation Bar -->
        <nav class="lobby-bottom-bar" aria-label="Platform Navigation">
          <button id="tab-lobby" class="lobby-tab-btn active">
            ${e.gamepad}
            <span>大廳</span>
          </button>
          <button id="tab-leaderboard" class="lobby-tab-btn">
            ${e.trophy}
            <span>排行榜</span>
          </button>
          <button id="tab-rewards" class="lobby-tab-btn">
            ${e.gift}
            <span>NFT 獎勵</span>
          </button>
        </nav>

        <!-- Coming Soon / Info Modal -->
        <div id="lobby-modal" class="modal-overlay">
          <div class="game-modal lobby-info-modal">
            <h2 id="lobby-modal-title" class="modal-title">COMING SOON</h2>
            <p id="lobby-modal-desc" class="lobby-modal-desc">此功能正在緊鑼密鼓籌備中！</p>
            <div class="modal-actions">
              <button id="btn-lobby-modal-close" class="btn-primary">
                <span>我知道了</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `,this.container.querySelector(`#btn-hero-play`)?.addEventListener(`click`,()=>{window.location.hash=`#/game/snake`}),this.container.querySelectorAll(`.game-card`).forEach(e=>{let t=e.getAttribute(`data-id`),n=e.getAttribute(`data-status`)===`playable`;e.addEventListener(`click`,()=>{if(n)window.location.hash=`#/game/${t}`;else{let e=v.find(e=>e.id===t);e&&this.showModal(e.title,`【${e.subtitle}】\n\n${e.description}\n\n狀態：${e.releaseDate||`籌備中`}，敬請鎖定 SNEK 社群第一手公告！`)}})}),this.container.querySelector(`#tab-leaderboard`)?.addEventListener(`click`,()=>{this.showModal(`LEADERBOARD / 全球排行榜`,`第二階段（Phase 2）即將登場！

將支援日榜、週榜與名人堂歷史殿堂，並整合防作弊驗證，敬請期待！`)}),this.container.querySelector(`#tab-rewards`)?.addEventListener(`click`,()=>{this.showModal(`NFT REWARDS / 鏈上成就獎勵`,`第三階段（Phase 3）即將登場！

達到特定分數門檻與賽事冠軍者，將可連接 CIP-30 錢包直接鑄造 SNEK 限定成就 NFT！`)});let n=this.container.querySelector(`#lobby-modal`);return this.container.querySelector(`#btn-lobby-modal-close`)?.addEventListener(`click`,()=>{n.classList.remove(`active`)}),()=>{this.cleanups.forEach(e=>e()),this.cleanups=[],this.container.innerHTML=``}}renderGameCard(t){let n=t.status===`playable`,r=t.badge===`HOT`?`HOT`:t.badge===`NEW`?`NEW`:`SOON`,i=t.badge.toLowerCase();return`
      <div class="game-card ${n?`playable`:`coming-soon`}" data-id="${t.id}" data-status="${t.status}">
        <div class="game-card-header">
          <img src="${t.iconImg}" alt="${t.title}" class="game-card-icon" />
          <span class="game-card-badge ${i}">${r}</span>
        </div>
        <div class="game-card-body">
          <h4 class="game-card-title">${t.title}</h4>
          <span class="game-card-subtitle">${t.subtitle}</span>
          <p class="game-card-desc">${t.description}</p>
          <div class="game-card-tags">
            ${t.tags.map(e=>`<span class="game-tag">#${e}</span>`).join(``)}
          </div>
        </div>
        <div class="game-card-footer">
          <button class="btn-card-action ${n?`btn-play`:`btn-soon`}">
            ${n?e.play:e.sparkles}
            <span>${n?`PLAY NOW`:`玩法預告`}</span>
          </button>
        </div>
      </div>
    `}showModal(e,t){let n=this.container.querySelector(`#lobby-modal`),r=this.container.querySelector(`#lobby-modal-title`),i=this.container.querySelector(`#lobby-modal-desc`);n&&r&&i&&(r.textContent=e,i.innerHTML=t.replace(/\n/g,`<br/>`),n.classList.add(`active`))}},b=class{appContainer;currentCleanup=null;constructor(e){this.appContainer=e,window.addEventListener(`hashchange`,()=>this.handleRoute())}init(){window.location.hash||(window.location.hash=`#/`),this.handleRoute()}navigate(e){window.location.hash=e}async handleRoute(){let e=window.location.hash.slice(1)||`/`,t=e.startsWith(`/`)?e:`/${e}`;if(this.currentCleanup&&=(this.currentCleanup(),null),t===`/`||t===`/lobby`){let e=new y(this.appContainer);this.currentCleanup=await e.mount()}else if(t===`/game/snake`){let e=new h(this.appContainer);this.currentCleanup=e.mount()}else if(t===`/game/survivor`){let e=new _(this.appContainer);this.currentCleanup=e.mount()}else if(t===`/game/moonrun`){let e=new i(this.appContainer);this.currentCleanup=e.mount()}else window.location.hash=`#/`}};window.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`app`);e&&new b(e).init()});
//# sourceMappingURL=index-DjINeRyw.js.map