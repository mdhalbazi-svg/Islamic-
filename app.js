(function(){
const K='idd_v1';
const T={ur:{app:'میرا دینی روزنامچہ',home:'ہوم',pr:'نمازیں',qu:'قرآن',ad:'اذکار',mu:'محاسبہ',more:'مزید',
 fajr:'فجر',dhuhr:'ظہر',asr:'عصر',maghrib:'مغرب',isha:'عشاء',done:'ادا کی',jam:'جماعت کے ساتھ',ont:'وقت پر',del:'تاخیر',mis:'قضا/چھوٹ گئی',qaza:'قضا ادا کی',time:'وقتِ ادائیگی',place:'مقام',note:'نوٹ',
 oblig:'فرض عبادات',opt:'نفلی اعمال',pages:'صفحات',verses:'آیات',mins:'منٹ',surah:'سورۃ',from:'آیت سے',to:'آیت تک',save:'محفوظ',
 week:'ہفتہ وار',month:'ماہانہ',year:'سالانہ',csv:'CSV برآمد',json:'بیک اپ (JSON)',restore:'بحالی',print:'PDF / پرنٹ',notes:'نوٹس',add:'شامل کریں',del2:'حذف',confirm:'کیا حذف کریں؟',
 ach:'آج کی کامیابیاں',sho:'کوتاہیاں',mist:'غلطیاں',rep:'توبہ',grat:'شکر',les:'سیکھے اسباق',tom:'کل کے اہداف',
 total:'کل',jamN:'جماعت',indiv:'انفرادی',onT:'وقت پر',lateN:'تاخیر',misN:'چھوٹی',qzN:'قضا',qpg:'قرآن صفحات',days:'دن',
 fast:'روزہ',study:'مطالعہ',book:'کتاب',tgt:'ہدف',reset:'صفر',own:'اپنا ذکر',islamic:'ہجری (تقریبی)',adj:'ہجری تاریخ ایڈجسٹ'},
 en:{app:'My Islamic Daily Diary',home:'Home',pr:'Prayers',qu:'Quran',ad:'Adhkar',mu:'Muhasabah',more:'More',
 fajr:'Fajr',dhuhr:'Dhuhr',asr:'Asr',maghrib:'Maghrib',isha:'Isha',done:'Performed',jam:'In congregation',ont:'On time',del:'Delayed',mis:'Missed',qaza:'Qaza made up',time:'Actual time',place:'Place',note:'Note',
 oblig:'Obligatory',opt:'Optional deeds',pages:'Pages',verses:'Verses',mins:'Minutes',surah:'Surah',from:'From verse',to:'To verse',save:'Saved',
 week:'Weekly',month:'Monthly',year:'Yearly',csv:'Export CSV',json:'Backup (JSON)',restore:'Restore',print:'PDF / Print',notes:'Notes',add:'Add',del2:'Delete',confirm:'Delete this?',
 ach:'Achievements',sho:'Shortcomings',mist:'Mistakes',rep:'Repentance',grat:'Gratitude',les:'Lessons learned',tom:"Tomorrow's goals",
 total:'Total',jamN:'Congregation',indiv:'Individual',onT:'On time',lateN:'Delayed',misN:'Missed',qzN:'Qaza',qpg:'Quran pages',days:'days',
 fast:'Fasting',study:'Study',book:'Book',tgt:'Target',reset:'Reset',own:'Own dhikr',islamic:'Hijri (approx.)',adj:'Hijri adjust'}};
const P=['fajr','dhuhr','asr','maghrib','isha'];
const Q=['Did I perform all five obligatory prayers?|کیا میں نے پانچوں فرض نمازیں ادا کیں؟','Prayers in congregation (count)|جماعت سے کتنی نمازیں؟','Did I pray on time?|کیا وقت پر نماز پڑھی؟','Did I recite the Quran?|کیا قرآن پڑھا؟','How much Quran?|کتنا قرآن پڑھا؟','Morning adhkar?|صبح کے اذکار؟','Evening adhkar?|شام کے اذکار؟','Daily duas?|روزانہ دعائیں؟','Istighfar?|استغفار؟','Durood Sharif?|درود شریف؟','Studied Islamic knowledge?|دینی علم کا مطالعہ؟','Taught someone something beneficial?|کسی کو نفع بخش بات سکھائی؟','Served my parents?|والدین کی خدمت؟','Maintained family ties?|صلہ رحمی؟','Helped someone?|کسی کی مدد؟','Gave charity?|صدقہ دیا؟','Avoided lying?|جھوٹ سے بچا؟','Avoided backbiting?|غیبت سے بچا؟','Controlled anger?|غصہ قابو میں رکھا؟','Fulfilled people\'s rights?|لوگوں کے حقوق ادا کیے؟','Did I waste time?|کیا وقت ضائع کیا؟','Did I commit any mistake?|کوئی غلطی ہوئی؟','Did I repent?|کیا توبہ کی؟','What good deed did I do today?|آج کون سی نیکی کی؟','What should I improve tomorrow?|کل کیا بہتر کروں گا؟'];
const TEXTQ=new Set([5,24,25]);const NUMQ=new Set([2]);
const ADHKAR=[{k:'subhanallah',ar:'سُبْحَانَ اللّٰهِ',ur:'اللہ پاک ہے',en:'Glory be to Allah',ref:'Sahih Muslim 597 (after prayer: 33)',n:33},
{k:'alhamdulillah',ar:'اَلْحَمْدُ لِلّٰهِ',ur:'سب تعریف اللہ کے لیے',en:'All praise is for Allah',ref:'Sahih Muslim 597',n:33},
{k:'allahuakbar',ar:'اَللّٰهُ أَكْبَرُ',ur:'اللہ سب سے بڑا ہے',en:'Allah is the Greatest',ref:'Sahih Muslim 597',n:34},
{k:'istighfar',ar:'أَسْتَغْفِرُ اللّٰهَ',ur:'میں اللہ سے مغفرت مانگتا ہوں',en:'I seek forgiveness from Allah',ref:'Sahih Muslim 591',n:100},
{k:'durood',ar:'اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ',ur:'اے اللہ! محمد ﷺ پر رحمت نازل فرما',en:'O Allah, send blessings upon Muhammad',ref:'Sahih Muslim 408 (reference to be verified by scholar)',n:100}];
const CHECKS=['Quran|قرآن','Morning adhkar|صبح اذکار','Evening adhkar|شام اذکار','Istighfar|استغفار','Durood|درود','Religious learning|دینی علم','Truthfulness|سچائی','Patience|صبر','Controlled anger|غصہ ضبط','Avoided backbiting|غیبت سے بچنا','Served parents|والدین کی خدمت','Family ties|صلہ رحمی','Helped neighbour|پڑوسی کی مدد','Visited sick|عیادت','Sadaqah|صدقہ','Fed poor|مسکین کو کھانا','Controlled gaze|نگاہ کی حفاظت','Avoided wasting time|وقت کی حفاظت'];
const NAFL=['Sunnah|سنت','Witr|وتر','Tahajjud|تہجد','Ishraq|اشراق','Chasht|چاشت','Awwabin|اوابین','Other nafl|دیگر نفل'];
let S=JSON.parse(localStorage.getItem(K)||'null')||{lang:'ur',hijriOffset:0,goals:{quranPagesDaily:2},notes:[],study:[],days:{},customChecks:[],customAdhkar:[]};
let view='home',cur=ymd(new Date());
const $=s=>document.querySelector(s);
const t=k=>T[S.lang][k]||k;const pick=s=>s.split('|')[S.lang==='ur'?1:0];
function save(){localStorage.setItem(K,JSON.stringify(S));}
function ymd(d){const p=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate());}
function day(d){return S.days[d]||(S.days[d]={prayers:{},nafl:{},quran:{},adhkar:{},checks:{},muh:{},fast:{}});}
function hijri(d){try{const dt=new Date(d+'T12:00:00');dt.setDate(dt.getDate()+Number(S.hijriOffset||0));return new Intl.DateTimeFormat(S.lang==='ur'?'ur-u-ca-islamic-umalqura':'en-u-ca-islamic-umalqura',{day:'numeric',month:'long',year:'numeric'}).format(dt);}catch(e){return '';}}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function dateBar(){return `<div class="card"><input type="date" id="dp" value="${cur}"></div>`;}
function bindDate(){const e=$('#dp');if(e)e.onchange=()=>{cur=e.value||cur;render();};}
function oblPct(d){const x=day(d).prayers;return Math.round(P.filter(p=>x[p]&&x[p].done).length/5*100);}
function optPct(d){const D=day(d);const items=[...CHECKS,...S.customChecks];const c=items.filter((_,i)=>D.checks['c'+i]).length+NAFL.filter((_,i)=>D.nafl['n'+i]).length;const tot=items.length+NAFL.length;return Math.round(c/tot*100);}
function bar(p){return `<div class="bar"><i style="width:${p}%"></i></div>`;}
const views={
home(){const o=oblPct(cur),p=optPct(cur),D=day(cur);const mk=cur.slice(0,7);const ds=Object.keys(S.days).filter(k=>k.startsWith(mk));const mo=ds.length?Math.round(ds.reduce((a,k)=>a+oblPct(k),0)/ds.length):0;
return dateBar()+`<div class="card"><h3>${t('oblig')}: ${o}%</h3>${bar(o)}<h3 style="margin-top:10px">${t('opt')}: ${p}%</h3>${bar(p)}<p>${t('month')}: ${mo}% (${t('oblig')})</p></div>
<div class="card"><h3>${t('qu')}</h3>${D.quran.pages||0} ${t('pages')} / ${t('tgt')} ${S.goals.quranPagesDaily}</div>
<div class="card"><label>${t('adj')} <input type="number" id="hadj" value="${S.hijriOffset}"></label></div>`;},
prayers(){const D=day(cur);let h=dateBar();
P.forEach(p=>{const r=D.prayers[p]||(D.prayers[p]={});h+=`<div class="card"><h3>${t(p)}</h3>`+['done','jamaah','ontime','delayed','missed','qaza'].map((f,i)=>`<label><input type="checkbox" data-p="${p}" data-f="${f}" ${r[f]?'checked':''}> ${t(['done','jam','ont','del','mis','qaza'][i])}</label>`).join('')+
`<label>${t('time')}<input type="time" data-p="${p}" data-f="time" value="${r.time||''}"></label><label>${t('place')}<input type="text" data-p="${p}" data-f="place" value="${esc(r.place)}"></label><label>${t('note')}<input type="text" data-p="${p}" data-f="note" value="${esc(r.note)}"></label></div>`;});
h+=`<div class="card"><h3>${t('opt')}</h3>`+NAFL.map((n,i)=>`<label><input type="checkbox" data-n="n${i}" ${D.nafl['n'+i]?'checked':''}> ${pick(n)}</label>`).join('')+'</div>';return h;},
quran(){const q=day(cur).quran;const f=(k,l,ty)=>`<label>${t(l)}<input type="${ty||'number'}" data-q="${k}" value="${esc(q[k])}"></label>`;
let tot=0,days=0;Object.values(S.days).forEach(d=>{if(d.quran&&+d.quran.pages){tot+=+d.quran.pages;days++;}});
return dateBar()+`<div class="card">${f('surah','surah','text')}${f('from','from')}${f('to','to')}${f('pages','pages')}${f('verses','verses')}${f('minutes','mins')}${f('memo','Memorization','text')}${f('rev','Revision','text')}</div>
<div class="card"><label>${t('tgt')} (${t('pages')}/day)<input type="number" id="qt" value="${S.goals.quranPagesDaily}"></label><p>${t('total')}: ${tot} ${t('pages')} · ${days} ${t('days')} · ~${(tot/20).toFixed(1)} Juz</p></div>`;},
adhkar(){const D=day(cur);const all=[...ADHKAR,...S.customAdhkar];return dateBar()+all.map(a=>`<div class="card"><div class="ar">${esc(a.ar)}</div><div>${esc(S.lang==='ur'?a.ur:a.en)}</div><small>${esc(a.ref||'')}</small>
<div class="cnt">${D.adhkar[a.k]||0} / ${a.n}</div><button class="b" data-inc="${a.k}">+1</button><button class="b g" data-rst="${a.k}">${t('reset')}</button></div>`).join('')+
`<div class="card"><h3>${t('own')}</h3><input type="text" id="oa" placeholder="Arabic/Urdu"><input type="number" id="on" placeholder="${t('tgt')}"><button class="b" id="oadd">${t('add')}</button></div>`;},
muh(){const m=day(cur).muh;let h=dateBar()+'<div class="card">';
Q.forEach((q,i)=>{const n=i+1;const lbl=pick(q);if(TEXTQ.has(n)||NUMQ.has(n))h+=`<label>${n}. ${lbl}<input type="${NUMQ.has(n)?'number':'text'}" data-m="q${n}" value="${esc(m['q'+n])}"></label>`;else h+=`<label><input type="checkbox" data-m="q${n}" ${m['q'+n]?'checked':''}> ${n}. ${lbl}</label>`;});
h+='</div><div class="card">'+[['achievements','ach'],['shortcomings','sho'],['mistakes','mist'],['repentance','rep'],['gratitude','grat'],['lessons','les'],['tomorrow','tom']].map(([k,l])=>`<label>${t(l)}<textarea data-m="${k}">${esc(m[k])}</textarea></label>`).join('')+'</div>';
h+=`<div class="card"><h3>${t('opt')}</h3>`+[...CHECKS,...S.customChecks].map((c,i)=>`<label><input type="checkbox" data-c="c${i}" ${day(cur).checks['c'+i]?'checked':''}> ${pick(c)}</label>`).join('')+`<input type="text" id="cc" placeholder="Custom"><button class="b" id="ccadd">${t('add')}</button></div>`;return h;},
notes(){return dateBar()+`<div class="card"><textarea id="nt"></textarea><button class="b" id="nadd">${t('add')}</button><input type="text" id="ns" placeholder="🔍"></div><div id="nl"></div>
<div class="card"><h3>${t('fast')}</h3><select data-fast="type">${['','Ramadan','Monday','Thursday','Ayyam-e-Beed','Shawwal','Nafl','Qaza'].map(x=>`<option ${day(cur).fast.type===x?'selected':''}>${x}</option>`).join('')}</select></div>`;},
reports(){return `<div class="card">`+['week','month','year'].map(r=>`<button class="b" data-rep="${r}">${t(r)}</button>`).join('')+`<div id="rp"></div></div>
<div class="card"><button class="b" id="bcsv">${t('csv')}</button><button class="b" id="bjson">${t('json')}</button><label class="b" style="display:inline-block">${t('restore')}<input type="file" id="rfile" accept=".json" hidden></label><button class="b g" onclick="window.print()">${t('print')}</button></div>`;}
};
function inRange(k,a,b){return k>=a&&k<=b;}
function report(kind){const d=new Date(cur+'T12:00:00');let a,b;
if(kind==='week'){const s=new Date(d);s.setDate(d.getDate()-d.getDay());const e=new Date(s);e.setDate(s.getDate()+6);a=ymd(s);b=ymd(e);}
else if(kind==='month'){a=cur.slice(0,7)+'-01';b=cur.slice(0,7)+'-31';}else{a=cur.slice(0,4)+'-01-01';b=cur.slice(0,4)+'-12-31';}
const c={tot:0,jam:0,ind:0,on:0,late:0,mis:0,qz:0,pg:0,mu:0,days:0,aM:0,aE:0,dh:0};
Object.keys(S.days).filter(k=>inRange(k,a,b)).forEach(k=>{const D=S.days[k];c.days++;P.forEach(p=>{const r=D.prayers[p];if(!r)return;if(r.done){c.tot++;r.jamaah?c.jam++:c.ind++;if(r.ontime)c.on++;if(r.delayed)c.late++;}if(r.missed)c.mis++;if(r.qaza)c.qz++;});
c.pg+=+(D.quran&&D.quran.pages)||0;if(D.muh&&Object.keys(D.muh).length)c.mu++;Object.values(D.adhkar||{}).forEach(v=>c.dh+=v);});
return `<h3>${a} → ${b}</h3><table>`+[['total',c.tot],['jamN',c.jam],['indiv',c.ind],['onT',c.on],['lateN',c.late],['misN',c.mis],['qzN',c.qz],['qpg',c.pg],['Dhikr',c.dh],['mu',c.mu]].map(([k,v])=>`<tr><td>${T[S.lang][k]||(k==='mu'?t('mu'):k)}</td><td>${v}</td></tr>`).join('')+'</table>';}
function dl(name,text,type){const u=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),2000);}
function renderNotes(){const q=($('#ns')||{}).value||'';const l=S.notes.filter(n=>n.date===cur&&(!q||n.text.includes(q)));$('#nl').innerHTML=l.map(n=>`<div class="card">${esc(n.text)} <button class="b g" data-nd="${n.id}">${t('del2')}</button></div>`).join('');}
function bind(){bindDate();const app=$('#app');
app.querySelectorAll('[data-p]').forEach(e=>e.onchange=()=>{const r=day(cur).prayers[e.dataset.p]||(day(cur).prayers[e.dataset.p]={});r[e.dataset.f]=e.type==='checkbox'?e.checked:e.value;save();});
app.querySelectorAll('[data-n]').forEach(e=>e.onchange=()=>{day(cur).nafl[e.dataset.n]=e.checked;save();});
app.querySelectorAll('[data-q]').forEach(e=>e.onchange=()=>{day(cur).quran[e.dataset.q]=e.value;save();});
app.querySelectorAll('[data-m]').forEach(e=>e.onchange=()=>{day(cur).muh[e.dataset.m]=e.type==='checkbox'?e.checked:e.value;save();});
app.querySelectorAll('[data-c]').forEach(e=>e.onchange=()=>{day(cur).checks[e.dataset.c]=e.checked;save();});
app.querySelectorAll('[data-inc]').forEach(e=>e.onclick=()=>{const a=day(cur).adhkar;a[e.dataset.inc]=(a[e.dataset.inc]||0)+1;save();render();});
app.querySelectorAll('[data-rst]').forEach(e=>e.onclick=()=>{day(cur).adhkar[e.dataset.rst]=0;save();render();});
app.querySelectorAll('[data-fast]').forEach(e=>e.onchange=()=>{day(cur).fast.type=e.value;save();});
const h=$('#hadj');if(h)h.onchange=()=>{S.hijriOffset=+h.value;save();render();};
const qt=$('#qt');if(qt)qt.onchange=()=>{S.goals.quranPagesDaily=+qt.value;save();};
const oa=$('#oadd');if(oa)oa.onclick=()=>{const v=$('#oa').value.trim();if(v){S.customAdhkar.push({k:'u'+Date.now(),ar:v,ur:'',en:'',ref:'',n:+$('#on').value||33});save();render();}};
const cc=$('#ccadd');if(cc)cc.onclick=()=>{const v=$('#cc').value.trim();if(v){S.customChecks.push(v+'|'+v);save();render();}};
if($('#nl')){renderNotes();$('#ns').oninput=renderNotes;$('#nadd').onclick=()=>{const v=$('#nt').value.trim();if(v){S.notes.push({id:Date.now(),date:cur,text:v});save();render();}};
$('#nl').onclick=e=>{const id=e.target.dataset.nd;if(id&&confirm(t('confirm'))){S.notes=S.notes.filter(n=>n.id!=id);save();renderNotes();}};}
app.querySelectorAll('[data-rep]').forEach(e=>e.onclick=()=>{$('#rp').innerHTML=report(e.dataset.rep);});
const bc=$('#bcsv');if(bc){bc.onclick=()=>{let r=['date,prayer,done,jamaah,ontime,delayed,missed,qaza,time,place'];Object.keys(S.days).sort().forEach(k=>P.forEach(p=>{const x=S.days[k].prayers[p];if(x)r.push([k,p,+!!x.done,+!!x.jamaah,+!!x.ontime,+!!x.delayed,+!!x.missed,+!!x.qaza,x.time||'','"'+(x.place||'').replace(/"/g,'""')+'"'].join(','));}));dl('diary.csv','\ufeff'+r.join('\n'),'text/csv');};
$('#bjson').onclick=()=>dl('diary-backup.json',JSON.stringify(S),'application/json');
$('#rfile').onchange=e=>{const f=e.target.files[0];if(!f)return;f.text().then(x=>{try{const o=JSON.parse(x);if(!o.days)throw 0;if(confirm('Replace current data?')){S=o;save();render();}}catch(_){alert('Invalid backup');}});};}}
const NAV=[['home','home'],['prayers','pr'],['quran','qu'],['adhkar','ad'],['muh','mu'],['notes','notes'],['reports','more']];
function render(){document.documentElement.lang=S.lang;document.documentElement.dir=S.lang==='ur'?'rtl':'ltr';$('#title').textContent=t('app');$('#lang').textContent=S.lang==='ur'?'EN':'اردو';
$('#date').textContent=new Date(cur+'T12:00:00').toDateString()+' · '+hijri(cur);
$('#nav').innerHTML=NAV.map(([v,k])=>`<button data-v="${v}" class="${v===view?'on':''}">${t(k)}</button>`).join('');
$('#nav').querySelectorAll('button').forEach(b=>b.onclick=()=>{view=b.dataset.v;render();});
$('#app').innerHTML=views[view]();bind();}
$('#lang').onclick=()=>{S.lang=S.lang==='ur'?'en':'ur';save();render();};
render();})();
