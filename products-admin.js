const deleteText = document.getElementById("delete-text")
const deleteSubmit = document.getElementById("delete-submit")
const linkName = document.getElementById("link-name")
let offName 
const createHeader = document.getElementById("create-header")
const createImg = document.getElementById("create-img")
const createP = document.getElementById("create-p")
const createDiv = document.getElementById("create-div")
const createBr = document.getElementById("create-br")
const createSpan = document.getElementById("create-span")
const container = document.getElementById("container")
const subContainer = document.createElement("div")
const textContainer = document.getElementById("text-container")
const toContinue = document.getElementById("toContinue")
toContinue.onclick = () => {
  finalRS = finalRS.filter((el) => {
      if (el.id === toContinue.passedEl.id) {} else { return el}
    })
   console.log(finalRS)
    toContinue.passedEl.remove()
    toContinue.passedEl2.remove()
    if (toContinue.passedEl3) {
    toContinue.passedEl3.remove()
    toContinue.passedEl3 =""
    } 
    
   
}
const toContinue2 = document.getElementById("toContinue2")
const inform = document.getElementById("inform")
toContinue2.onclick = async () => {
  inform.innerHTML ="vui lòng chờ "
  if (finalRS.length === 1)
  {} else  {await upload(finalRS,finalRS[0].id)}
  inform.innerHTML =" đăng thành công"
  location.reload()
}
const showText = document.getElementById("show-text")
const container2 = document.getElementById("container-2")
showText.onclick = () =>  {
  subContainer.innerHTML =""
  for (let i=1; i<= finalRS.length-1; i++) {
   if (finalRS[i].classType === "newHeader" ) {
     const h3 = document.createElement("h3")
     h3.setAttribute("class","color")
     h3.innerHTML = finalRS[i].value
     subContainer.appendChild(h3)
   }
   else  if ( finalRS[i].classType === "newP") { 
     const p = document.createElement("p")
     p.innerHTML = finalRS[i].value
     subContainer.appendChild(p)
   } 
   else  if ( finalRS[i].classType === "newDiv") { 
     const div = document.createElement("p")
     div.setAttribute("class","pros-cons")
     div.innerHTML = finalRS[i].value
     subContainer.appendChild(div)
   } 
   else  if ( finalRS[i].classType === "newSpan") { 
     const span = document.createElement("span")
     span.setAttribute("class","span1")
     span.innerHTML = finalRS[i].value
     subContainer.appendChild(span)
   } 
   else  if ( finalRS[i].classType === "newBr") { 
     const br = document.createElement("br")
     subContainer.appendChild(br)
   } 
   else  if ( finalRS[i].classType === "newImgField") { 
     const offImg = document.createElement("img")
     offImg.setAttribute("class","img")
     offImg.src = finalRS[i].value
     subContainer.appendChild(offImg)
   } 
   
  }
}
let count 
let finalRS = []
const post = document.getElementById("post")
const submit = document.getElementById("submit")
submit.onclick = () => {
  if (!linkName.value) { return }
  count = 0
  submit.disabled = true
  linkName.disabled = true
  createHeader.disabled = false
  createImg.disabled = false
  createP.disabled = false
  createDiv.disabled = false
  createSpan.disabled = false
  createBr.disabled = false
  showText.disabled = false
  post.disabled = false
  offName = linkName.value
  subContainer.class= "sub-container"
  subContainer.id = `${offName}`
  finalRS.push({
    classType: "subContainer",
    id:`${offName}`
  })
  container2.appendChild(subContainer)
}
createHeader.onclick = () => {
  count = count +1
  const newHeader = document.createElement("input")
  newHeader.setAttribute("type","text")
  newHeader.placeholder ="new header"
  newHeader.id = `${offName}-${count}`
  finalRS.push({
    classType: "newHeader",
    id: `${offName}-${count}`,
    value: ""})
  newHeader.oninput = () => {
  finalRS = finalRS.filter((el) => {
    if (el.id === newHeader.id) {
      el.value = newHeader.value
      return el
    }
    else { return el}
  })
  
  }
  const newDelete = document.createElement("button")
  newDelete.innerHTML = "xoá"
  newDelete.setAttribute("class","newDelete")
  newDelete.setAttribute("data-bs-toggle","modal")
  newDelete.setAttribute("data-bs-target","#modal")
  newDelete.onclick = () => {
    toContinue.passedEl = newHeader
    toContinue.passedEl2 = newDelete
  }
  container.appendChild(newHeader)
  container.appendChild(newDelete)
}
createImg.onclick = () => {
  count = count + 1
  const newImgField = document.createElement("input")
  newImgField.setAttribute("type","file")
  newImgField.id = `${offName}-${count}`
  finalRS.push({
    classType:"newImgField",
    id: `${offName}-${count}`,
    value:""
  })
  newImgField.addEventListener("change", async (e) => {
  const formdata = new FormData();
  formdata.append("image",e.target.files[0])
  const newSrc = await fetch("https://api.imgbb.com/1/upload?key=21aaff54b25f41f351f74a2307746df7",{
    method:"post",
    body: formdata}).then((data) => { return data.json()})
    newImg.src = newSrc.data.url
    finalRS = finalRS.filter((el) => {
    if (el.id === newImgField.id) {
      el.value = newImg.src
      return el
    }
    else { return el}
  })
})
  const newImg = document.createElement("img")
  newImg.setAttribute("class","imgEx")
  const newDelete = document.createElement("button")
  newDelete.innerHTML = "xoá"
  newDelete.setAttribute("class","newDelete")
  newDelete.setAttribute("data-bs-toggle","modal")
  newDelete.setAttribute("data-bs-target","#modal")
  newDelete.onclick = () => {
    toContinue.passedEl = newImgField
    toContinue.passedEl2 = newDelete
    toContinue.passedEl3 = newImg
  }
  container.appendChild(newImgField)
  container.appendChild(newDelete)
  container.appendChild(newImg)
}
createP.onclick = () => {
  count = count +1
  const newP = document.createElement("input")
  newP.setAttribute("type","text")
  newP.placeholder ="new p"
  newP.id = `${offName}-${count}`
  finalRS.push({
    classType: "newP",
    id: `${offName}-${count}`,
    value: ""})
  newP.oninput = () => {
  finalRS = finalRS.filter((el) => {
    if (el.id === newP.id) {
      el.value = newP.value
      return el
    }
    else { return el}
  })
  
  }
  const newDelete = document.createElement("button")
  newDelete.innerHTML = "xoá"
  newDelete.setAttribute("class","newDelete")
  newDelete.setAttribute("data-bs-toggle","modal")
  newDelete.setAttribute("data-bs-target","#modal")
  newDelete.onclick = () => {
    toContinue.passedEl = newP
    toContinue.passedEl2 = newDelete
  }
  container.appendChild(newP)
  container.appendChild(newDelete)
}
createDiv.onclick = () => {
  count = count +1
  const newDiv = document.createElement("input")
  newDiv.setAttribute("type","text")
  newDiv.placeholder ="new div"
  newDiv.id =`${offName}-${count}`
  finalRS.push({
    classType: "newDiv",
    id: `${offName}-${count}`,
    value: ""})
  newDiv.oninput = () => {
  finalRS = finalRS.filter((el) => {
    if (el.id === newDiv.id) {
      el.value = newDiv.value
      return el
    }
    else { return el}
  })
  
  }
  const newDelete = document.createElement("button")
  newDelete.innerHTML = "xoá"
  newDelete.setAttribute("class","newDelete")
  newDelete.setAttribute("data-bs-toggle","modal")
  newDelete.setAttribute("data-bs-target","#modal")
  newDelete.onclick = () => {
    toContinue.passedEl = newDiv
    toContinue.passedEl2 = newDelete
  }
  container.appendChild(newDiv)
  container.appendChild(newDelete)
}
createSpan.onclick = () => {
  count = count +1
  const newSpan = document.createElement("input")
  newSpan.setAttribute("type","text")
  newSpan.placeholder ="new span"
  newSpan.id =`${offName}-${count}`
  finalRS.push({
    classType: "newSpan",
    id: `${offName}-${count}`,
    value: ""})
  newSpan.oninput = () => {
  finalRS = finalRS.filter((el) => {
    if (el.id === newSpan.id) {
      el.value = newSpan.value
      return el
    }
    else { return el}
  })
  
  }
  const newDelete = document.createElement("button")
  newDelete.innerHTML = "xoá"
  newDelete.setAttribute("class","newDelete")
  newDelete.setAttribute("data-bs-toggle","modal")
  newDelete.setAttribute("data-bs-target","#modal")
  newDelete.onclick = () => {
    toContinue.passedEl = newSpan
    toContinue.passedEl2 = newDelete
  }
  container.appendChild(newSpan)
  container.appendChild(newDelete)
}
createBr.onclick = () => {
  count = count +1
  const newBr = document.createElement("input")
  newBr.setAttribute("type","text")
  newBr.placeholder ="new br"
  newBr.id =`${offName}-${count}`
  newBr.disabled =true
  finalRS.push({
    classType: "newBr",
    id: `${offName}-${count}`,
    value: ""})
  newBr.oninput = () => {
  finalRS = finalRS.filter((el) => {
    if (el.id === newBr.id) {
      el.value = newBr.value
      return el
    }
    else { return el}
  })
  
  }
  const newDelete = document.createElement("button")
  newDelete.innerHTML = "xoá"
  newDelete.setAttribute("class","newDelete")
  newDelete.setAttribute("data-bs-toggle","modal")
  newDelete.setAttribute("data-bs-target","#modal")
  newDelete.onclick = () => {
    toContinue.passedEl = newBr
    toContinue.passedEl2 = newDelete
  }
  container.appendChild(newBr)
  container.appendChild(newDelete)
}
const upload = async (text,name) => {
let x =   await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/products-text",{
   method:"POST",
   headers: { "Content-Type": "application/json"},
   body: JSON.stringify({text:text,
   name:name
   })
 }).then((data) => {return data.json()})
 console.log(x)
}
const download = async () => {
  let x =  await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/products-text").then((data) => {
   return data.json()
 })
 console.log(x)
 return x
}
const lookBack2 = (articles2) => {
  const frame = document.createElement("div")
    const textName = document.createElement("div")
    const textHeader = document.createElement("div")
    frame.setAttribute("class","frame")
    textName.setAttribute("class","text-name")
    textHeader.setAttribute("class","text-header")
    textName.innerHTML = articles2.name
  for (let i = 0;i <= articles2.text.length -1; i++) {
    const x = articles2.text[i]
    if ( x.classType === "newHeader")  {
      //console.log(x.classType)
      textHeader.innerHTML = x.value
    }
  }
  frame.appendChild(textName)
  frame.appendChild(textHeader)
  textContainer.appendChild(frame)
}
const lookBack = async () => {
  const articles = await download();
  for (let i = 0; i <= articles.length -1; i++) {
    //console.log(article.texy)
    lookBack2(articles[i])
  }
}
const deleteName = async (theName) => {
 const x =  await fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/products-text-delete",{
   method:"POST",
   headers: {
     "Content-Type": "application/json"
   },
   body: JSON.stringify({name:theName})
 }).then((data) => {return data.json() })
 console.log(x)
}
post.onclick = async () => {
}
deleteSubmit.onclick =  async () => {
  const x = deleteText.value
  await deleteName(x)
  deleteText.value=""
}
lookBack()
//deleteName("test")