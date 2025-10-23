// Simple calculator logic + live time/date
const display = document.getElementById('display');
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const yearEl = document.getElementById('year');

function formatTime(d){
  return d.toLocaleTimeString();
}
function formatDate(d){
  return d.toLocaleDateString(undefined, { weekday: 'short', year:'numeric', month:'short', day:'numeric' });
}
function tick(){
  const now = new Date();
  timeEl.textContent = formatTime(now);
  dateEl.textContent = formatDate(now);
  yearEl.textContent = now.getFullYear();
}
setInterval(tick, 500);
tick();

// Calculator
let current = '';
function refresh(){ display.value = current || '0'; }
document.querySelectorAll('button').forEach(b=>{
  const val = b.getAttribute('data-value');
  const act = b.getAttribute('data-action');
  if(val){
    b.addEventListener('click', ()=>{ current += val; refresh(); });
  } else if(act){
    if(act === 'clear'){
      b.addEventListener('click', ()=>{ current = ''; refresh(); });
    } else if(act === 'back'){
      b.addEventListener('click', ()=>{ current = current.slice(0,-1); refresh(); });
    } else if(act === 'equals'){
      b.addEventListener('click', ()=>{ try{
        // sanitize: allow digits, operators, decimal, parentheses, spaces
        if(/^[0-9+\-*/().\s]+$/.test(current)){
          // replace ×/÷ if present
          const exp = current.replace(/×/g,'*').replace(/÷/g,'/');
          const result = Function('"use strict";return ('+exp+')')();
          current = (result === undefined || result === null) ? '' : String(result);
        } else {
          current = 'ERR';
        }
      }catch(e){ current = 'ERR'; }
      refresh();
     });
    }
  }
});
refresh();
