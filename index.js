let milkPlus = document.querySelector('.milkplus')
let milkMinus = document.querySelector('.milkminus')
let milkCount = document.querySelector('.milkcount')
let milkValue = document.querySelector('.milkvalue')
let milkReset = document.querySelector('.milkreset')


let breadPlus = document.querySelector('.breadplus')
let breadMinus = document.querySelector('.breadminus')
let breadCount = document.querySelector('.breadcount')
let breadValue = document.querySelector('.breadvalue')
let breadReset = document.querySelector('.breadreset')



let eggPlus = document.querySelector('.eggplus')
let eggMinus = document.querySelector('.eggminus')
let eggCount = document.querySelector('.eggcount')
let eggValue = document.querySelector('.eggvalue')
let eggReset = document.querySelector('.eggreset')




let ricePlus = document.querySelector('.riceplus')
let riceMinus = document.querySelector('.riceminus')
let riceCount = document.querySelector('.ricecount')
let riceValue = document.querySelector('.ricevalue')
let riceReset = document.querySelector('.ricereset')


let total = document.querySelector('.total')

milkCount.innerHTML = 0;
breadCount.innerHTML = 0;
eggCount.innerHTML = 0;
riceCount.innerHTML = 0;

milkMinus.disabled = true;
breadMinus.disabled = true;
eggMinus.disabled = true;
riceMinus.disabled = true;

let array = [];



milkPlus.addEventListener('click',()=>{
    milkCount.innerHTML++;
    milkMinus.disabled = false;
})

milkMinus.addEventListener('click',()=>{
    if(milkCount.innerHTML > 0){
    milkCount.innerHTML--;
}
})

milkValue.addEventListener('click',()=>{
    array[0] = Number(milkCount.innerHTML);
    let value = array.reduce((a,b)=>
        a + b
    )
    total.innerHTML = value;
    total.style.visibility = 'visible'
})

milkReset.addEventListener('click',()=>{
    milkCount.innerHTML = 0;
})





breadPlus.addEventListener('click',()=>{
    breadCount.innerHTML++;
    breadMinus.disabled = false;

})

breadMinus.addEventListener('click',()=>{
    if(breadCount.innerHTML > 0){
    breadCount.innerHTML--;
}
})

breadValue.addEventListener('click',()=>{
    array[1] = Number(breadCount.innerHTML);
    console.log(array)
    let value = array.reduce((a,b)=>
        a+b
    )
    console.log(value)
    total.style.visibility = 'visible'
    total.innerHTML = value;
})
breadReset.addEventListener('click',()=>{
    breadCount.innerHTML = 0;
})

eggPlus.addEventListener('click',()=>{
    eggCount.textContent++;
    eggMinus.disabled = false;

})

eggMinus.addEventListener('click',()=>{
    if(eggCount.textContent > 0){
    eggCount.textContent--;
}  
})

eggValue.addEventListener('click',()=>{
    array[2] = Number(eggCount.innerHTML);
    console.log(array)
    let value = array.reduce((a,b)=>
        a+b
    )
    console.log(value)
    total.style.visibility = 'visible'
    total.innerHTML = value;
})

eggReset.addEventListener('click',()=>{
    eggCount.innerHTML = 0;
})


ricePlus.addEventListener('click',()=>{
    riceCount.textContent++;
    riceMinus.disabled = false;

})

riceMinus.addEventListener('click',()=>{
    if(riceCount.textContent > 0){
    riceCount.textContent--;
}
})

riceValue.addEventListener('click',()=>{
    array[3] = Number(riceCount.innerHTML);
    console.log(array)
    let value = array.reduce((a,b)=>
        a+b
    )
    console.log(value)
    total.style.visibility = 'visible'
    total.innerHTML = value;
})

riceReset.addEventListener('click',()=>{
    riceCount.innerHTML = 0;
})