
const starterVocab = [
 {id:"chi",cn:"吃",py:"chī",en:"to eat",level:1,topic:"Food",type:"Verb",ex:[["我想吃中国菜。","Wǒ xiǎng chī Zhōngguó cài。","I want to eat Chinese food."],["你吃饭了吗？","Nǐ chīfàn le ma?","Have you eaten?"],["我们一起吃吧。","Wǒmen yìqǐ chī ba.","Let's eat together."]]},
 {id:"he",cn:"喝",py:"hē",en:"to drink",level:1,topic:"Food",type:"Verb",ex:[["我每天喝很多水。","Wǒ měitiān hē hěnduō shuǐ。","I drink a lot of water every day."],["你想喝咖啡还是茶？","Nǐ xiǎng hē kāfēi háishì chá?","Do you want coffee or tea?"],["天气很热，多喝水。","Tiānqì hěn rè, duō hē shuǐ.","It's hot, drink more water."]]},
 {id:"fan",cn:"饭",py:"fàn",en:"meal; cooked rice",level:1,topic:"Food",type:"Noun",ex:[["晚饭几点开始？","Wǎnfàn jǐ diǎn kāishǐ?","What time does dinner start?"],["我已经吃过饭了。","Wǒ yǐjīng chīguò fàn le.","I've already eaten."],["这家店的饭很好吃。","Zhè jiā diàn de fàn hěn hǎochī.","The food at this restaurant is delicious."]]},
 {id:"lvyou",cn:"旅游",py:"lǚyóu",en:"to travel; tourism",level:2,topic:"Travel",type:"Verb",ex:[["我喜欢在中国旅游。","Wǒ xǐhuan zài Zhōngguó lǚyóu.","I like traveling in China."],["暑假我们想去云南旅游。","Shǔjià wǒmen xiǎng qù Yúnnán lǚyóu.","We want to travel to Yunnan during summer vacation."],["旅游可以了解不同的文化。","Lǚyóu kěyǐ liǎojiě bùtóng de wénhuà.","Traveling can help you understand different cultures."]]},
 {id:"yiyuan",cn:"医院",py:"yīyuàn",en:"hospital",level:2,topic:"Health",type:"Noun",ex:[["我在医院实习。","Wǒ zài yīyuàn shíxí.","I am doing an internship at a hospital."],["医院离学校很近。","Yīyuàn lí xuéxiào hěn jìn.","The hospital is very close to the university."],["他昨天去了医院。","Tā zuótiān qù le yīyuàn.","He went to the hospital yesterday."]]},
 {id:"jia",cn:"检查",py:"jiǎnchá",en:"to examine; check-up",level:3,topic:"Health",type:"Verb",ex:[["医生给病人做了检查。","Yīshēng gěi bìngrén zuò le jiǎnchá.","The doctor examined the patient."],["请先检查一下血压。","Qǐng xiān jiǎnchá yíxià xuèyā.","Please check the blood pressure first."],["明天我要去医院检查。","Míngtiān wǒ yào qù yīyuàn jiǎnchá.","Tomorrow I need to go to the hospital for a check-up."]]},
 {id:"xuexiao",cn:"学校",py:"xuéxiào",en:"school; university",level:1,topic:"University",type:"Noun",ex:[["我的学校在合肥。","Wǒ de xuéxiào zài Héféi.","My university is in Hefei."],["你什么时候回学校？","Nǐ shénme shíhou huí xuéxiào?","When are you going back to school?"],["学校附近有很多餐厅。","Xuéxiào fùjìn yǒu hěnduō cāntīng.","There are many restaurants near the university."]]},
 {id:"canjia",cn:"参加",py:"cānjiā",en:"to participate; attend",level:3,topic:"University",type:"Verb",ex:[["我明天要参加一个考试。","Wǒ míngtiān yào cānjiā yí ge kǎoshì.","I have to take an exam tomorrow."],["很多学生参加了这次活动。","Hěnduō xuéshēng cānjiā le zhè cì huódòng.","Many students participated in this activity."],["你愿意参加我们的聚会吗？","Nǐ yuànyì cānjiā wǒmen de jùhuì ma?","Would you like to join our party?"]]},
 {id:"fangbian",cn:"方便",py:"fāngbiàn",en:"convenient",level:4,topic:"Daily Life",type:"Adjective",ex:[["这里坐地铁很方便。","Zhèlǐ zuò dìtiě hěn fāngbiàn.","Taking the subway here is very convenient."],["你什么时候方便？","Nǐ shénme shíhou fāngbiàn?","When is convenient for you?"],["网上买东西很方便。","Wǎngshàng mǎi dōngxi hěn fāngbiàn.","Buying things online is very convenient."]]},
 {id:"renao",cn:"热闹",py:"rènào",en:"lively; bustling",level:4,topic:"Culture",type:"Adjective",ex:[["晚上这条街特别热闹。","Wǎnshang zhè tiáo jiē tèbié rènào.","This street is especially lively at night."],["春节的时候城市很热闹。","Chūnjié de shíhou chéngshì hěn rènào.","The city is very lively during Spring Festival."],["我喜欢热闹的地方。","Wǒ xǐhuan rènào de dìfang.","I like lively places."]]},
 {id:"jianyi",cn:"建议",py:"jiànyì",en:"to suggest; suggestion",level:5,topic:"Communication",type:"Verb",ex:[["医生建议他多休息。","Yīshēng jiànyì tā duō xiūxi.","The doctor suggested that he rest more."],["我建议我们早点出发。","Wǒ jiànyì wǒmen zǎodiǎn chūfā.","I suggest that we leave earlier."],["谢谢你的建议。","Xièxie nǐ de jiànyì.","Thank you for your suggestion."]]},
 {id:"zhongyao",cn:"重要",py:"zhòngyào",en:"important",level:2,topic:"Daily Life",type:"Adjective",ex:[["健康很重要。","Jiànkāng hěn zhòngyào.","Health is very important."],["考试前休息也很重要。","Kǎoshì qián xiūxi yě hěn zhòngyào.","Rest is also important before an exam."],["这是一件很重要的事情。","Zhè shì yí jiàn hěn zhòngyào de shìqing.","This is a very important matter."]]}
];

