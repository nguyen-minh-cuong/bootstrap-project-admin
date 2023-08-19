const myForm = document.getElementById("myForm")
const name = document.getElementById("name")
const src = document.getElementById("src")
let  newSrc 
const img = document.getElementById("img");
const more = document.getElementById("more")
const alert1 = document.getElementById("alert1")
const myForm2 = document.getElementById("myForm2");
const name2 = document.getElementById("name2");
const alert2 = document.getElementById("alert2")
const displayCard = document.getElementById("displayCard");
const upLoad = async (data) => {
await  fetch("https://phone-number--cuongnguyen213.repl.co/interface-data/",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  
}
const downLoad = async ()  => {
  let x = await  fetch("https://interface-data--cuongnguyen213.repl.co/",{method:"GET",headers:{accept: 'application/json'}}).then((data) => {return data.json() })
 return x
}
const createInfo = async () => {
 const info = await downLoad();
 
 for  (let i = 0; i <= info.length -1; i++) { 
   const subDisplayCard = document.createElement("div");
   subDisplayCard.setAttribute("class","sub-displayCard");
   subDisplayCard.innerHTML =`
    <div class="name-card">${info[i].name}</div>
    <img class="src-card" src=${info[i].src}>
    <div class="more-card">${info[i].more}</div>`
   displayCard.appendChild(subDisplayCard)
 }
 
}
const deleteInfo = async (x) => {
  const info = {name:x}
   await  fetch("https://interface-data--cuongnguyen213.repl.co/interface-data",{
    method:"POST",
    headers:{"Content-Type": 'application/json'},
    body: JSON.stringify(info)
  })
 
}
src.addEventListener("change", async (e) => {
  const formdata = new FormData();
  formdata.append("image",e.target.files[0])
  newSrc = await fetch("https://api.imgbb.com/1/upload?key=21aaff54b25f41f351f74a2307746df7",{
    method:"post",
    body: formdata}).then((data) => { return data.json()})
   img.src = newSrc.data.url
})
myForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    
    const data = {
      name: name.value,
      src: newSrc.data.url,
      more: more.value
    }
    if ( name.value && newSrc.data.url && more.value) {
     alert1.innerHTML ="dont click button when proccessing"
     await upLoad(data)
     location.reload() }
  })
myForm2.addEventListener("submit",async (e) => {
    e.preventDefault();
    if (name2.value) {
    alert2.innerHTML ="dont click button when proccessing"
    await deleteInfo(name2.value)
    location.reload() }
  })
createInfo()


