
const vocab = [
 {id:"chi",cn:"吃",py:"chī",en:"to eat",level:1,topic:"Food",type:"Verb",
  ex:[
   ["我想吃中国菜。","Wǒ xiǎng chī Zhōngguó cài.","I want to eat Chinese food."],
   ["你吃饭了吗？","Nǐ chīfàn le ma?","Have you eaten?"],
   ["我们一起吃吧。","Wǒmen yìqǐ chī ba.","Let's eat together."]
  ]},
 {id:"he",cn:"喝",py:"hē",en:"to drink",level:1,topic:"Food",type:"Verb",
  ex:[
   ["我每天喝很多水。","Wǒ měitiān hē hěnduō shuǐ.","I drink a lot of water every day."],
   ["你想喝咖啡还是茶？","Nǐ xiǎng hē kāfēi háishì chá?","Do you want coffee or tea?"],
   ["天气很热，多喝水。","Tiānqì hěn rè, duō hē shuǐ.","It's hot, drink more water."]
  ]},
 {id:"fan",cn:"饭",py:"fàn",en:"meal; cooked rice",level:1,topic:"Food",type:"Noun",
  ex:[
   ["晚饭几点开始？","Wǎnfàn jǐ diǎn kāishǐ?","What time does dinner start?"],
   ["我已经吃过饭了。","Wǒ yǐjīng chīguò fàn le.","I've already eaten."],
   ["这家店的饭很好吃。","Zhè jiā diàn de fàn hěn hǎochī.","The food at this restaurant is delicious."]
  ]},
 {id:"lvyou",cn:"旅游",py:"lǚyóu",en:"to travel; tourism",level:2,topic:"Travel",type:"Verb",
  ex:[
   ["我喜欢在中国旅游。","Wǒ xǐhuan zài Zhōngguó lǚyóu.","I like traveling in China."],
   ["暑假我们想去云南旅游。","Shǔjià wǒmen xiǎng qù Yúnnán lǚyóu.","We want to travel to Yunnan during summer vacation."],
   ["旅游可以了解不同的文化。","Lǚyóu kěyǐ liǎojiě bùtóng de wénhuà.","Traveling can help you understand different cultures."]
  ]},
 {id:"yiyuan",cn:"医院",py:"yīyuàn",en:"hospital",level:2,topic:"Health",type:"Noun",
  ex:[
   ["我在医院实习。","Wǒ zài yīyuàn shíxí.","I am doing an internship at a hospital."],
   ["医院离学校很近。","Yīyuàn lí xuéxiào hěn jìn.","The hospital is very close to the university."],
   ["他昨天去了医院。","Tā zuótiān qù le yīyuàn.","He went to the hospital yesterday."]
  ]},
 {id:"jia",cn:"检查",py:"jiǎnchá",en:"to examine; check-up",level:3,topic:"Health",type:"Verb",
  ex:[
   ["医生给病人做了检查。","Yīshēng gěi bìngrén zuò le jiǎnchá.","The doctor examined the patient."],
   ["请先检查一下血压。","Qǐng xiān jiǎnchá yíxià xuèyā.","Please check the blood pressure first."],
   ["明天我要去医院检查。","Míngtiān wǒ yào qù yīyuàn jiǎnchá.","Tomorrow I need to go to the hospital for a check-up."]
  ]},
 {id:"xuexiao",cn:"学校",py:"xuéxiào",en:"school; university",level:1,topic:"University",type:"Noun",
  ex:[
   ["我的学校在合肥。","Wǒ de xuéxiào zài Héféi.","My university is in Hefei."],
   ["你什么时候回学校？","Nǐ shénme shíhou huí xuéxiào?","When are you going back to school?"],
   ["学校附近有很多餐厅。","Xuéxiào fùjìn yǒu hěnduō cāntīng.","There are many restaurants near the university."]
  ]},
 {id:"canjia",cn:"参加",py:"cānjiā",en:"to participate; attend",level:3,topic:"University",type:"Verb",
  ex:[
   ["我明天要参加一个考试。","Wǒ míngtiān yào cānjiā yí ge kǎoshì.","I have to take an exam tomorrow."],
   ["很多学生参加了这次活动。","Hěnduō xuéshēng cānjiā le zhè cì huódòng.","Many students participated in this activity."],
   ["你愿意参加我们的聚会吗？","Nǐ yuànyì cānjiā wǒmen de jùhuì ma?","Would you like to join our party?"]
  ]},
 {id:"fangbian",cn:"方便",py:"fāngbiàn",en:"convenient; convenient to",level:4,topic:"Daily Life",type:"Adjective",
  ex:[
   ["这里坐地铁很方便。","Zhèlǐ zuò dìtiě hěn fāngbiàn.","Taking the subway here is very convenient."],
   ["你什么时候方便？","Nǐ shénme shíhou fāngbiàn?","When is convenient for you?"],
   ["网上买东西很方便。","Wǎngshàng mǎi dōngxi hěn fāngbiàn.","Buying things online is very convenient."]
  ]},
 {id:"renao",cn:"热闹",py:"rènào",en:"lively; bustling",level:4,topic:"Culture",type:"Adjective",
  ex:[
   ["晚上这条街特别热闹。","Wǎnshang zhè tiáo jiē tèbié rènào.","This street is especially lively at night."],
   ["春节的时候城市很热闹。","Chūnjié de shíhou chéngshì hěn rènào.","The city is very lively during Spring Festival."],
   ["我喜欢热闹的地方。","Wǒ xǐhuan rènào de dìfang.","I like lively places."]
  ]},
 {id:"jianyi",cn:"建议",py:"jiànyì",en:"to suggest; suggestion",level:5,topic:"Communication",type:"Verb",
  ex:[
   ["医生建议他多休息。","Yīshēng jiànyì tā duō xiūxi.","The doctor suggested that he rest more."],
   ["我建议我们早点出发。","Wǒ jiànyì wǒmen zǎodiǎn chūfā.","I suggest that we leave earlier."],
   ["谢谢你的建议。","Xièxie nǐ de jiànyì.","Thank you for your suggestion."]
  ]},
 {id:"zhongyao",cn:"重要",py:"zhòngyào",en:"important",level:2,topic:"Daily Life",type:"Adjective",
  ex:[
   ["健康很重要。","Jiànkāng hěn zhòngyào.","Health is very important."],
   ["考试前休息也很重要。","Kǎoshì qián xiūxi yě hěn zhòngyào.","Rest is also important before an exam."],
   ["这是一件很重要的事情。","Zhè shì yí jiàn hěn zhòngyào de shìqing.","This is a very important matter."]
  ]}
];

