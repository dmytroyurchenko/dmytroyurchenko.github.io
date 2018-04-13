var n;
function generateFibonacciSequence(n){
  var fibo = [1,1];
  var i = 2;
  n = document.getElementById("n").value;

    if (isNaN(n)){
      window.alert("Ти дебіл! Мама сказала число!");
       return;

    } else if (n<=1) {
      window.alert("Ти дебіл! Мама сказала додатнє і більше одиниці!");
       return;

    } else if ((n%1) !== 0) {
      window.alert("Ти дебіл! Мама сказала ціле!");
       return;

    } else {
      while (i<n) {
      fibo[i] = fibo[(i-1)] + fibo[(i-2)];

      if (fibo[i]===Infinity) {
        i = n;
        fibo = "Та то таких великих цифер нема !";
      }
      i++;
      }
    }

      document.getElementById("answer").innerHTML = ("Відповідь: " + "[ " + fibo + " ]");
      return;

    }