// Full classic HSK 1–5 vocabulary is loaded free from an open HSK dataset.
// HSK 1–5 here follows the classic cumulative framework: 150/300/600/1200/2500 words.
const vocabSources = [1,2,3,4,5].map(level =>
  `https://raw.githubusercontent.com/jelleverheyen/hsk-vocabulary/master/wordlists/inclusive/old/${level}.json`
);
let vocab = starterVocab;
let vocabReady = false;
let vocabLoading = true;

const topicRules = {
 Food:["food","meal","rice","eat","drink","restaurant","dish","vegetable","fruit","meat","fish","cook","taste","sweet","spicy","tea","coffee","bread","cake","beer","wine"],
 Travel:["travel","tour","trip","ticket","train","flight","airport","station","hotel","tourist","guide","passport","visa","luggage","map","taxi","bus","subway","road","journey","arrive","depart"],
 Health:["hospital","doctor","patient","medicine","medical","health","ill","sick","disease","pain","treatment","examine","check-up","blood","body","headache","fever","injury","nurse","surgery"],
 University:["school","student","teacher","university","college","class","course","exam","study","learn","homework","professor","research","degree","graduate","campus","library","education"],
 Communication:["say","speak","talk","listen","language","word","meaning","explain","answer","question","discuss","communicate","suggest","agree","disagree","opinion","message","news","information"],
 Culture:["culture","festival","traditional","history","art","music","movie","film","opera","museum","custom","society","holiday","celebrate","religion","story"],
 DailyLife:["home","house","room","family","friend","work","job","money","buy","sell","shop","phone","computer","internet","clothes","weather","time","day","morning","night","life","convenient","important"]
};
function cleanEnglish(meanings){return (meanings||[]).join("; ").replace(/CL:[^;]+/g,"").replace(/\s+/g," ").trim().slice(0,220)||"Chinese word";}
function inferTopic(en){
 const t=en.toLowerCase();
 for(const [topic,keys] of Object.entries(topicRules)) if(keys.some(k=>t.includes(k))) return topic.replace("DailyLife","Daily Life");
 return "Daily Life";
}
function inferType(pos){
 if(pos.includes("v")) return "Verb";
 if(pos.includes("a")) return "Adjective";
 if(pos.includes("n") || pos.includes("nr") || pos.includes("ns")) return "Noun";
 return "Other";
}
function fallbackExamples(w){
 const x=w.cn, py=w.py, en=w.en;
 if(w.type==="Noun") return [
  [`这是${x}。`,`Zhè shì ${py}.`,`This is ${en}.`],
  [`我每天都会看到${x}。`,`Wǒ měitiān dōu huì kàndào ${py}.`,`I see ${en} in daily life.`],
  [`你对${x}了解多少？`,`Nǐ duì ${py} liǎojiě duōshao?`,`How much do you know about ${en}?`]
 ];
 if(w.type==="Adjective") return [
  [`这个地方很${x}。`,`Zhège dìfang hěn ${py}.`,`This place is very ${en}.`],
  [`我觉得${x}很重要。`,`Wǒ juéde ${py} hěn zhòngyào.`,`I think ${en} is important.`],
  [`你觉得这样${x}吗？`,`Nǐ juéde zhèyàng ${py} ma?`,`Do you think it is this ${en}?`]
 ];
 if(w.type==="Verb") return [
  [`我每天都要${x}。`,`Wǒ měitiān dōu yào ${py}.`,`I ${en} every day.`],
  [`我们一起${x}吧。`,`Wǒmen yìqǐ ${py} ba.`,`Let's ${en} together.`],
  [`你什么时候可以${x}？`,`Nǐ shénme shíhou kěyǐ ${py}?`,`When can you ${en}?`]
 ];
 return [[`“${x}”是一个常用词。`,`“${py}” shì yí ge chángyòng cí.`,`“${en}” is a commonly used word.`],[`你可以在生活中看到“${x}”。`,`Nǐ kěyǐ zài shēnghuó zhōng kàndào “${py}”.`,`You can encounter “${en}” in everyday life.`]];
}
function normalizeEntry(raw, level){
 const form=(raw.forms||[])[0]||{};
 const tr=form.transcriptions||{};
 const meanings=form.meanings||[];
 const py=tr.pinyin||"";
 const en=cleanEnglish(meanings);
 const starter=starterVocab.find(x=>x.cn===raw.simplified);
 const type=starter?.type||inferType(raw.pos||[]);
 return {id:`hsk-${level}-${raw.simplified}`,cn:raw.simplified,py:starter?.py||py,en:starter?.en||en,level,topic:starter?.topic||inferTopic(en),type,ex:starter?.ex||fallbackExamples({cn:raw.simplified,py:py||"",en,type})};
}
async function loadFullVocab(){
 try{
  const results=await Promise.all(vocabSources.map(u=>fetch(u).then(r=>{if(!r.ok)throw new Error("Vocabulary download failed");return r.json();})));
  const map=new Map();
  results.forEach((arr,idx)=>arr.forEach(raw=>{const level=idx+1; if(!map.has(raw.simplified)) map.set(raw.simplified,normalizeEntry(raw,level));}));
  vocab=[...map.values()];
  vocabReady=true;
 }catch(err){
  console.warn(err);
  vocab=starterVocab;
 }finally{
  vocabLoading=false;
  render();
 }
}
loadFullVocab();

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
 page:"home", topic:"All", type:"All", level:5, query:"", learnMode:"review", learnWord:null, learnRevealed:false, quiz:null,
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
 const m={home:"你好, Waleed 👋",learn:"Learn & Review",vocab:"Vocabulary",reading:"Reading",practice:"Real-Life Practice",chat:"Chat Partner"};
 document.getElementById("pageTitle").textContent=m[state.page]||"Chinese Partner";
}
function render(){pageTitle();setActiveNav();const s=document.getElementById("screen");s.innerHTML="";
 if(state.page==="home") home(s);
 if(state.page==="learn") learn(s);
 if(state.page==="vocab") vocabulary(s);
 if(state.page==="reading") reading(s);
 if(state.page==="practice") practice(s);
 if(state.page==="chat") chat(s);
}

