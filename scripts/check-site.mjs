import {readFileSync,existsSync} from 'node:fs';
const base=new URL('../',import.meta.url),load=p=>readFileSync(new URL(p,base),'utf8');
const files=['index.html','catalogo.js','app.js','juegos/laberinto-aracnido.html','juegos/estrellas-perdidas.html','juegos/blocks-arcade.html'];
for(const f of files){if(!existsSync(new URL(f,base)))throw Error('Falta '+f);if(/ignacio/i.test(load(f)))throw Error('Nombre antiguo en '+f);}
for(const slug of ['laberinto-aracnido','estrellas-perdidas','blocks-arcade']){if(!existsSync(new URL('assets/'+slug+'.svg',base)))throw Error('Falta miniatura '+slug);if(!load('catalogo.js').includes(slug))throw Error('Falta en catálogo: '+slug);}
console.log('ARCADE: tres juegos y archivos principales verificados');
