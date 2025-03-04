let btn = document.querySelector("button");
let resultImage = document.querySelector("#result");

btn.addEventListener("click",async()=> {
    console.log("button Clicked");
    let img = await getImage();
    let resultImage = document.querySelector("#result");
    console.log(resultImage);
    resultImage.setAttribute('src',img);
    let breeds = document.querySelector("#breed");
    let src = resultImage.getAttribute('src').replace("https://images.dog.ceo/breeds/","");
    breeds.innerHTML= src;
});


let url = "https://dog.ceo/api/breeds/image/random";
async function getImage(params) {
    try {
        let res= await axios.get(url);
        console.log(res.data.message)
        return res.data.message; 
    }   catch(err) {
        console.log("Error =", err);
        return "/";
    }
}