function home(s){
 const mastered=state.mastered.length, total=vocab.length||2500, pct=Math.min(100,Math.round(mastered/total*100));
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
  <div class="card action" onclick="nav('learn')"><div class="icon">🧠</div><div class="card-title">Learn & Review</div><div class="card-sub">Spaced repetition · quizzes</div></div>
  <div class="card action" onclick="nav('vocab')"><div class="icon">📚</div><div class="card-title">Vocabulary</div><div class="card-sub">HSK 1–5 · topics · examples</div></div>
  <div class="card action" onclick="nav('reading')"><div class="icon">📖</div><div class="card-title">Reading</div><div class="card-sub">Pinyin + translation + audio</div></div>
  <div class="card action" onclick="nav('practice')"><div class="icon">🎭</div><div class="card-title">Roleplay</div><div class="card-sub">Hospital, food, university & more</div></div>
  <div class="card action" onclick="nav('chat')"><div class="icon">💬</div><div class="card-title">Chat Partner</div><div class="card-sub">Natural Chinese conversation</div></div>
 </div>
 <div class="section-head"><h3>${vocabReady?"Vocabulary library":"Starter words"}</h3><span style="font-size:11px;color:var(--muted)">${vocabReady?`${vocab.length.toLocaleString()} loaded`:"Loading full library…"}</span></div>
 <div class="word-list">${vocab.slice(0,4).map(wordMini).join("")}</div>`;
 bindWordRows();
}

const SRS_KEY="clp-srs-v03";
function getSRS(){try{return JSON.parse(localStorage.getItem(SRS_KEY)||"{}")}catch{return {}}}
function saveSRS(x){localStorage.setItem(SRS_KEY,JSON.stringify(x))}
function dueWords(){
 const srs=getSRS(), now=Date.now();
 return vocab.filter(w=>srs[w.id] && (srs[w.id].due||0)<=now);
}
function scheduleWord(id,rating){
 const srs=getSRS(), old=srs[id]||{box:0,seen:0};
 let box=old.box||0;
 if(rating==="again") box=0;
 else if(rating==="hard") box=Math.max(0,box);
 else if(rating==="good") box=Math.min(5,box+1);
 else box=Math.min(5,box+2);
 const days=[0,1,3,7,14,30][box];
 srs[id]={box,seen:(old.seen||0)+1,due:Date.now()+days*86400000,last:rating};
 saveSRS(srs);
 if(rating!=="again" && box>=2 && !state.mastered.includes(id)){state.mastered=[...state.mastered,id];save()}
 state.learnWord=null;state.learnRevealed=false;render();
}
function pickLearnWord(){
 const due=dueWords();
 if(due.length) return due[Math.floor(Math.random()*due.length)];
 const srs=getSRS();
 const fresh=vocab.filter(w=>!srs[w.id] && w.level<=state.level);
 if(fresh.length) return fresh[Math.floor(Math.random()*Math.min(50,fresh.length))];
 return vocab[Math.floor(Math.random()*vocab.length)];
}
function learn(s){
 const srs=getSRS(), due=dueWords(), studied=Object.keys(srs).length, mastered=state.mastered.length;
 if(state.quiz){quizView(s,state.quiz);return}
 if(state.learnWord){
   const w=state.learnWord;
   s.innerHTML=`<button class="back" onclick="state.learnWord=null;state.learnRevealed=false;render()">← Back to learning</button>
   <div class="detail-card learn-card"><div class="learn-label">${due.includes(w)?"REVIEW DUE":"NEW WORD"} · HSK ${w.level}</div>
   <div class="detail-cn">${w.cn}</div><div class="detail-py">${w.py}</div>
   ${state.learnRevealed?`<div class="detail-en">${w.en}</div><div class="section-head"><h3>Example</h3></div><div class="example"><div class="cn">${w.ex[0][0]}</div><div class="py">${w.ex[0][1]}</div><div class="en">${w.ex[0][2]}</div><button class="play" onclick="speak('${w.ex[0][0]}')">▶ Play</button></div>
   <div class="section-head"><h3>How well did you know it?</h3></div><div class="rating-grid"><button onclick="scheduleWord('${w.id}','again')">Again<br><small>Today</small></button><button onclick="scheduleWord('${w.id}','hard')">Hard<br><small>~1 day</small></button><button onclick="scheduleWord('${w.id}','good')">Good<br><small>Next review</small></button><button onclick="scheduleWord('${w.id}','easy')">Easy<br><small>Longer gap</small></button></div>`:`<button class="play" style="width:100%;margin-top:20px" onclick="state.learnRevealed=true;render()">Show meaning & example</button>`}</div>`;
   return;
 }
 s.innerHTML=`<div class="hero"><h2>Study smarter.</h2><p>Learn new words, review due words, and build a long-term memory habit.</p>
 <div class="stat-grid"><div class="card stat"><strong>${due.length}</strong><span>Due today</span></div><div class="card stat"><strong>${studied}</strong><span>Studied</span></div><div class="card stat"><strong>${mastered}</strong><span>Mastered</span></div></div></div>
 <div class="section-head"><h3>Start a session</h3></div><div class="grid"><div class="card action" onclick="state.learnWord=pickLearnWord();render()"><div class="icon">🧠</div><div class="card-title">${due.length?"Review due words":"Learn a new word"}</div><div class="card-sub">Adaptive review based on your answers</div></div>
 <div class="card action" onclick="startQuiz()"><div class="icon">🎯</div><div class="card-title">Quick quiz</div><div class="card-sub">10 questions · meaning & recognition</div></div></div>
 <div class="card"><h3>How review works</h3><p class="card-sub">Rate each word: Again, Hard, Good or Easy. Your next review is scheduled automatically.</p><div class="intervals"><span>1d</span><span>3d</span><span>7d</span><span>14d</span><span>30d</span></div></div>`;
}
function startQuiz(){
 const pool=vocab.filter(w=>w.level<=state.level); const qs=[]; const used=new Set();
 for(let i=0;i<Math.min(10,pool.length);i++){let w; do{w=pool[Math.floor(Math.random()*pool.length)]}while(used.has(w.id)); used.add(w.id); const opts=[w.en]; while(opts.length<4){const x=pool[Math.floor(Math.random()*pool.length)].en;if(x&&!opts.includes(x))opts.push(x)} qs.push({w,opts:opts.sort(()=>Math.random()-.5),answer:null})}
 state.quiz={qs,i:0,score:0};render();
}
function quizView(s,q){const item=q.qs[q.i]; if(!item){s.innerHTML=`<div class="detail-card"><div class="icon">🏆</div><h2>Quiz complete!</h2><div class="quiz-score">${q.score} / ${q.qs.length}</div><p class="card-sub">Nice work. Your quiz result is saved for this session.</p><button class="play" style="width:100%" onclick="state.quiz=null;render()">Back to learning</button></div>`;return}
 s.innerHTML=`<button class="back" onclick="state.quiz=null;render()">← Exit quiz</button><div class="detail-card"><div class="learn-label">Question ${q.i+1} of ${q.qs.length}</div><div class="detail-cn" style="font-size:48px">${item.w.cn}</div><div class="detail-py">${item.w.py}</div><h3>What does this mean?</h3><div class="quiz-options">${item.opts.map((o,i)=>`<button class="quiz-option" onclick="answerQuiz(${i})">${o}</button>`).join("")}</div></div>`;
}
function answerQuiz(i){const q=state.quiz,item=q.qs[q.i];if(item.answer!==null)return;item.answer=i;const correct=item.opts[i]===item.w.en;if(correct){q.score++;toast("Correct! 🎉")}else toast("Not quite — keep practicing.");scheduleWord(item.w.id,correct?"good":"again");
 // scheduleWord renders and clears learnWord; restore quiz state after the render delay
 setTimeout(()=>{if(state.quiz){q.i++;render()}},10);
}
function wordMini(w){return `<div class="word-row" data-word="${w.id}"><div><div class="word-cn">${w.cn}</div><div class="word-py">${w.py} · ${w.en}</div></div><span class="word-type">HSK ${w.level} · ${w.type}</span></div>`}
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
 ${vocabLoading?`<div class="card" style="margin-bottom:12px">Loading the full HSK 1–5 vocabulary library…</div>`:`<div class="card" style="margin-bottom:12px"><strong>${vocab.length.toLocaleString()} words available</strong><div class="card-sub">Classic HSK 1–5 cumulative library · 150 / 300 / 600 / 1200 / 2500 framework</div></div>`}
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
