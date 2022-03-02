Papa.parse('./animals.csv', {
    header: false,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results.data;
      table(data)
    }
  });

function table(uArray){
    table = document.getElementById("animal-table")
    for(let i = 1; i < uArray.length; i++){
        row = document.createElement("tr")
        for(let j = 0; j < uArray[i].length ; j++){
            td = document.createElement("td")
            td.append(uArray[i][j])
            row.append(td)
        }
        
        table.appendChild(row)
    }
}