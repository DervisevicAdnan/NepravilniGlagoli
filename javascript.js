var irregularVerbs = [
	["be", "was/were", "been", "biti"],
	["bear", "bore", "borne", "podnositi"],
	["beat", "beat", "beaten", "tući"],
	["become", "became", "become", "postati"],
	["begin", "began", "begun", "početi"],
	["bend", "bent", "bent", "saviti"],
	["bet", "bet", "bet", "kladiti se"],
	["bind", "bound", "bound", "vezati"],
	["bite", "bit", "bitten", "gristi"],
	["blow", "blew", "blown", "puhati"],
	["break", "broke", "broken", "slomiti"],
	["bring", "brought", "brought", "nositi"],
	["build", "built", "built", "graditi"],
	["burn", "burnt/burned", "burnt/burned", "gorjeti"],
	["burst", "burst", "burst", "pući"],
	["buy", "bought", "bought", "kupiti"],
	["can", "could", "could", "moći"],
	["cast", "cast", "cast", "baciti"],
	["catch", "caught", "caught", "loviti"],
	["choose", "chose", "chosen", "izabrati"],
	["come", "came", "come", "doći"],
	["cost", "cost", "cost", "koštati"],
	["cut", "cut", "cut", "rezati"],
	["deal", "dealt", "dealt", "dijeliti"],
	["do", "did", "done", "raditi"],
	["draw", "drew", "drawn", "crtati"],
	["drink", "drank", "drunk", "piti"],
	["drive", "drove", "driven", "voziti"],
	["eat", "ate", "eaten", "jesti"],
	["fall", "fell", "fallen", "pasti"],
	["feed", "fed", "fed", "hraniti"],
	["feel", "felt", "felt", "osjećati"],
	["fight", "fought", "fought", "tući se"],
	["find", "found", "found", "naći"],
	["fling", "flung", "flung", "baciti"],
	["fly", "flew", "flown", "letjeti"],
	["forbid", "forbade", "forbidden", "zabraniti"],
	["forget", "forgot", "forgotten", "zaboraviti"],
	["forgive", "forgave", "forgiven", "oprostiti"],
	["freeze", "froze", "frozen", "zalediti"],
	["get", "got", "got", "dobiti"],
	["give", "gave", "given", "dati"],
	["go", "went", "gone", "ići"],
	["grow", "grew", "grown", "rasti"],
	["have", "had", "had", "imati"],
	["hang", "hung", "hung", "objesiti"],
	["hear", "heard", "heard", "čuti"],
	["hide", "hid", "hidden", "sakriti"],
	["hit", "hit", "hit", "udariti"],
	["hold", "held", "held", "držati"],
	["hurt", "hurt", "hurt", "boljeti"],
	["keep", "kept", "kept", "čuvati"],
	["know", "knew", "known", "znati"],
	["lay", "laid", "laid", "položiti"],
	["lead", "led", "led", "voditi"],
	["lean", "leaned/leant", "leaned/leant", "nasloniti se"],
	["learn", "learned/learnt", "learned/learnt", "učiti"],
	["leave", "left", "left", "otići"],
	["lend", "lent", "lent", "posuditi"],
	["let", "let", "let", "pustiti"],
	["lie", "lay", "lain", "ležati"],
	["lose", "lost", "lost", "izgubiti"],
	["make", "made", "made", "napraviti"],
	["mean", "meant", "meant", "značiti"],
	["meet", "met", "met", "sresti"],
	["pay", "paid", "paid", "platiti"],
	["put", "put", "put", "staviti"],
	["read", "read", "read", "čitati"],
	["ride", "rode", "ridden", "jahati"],
	["ring", "rang", "rung", "zvoniti"],
	["rise", "rose", "risen", "dići"],
	["run", "ran", "run", "trčati"],
	["say", "said", "said", "reći"],
	["see", "saw", "seen", "vidjeti"],
	["seek", "sought", "sought", "tražiti"],
	["sell", "sold", "sold", "prodati"],
	["send", "sent", "sent", "poslati"],
	["set", "set", "set", "postaviti"],
	["shake", "shook", "shaken", "tresti"],
	["shine", "shone", "shone", "sjati"],
	["shoot", "shot", "shot", "pucati"],
	["show", "showed", "shown", "pokazati"],
	["shut", "shut", "shut", "zatvoriti"],
	["sing", "sang", "sung", "pjevati"],
	["sit", "sat", "sat", "sjediti"],
	["sleep", "slept", "slept", "spavati"],
	["slide", "slid", "slid", "klizati se"],
	["smell", "smelled/smelt", "smelled/smelt", "mirisati"],
	["speak", "spoke", "spoken", "govoriti"],
	["speed", "sped", "sped", "ubrzati"],
	["spell", "spelt/spelled", "spelt/spelled", "spelovati"],
	["spend", "spent", "spent", "trošiti"],
	["spill", "spilt", "spilt", "proliti"],
	["split", "split", "split", "podijeliti"],
	["spoil", "spoilt", "spoilt", "pokvariti"],
	["stand", "stood", "stood", "stajati"],
	["steal", "stole", "stolen", "krasti"],
	["stick", "stuck", "stuck", "lijepiti"],
	["strike", "struck", "struck", "udariti"],
	["swim", "swam", "swum", "plivati"],
	["take", "took", "taken", "uzeti"],
	["teach", "taught", "taught", "podučavati"],
	["tear", "tore", "torn", "poderati"],
	["tell", "told", "told", "reći"],
	["think", "thought", "thought", "misliti"],
	["throw", "threw", "thrown", "baciti"],
	["understand", "understood", "understood", "razumjeti"],
	["wake", "woke", "woken", "probuditi se"],
	["wear", "wore", "worn", "nositi"],
	["win", "won", "won", "pobijediti"],
	["write", "wrote", "written", "pisati"],
]

