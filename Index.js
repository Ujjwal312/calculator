const screen = document.querySelector(".screen");
let result = "";
let operator = "";
let prev;
function handleInput(value) {
    if (isNaN(value)&&value!=".") {
      handleSymbol(value);
    } else {
      handleNumber(value); 
   }
  
  }
  function caculate() {
    if (operator === null) {
      return;
    } else {
      switch (operator) {
        case "+":
            console.log(prev)
          screen.innerText = parseFloat(prev) + parseFloat(result);
          break;
        case "-":
          screen.innerText = parseFloat(prev) - parseFloat(result);
          break;
        case "*":
          screen.innerText = parseInt(prev) * parseFloat(result);
          break;
        case "/":
          screen.innerText = parseFloat(prev) / parseFloat(result);
          break;
      }
  
      result = screen.innerText;
      operator = null;
    }
  }
  function handleSymbol(value) {
    console.log("Symbol");
    switch (value) {
      case "/":
      case "*":
      case "-":
      case "+":
    
        operator = value;
        prev = result;
        result = "";
        screen.innerText = prev+operator;
        break;
      case "C":
        result = 0;
        rerender();
        break;

        case".":
        if (result === 0) {
            result = value;
          } else {
              if(prev){
            result =  result +value;
              }
              else{
                  result =  result +value;
              }
          }
          rerender();
      case "⬅":
        if (screen.innerText.length < 2) {
          result = 0;
        } else {
          result = result.slice(0, -1);
        }
       
        break;
      case "=":
        caculate();
    }
  }
  function handleNumber(value) {
    if (result === 0) {
      result = value;
    } else {
        if(prev){
      result =  result +value.toString();
        }
        else{
            result =  result +value.toString();
        }
    }
    rerender();
  }
  function rerender() {

    screen.innerText = result;
   
   
   }
   function init() {
    document
      .querySelector(".button-sections")
      .addEventListener("click", function (e) {
        handleInput(e.target.innerText);
      });
  }
  
  
  init();