const readings = [
 {level:2,title:"A Busy Day at University",cn:"今天我很忙。早上八点，我去学校上课。中午和朋友一起吃饭。下午我去图书馆学习，晚上回宿舍休息。虽然很累，但是我觉得今天过得很充实。",
  py:"Jīntiān wǒ hěn máng. Zǎoshang bā diǎn, wǒ qù xuéxiào shàngkè. Zhōngwǔ hé péngyou yìqǐ chīfàn. Xiàwǔ wǒ qù túshūguǎn xuéxí, wǎnshang huí sùshè xiūxi. Suīrán hěn lèi, dànshì wǒ juéde jīntiān guò de hěn chōngshí.",
  en:"Today I am very busy. At 8 in the morning, I go to class. At noon I eat with friends. In the afternoon I study in the library, and at night I return to the dorm to rest. Although I am tired, I feel that today was fulfilling."},
 {level:4,title:"Learning Chinese Through Real Life",cn:"学习语言不应该只停留在课本上。真正的进步来自每天使用语言：在餐厅点菜、在医院交流、在学校参加活动，或者和中国朋友聊天。遇到不会的词不要害怕，先根据上下文猜意思，再记录下来复习。",
  py:"Xuéxí yǔyán bù yīnggāi zhǐ tíngliú zài kèběn shàng. Zhēnzhèng de jìnbù láizì měitiān shǐyòng yǔyán: zài cāntīng diǎncài, zài yīyuàn jiāoliú, zài xuéxiào cānjiā huódòng, huòzhě hé Zhōngguó péngyou liáotiān. Yùdào bú huì de cí bú yào hàipà, xiān gēnjù shàngxiàwén cāi yìsi, zài jìlù xiàlái fùxí.",
  en:"Language learning should not stay only in textbooks. Real progress comes from using the language every day: ordering food, communicating at a hospital, joining university activities, or chatting with Chinese friends. When you meet a word you don't know, don't be afraid. First guess its meaning from context, then record it and review it."}
];

