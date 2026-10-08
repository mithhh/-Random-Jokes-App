const jokes=[
  "Why don't programmers like nature? It has too many bugs.",
  "Why did the developer go broke? Because he used up all his cache.",
  "I told my computer I needed a break, and now it won't stop sending me Kit-Kat ads.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "There are only 10 types of people in the world: those who understand binary and those who don't.",
  "Why was the JavaScript developer sad? Because he didn't know how to null his feelings.",
  "A SQL query walks into a bar, walks up to two tables and asks, \"Can I join you?\"",
  "Why did the function break up with the variable? It felt like it was always being called out of scope.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25."
]



const them = document.querySelector(".them");

them.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


let on= document.querySelector(".offf")

// on.addEventListener("click",()=>{}) 

 


let p= document.querySelector(".co")
let gen =document.querySelector(".ran")


 


gen.addEventListener("click",()=>{
  let ran= Math.floor(Math.random()* jokes.length)

    p.textContent=jokes[ran]
})