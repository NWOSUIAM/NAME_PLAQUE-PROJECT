// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const userButton = document.querySelector('.buy-submit');



// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

//Creating an Arrow Function
buyNow =() => {
if(userInput.value===''){
  alert('Type a Letter')
}

if(userLeterPreview.textContent==='Your Name'){
  alert('Enter any name of your choice')
}

else if(userInput.value.length >15){
  alert('Exceeded number of letters')
}

else{
  alert('Congratulations!')

}
}

userButton.addEventListener("click", buyNow);