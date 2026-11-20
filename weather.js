export const weatherKeys=['speed','density','wind','turbulence','size'];
const bounds={speed:[10,180],density:[10,240],wind:[-130,130],turbulence:[0,60],size:[1,6]};
export function pickWeather(s){return Object.fromEntries(weatherKeys.map(k=>[k,s[k]]));}
export function defaultWeather(s){return {enabled:false,hold:30,transition:5,a:pickWeather(s),b:{speed:100,density:150,wind:55,turbulence:30,size:3.4}};}
export function validateWeather(w){
 if(w===undefined)return;
 if(!w||typeof w.enabled!=='boolean'||!Number.isFinite(w.hold)||w.hold<5||w.hold>600||!Number.isFinite(w.transition)||w.transition<1||w.transition>60)throw Error('Invalid changing weather timing.');
 for(const style of [w.a,w.b])for(const [k,[min,max]] of Object.entries(bounds))if(!style||!Number.isFinite(style[k])||style[k]<min||style[k]>max)throw Error('Invalid weather style '+k+'.');
}
export function sampleWeather(w,time){
 const leg=w.hold+w.transition,phase=((time%(leg*2))+leg*2)%(leg*2),reverse=phase>=leg,local=phase%leg;
 const t=Math.max(0,Math.min(1,(local-w.hold)/w.transition)),mix=t*t*(3-2*t),from=reverse?w.b:w.a,to=reverse?w.a:w.b;
 return Object.fromEntries(weatherKeys.map(k=>[k,from[k]+(to[k]-from[k])*mix]));
}
