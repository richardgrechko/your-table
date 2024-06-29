let modInfo = {
	name: "信表",
	nameEN: "The Letter Table",// When you open the otherLanguageMod, this is the second language
	id: "TheLetterTable",
	author: "richardgrechko",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	otherLanguageMod: true,// When on, it will ask the player to choose a language at the beginning of the game
	languageMod: true,// Use when otherLanguageMod is off, default are true -> English, false -> Chinese
	//It offers a portable way to translate, but it is not recommended

	forceOneTab: false,// Enable Single-Tab Mode ( This feature doen't work fluently as you'd imagine, it's made for expert, and if you open it, it will show 'tree-tab' page everytime you refresh the page ( ps: you can change that at save.js, line 234 ) )

	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

var colors = {
	button: {
		width: '253px',//UI Button
		height: '40px',//UI Button
		font: '30px',//UI Button
		border: '3px'//UI Button
	},
	default: {
		1: "#ffffff",//Branch color 1
		2: "#bfbfbf",//Branch color 2
		3: "#7f7f7f",//Branch color 3
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Literally nothing",
}

function changelog(){
	return (options.ch || modInfo.languageMod==false)?`
		<br><br><br><h1>更新日志:</h1><br>(不存在<span style='color: red'><s>剧透警告</s></span>)<br><br>
		<span style="font-size: 17px;">
			<h3><s>不,你应该自己写这个</s></h3><br><br>
			<h3>v3.0 - 史无前例的改动</h3><br>
				- 开发了 The Modding Table, 这何尝不是一种TMT<br>
			<br><br>
		`:`
		<br><br><br><h1>ChangeLog:</h1><br>(No <span style='color: red'><s>Spoiler Warning!</s></span>)<br><br>
		<span style="font-size: 17px;">
			<h3><s>NO, YOU SHOULD WRITE THIS YOURSELF</s></h3><br><br>
			<h3>v3.0 - Unprecedented changes</h3><br>
				- Developed The Modding Table, Which, you could say, is another form of TMT<br>
			<br><br>
	`
} 

function winText(){
	return (options.ch || modInfo.languageMod==false)?`你暂时完成了游戏!`:`Congratulations! You have reached the end and beaten this game, but for now...`
}

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1).add(player.super.points.div(100)).mul(player.mega.points.div(100).add(1)).mul(player.ultra.points.div(100).add(1)).mul(player.hyper.points.div(100).add(1)).mul(player.demi.points.div(100).add(1)).mul(player.a.points).mul(player.b.points.div(10).add(1)).mul(player.c.points.div(10).add(1)).mul(player.d.points.div(10).add(1)).mul(player.e.points.div(10).add(1)).mul(player.f.points.div(10).add(1)).mul(player.g.points.div(10).add(1)).mul(player.h.points.div(10).add(1)).mul(player.i.points.div(10).add(1)).mul(player.j.points.div(10).add(1)).mul(player.k.points.div(10).add(1)).mul(player.l.points.div(10).add(1)).mul(player.m.points.div(10).add(1)).mul(player.n.points.div(10).add(1)).mul(player.o.points.div(10).add(1)).mul(player.p.points.div(10).add(1)).mul(player.q.points.div(10).add(1)).mul(player.r.points.div(10).add(1)).mul(player.s.points.div(10).add(1)).mul(player.t.points.div(10).add(1)).mul(player.u.points.div(10).add(1)).mul(player.v.points.div(10).add(1)).mul(player.w.points.div(10).add(1)).mul(player.x.points.div(10).add(1)).mul(player.y.points.div(10).add(1)).mul(player.z.points.div(10).add(1)).mul(player.a2.points.div(10).add(1))
	if (hasUpgrade("a", 11)) gain = gain.add(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function() {
		if(options.ch==undefined && modInfo.otherLanguageMod==true){return '<big><br>You should choose your language first<br>你需要先选择语言</big>'}
		return '<div class="res">'+displayThingsRes()+'</div><br><div class="vl2"></div></span>'
	}
]

// You can write stuff here to display them on top-left corner easily
function displayThingsRes(){
	return 'Points: '+format(player.points)+' | '
}

// Determines when the game "ends"
function isEndgame() {
	return false
}

// 
function getPointsDisplay(){
	let a = ''
	if(player.devSpeed && player.devSpeed!=1){
		a += options.ch ? '<br>时间加速: '+format(player.devSpeed)+'x' : '<br>Dev Speed: '+format(player.devSpeed)+'x'
	}
	if(player.offTime!==undefined){
		a += options.ch ? '<br>离线加速剩余时间: '+formatTime(player.offTime.remain) : '<br>Offline Time: '+formatTime(player.offTime.remain)
	}
	a += '<br>'
	if(!(options.ch==undefined && modInfo.otherLanguageMod==true)){
		a += `<span class="overlayThing">${((options.ch || modInfo.languageMod==false)?"你有":"You have")} <h2  class="overlayThing" id="points"> ${format(player.points)}</h2> ${modInfo.pointsName}</span>`
		if(canGenPoints()){
			a += `<br><span class="overlayThing">(`+(tmp.other.oompsMag != 0 ? format(tmp.other.oomps) + " OOM" + (tmp.other.oompsMag < 0 ? "^OOM" : tmp.other.oompsMag > 1 ? "^" + tmp.other.oompsMag : "") + "s" : formatSmall(getPointGen()))+`/sec)</span>`
		}
		a += `<div style="margin-top: 3px"></div>`
	}
	a += tmp.displayThings
	a += '<br><br>'
	return a
}

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
