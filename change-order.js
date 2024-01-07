const container1 = document.getElementById("container1")
const submit = document.getElementById("submit")
submit.onclick = async () => {
const finalOrder = [] 
order.forEach((el) => {
    if (el.number === "") {} else {
      
      finalOrder.push(el.obUp)
    }
  }) 
 
if ( finalOrder.length === root.length) {
  warning.innerHTML ="Đừng bấm nút cho tới khi hoàn thành lưu"
  await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/delete-test1")
  for await (let i of finalOrder) {
    
  await  upload(i)
  }
}
  warning.innerHTML ="thành công"
}
let root
let order = []
const upload = async (x) => {
 const y =  await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/test1",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({text:x})
  }).then((data) => { return data.json()})
  
}
const download = async () => {
  const x = await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/test1").then((data) => { return data.json()})
  
  root = x
  return x
}
const createBit11 = (id,text,el) => {
  
  const frame1 = document.createElement("div")
  const title1 = document.createElement("div")
  const chooseField1 = document.createElement("div")
  const check1 = document.createElement("input")
  const mark1 = document.createElement("div")
  frame1.setAttribute("class","frame1")
  title1.setAttribute("class","title1")
  chooseField1.setAttribute("class","choose-field1")
  check1.setAttribute("type","checkbox")
  mark1.setAttribute("class","mark1")
  title1.innerHTML = text
  mark1.innerHTML =""
  check1.id =id
  order.push({
    node: check1,
    obUp: el,
    number: "",
    mark1: mark1
    //testID: testID
  })
  check1.addEventListener("change",() =>{
    let innerArray = []
    let innerNum = 0
    order = order.filter((el) => {
      if (el.node.checked) {
        
        innerNum = innerNum + 1
        el.number = innerNum
        el.mark1.innerHTML = innerNum
        return el
      } else { 
        el.number =""
        el.mark1.innerHTML = ""
        innerArray.push(el) }
    })
    innerArray.forEach((el) => {
      order.push(el)
    })
    
    
  })
  chooseField1.appendChild(check1)
  chooseField1.appendChild(mark1)
  frame1.appendChild(title1)
  frame1.appendChild(chooseField1)
  container1.appendChild(frame1)
}
const combine = async () => {
  const data = await download()
  data.forEach((el) => {
    createBit11(el.id,el.name,el)
  })
}

const warning = document.getElementById("warning")
const warning2 = document.getElementById("warning2")

const container2 = document.getElementById("container2")
const submit2 = document.getElementById("submit2")
submit2.onclick = async () => {
const finalOrder2 = [] 
order2.forEach((el) => {
    if (el.number === "") {} else {
      
      finalOrder2.push(el.obUp)
    }
  }) 
  
if ( finalOrder2.length === root2.length) {
  warning2.innerHTML=" Đừng ấn vào nút cho tới khi hoàn thành lưu thứ tự"
  await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/delete-test2")
  
  for await (let i of finalOrder2) {
    
  await  upload2(i)
  }
}
 warning2.innerHTML =" thành công"
}
let root2
let order2 = []
const upload2 = async (x) => {
 const y =  await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/test2",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({text:x})
  }).then((data) => { return data.json()})
  
}
const download2 = async () => {
  const x = await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/test2").then((data) => { return data.json()})
  
  root2 = x
  return x
}
const createBit22 = (id,text,el) => {
  
  const frame2 = document.createElement("div")
  const title2 = document.createElement("div")
  const chooseField2 = document.createElement("div")
  const check2 = document.createElement("input")
  const mark2 = document.createElement("div")
  frame2.setAttribute("class","frame2")
  title2.setAttribute("class","title2")
  chooseField2.setAttribute("class","choose-field2")
  check2.setAttribute("type","checkbox")
  mark2.setAttribute("class","mark2")
  title2.innerHTML = text
  mark2.innerHTML =""
  check2.id =id
  order2.push({
    node: check2,
    obUp: el,
    number: "",
    mark2: mark2
    //testID: testID
  })
  check2.addEventListener("change",() =>{
    let innerArray = []
    let innerNum = 0
    order2 = order2.filter((el) => {
      if (el.node.checked) {
        
        innerNum = innerNum + 1
        el.number = innerNum
        el.mark2.innerHTML = innerNum
        return el
      } else { 
        el.number =""
        el.mark2.innerHTML = ""
        innerArray.push(el) }
    })
    innerArray.forEach((el) => {
      order2.push(el)
    })
    
    
  })
  chooseField2.appendChild(check2)
  chooseField2.appendChild(mark2)
  frame2.appendChild(title2)
  frame2.appendChild(chooseField2)
  container2.appendChild(frame2)
}
const combine2 = async () => {
  const data = await download2()
  data.forEach((el) => {
    createBit22(el.id,el.name,el)
  })
}
//upload2("one")
//download2()
combine2()
combine()