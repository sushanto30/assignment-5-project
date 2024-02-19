function backgroundColorChangeBut(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-300')
}

function seatSelectId(elementId){
    const element= document.getElementById(elementId);
    const value = element.innerText;
    return value;
}
//  document.addEventListener('click',function(){
//    let element= document.getElementById('seat-left');
// //    element.innerText = value;
// //    value -= 1;
// let num = element.innerText;
// let number = parseInt(num)
// number-=1;

  
// }
function seat(){
    let element = document.getElementById('seat-left');
    //    element.innerText = value;
    //    value -= 1;
    console.log(element)
    let num = element.innerText;
    let number = parseInt(num)
    number -= 1;
    return number;
}