var x = "";
var y = "";
var operation;
var result = "";
var flag = false;
var dot_present = false;
var op = "";

function display (result){ // Відображення результату обчислень

    if ((result == Infinity) || (result == -Infinity)) { //Перевірка чи було ділення на ноль
      result = "ЕГГОГ";
    };
    result = result.toString();

    if (result.length > 10) { // Перевірка чи число більше 10 розрядів...

        if ((result.search(/[.]/) > 9) || (result.search(/[.]/) == -1)) { // ... i якщо це так, перевіряємо чи не перевищує ціла частина 10 розрядів
           result = "ЕГГОГ";
        }
        else {
           result = result.slice(0, 10);
        };
    };
  var r = document.getElementById("out_cell");
  if (result.length == 0) {
    r.innerText = "0";
  }
  else {
    r.innerText = result;
  };

};


function calculation (x, y, operation){ // Проводимо обчислення
  var res;
  x = parseFloat(x);
  y = parseFloat(y);
  switch (operation) {
      case "add":
          res = x + y;
          break;
      case "sub":
          res = x - y;
          break;
      case "mul":
          res = x * y;
          break;
      case "div":
          res = x / y;
  };

return res;
};


var buttons = [].slice.call(document.getElementsByClassName("cell"));

buttons.forEach(function (element, index){
  element.addEventListener("mouseup", function(e){

  var button;
  op = element.innerText;
  button = Number(op);



  if ((isNaN(button) == true) && (flag == false)) {

      flag = true;
    //  dot_present = false;
      switch (op) {
        case "+":
          operation = "add";
          break;
        case "-":
          operation = "sub";
          break;
        case "×":
          operation = "mul";
          break;
        case "÷":
          operation = "div";
          break;
        case "CE":
          x = "";
          y = "";
          result = "";
          flag = false;
          dot_present = false;
          break;
        case ".":
          if (dot_present == false) {
            x += op;
            dot_present = true;
          };

          flag = false;
          result = x;
          break;

      };

  }
  else if ((isNaN(button) == true) && (flag == true)) {

      result = calculation (x, y, operation);
      x = result.toString();
       // y = "";
      dot_present = false;
      switch (op) {
        case "+":
          operation = "add";
          break;
        case "-":
          operation = "sub";
          break;
        case "×":
          operation = "mul";
          break;
        case "÷":
          operation = "div";
          break;
        case "CE":
          x = "";
          y = "";
          result = "";
          flag = false;
          dot_present = false;
          break;
        case "=":
          op = "";
          break;
        case ".":
          if (dot_present == false) {
            y += op;
            dot_present = true;
          };
          result = y;
          break;
      };

  }
  else {

    if( flag == true){
      y += op;
      result = y;
    }
    else {
      x += op;
      result = x;
      y = "";
    };

  };
   console.log("flag =", flag);
   console.log("dot_present =", dot_present);
   console.log("op =", op);
   console.log("x =", x);
   console.log("y =", y);
   console.log("op =", op);
   console.log("operation =", operation);
   console.log("result =", result);
   display (result);
   e.stopPropagation();


  }, false);
});
