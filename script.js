const btn = document.getElementById('update');
btn.addEventListener('click', ()=> {
    //console.log("button");
    const input = document.getElementById('heading_update');
    if (input.value == "") {
        alert("Enter text that update heading"); 
    }
    else {
        let newHeading = document.getElementById('heading');
   // console.log(newHeading);    
        newHeading.innerHTML = newHeading.textContent + ", "+  input.value;
        input.value = ""; // after updaing text, reset that textbox
    }
    
});

function bgred(){
    document.getElementById('box-1').style.backgroundColor = "red";
}
function bgblue(){
    document.getElementById('box-2').style.backgroundColor = "blue";
}
function bggreen(){
    document.getElementById('box-3').style.backgroundColor = "green";
    setTimeout(bgyellow, 3000); // it's loads after 3 sec of bggreen function called
}
function bgyellow(){
    document.getElementById('box-4').style.backgroundColor = "yellow";
}

//bggreen(); // it's on page loads 

setTimeout(bggreen, 3000); // it's loads after 3 sec of page loads


const box1 = document.getElementById('box-1')
box1.addEventListener('click', ()=>{
    document.getElementById('box-1').classList.add('red')
},true);

const box2 = document.getElementById('box-2')
box2.addEventListener('click', ()=>{
    document.getElementById('box-2').classList.add('blue')
},true);