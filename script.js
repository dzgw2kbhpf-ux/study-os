
let tabs=document.querySelectorAll(".tab")

document.querySelectorAll("nav button")

.forEach(btn=>{

btn.onclick=()=>{

tabs.forEach(t=>t.classList.remove("active"))

document.getElementById(btn.dataset.tab)

.classList.add("active")

}

})

document.getElementById("ai")

.classList.add("active")

document.getElementById("askBtn").onclick=()=>{

let q=document.getElementById("aiInput").value

document.getElementById("aiOutput")

.innerText="AI回答（デモ）: "+q

}

let notes=

JSON.parse(localStorage.getItem("notes")||"[]")

function renderNotes(){

let list=document.getElementById("noteList")

list.innerHTML=""

notes.forEach(n=>{

let li=document.createElement("li")

li.innerText=n.title

list.appendChild(li)

})

}

document.getElementById("saveNote").onclick=()=>{

let title=document.getElementById("noteTitle").value

let text=document.getElementById("noteText").value

notes.push({title,text})

localStorage.setItem("notes",

JSON.stringify(notes))

renderNotes()

}

renderNotes()

let cards=

JSON.parse(localStorage.getItem("cards")||"[]")

document.getElementById("addCard").onclick=()=>{

cards.push({

q:cardQ.value,

a:cardA.value

})

localStorage.setItem("cards",

JSON.stringify(cards))

}

let cardIndex=0

document.getElementById("cardViewer")

.onclick=()=>{

if(cards.length==0)return

let c=cards[cardIndex]

cardViewer.innerText=

cardViewer.innerText==c.q

?c.a:c.q

cardIndex=(cardIndex+1)%cards.length

}

document.getElementById("makeQuiz").onclick=()=>{

let area=document.getElementById("quizArea")

area.innerHTML=""

cards.forEach(c=>{

let q=document.createElement("p")

q.innerText=c.q

area.appendChild(q)

})

}

let time=1500

let timer=null

function updateTimer(){

let m=Math.floor(time/60)

let s=time%60

timeEl.innerText=

m+":"+("0"+s).slice(-2)

}

let timeEl=document.getElementById("time")

updateTimer()

document.getElementById("startTimer")

.onclick=()=>{

if(timer)return

timer=setInterval(()=>{

time--

updateTimer()

if(time<=0)

clearInterval(timer)

},1000)

}

document.getElementById("resetTimer")

.onclick=()=>{

time=1500

clearInterval(timer)

timer=null

updateTimer()

}

document.getElementById("darkBtn")

.onclick=()=>{

document.body.classList.toggle("dark")

}
