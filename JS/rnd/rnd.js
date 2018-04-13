function generateRandomColl(){
  var i, k;
  var min = 0;
  var max = 9;
  var dogs = [
    {name:"Chuck", breed:"dog", age:2, sex:"male"},
    {name:"Abby", breed:"english terrier", age:4, sex:"female"},
    {name:"Creed", breed:"greyhound", age:3, sex:"male"},
    {name:"Lora", breed:"spaniel", age:3, sex:"female"},
    {name:"Fancy", breed:"schnauzer", age:4, sex:"female"},
    {name:"Dug", breed:"retriever", age:3, sex:"male"},
    {name:"Leo", breed:"spitz", age:8, sex:"male"},
    {name:"Kite", breed:"fox terrier", age:2, sex:"female"},
    {name:"Melissa", breed:"husky", age:1, sex:"female"},
    {name:"Rob", breed:"bulldog", age:1, sex:"male"},
  ];


  function generateArrayRandomNumber(min, max) {
	   var totalNumbers = max - min + 1;
	   var arrayTotalNumbers = [];
	   var	arrayRandomNumbers = [];
	   var	temp;

	while (totalNumbers--) {
		arrayTotalNumbers.push(totalNumbers + min);
	}

	while (arrayTotalNumbers.length) {
		temp = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
		arrayRandomNumbers.push(arrayTotalNumbers[temp]);
		arrayTotalNumbers.splice(temp, 1);
	}

	return arrayRandomNumbers;
}
    var r = generateArrayRandomNumber(min, max) // Масив випадкових чисел від 0 до 9, які не повторюються


  for (i = 0; i < dogs.length; i++) {

    for (k in dogs[i]) {
      console.log(dogs[r[i]][k]);
        }
      console.log("\n");
    }


    return;
}