const scenarios = [
 ["🏥","Hospital","Doctor / patient conversation"],
 ["🍜","Restaurant","Order food naturally"],
 ["🎓","University","Talk to a professor or classmate"],
 ["🚕","Taxi","Tell the driver where to go"],
 ["🛍️","Shopping","Ask about price, size and payment"],
 ["🏠","Apartment","Ask about renting a room"]
];

let state = {
 page:"home", topic:"All", type:"All", level:5, query:"",
 selected:null, reading:null, role:null,
 mastered: JSON.parse(localStorage.getItem("clp-mastered")||"[]"),
 chat:[["bot","你好！我是你的中文学习伙伴。今天想聊什么？"]]
};

function save(){localStorage.setItem("clp-mastered",JSON.stringify(state.mastered))}
function speak(text){
 if(!("speechSynthesis" in window)){toast("Speech is not supported here.");return}
 speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance(text); u.lang="zh-CN"; u.rate=.82;
 speechSynthesis.speak(u);
}
function toast(t){const e=document.getElementById("toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function nav(page){state.page=page;state.selected=null;state.reading=null;render()}
function setActiveNav(){document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.nav===state.page))}
function pageTitle(){
 const m={home:"你好, Waleed 👋",vocab:"Vocabulary",reading:"Reading",practice:"Real-Life Practice",chat:"Chat Partner"};
 document.getElementById("pageTitle").textContent=m[state.page]||"Chinese Partner";
}
function render(){pageTitle();setActiveNav();const s=document.getElementById("screen");s.innerHTML="";
 if(state.page==="home") home(s);
 if(state.page==="vocab") vocabulary(s);
 if(state.page==="reading") reading(s);
 if(state.page==="practice") practice(s);
 if(state.page==="chat") chat(s);
}

