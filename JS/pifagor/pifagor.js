var i,j;
for(i=1; i<10;i++){
  var row = document.createElement("div");
      row.id = i;
      row.className = "Row";
      document.getElementById("Table").appendChild(row);

      for (j=1; j<10;j++){
        var number = i*j;
        var cell = document.createElement ("div");
            cell.className = "Cell";
            cell.innerText = number;
            document.getElementById(i).appendChild(cell);
            if (i>j) {
              cell.style.background = "cyan";
            }
            else if (i<j) {
              cell.style.background = "yellow";
            }
            else {
              cell.style.background = "green";
            }

      }
}
