(()=>{
'use strict';
const games=window.ARCADE_GAMES||[], area=document.getElementById('gamesCatalog'),search=document.getElementById('gameSearch');if(!area)return;
const n=games.length;document.getElementById('gameTotal').textContent=n+' '+(n===1?'JUEGO':'JUEGOS')+' · SIN INSTALAR NADA';
document.getElementById('footerTotal').textContent='ARCADE · '+n+' '+(n===1?'juego':'juegos')+' en un solo lugar';search.hidden=n<5;
const el=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(txt)x.textContent=txt;return x;};
function render(q=''){
 q=q.trim().toLocaleLowerCase('es-CL');area.replaceChildren();let total=0;
 for(const g of games){
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(g.slug))continue;
 if(q&&![g.title,g.category,g.description].some(s=>(s||'').toLocaleLowerCase('es-CL').includes(q)))continue;
 const a=el('a','game');a.href='juegos/'+g.slug+'.html';a.setAttribute('aria-label','Jugar '+g.title);
 const art=el('div','art art-'+(g.art||'generic'));art.setAttribute('aria-hidden','true');
 const img=el('img');img.src='assets/'+g.slug+'.svg';img.alt='';img.loading='lazy';art.append(img);
 const c=el('div','content');c.append(el('span','tag',g.category),el('h3','',g.title),el('p','',g.description));
 const badges=el('div','details');(g.badges||[]).forEach(t=>badges.append(el('span','pill',t)));
 c.append(badges,el('span','play','Jugar ahora →'));a.append(art,c);area.append(a);total++;
 }
 if(!total)area.append(el('p','empty','No se encontraron juegos con ese nombre.'));
}
search.addEventListener('input',()=>render(search.value));render();
})();
