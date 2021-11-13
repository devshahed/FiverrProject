const activeBtn1 = ()=>{
    document.querySelector('.currencyBtn1').classList.add('activeBtn');
    document.querySelector('.currencyBtn2').classList.remove('activeBtn');
}
const activeBtn2 = ()=>{
    document.querySelector('.currencyBtn2').classList.add('activeBtn');
    document.querySelector('.currencyBtn1').classList.remove('activeBtn');
}
const sideBar = ()=>{
    var sbar = document.getElementById("sideBar");

    if(sbar.style.transform == "translateX(0%)"){
        sbar.style.transform = "translateX(100%)";
    }else{
        sbar.style.transform = "translateX(0%)";
    }
}