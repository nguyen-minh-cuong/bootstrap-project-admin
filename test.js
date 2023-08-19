// apikey 21aaff54b25f41f351f74a2307746df7
/*const imgbb = async (x) => {
 let rs = fetch("https://api.imgbb.com/1/upload?key=21aaff54b25f41f351f74a2307746df7",{
    method:"POST",
    headers:"Content-Type:ByteString",
    body: JSON.stringify(x)
  }).then((data) => { return data.json()})
  console.log(rs)
}
imgbb()*/
// imgur client id ab9213b45f25f4c
// imgur client secret 4a65c69a4b936f50bd1eb9cca3620225a8e71ce7
//const inputField = document.getElementById("inputField")
//const img = document.getElementById("img")
/*inputField.addEventListener("change", async (e)=>{
   console.log('running')
  const formdata = new FormData();
  formdata.append("image",e.target.files[0]);
  console.log(e.target.files[0])
  console.log(formdata)
let newSrc  = await fetch("https://api.imgbb.com/1/upload?key=21aaff54b25f41f351f74a2307746df7",{
    method:"post",
    body: formdata}).then((data) => { return data.json()})
  console.log(newSrc.data.url)
  
})*/
// curl --location --request POST "https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY" --form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"