function home(s){
 const mastered=state.mastered.length, total=25, pct=Math.min(100,Math.round(mastered/total*100));
 s.innerHTML=`
 <section class="hero"><h2>Build real Chinese.</h2><p>Learn a word → see it in context → hear it → use it.</p>
 <div class="progress-row"><span>HSK 4 → HSK 5 journey</span><span>${pct}%</span></div><div class="progress"><i style="width:${Math.max(5,pct)}%"></i></div></section>
 <div class="section-head"><h3>Today's practice</h3><button onclick="nav('vocab')">Open vocab →</button></div>
 <div class="stat-grid">
  <div class="card stat"><strong>${mastered}</strong><span>Mastered</span></div>
  <div class="card stat"><strong>2</strong><span>Readings</span></div>
  <div class="card stat"><strong>6</strong><span>Scenarios</span></div>
 </div>
 <div class="section-head"><h3>Quick practice</h3></div>
 <div class="grid">
  <div class="card action" onclick="nav('vocab')"><div class="icon">📚</div><div class="card-title">Vocabulary</div><div class="card-sub">HSK 1–5 · topics · examples</div></div>
  <div class="card action" onclick="nav('reading')"><div class="icon">📖</div><div class="card-title">Reading</div><div class="card-sub">Pinyin + translation + audio</div></div>
  <div class="card action" onclick="nav('practice')"><div class="icon">🎭</div><div class="card-title">Roleplay</div><div class="card-sub">Hospital, food, university & more</div></div>
  <div class="card action" onclick="nav('chat')"><div class="icon">💬</div><div class="card-title">Chat Partner</div><div class="card-sub">Natural Chinese conversation</div></div>
 </div>
 <div class="section-head"><h3>Starter words</h3></div>
 <div class="word-list">${vocab.slice(0,4).map(wordMini).join("")}</div>`;
 bindWordRows();
}
function wordMini(w){return `<div class="word-row" data-word="${w.id}"><div><div class="word-cn">${w.cn}</div><div class="word-py">${w.py} · ${w.en}</div></div><span class="word-type">${w.type}</span></div>`}
function vocabulary(s){
 if(state.selected){wordDetail(s,state.selected);return}
 const topics=["All",...new Set(vocab.map(x=>x.topic))];
 const types=["All","Noun","Verb","Adjective"];
 const filtered=vocab.filter(w=>
   (state.topic==="All"||w.topic===state.topic)&&
   (state.type==="All"||w.type===state.type)&&
   w.level<=state.level&&
   (!state.query||`${w.cn}${w.py}${w.en}`.toLowerCase().includes(state.query.toLowerCase()))
 );
 s.innerHTML=`
 <input class="search" id="vsearch" placeholder="Search Chinese, pinyin or English…" value="${state.query}">
 <div class="section-head"><h3>HSK level</h3></div>
 <div class="chips">${[1,2,3,4,5].map(x=>`<button class="chip ${state.level===x?"active":""}" onclick="state.level=${x};render()">HSK ${x}</button>`).join("")}</div>
 <div class="section-head"><h3>Topics</h3></div><div class="chips">${topics.map(x=>`<button class="chip ${state.topic===x?"active":""}" onclick="state.topic='${x}';render()">${x}</button>`).join("")}</div>
 <div class="section-head"><h3>Word type</h3></div><div class="chips">${types.map(x=>`<button class="chip ${state.type===x?"active":""}" onclick="state.type='${x}';render()">${x}</button>`).join("")}</div>
 <div class="section-head"><h3>${filtered.length} words</h3><span style="font-size:11px;color:var(--muted)">Tap a word</span></div>
 <div class="word-list">${filtered.map(wordMini).join("")||'<div class="empty">No words found. Try another topic or level.</div>'}</div>`;
 document.getElementById("vsearch").addEventListener("input",e=>{state.query=e.target.value;render()});
 bindWordRows();
}
function bindWordRows(){document.querySelectorAll("[data-word]").forEach(e=>e.onclick=()=>{state.selected=vocab.find(w=>w.id===e.dataset.word);render()})}
function wordDetail(s,w){
 s.innerHTML=`<button class="back" onclick="state.selected=null;render()">← Back to vocabulary</button>
 <div class="detail-card">
  <div class="detail-cn">${w.cn}</div><div class="detail-py">${w.py}</div><div class="detail-en">${w.en}</div>
  <div style="margin-top:10px"><span class="word-type">HSK ${w.level} · ${w.topic} · ${w.type}</span></div>
  <button class="play" onclick="speak('${w.cn}')">🔊 Hear word</button>
  <div class="section-head"><h3>Example sentences</h3></div>
  ${w.ex.map((x,i)=>`<div class="example"><div class="cn">${i+1}. ${x[0]}</div><div class="py">${x[1]}</div><div class="en">${x[2]}</div><button class="play" onclick="speak('${x[0]}')">▶ Play</button></div>`).join("")}
  <button class="play" style="width:100%;margin-top:18px;background:${state.mastered.includes(w.id)?"#64706e":"var(--teal)"}" onclick="toggleMastered('${w.id}')">${state.mastered.includes(w.id)?"✓ Mastered — tap to undo":"Mark as mastered"}</button>
 </div>`;
}
function toggleMastered(id){state.mastered=state.mastered.includes(id)?state.mastered.filter(x=>x!==id):[...state.mastered,id];save();toast("Progress saved");render()}

function reading(s){
 if(state.reading!==null){
  const r=readings[state.reading];
  const terms=["语言","医院","学校","参加","文化","上下文","复习"];
  let cn=r.cn;
  terms.forEach(t=>cn=cn.replaceAll(t,`<span class="tap" onclick="showWord('${t}')">${t}</span>`));
  s.innerHTML=`<button class="back" onclick="state.reading=null;render()">← Back to readings</button>
  <div class="detail-card"><span class="word-type">HSK ${r.level}</span><h2 style="margin-bottom:5px">${r.title}</h2>
  <button class="play" onclick="speak(${JSON.stringify(r.cn)})">🔊 Listen</button>
  <div class="section-head"><h3>Chinese</h3></div><div class="reader">${cn}</div>
  <div class="translation"><strong>Pinyin</strong><br>${r.py}</div>
  <div class="translation"><strong>English</strong><br>${r.en}</div></div>`;
  return;
 }
 s.innerHTML=`<div class="section-head"><h3>Choose a reading</h3><span style="font-size:11px;color:var(--muted)">Tap words inside</span></div>
 ${readings.map((r,i)=>`<div class="card action" style="margin-bottom:11px" onclick="state.reading=${i};render()"><span class="word-type">HSK ${r.level}</span><h3 style="margin-bottom:5px">${r.title}</h3><div class="card-sub">${r.en.slice(0,120)}…</div></div>`).join("")}`;
}
function showWord(t){
 const w=vocab.find(x=>x.cn===t);
 if(w){state.selected=w;state.page="vocab";render()} else toast("Mini dictionary entry coming soon for "+t)
}

