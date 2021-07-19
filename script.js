// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res=>{    
//         console.log(res.data.ticker.price);

//     })
//     .catch(err=>{
//         console.log(err);
//     }

const btn = document.querySelector("button");
const joke = document.querySelector("#jokes")

const dadsJokes = async () => {
    try{
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    }catch(e){
        return "no jokes availble, sorry";
    }
    
}
let newDadjoke =  async() => {
    let dadJoke =await dadsJokes();
    let newLI = document.createElement("LI");
    newLI.append(dadJoke);
    joke.append(newLI);
}
btn.addEventListener("click", newDadjoke);