var smallTable=[];

function createWholeTable() {
	document.getElementById("menu").innerHTML=`
		<button onclick="createMenu()">Menu</button>
	`
	var a="<table>";
	for (let i = 0; i < irregularVerbs.length; i++) {
		let t=Math.floor(Math.random()*4);
		a+="<tr>";
		for(let j=0;j<4;j++){
			a+="<td>"
			if(t==j){
				a+='<input type="text" class="'+i+'" value="' + irregularVerbs[i][j] + '">';
			}else{
				a+='<input type="text" class="'+i+'">'
			}
			a+="</td>"
		}
		a+="</tr>"
	}
	a+="</table>";
	document.getElementById("forSubmit").innerHTML=`
	<button onclick="submitWholeTable()">Submit</button>
	<button onclick="showAnswers()">Show answers</button>
	`;

	document.getElementById('forVerbs').innerHTML=a;
}

function showAnswers(){
	for(let i=0;i<irregularVerbs.length;i++){
		let v=document.getElementsByClassName(""+i);
		for(let j=0;j<4;j++){
			v[j].value=irregularVerbs[i][j];
			v[j].style.borderColor="black";
		}
	}
}

function submitWholeTable() {
	for(let i=0;i<irregularVerbs.length;i++){
		let v=document.getElementsByClassName(""+i);
		for(let j=0;j<4;j++){
			if(irregularVerbs[i][j]==v[j].value.toLowerCase()||checkValues(v[j].value,i,j)) v[j].style.borderColor="green";
			else v[j].style.borderColor="red";
		}
	}
}
function submitSmallTable() {
	for(let i=0;i<20;i++){
		let v=document.getElementsByClassName(""+smallTable[i]);

		for(let j=0;j<4;j++){
			if(irregularVerbs[smallTable[i]][j]==v[j].value.toLowerCase()||checkValues(v[j].value,smallTable[i],j)) v[j].style.borderColor="green";
			else v[j].style.borderColor="red";
		}
	}
}

function showAnswersSmallTable() {
	for(let i=0;i<20;i++){
		let v=document.getElementsByClassName(""+smallTable[i]);

		for(let j=0;j<4;j++){
			v[j].value=irregularVerbs[smallTable[i]][j];
			v[j].style.borderColor="black";
		}
	}
}

function createSmallRandomTable() {
	document.getElementById("menu").innerHTML=`
		<button onclick="createMenu()">Menu</button>
	`
	var a="<table>";
	for (let r = 0; r < 20; r++) {
		let i=Math.floor(Math.random()*110);
		while(smallTable.includes(i)) i=Math.floor(Math.random()*110);
		smallTable.push(i);
		let t=Math.floor(Math.random()*4);
		a+="<tr>";
		for(let j=0;j<4;j++){
			a+="<td>"
			if(t==j){
				a+='<input type="text" class="'+i+'" value="' + irregularVerbs[i][j] + '">';
			}else{
				a+='<input type="text" class="'+i+'">'
			}
			a+="</td>"
		}
		a+="</tr>"
	}
	a+="</table>";
	document.getElementById("forSubmit").innerHTML=`
	<button onclick="submitSmallTable()">Submit</button>
	<button onclick="showAnswersSmallTable()">Show answers</button>
	`;
	document.getElementById('forVerbs').innerHTML=a;
}

function checkValues(str,indi,indj) {
	str=str.replace(/č/g,"c");
	str=str.replace(/ć/g,"c");
	str=str.replace(/ž/g,"z");
	str=str.replace(/đ/g,"d");
	str=str.replace(/š/g,"s");
	let tmp=irregularVerbs[indi][indj];
	tmp=tmp.replace(/č/g,"c");
	tmp=tmp.replace(/ć/g,"c");
	tmp=tmp.replace(/ž/g,"z");
	tmp=tmp.replace(/đ/g,"d");
	tmp=tmp.replace(/š/g,"s");
	let v=tmp.split("/");
	for(let i=0;i<v.length;i++){
		if(v[i]==str) return true;
	}
	return false;
}

function createMenu(){
	var cont=`
	<button onclick="createWholeTable()">Čitava tabela</button>
	<button onclick="createSmallRandomTable()">20 glagola</button>
	`
	document.getElementById('menu').innerHTML=cont;
	document.getElementById('forVerbs').innerHTML="";
	document.getElementById('forSubmit').innerHTML="";
	smallTable=[];
}
createMenu();