function practice(s){
 if(state.role){
  s.innerHTML=`<button class="back" onclick="state.role=null;render()">← Change scenario</button>
  <div class="detail-card"><span class="word-type">HSK ${state.role.level} · ${state.role.name}</span><h2 style="margin:10px 0 4px">${state.role.icon} ${state.role.name}</h2>
  <p style="color:var(--muted);margin-top:0">${state.role.desc}</p>
  <div class="chat" id="roleChat">
   <div class="bubble bot">${state.role.open}</div>
  </div>
  <div class="chat-input"><input id="roleInput" placeholder="Type your Chinese answer…"><button onclick="sendRole()">Send</button></div>
  <div class="feedback"><strong>Practice goal</strong><p style="margin-bottom:0;color:var(--muted)">Try to answer in Chinese. In the next version, AI will score grammar, naturalness and vocabulary.</p></div>
  </div>`;
  return;
 }
 s.innerHTML=`<div class="card" style="margin-bottom:14px"><div class="section-head" style="margin-top:0"><h3>Real-life roleplay</h3></div><p class="card-sub">Choose a situation. Version 0.1 uses guided practice; AI conversation comes next.</p>
 <div class="segment"><h4>HSK target</h4><select class="select" id="roleLevel">${[1,2,3,4,5].map(x=>`<option ${x===4?"selected":""}>${x}</option>`).join("")}</select></div></div>
 <div class="scenario">${scenarios.map((x,i)=>`<button onclick="startRole(${i})"><div style="font-size:24px">${x[0]}</div><strong>${x[1]}</strong><span>${x[2]}</span></button>`).join("")}</div>`;
}
function startRole(i){
 const lvl=Number(document.getElementById("roleLevel").value), x=scenarios[i];
 state.role={icon:x[0],name:x[1],desc:x[2],level:lvl,open:
   i===0?"您好，请问您哪里不舒服？":
   i===1?"您好，欢迎光临。请问您想吃什么？":
   i===2?"你好，你今天有课吗？":
   i===3?"你好，请问你要去哪里？":
   i===4?"您好，这件衣服多少钱？":
   "您好，请问您想租什么样的房子？"};
 render();
}
function sendRole(){
 const input=document.getElementById("roleInput"), text=input.value.trim();if(!text)return;
 const box=document.getElementById("roleChat");box.insertAdjacentHTML("beforeend",`<div class="bubble me">${escapeHtml(text)}</div>`);
 input.value="";
 setTimeout(()=>box.insertAdjacentHTML("beforeend",`<div class="bubble bot">很好！请继续用中文回答。你可以试着说得更完整一点。</div>`),350);
}
function chat(s){
 s.innerHTML=`<div class="card" style="margin-bottom:12px"><span class="word-type">Friend Mode · HSK 4</span><h3 style="margin:10px 0 5px">你的中文朋友 🇨🇳</h3><div class="card-sub">Natural conversation first. Teacher corrections will be added in the AI version.</div></div>
 <div class="chat" id="chatBox">${state.chat.map(x=>`<div class="bubble ${x[0]}">${escapeHtml(x[1])}</div>`).join("")}</div>
 <div class="chat-input"><input id="chatInput" placeholder="用中文写一句话…"><button onclick="sendChat()">Send</button></div>`;
}
function sendChat(){
 const input=document.getElementById("chatInput"),text=input.value.trim();if(!text)return;
 state.chat.push(["me",text]);render();
 setTimeout(()=>{state.chat.push(["bot","很不错！你最近在中国学习生活怎么样？你最想提高听力、口语，还是词汇？"]);render()},350);
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>nav(b.dataset.nav)));
if("serviceWorker" in navigator && location.protocol!=="file:") navigator.serviceWorker.register("sw.js").catch(()=>{});
render();
