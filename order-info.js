const clientContainer = document.getElementById("client-container")
/*const client = document.getElementById("client");
const unsave = document.getElementById("unsave");
const save = document.getElementById("save");
const deleteCheck = document.getElementById("delete");*/
const saveBtn = document.getElementById("save-btn")
let x = []
const findClient = async () => {
  let x = await fetch("https://interface-data--cuongnguyen213.repl.co/client-data").then((data) => { return data.json() })
  
  return x 
}
const createClient =  (num,i) => {
 const frame = document.createElement("div")
 frame.setAttribute("class","frame")
 const clientT = document.createElement("div")
 if (num.state ==="true") {
   clientT.setAttribute("class","client2")
 } else {clientT.setAttribute("class","client")}
 clientT.innerHTML = "client"
 const phoneNumber = document.createElement("div")
 phoneNumber.setAttribute("class","phone-number")
 phoneNumber.innerHTML =`${num.phoneNumber}`
 const email = document.createElement("div")
 email.setAttribute("class","email")
 email.innerHTML =`${num.email}`
 const address = document.createElement("div")
 address.setAttribute("class","address")
 address.innerHTML =`${num.address}`
 const need = document.createElement("div")
 need.setAttribute("class","need")
 need.innerHTML =`${num.type}`
 const date = document.createElement("div")
 date.setAttribute("class","date")
 date.innerHTML =`${num.date}`
 const check = document.createElement("div")
 check.setAttribute("class","check")
 const checkContainer1 = document.createElement("div")
 checkContainer1.setAttribute("class","check-container")
 const checkContainer2 = document.createElement("div")
 checkContainer2.setAttribute("class","check-container")
 const checkContainer3= document.createElement("div")
 checkContainer3.setAttribute("class","check-container")
 const unsaveT = document.createElement("input")
 unsaveT.setAttribute("type","radio")
 unsaveT.setAttribute("name",`check-input${i}`)
 unsaveT.id =`unsave-${i}`
 const saveT = document.createElement("input")
 saveT.setAttribute("type","radio")
 saveT.setAttribute("name",`check-input${i}`)
 saveT.id =`save-${i}`
 const deleteCheckT = document.createElement("input")
 deleteCheckT.setAttribute("type","radio")
 deleteCheckT.setAttribute("name",`check-input${i}`)
 deleteCheckT.id =`delete-${i}`
 const labelUnsave = document.createElement("label")
 labelUnsave.innerHTML ="Chưa xem"
 labelUnsave.setAttribute("for",`unsave-${i}`)
 const labelSave = document.createElement("label")
 labelSave.innerHTML ="Đã xem"
 labelSave.setAttribute("for",`save-${i}`)
 const labelDelete = document.createElement("label") 
 labelDelete.innerHTML ="Xoá"
 labelDelete.setAttribute("for",`delete-${i}`)
 unsaveT.addEventListener("change",() => {
  clientT.setAttribute("class","client")
  x = x.filter((el) => {
    if (el.phoneNumber === num.phoneNumber)
    {  } else {return el}
  })
  x.push({phoneNumber: num.phoneNumber, state: false})
})
saveT.addEventListener("change",() => {
  clientT.setAttribute("class","client2")
  x = x.filter((el) => {
    if (el.phoneNumber === num.phoneNumber)
    {  } else {return el}
  })
  x.push({phoneNumber: num.phoneNumber, state: saveT.checked})
})
deleteCheckT.addEventListener("change",() => {
  clientT.setAttribute("class","client3")
  x = x.filter((el) => {
    if (el.phoneNumber === num.phoneNumber)
    {  } else {return el}
  })
  x.push({phoneNumber: num.phoneNumber, state: "delete"})
})
 
 
 checkContainer1.appendChild(unsaveT)
 checkContainer1.appendChild(labelUnsave)
 checkContainer2.appendChild(saveT)
 checkContainer2.appendChild(labelSave)
 checkContainer3.appendChild(deleteCheckT)
 checkContainer3.appendChild(labelDelete)
 
 check.appendChild(checkContainer1)
 check.appendChild(checkContainer2)
 check.appendChild(checkContainer3)
 
 frame.appendChild(clientT)
 frame.appendChild(phoneNumber)
 frame.appendChild(email)
 frame.appendChild(address)
 frame.appendChild(need)
 frame.appendChild(date)
 frame.appendChild(check)
  clientContainer.appendChild(frame)
}
const combineFC  = async () => {
  const x = await findClient();
  for  (let i= x.length -1;i >= 0; i--) {
  await  createClient(x[i],i)
  }
}
const upload = async (info,state) => {
 let x =  await fetch("https://phone-number--cuongnguyen213.repl.co/info-state",{
   method:"POST",
   headers: { "Content-Type": "application/json"},
   body: JSON.stringify({phoneNumber:info,state:state})
 }).then((data) => { return data.json()})
 console.log(x)
}
combineFC()
//upload("true")
/*unsave.addEventListener("change",() => {
  client.setAttribute("class","client")
})
save.addEventListener("change",() => {
  client.setAttribute("class","client2")
})
deleteCheck.addEventListener("change",() => {
  client.setAttribute("class","client3")
})*/
saveBtn.onclick =  async () => {
  const alert = document.getElementById("alert")
  alert.innerHTML ="đừng ấn nút khi đang xử lý thông tin"
  for (let i=0;i<= x.length-1;i++) {
    await upload(x[i].phoneNumber,x[i].state)
  }
  alert.innerHTML ="thành công"
  location.reload()
}