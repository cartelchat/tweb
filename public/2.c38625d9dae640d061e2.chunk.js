(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{32:function(t,e,s){"use strict";s.d(e,"a",(function(){return y}));var i=s(99),r=s.n(i),n=s(37),a=s(9),o=s(38),h=s(26),c=s(39),l=s(22),d=s(17),u=s(25),p=s(12),f=function(t,e,s,i){return new(s||(s=Promise))((function(r,n){function a(t){try{h(i.next(t))}catch(t){n(t)}}function o(t){try{h(i.throw(t))}catch(t){n(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};let m=t=>Math.round(255*Math.min(Math.max(t,0),1));class y extends o.a{constructor({el:t,worker:e,options:s}){super(!0),this.reqId=0,this.width=0,this.height=0,this.paused=!0,this.direction=1,this.speed=1,this.autoplay=!0,this.loop=!0,this.group="",this.frames={},this.cachingDelta=0,this.reqId=++y.reqId,this.el=t,this.worker=e;for(let t in s)this.hasOwnProperty(t)&&(this[t]=s[t]);let i;this._loop=this.loop,this._autoplay=this.autoplay,void 0!==s.skipRatio?i=s.skipRatio:(d.isAndroid||d.isAppleMobile||d.isApple&&!d.isSafari)&&this.width<100&&this.height<100&&(i=.5),this.skipDelta=void 0!==i?1/i|0:1;const r=Object(c.a)(window.devicePixelRatio,1,2);r>1&&(s.needUpscale?(this.width=Math.round(this.width*r),this.height=Math.round(this.height*r)):r>1&&(this.width>100&&this.height>100?d.isApple||!h.b.isMobile?(this.width=Math.round(this.width*r),this.height=Math.round(this.height*r)):r>2.5&&(this.width=Math.round(this.width*(r-1.5)),this.height=Math.round(this.height*(r-1.5))):(this.width=Math.round(this.width*Math.max(1.5,r-1.5)),this.height=Math.round(this.height*Math.max(1.5,r-1.5))))),s.noCache||(d.isApple&&this.width>100&&this.height>100?this.cachingDelta=2:this.width<100&&this.height<100?this.cachingDelta=1/0:this.cachingDelta=4),this.canvas=document.createElement("canvas"),this.canvas.classList.add("rlottie"),this.canvas.width=this.width,this.canvas.height=this.height,this.context=this.canvas.getContext("2d"),this.clamped=new Uint8ClampedArray(this.width*this.height*4),this.imageData=new ImageData(this.width,this.height)}clearCache(){this.frames={}}sendQuery(t,...e){this.worker.sendQuery(t,this.reqId,...e)}loadFromData(t){this.sendQuery("loadFromData",t,this.width,this.height)}play(){this.paused&&(this.paused=!1,this.setMainLoop())}pause(t=!0){this.paused||(this.paused=!0,t&&clearTimeout(this.rafId))}stop(t=!0){this.pause(),this.curFrame=1===this.direction?0:this.frameCount,t&&this.requestFrame(this.curFrame)}restart(){this.stop(!1),this.play()}setSpeed(t){this.speed=t,this.paused||this.setMainLoop()}setDirection(t){this.direction=t,this.paused||this.setMainLoop()}remove(){w.onDestroy(this.reqId),this.pause(),this.sendQuery("destroy")}renderFrame2(t,e){try{this.imageData.data.set(t),this.context.putImageData(this.imageData,0,0)}catch(t){return console.error("RLottiePlayer renderFrame error:",t,this.width,this.height),this.autoplay=!1,void this.pause()}this.dispatchEvent("enterFrame",e)}renderFrame(t,e){if(this.cachingDelta&&(e%this.cachingDelta||!e)&&!this.frames[e]&&(this.frames[e]=new Uint8ClampedArray(t)),this.frInterval){const s=Date.now()-this.frThen;if(s<0)return this.rafId&&clearTimeout(this.rafId),this.rafId=window.setTimeout(()=>{this.renderFrame2(t,e)},this.frInterval>-s?-s%this.frInterval:this.frInterval)}this.renderFrame2(t,e)}requestFrame(t){this.frames[t]?this.renderFrame(this.frames[t],t):d.isSafari?this.sendQuery("renderFrame",t):(this.clamped.length||(this.clamped=new Uint8ClampedArray(this.width*this.height*4)),this.sendQuery("renderFrame",t,this.clamped))}mainLoopForwards(){const t=this.curFrame+this.skipDelta>=this.frameCount?this.curFrame=0:this.curFrame+=this.skipDelta;return this.requestFrame(t),!(t+this.skipDelta>=this.frameCount&&!this.loop)||(this.pause(!1),!1)}mainLoopBackwards(){const t=this.curFrame-this.skipDelta<0?this.curFrame=this.frameCount-1:this.curFrame-=this.skipDelta;return this.requestFrame(t),!(t-this.skipDelta<0&&!this.loop)||(this.pause(!1),!1)}setMainLoop(){clearTimeout(this.rafId),this.frInterval=1e3/this.fps/this.speed*this.skipDelta,this.frThen=Date.now()-this.frInterval;const t=(1===this.direction?this.mainLoopForwards:this.mainLoopBackwards).bind(this);this.currentMethod=t,this.frameListener&&this.listenerResults.hasOwnProperty("enterFrame")&&this.frameListener()}onLoad(t,e){return f(this,void 0,void 0,(function*(){if(this.curFrame=1===this.direction?0:t-1,this.frameCount=t,this.fps=e,this.fps<60&&1!==this.skipDelta){const t=60/e;this.skipDelta=this.skipDelta/t|0}this.frInterval=1e3/this.fps/this.speed*this.skipDelta,this.frThen=Date.now()-this.frInterval,this.requestFrame(0),this.dispatchEvent("ready"),this.addEventListener("enterFrame",()=>{this.dispatchEvent("firstFrame"),this.el.appendChild(this.canvas),this.frameListener=()=>{if(this.paused)return;const t=Date.now();this.frThen=t+this.frInterval;this.currentMethod()||this.loop||!this.autoplay||(this.autoplay=!1)},this.addEventListener("enterFrame",this.frameListener)},!0)}))}}y.reqId=0;class g extends o.a{constructor(t,e=(()=>{}),s){super(),this.worker=t,this.defaultListener=e,s&&(this.worker.onerror=s),this.worker.onmessage=t=>{t.data instanceof Object&&t.data.hasOwnProperty("queryMethodListener")&&t.data.hasOwnProperty("queryMethodArguments")?this.dispatchEvent(t.data.queryMethodListener,...t.data.queryMethodArguments):this.defaultListener.call(this,t.data)}}postMessage(t){this.worker.postMessage(t)}terminate(){this.worker.terminate()}sendQuery(t,...e){if(d.isSafari)this.worker.postMessage({queryMethod:t,queryMethodArguments:e});else{const s=[];e.forEach(t=>{t instanceof ArrayBuffer&&s.push(t),t.buffer&&t.buffer instanceof ArrayBuffer&&s.push(t.buffer)}),this.worker.postMessage({queryMethod:t,queryMethodArguments:e},s)}}}class v{constructor(){this.isWebAssemblySupported="undefined"!=typeof WebAssembly,this.loadPromise=this.isWebAssemblySupported?void 0:Promise.reject(),this.loaded=!1,this.workersLimit=4,this.players={},this.workers=[],this.curWorkerNum=0,this.log=Object(u.b)("LOTTIE",u.a.error),this.onPlayerLoaded=(t,e,s)=>{const i=this.players[t];i?(this.log.debug("onPlayerLoaded"),i.onLoad(e,s)):this.log.warn("onPlayerLoaded on destroyed player:",t,e)},this.onFrame=(t,e,s)=>{const i=this.players[t];i?(i.clamped=s,i.renderFrame(s,e)):this.log.warn("onFrame on destroyed player:",t,e)},this.onPlayerError=(t,e)=>{const s=this.players[t];if(s){n.a.getAnimations(s.el).forEach(t=>{n.a.checkAnimation(t,!0,!0)})}}}getAnimation(t){for(const e in this.players)if(this.players[e].el===t)return this.players[e];return null}setLoop(t){for(const e in this.players){const s=this.players[e];s.loop=t,s.autoplay=s._autoplay}}loadLottieWorkers(){return this.loadPromise?this.loadPromise:this.loadPromise=new Promise((t,e)=>{let s=this.workersLimit;for(let e=0;e<this.workersLimit;++e){const i=this.workers[e]=new g(new r.a);i.addEventListener("ready",()=>{this.log("worker #"+e+" ready"),i.addEventListener("frame",this.onFrame),i.addEventListener("loaded",this.onPlayerLoaded),i.addEventListener("error",this.onPlayerError),--s,s||(this.log("workers ready"),t(),this.loaded=!0)})}})}applyReplacements(t,e){const s=v.COLORREPLACEMENTS[Math.max(e-1,0)],i=t=>{for(let e of t){switch(e.ty){case"st":case"fl":let t=e.c.k,i=m(t[2])|m(t[1])<<8|m(t[0])<<16,r=s.find(t=>t[0]===i);r&&(t[0]=(r[1]>>16&255)/255,t[1]=(r[1]>>8&255)/255,t[2]=(255&r[1])/255)}e.hasOwnProperty("it")&&i(e.it)}};for(let e of t.layers)if(e.shapes)for(let t of e.shapes)i(t.it)}loadAnimationFromURL(t,e){return this.isWebAssemblySupported?(this.loaded||this.loadLottieWorkers(),fetch(e).then(t=>t.arrayBuffer()).then(t=>p.a.gzipUncompress(t,!0)).then(e=>this.loadAnimationWorker(Object.assign(t,{animationData:e,needUpscale:!0})))):this.loadPromise}waitForFirstFrame(t){return Promise.race([new Promise(e=>{t.addEventListener("firstFrame",e,!0)}),Object(l.d)(2500)])}loadAnimationWorker(t,e="",s=-1){return f(this,void 0,void 0,(function*(){if(!this.isWebAssemblySupported)return this.loadPromise;if(s>=1&&s<=5){const e=JSON.parse(t.animationData);this.applyReplacements(e,s),t.animationData=JSON.stringify(e)}if(this.loaded||(yield this.loadLottieWorkers()),t.width&&t.height||(t.width=parseInt(t.container.style.width),t.height=parseInt(t.container.style.height)),!t.width||!t.height)throw new Error("No size for sticker!");t.group=e;const i=this.initPlayer(t.container,t);return n.a.addAnimation(i,e),i}))}onDestroy(t){delete this.players[t]}destroyWorkers(){this.workers.forEach((t,e)=>{t.terminate(),this.log("worker #"+e+" terminated")}),this.log("workers destroyed"),this.workers.length=0}initPlayer(t,e){const s=new y({el:t,worker:this.workers[this.curWorkerNum++],options:e});return this.players[s.reqId]=s,this.curWorkerNum>=this.workers.length&&(this.curWorkerNum=0),s.loadFromData(e.animationData),s}}v.COLORREPLACEMENTS=[[[16219713,13335381],[16757049,16168585],[16765248,16764327],[16768889,16768965]],[[16219713,10771e3],[16757049,14653547],[16765248,15577475],[16768889,16040864]],[[16219713,7354903],[16757049,11233085],[16765248,12812110],[16768889,14194279]],[[16219713,4858889],[16757049,8207886],[16765248,9852201],[16768889,11100983]],[[16219713,2101002],[16757049,4270372],[16765248,5848375],[16768889,6505791]]];const w=new v;a.a.lottieLoader=w,e.b=w},37:function(t,e,s){"use strict";var i=s(6),r=s(32),n=s(8),a=s(17),o=s(9);const h=new class{constructor(){this.visible=new Set,this.byGroups={},this.lockedGroups={},this.onlyOnePlayableGroup="",this.intersectionLockedGroups={},this.videosLocked=!1,this.observer=new IntersectionObserver(t=>{if(!n.default.idle.isIDLE)for(const e of t){const t=e.target;for(const s in this.byGroups){if(this.intersectionLockedGroups[s])continue;const i=this.byGroups[s].find(e=>e.el===t);if(i){e.isIntersecting?(this.visible.add(i),this.checkAnimation(i,!1)):(this.visible.delete(i),this.checkAnimation(i,!0),i.animation instanceof r.a&&i.animation.clearCache());break}}}}),n.default.on("audio_play",({doc:t})=>{"round"===t.type&&(this.videosLocked=!0,this.checkAnimations())}),n.default.on("audio_pause",()=>{this.videosLocked&&(this.videosLocked=!1,this.checkAnimations())})}getAnimations(t){const e=[];for(const s in this.byGroups)for(const i of this.byGroups[s])i.el===t&&e.push(i);return e}removeAnimation(t){const{el:e,animation:s}=t;s.remove(),s instanceof HTMLVideoElement&&a.isSafari&&setTimeout(()=>{s.src="",s.load()},1e3);for(const e in this.byGroups)this.byGroups[e].findAndSplice(e=>e===t);this.observer.unobserve(e),this.visible.delete(t)}addAnimation(t,e=""){var s;const i={el:t instanceof r.a?t.el:t,animation:t,group:e};t instanceof r.a&&!n.default.settings.stickers.loop&&t.loop&&(t.loop=n.default.settings.stickers.loop),(null!==(s=this.byGroups[e])&&void 0!==s?s:this.byGroups[e]=[]).push(i),this.observer.observe(i.el)}checkAnimations(t,e,s=!1){if(n.default.idle.isIDLE)return;const i=e?[e]:Object.keys(this.byGroups);if(!e||this.byGroups[e])for(const e of i){this.byGroups[e].forEach(e=>{this.checkAnimation(e,t,s)})}else this.byGroups[e]=[]}checkAnimation(t,e=!1,s=!1){const{el:r,animation:n,group:a}=t;s||!Object(i.t)(r)&&!this.lockedGroups[a]?this.removeAnimation(t):e||this.onlyOnePlayableGroup&&this.onlyOnePlayableGroup!==a||n instanceof HTMLVideoElement&&this.videosLocked?n.paused||n.pause():n.paused&&this.visible.has(t)&&n.autoplay&&(!this.onlyOnePlayableGroup||this.onlyOnePlayableGroup===a)&&n.play()}setOnlyOnePlayableGroup(t){this.onlyOnePlayableGroup=t}lockGroup(t){this.lockedGroups[t]=!0}unlockGroup(t){delete this.lockedGroups[t],this.checkAnimations(void 0,t)}refreshGroup(t){const e=this.byGroups[t];e&&e.length&&(e.forEach(t=>{this.observer.unobserve(t.el)}),window.requestAnimationFrame(()=>{e.forEach(t=>{this.observer.observe(t.el)})}))}lockIntersectionGroup(t){this.intersectionLockedGroups[t]=!0}unlockIntersectionGroup(t){delete this.intersectionLockedGroups[t],this.refreshGroup(t)}};o.a&&(o.a.animationIntersector=h),e.a=h},54:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var i=s(6),r=s(32),n=s(73),a=s(9);const o=new class{constructor(){this.pageId=-1,this.pagesDiv=document.getElementById("auth-pages"),this.selectTab=Object(n.a)(null,this.pagesDiv.firstElementChild.firstElementChild,null,()=>{var t;(null===(t=this.page)||void 0===t?void 0:t.onShown)&&this.page.onShown()})}setPage(t){if(t.isAuthPage){this.pagesDiv.style.display="";let e=Object(i.D)(t.pageEl);if(this.pageId===e)return;this.selectTab(e),-1!==this.pageId&&e>1&&r.b.loadLottieWorkers(),this.pageId=e}else this.pagesDiv.style.display="none",t.pageEl.style.display="",this.pageId=-1;this.page=t}};a.a.pagesManager=o;var h=o,c=function(t,e,s,i){return new(s||(s=Promise))((function(r,n){function a(t){try{h(i.next(t))}catch(t){n(t)}}function o(t){try{h(i.throw(t))}catch(t){n(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};class l{constructor(t,e,s,i,r){this.isAuthPage=e,this.onFirstMount=s,this.onMount=i,this.onShown=r,this.installed=!1,this.pageEl=document.body.querySelector("."+t)}mount(...t){return c(this,void 0,void 0,(function*(){if(this.onMount&&this.onMount(...t),!this.installed){if(this.onFirstMount)try{const e=this.onFirstMount(...t);e instanceof Promise&&(yield e)}catch(t){console.error("PAGE MOUNT ERROR:",t)}this.installed=!0}h.setPage(this)}))}}},62:function(t,e,s){"use strict";s.d(e,"a",(function(){return h})),s.d(e,"b",(function(){return c}));var i=s(42),r=s(22),n=s(92),a=s(8),o=s(6);var h;function c(t,e,s,n=0,c=1500,d,u,p="y"){if(a.default.settings.animationsEnabled||(d=h.Static),d===h.Static)return l(t,e,s,n,u=0,p);if("y"===p&&e!==t&&Object(o.t)(e)&&t.getBoundingClientRect){const s=e.getBoundingClientRect(),i=t.getBoundingClientRect(),r=s.top-i.top;void 0===d?r<-c?t.scrollTop+=r+c:r>c&&(t.scrollTop+=r-c):d===h.Up?t.scrollTop=r+t.scrollTop+c:d===h.Down&&(t.scrollTop=Math.max(0,r+t.scrollTop-c))}const f=new Promise(i=>{Object(r.c)(()=>{l(t,e,s,n,u,p).then(i)})});return"y"===p?Object(i.b)(f):f}function l(t,e,s,i=0,r,a="y"){if(!Object(o.t)(e))return Object(n.b)(t),Promise.resolve();const h="y"===a?"top":"left",c="y"===a?"bottom":"right",l="y"===a?"height":"width",d="y"===a?"scrollHeight":"scrollWidth",u="y"===a?"scrollTop":"scrollLeft",p=e.getBoundingClientRect(),f=t.getBoundingClientRect?t.getBoundingClientRect():document.body.getBoundingClientRect(),m=p[h]-f[h],y=e[d],g=f[l],v=t[u],w=t[d];let b;switch(s){case"start":b=m-i;break;case"end":b=p[c]+(y-p[l])-f[c];break;case"nearest":case"center":b=y<g?m+y/2-g/2:m-i}if(b<0){const t=-v;b=Math.max(b,t)}else if(b>0){const t=w-(v+g);b=Math.min(b,t)}const k=t[u]+b,L=null!=r?r:250+Math.abs(b)/1500*350,E=Date.now(),M=()=>{const e=L?Math.min((Date.now()-E)/L,1):1,s=b*(1-function(t){return 1-Math.pow(1-t,3.5)}(e));return t[u]=Math.round(k-s),e<1};return L&&b?Object(n.a)(M,t):(Object(n.b)(t),M(),Promise.resolve())}!function(t){t[t.Up=0]="Up",t[t.Down=1]="Down",t[t.Static=2]="Static"}(h||(h={}))},63:function(t,e,s){"use strict";s.r(e);var i=s(6),r=s(19),n=s(7),a=s(54),o=function(t,e,s,i){return new(s||(s=Promise))((function(r,n){function a(t){try{h(i.next(t))}catch(t){n(t)}}function o(t){try{h(i.throw(t))}catch(t){n(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};const h=new a.a("page-chats",!1,()=>(r.default.pushToState("authState",{_:"authStateSignedIn"}),Promise.resolve().then(s.bind(null,8)).then(t=>{t.default.broadcast("im_mount")}),n.default.requestedServerLanguage||n.default.getCacheLangPack().then(t=>{t.local&&n.default.getLangPack(t.lang_code)}),Object(i.c)(),new Promise(t=>{window.requestAnimationFrame(()=>{Promise.all([s.e(3),s.e(9)]).then(s.bind(null,105)).finally(()=>o(void 0,void 0,void 0,(function*(){t();const e=yield s.e(12).then(s.bind(null,60));Array.from(document.getElementsByClassName("btn-menu-toggle")).forEach(t=>{e.ButtonMenuToggleHandler(t)})})))})})));e.default=h},72:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s(6),r=s(8),n=s(30),a=s(42);function o(t,e,s){const i=e.getBoundingClientRect().width,r=[t,e];return s&&r.reverse(),r[0].style.filter="brightness(80%)",r[0].style.transform=`translate3d(${.25*-i}px, 0, 0)`,r[1].style.transform=`translate3d(${i}px, 0, 0)`,t.classList.add("active"),t.offsetWidth,t.style.transform="",t.style.filter="",()=>{e.style.transform=e.style.filter=""}}function h(t,e,s){const i=e.getBoundingClientRect().width,r=[t,e];return s&&r.reverse(),r[0].style.transform=`translate3d(${-i}px, 0, 0)`,r[1].style.transform=`translate3d(${i}px, 0, 0)`,t.classList.add("active"),t.offsetWidth,t.style.transform="",()=>{e.style.transform=""}}const c=(t,e,s,i,r=!0)=>{let n=null;switch(e){case"tabs":n=h;break;case"navigation":n=o}return t.dataset.animation=e,l(t,n,s,i,r)},l=(t,e,s,o,h=!0)=>{const c=new Map;let l,d=0,u=null;function p(f,m=!0){const y=p;f instanceof HTMLElement&&(f=Object(i.D)(f));const g=y.prevId();if(f===g)return!1;const v=u,w=t.children[f];if(r.default.settings.animationsEnabled&&-1!==g||(m=!1),!m)return v&&v.classList.remove("active","to","from"),w&&(w.classList.remove("to","from"),w.classList.add("active")),t.classList.remove("animating","backwards","disable-hover"),u=w,void(o&&o(f));u&&(u.classList.remove("to"),u.classList.add("from")),t.classList.add("animating","disable-hover");const b=g<f;let k;if(t.classList.toggle("backwards",!b),w&&(e?k=e(w,u,b):w.classList.add("active"),w.classList.remove("from"),w.classList.add("to")),w&&c.set(w,()=>{w.classList.remove("to"),c.delete(w)}),v){const t=()=>{v.classList.remove("active","from"),k&&k(),c.delete(v)};if(w)c.set(v,t);else{const e=window.setTimeout(t,s);c.set(v,()=>{clearTimeout(e)})}h&&(l||(l=Object(n.a)(),d=performance.now()),Object(a.b)(l,2*s))}u=w}return t.addEventListener(e?"transitionend":"animationend",e=>{if(e.target.parentElement!==t)return;const s=c.get(e.target);s&&s(),e.target===u&&(!l&&h||(l&&(l.resolve(),l=void 0),o&&o(p.prevId()),t.classList.remove("animating","backwards","disable-hover")))}),p.prevId=()=>u?Object(i.D)(u):-1,p}},73:function(t,e,s){"use strict";s.d(e,"a",(function(){return h}));var i=s(6),r=s(72),n=s(8),a=s(22),o=s(62);function h(t,e,s,h,c=250,l){const d=Object(r.a)(e,t||"tabs"===e.dataset.animation?"tabs":"navigation",c,h);if(t){const r=new Proxy(d,{apply:(e,s,i)=>{const r=+i[0],n=void 0===i[1]||i[1],a=t.querySelector(`[data-tab="${r}"]`)||t.children[r];h(a,r,n)}}),h=(i,r,h=!0)=>{const f=e.children[r];s&&s(r,f),l&&l.scrollIntoViewNew(i.parentElement.children[r],"center",void 0,void 0,h?void 0:o.a.Static,c,"x"),n.default.settings.animationsEnabled||(h=!1);const m=d.prevId();if(i.classList.contains("active")||r===m)return!1;const y=t.querySelector(p.toLowerCase()+".active");Object(a.c)(()=>{y&&y.classList.remove("active")}),u&&-1!==m&&h&&Object(a.c)(()=>{const t=i.querySelector("i"),e=i.parentElement.children[m].querySelector("i");e.classList.remove("animate"),t.classList.remove("animate");const s=e.parentElement.parentElement.offsetLeft-t.parentElement.parentElement.offsetLeft,r=e.clientWidth/t.clientWidth;t.style.transform=`translate3d(${s}px, 0, 0) scale3d(${r}, 1, 1)`,requestAnimationFrame(()=>{t.classList.add("animate"),t.style.transform="none"})}),Object(a.c)(()=>{i.classList.add("active")}),d(r,h)},u=!t.classList.contains("no-stripe"),p=t.firstElementChild.tagName;return t.addEventListener("click",(function(e){let s,r=e.target;if(r=function(t,e){if(t.parentElement===e)return t;for(;t.parentElement;)if((t=t.parentElement).parentElement===e)return t;return null}(r,t),!r)return!1;if(r.dataset.tab){if(s=+r.dataset.tab,-1===s)return!1}else s=Object(i.D)(r);h(r,s)})),r}return d}},92:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return o}));var i=s(22),r=s(30);const n=new Map;function a(t){const e=function(t){return n.get(t)}(t);e&&(e.isCancelled=!0,e.deferred.resolve())}function o(t,e,s){return s||(s=function(t){a(t);const e={isCancelled:!1,deferred:Object(r.a)()};return n.set(t,e),e.deferred.then(()=>{n.delete(t)}),e}(e)),Object(i.c)(()=>{s.isCancelled||(t()?o(t,e,s):s.deferred.resolve())}),s.deferred}},99:function(t,e,s){t.exports=function(){return new Worker(s.p+"a66e34485abd845f7eb6.worker.js")}}}]);