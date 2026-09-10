
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
 {level:1,title:"我的一天",topic:"Daily Life",cn:"我每天早上七点起床。起床以后，我喝水，吃早饭，然后去学校。下午我回家学习，晚上和朋友聊天。",py:"Wǒ měitiān zǎoshang qī diǎn qǐchuáng. Qǐchuáng yǐhòu, wǒ hē shuǐ, chī zǎofàn, ránhòu qù xuéxiào. Xiàwǔ wǒ huí jiā xuéxí, wǎnshang hé péngyou liáotiān.",en:"I get up at seven every morning. After getting up, I drink water, eat breakfast, and then go to school. In the afternoon I go home to study, and in the evening I chat with friends.",q:["我几点起床？","A. 六点","B. 七点","C. 八点"],a:1},
 {level:1,title:"在餐厅吃饭",topic:"Food",cn:"今天我和朋友去餐厅吃饭。朋友想吃面，我想吃米饭。我们还喝了茶。这里的菜很好吃，我们都很高兴。",py:"Jīntiān wǒ hé péngyou qù cāntīng chīfàn. Péngyou xiǎng chī miàn, wǒ xiǎng chī mǐfàn. Wǒmen hái hē le chá. Zhèlǐ de cài hěn hǎochī, wǒmen dōu hěn gāoxìng.",en:"Today my friend and I went to a restaurant. My friend wanted noodles, and I wanted rice. We also drank tea. The food here is delicious, and we are both happy.",q:["朋友想吃什么？","A. 面","B. 米饭","C. 水果"],a:0},
 {level:1,title:"我的学校",topic:"University",cn:"我的学校很大。学校里有很多学生和老师。图书馆在教学楼旁边。我喜欢在图书馆看书，也喜欢和同学一起学习。",py:"Wǒ de xuéxiào hěn dà. Xuéxiào lǐ yǒu hěnduō xuéshēng hé lǎoshī. Túshūguǎn zài jiàoxué lóu pángbiān. Wǒ xǐhuan zài túshūguǎn kàn shū, yě xǐhuan hé tóngxué yìqǐ xuéxí.",en:"My school is large. There are many students and teachers. The library is next to the teaching building. I like reading in the library and studying with classmates.",q:["图书馆在哪里？","A. 宿舍旁边","B. 餐厅旁边","C. 教学楼旁边"],a:2},
 {level:2,title:"第一次去中国医院",topic:"Health",cn:"昨天我觉得不舒服，所以去了医院。医生先问我的情况，然后给我做检查。医生说没有大问题，让我多休息，多喝水。",py:"Zuótiān wǒ juéde bù shūfu, suǒyǐ qù le yīyuàn. Yīshēng xiān wèn wǒ de qíngkuàng, ránhòu gěi wǒ zuò jiǎnchá. Yīshēng shuō méiyǒu dà wèntí, ràng wǒ duō xiūxi, duō hē shuǐ.",en:"Yesterday I felt unwell, so I went to the hospital. The doctor first asked about my condition and then examined me. The doctor said there was no major problem and told me to rest more and drink more water.",q:["医生建议我做什么？","A. 多运动","B. 多休息和喝水","C. 少睡觉"],a:1},
 {level:2,title:"在中国坐高铁",topic:"Travel",cn:"周末我要去南京看朋友。我们准备坐高铁，因为高铁又快又方便。到了车站以后，我先找到检票口，再按照车票上的信息上车。",py:"Zhōumò wǒ yào qù Nánjīng kàn péngyou. Wǒmen zhǔnbèi zuò gāotiě, yīnwèi gāotiě yòu kuài yòu fāngbiàn. Dào le chēzhàn yǐhòu, wǒ xiān zhǎodào jiǎnpiàokǒu, zài ànzhào chēpiào shàng de xìnxī shàng chē.",en:"This weekend I am going to Nanjing to visit a friend. We plan to take the high-speed train because it is fast and convenient. After arriving at the station, I find the ticket gate and then board according to the ticket information.",q:["为什么坐高铁？","A. 很便宜","B. 又快又方便","C. 离家很近"],a:1},
 {level:2,title:"我的研究生生活",topic:"University",cn:"现在我是研究生。平时除了上课，我还要阅读论文、参加讨论和完成研究任务。虽然有时候很忙，但是我觉得每天都有新的收获。",py:"Xiànzài wǒ shì yánjiūshēng. Píngshí chúle shàngkè, wǒ hái yào yuèdú lùnwén, cānjiā tǎolùn hé wánchéng yánjiū rènwu. Suīrán yǒushíhou hěn máng, dànshì wǒ juéde měitiān dōu yǒu xīn de shōuhuò.",en:"I am now a graduate student. Besides attending classes, I also read papers, join discussions, and complete research tasks. Although I am sometimes busy, I feel that I gain something new every day.",q:["研究生平时还要做什么？","A. 阅读论文和完成研究","B. 只参加考试","C. 每天旅游"],a:0},
 {level:3,title:"在中国租房",topic:"Daily Life",cn:"第一次在中国租房时，我发现提前了解合同内容非常重要。签合同以前，我会确认房租、水电费、押金以及退租条件。如果有不明白的地方，我会先问清楚再签字。",py:"Dì yī cì zài Zhōngguó zū fáng shí, wǒ fāxiàn tíqián liǎojiě hétóng nèiróng fēicháng zhòngyào. Qiān hétóng yǐqián, wǒ huì quèrèn fángzū, shuǐdiànfèi, yājīn yǐjí tuìzū tiáojiàn. Rúguǒ yǒu bù míngbai de dìfang, wǒ huì xiān wèn qīngchu zài qiānzì.",en:"When renting a place in China for the first time, I found it very important to understand the contract in advance. Before signing, I check the rent, utilities, deposit, and move-out conditions. If something is unclear, I ask first and then sign.",q:["签合同以前最重要的是什么？","A. 买家具","B. 了解合同内容","C. 找餐厅"],a:1},
 {level:3,title:"和中国同学一起做项目",topic:"University",cn:"这学期我和几位中国同学一起完成一个项目。刚开始，我们对任务的分配有不同的想法。后来我们认真讨论，决定根据每个人的时间和能力安排工作。这样以后，合作变得顺利多了。",py:"Zhè xuéqī wǒ hé jǐ wèi Zhōngguó tóngxué yìqǐ wánchéng yí ge xiàngmù. Gāng kāishǐ, wǒmen duì rènwu de fēnpèi yǒu bùtóng de xiǎngfa. Hòulái wǒmen rènzhēn tǎolùn, juédìng gēnjù měi ge rén de shíjiān hé nénglì ānpái gōngzuò. Zhèyàng yǐhòu, hézuò biàn de shùnlì duō le.",en:"This semester I am completing a project with several Chinese classmates. At first, we had different ideas about dividing the tasks. Later we discussed carefully and assigned work according to each person's time and ability. After that, cooperation became much smoother.",q:["后来为什么合作更顺利？","A. 因为取消了项目","B. 因为认真讨论并分配工作","C. 因为没有任务了"],a:1},
 {level:3,title:"医院里的沟通",topic:"Health",cn:"在医院交流时，准确表达自己的症状很重要。除了告诉医生哪里不舒服，还应该说明症状什么时候开始、持续了多久，以及以前有没有出现过类似情况。这样可以帮助医生更好地了解问题。",py:"Zài yīyuàn jiāoliú shí, zhǔnquè biǎodá zìjǐ de zhèngzhuàng hěn zhòngyào. Chúle gàosu yīshēng nǎlǐ bù shūfu, hái yīnggāi shuōmíng zhèngzhuàng shénme shíhou kāishǐ, chíxù le duōjiǔ, yǐjí yǐqián yǒu méiyǒu chūxiàn guò lèisì qíngkuàng. Zhèyàng kěyǐ bāngzhù yīshēng gèng hǎo de liǎojiě wèntí.",en:"When communicating in a hospital, it is important to describe symptoms accurately. Besides telling the doctor where you feel uncomfortable, explain when the symptoms started, how long they have lasted, and whether you have had a similar problem before. This helps the doctor understand the problem better.",q:["除了哪里不舒服，还应该说明什么？","A. 症状的时间和持续多久","B. 喜欢什么食物","C. 朋友住在哪里"],a:0},
 {level:4,title:"学习中文最有效的方法",topic:"Communication",cn:"很多学习者认为，中文进步的关键是每天投入大量时间。其实，比单纯增加学习时间更重要的是提高使用语言的质量。把新词放进真实句子里，在生活中主动开口，并及时发现和改正错误，往往比机械地背诵更有效。",py:"Hěnduō xuéxízhě rènwéi, Zhōngwén jìnbù de guānjiàn shì měitiān tóurù dàliàng shíjiān. Qíshí, bǐ dānchún zēngjiā xuéxí shíjiān gèng zhòngyào de shì tígāo shǐyòng yǔyán de zhìliàng. Bǎ xīn cí fàng jìn zhēnshí jùzi lǐ, zài shēnghuó zhōng zhǔdòng kāikǒu, bìng jíshí fāxiàn hé gǎizhèng cuòwù, wǎngwǎng bǐ jīxiè de bèisòng gèng yǒuxiào.",en:"Many learners think the key to improving Chinese is spending a large amount of time every day. In fact, improving the quality of language use is more important than simply increasing study time. Putting new words into real sentences, speaking actively in daily life, and correcting mistakes promptly are often more effective than mechanical memorization.",q:["什么通常比机械背诵更有效？","A. 只看中文电影","B. 在真实生活中使用并纠正错误","C. 减少练习"],a:1},
 {level:4,title:"中国城市的生活节奏",topic:"Culture",cn:"不同城市的生活节奏可能差别很大。有些大城市交通方便、工作机会多，但生活成本也比较高；一些中小城市节奏相对慢一些，人们可能有更多时间享受生活。选择在哪里生活，不只是考虑城市大小，还要看自己的学习、工作和生活需求。",py:"Bùtóng chéngshì de shēnghuó jiézòu kěnéng chābié hěn dà. Yǒuxiē dà chéngshì jiāotōng fāngbiàn, gōngzuò jīhuì duō, dàn shēnghuó chéngběn yě bǐjiào gāo; yìxiē zhōngxiǎo chéngshì jiézòu xiāngduì màn yìxiē, rénmen kěnéng yǒu gèng duō shíjiān xiǎngshòu shēnghuó. Xuǎnzé zài nǎlǐ shēnghuó, bù zhǐshì kǎolǜ chéngshì dàxiǎo, hái yào kàn zìjǐ de xuéxí, gōngzuò hé shēnghuó xūqiú.",en:"The pace of life can differ greatly between Chinese cities. Some large cities have convenient transport and many job opportunities, but living costs are also higher. Smaller cities may have a slower pace and more time to enjoy life. Choosing where to live depends not only on city size but also on your study, work, and life needs.",q:["选择城市时还要考虑什么？","A. 只有城市面积","B. 学习、工作和生活需求","C. 只有天气"],a:1},
 {level:4,title:"第一次参加学术活动",topic:"University",cn:"第一次参加学术活动时，我原本担心自己的中文不够好，听不懂专业内容。活动开始以后，我发现只要提前阅读相关材料，记住几个关键词，并在听不懂的时候记录问题，就能逐渐跟上讨论。更重要的是，不要因为害怕犯错而放弃交流。",py:"Dì yī cì cānjiā xuéshù huódòng shí, wǒ yuánběn dānxīn zìjǐ de Zhōngwén bú gòu hǎo, tīng bù dǒng zhuānyè nèiróng. Huódòng kāishǐ yǐhòu, wǒ fāxiàn zhǐyào tíqián yuèdú xiāngguān cáiliào, jìzhù jǐ ge guānjiàncí, bìng zài tīng bù dǒng de shíhou jìlù wèntí, jiù néng zhújiàn gēn shàng tǎolùn. Gèng zhòngyào de shì, bú yào yīnwèi hàipà fàncuò ér fàngqì jiāoliú.",en:"At my first academic event, I worried that my Chinese was not good enough to understand the professional content. After it started, I found that reading related materials in advance, remembering key terms, and writing down questions when I did not understand helped me follow the discussion. More importantly, don't give up communicating because you are afraid of mistakes.",q:["怎样更容易跟上学术讨论？","A. 提前准备材料和关键词","B. 不听讨论","C. 不记录问题"],a:0},
 {level:5,title:"人工智能与医学研究",topic:"Health",cn:"人工智能正在逐渐进入医学研究的多个环节，例如医学影像分析、临床数据整理以及药物研发。它能够帮助研究人员快速处理大量信息，但并不能完全代替专业判断。研究者仍然需要理解数据的来源、模型的局限性以及结果是否具有临床意义。",py:"Réngōng zhìnéng zhèngzài zhújiàn jìnrù yīxué yánjiū de duō ge huánjié, lìrú yīxué yǐngxiàng fēnxī, línchuáng shùjù zhěnglǐ yǐjí yàowù yánfā. Tā nénggòu bāngzhù yánjiū rényuán kuàisù chǔlǐ dàliàng xìnxī, dàn bìng bù néng wánquán dàitì zhuānyè pànduàn. Yánjiūzhě réngrán xūyào lǐjiě shùjù de láiyuán, móxíng de júxiànxìng yǐjí jiéguǒ shìfǒu jùyǒu línchuáng yìyì.",en:"Artificial intelligence is gradually entering many parts of medical research, such as medical image analysis, clinical data organization, and drug development. It can help researchers process large amounts of information quickly, but it cannot completely replace professional judgment. Researchers still need to understand the data source, model limitations, and whether results have clinical significance.",q:["人工智能不能完全代替什么？","A. 专业判断","B. 数据整理","C. 信息处理"],a:0},
 {level:5,title:"跨文化交流中的误解",topic:"Culture",cn:"跨文化交流中的误解并不一定来自语言能力不足，有时也与人们对礼貌、时间、个人空间和表达方式的不同理解有关。当我们发现对方的行为与自己的习惯不一样时，最好的办法不是马上判断对错，而是先了解背后的文化背景，再寻找合适的沟通方式。",py:"Kuàwénhuà jiāoliú zhōng de wùjiě bìng bù yídìng láizì yǔyán nénglì bùzú, yǒushí yě yǔ rénmen duì lǐmào, shíjiān, gèrén kōngjiān hé biǎodá fāngshì de bùtóng lǐjiě yǒuguān. Dāng wǒmen fāxiàn duìfāng de xíngwéi yǔ zìjǐ de xíguàn bù yíyàng shí, zuì hǎo de bànfǎ bú shì mǎshàng pànduàn duìcuò, ér shì xiān liǎojiě bèihòu de wénhuà bèijǐng, zài xúnzhǎo héshì de gōutōng fāngshì.",en:"Misunderstandings in cross-cultural communication do not necessarily come from weak language skills. They can also come from different understandings of politeness, time, personal space, and ways of expressing ideas. When someone's behavior differs from our habits, it is better to understand the cultural background first rather than immediately judging it as right or wrong.",q:["遇到文化差异时，首先应该做什么？","A. 马上批评对方","B. 了解背后的文化背景","C. 停止交流"],a:1},
 {level:5,title:"从输入到真正的表达",topic:"Communication",cn:"语言学习中的输入和输出并不是彼此独立的两个阶段。大量阅读和听力可以帮助学习者建立语感，但如果缺少主动表达，很多认识过的词汇仍然很难在真实交流中被准确使用。因此，有效的学习循环应该包括理解、模仿、表达、反馈和再次练习。",py:"Yǔyán xuéxí zhōng de shūrù hé shūchū bìng bú shì bǐcǐ dúlì de liǎng ge jiēduàn. Dàliàng yuèdú hé tīnglì kěyǐ bāngzhù xuéxízhě jiànlì yǔgǎn, dàn rúguǒ quēshǎo zhǔdòng biǎodá, hěnduō rènshi guò de cíhuì réngrán hěn nán zài zhēnshí jiāoliú zhōng bèi zhǔnquè shǐyòng. Yīncǐ, yǒuxiào de xuéxí xúnhuán yīnggāi bāokuò lǐjiě, mófǎng, biǎodá, fǎnkuì hé zàicì liànxí.",en:"Input and output in language learning are not two completely separate stages. Extensive reading and listening can build language intuition, but without active expression, many familiar words remain difficult to use accurately in real communication. An effective learning cycle should therefore include understanding, imitation, expression, feedback, and repeated practice.",q:["有效的学习循环包括什么？","A. 只有背单词","B. 理解、模仿、表达、反馈和练习","C. 只看语法"],a:1}
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
 selected:null, reading:null, readingPinyin:true, readingEnglish:true, role:null,
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
  const showPinyin=state.readingPinyin!==false;
  const showEnglish=state.readingEnglish!==false;
  const cnWords=[...new Set(vocab.map(x=>x.cn))].filter(x=>x.length>=1).sort((a,b)=>b.length-a.length);
  let cn=r.cn;
  cnWords.forEach(t=>{if(cn.includes(t)) cn=cn.split(t).join(`<span class="tap" onclick="showWord('${t.replace(/'/g,"\\'")}')">${t}</span>`)});
  s.innerHTML=`<button class="back" onclick="state.reading=null;render()">← Back to readings</button>
  <div class="detail-card"><div style="display:flex;justify-content:space-between;align-items:center"><span class="word-type">HSK ${r.level} · ${r.topic}</span><span style="font-size:11px;color:var(--muted)">${state.reading+1} / ${readings.length}</span></div>
  <h2 style="margin:10px 0 5px">${r.title}</h2>
  <div class="reading-actions"><button class="play" onclick="speak(${JSON.stringify(r.cn)})">🔊 Listen</button><button class="toggle" onclick="state.readingPinyin=!showPinyin;render()">${showPinyin?"Hide pinyin":"Show pinyin"}</button><button class="toggle" onclick="state.readingEnglish=!showEnglish;render()">${showEnglish?"Hide English":"Show English"}</button></div>
  <div class="section-head"><h3>Chinese</h3><span style="font-size:11px;color:var(--muted)">Tap highlighted words</span></div><div class="reader">${cn}</div>
  ${showPinyin?`<div class="translation"><strong>Pinyin</strong><br>${r.py}</div>`:""}
  ${showEnglish?`<div class="translation"><strong>English</strong><br>${r.en}</div>`:""}
  <div class="reading-quiz"><div class="learn-label">Comprehension</div><h3>${r.q[0]}</h3><div class="quiz-options">${r.q.slice(1).map((o,i)=>`<button class="quiz-option" onclick="answerReading(${i},${r.a})">${o}</button>`).join("")}</div><div id="readingResult"></div></div>
  </div>`;
  return;
 }
 const levels=[1,2,3,4,5];
 s.innerHTML=`<div class="card" style="margin-bottom:14px"><div class="section-head" style="margin-top:0"><h3>Reading library</h3><span class="word-type">${readings.length} passages</span></div><p class="card-sub">Read by HSK level, tap useful words, listen, switch pinyin/English, then test comprehension.</p></div>
 ${levels.map(l=>`<div class="section-head"><h3>HSK ${l}</h3><span style="font-size:11px;color:var(--muted)">${readings.filter(r=>r.level===l).length} passages</span></div>${readings.map((r,i)=>[r,i]).filter(([r])=>r.level===l).map(([r,i])=>`<div class="card action reading-card" onclick="state.reading=${i};state.readingPinyin=true;state.readingEnglish=true;render()"><span class="word-type">${r.topic}</span><h3 style="margin:9px 0 4px">${r.title}</h3><div class="card-sub">${r.en.slice(0,150)}…</div><div class="reading-meta">🔊 Audio · 👆 Tap words · 📝 Quiz</div></div>`).join("")}`).join("")}`;
}
function answerReading(choice,correct){const el=document.getElementById("readingResult");if(!el)return;el.innerHTML=choice===correct?`<div class="correct">✓ Correct! Great reading.</div>`:`<div class="incorrect">Not quite. Try reading the paragraph again.</div>`;}

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
