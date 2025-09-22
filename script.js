const inp=document.getElementById('inp');
const images=document.querySelector('.images')

const getImage=async ()=>{
  const methods={
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      prompt: inp.value,
      step:20,
      width:512,
      height:512,
    })
  };

  const response = await fetch(
    "http://127.0.0.1:7860/sdapi/v1/txt2img",methods)
 const data = await response.json();
  images.innerHTML='';
  data.images.forEach(img64 => {
    const img = document.createElement("img");
    img.src = "data:image/png;base64," + img64;
    images.appendChild(img);
 })

}