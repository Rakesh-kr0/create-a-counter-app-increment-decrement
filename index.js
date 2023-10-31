const countValue=document.querySelector('#counter');

const increment = () =>{
  //get the value from ui
  let value =parseInt(countValue.innerHTML);
  //update the value
  value=value+1;
  //set the value on ui
  countValue.innerHTML=value;
};

const decrement = () =>{
    let value1=parseInt(countValue.innerHTML);
    value1=value1-1;
    countValue.innerHTML=value1;
}