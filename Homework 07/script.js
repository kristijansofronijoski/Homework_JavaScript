/* Create a dynamic table
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :) */

let columns = prompt(`Please enter the number of columns: `);

let rows = prompt(`Please, enter the number of rows: `);

let table = document.getElementById("table");


function createTable(rows,columns){
    let table = "";

    table += 
    `<table border="1" cellpadding="10" cellspacing="10">
    <tbody>`;
    
    for(let i=0; i < rows; i++){
        table += `<tr>`;
        for(let j=0; j<columns; j++){
            table += `<td>Row: ${i+1} Column: ${j+1}</td>`;
        }
        table += `</tr>`;
    }
    
    table += 
    `</tbody>
    </table>`;

    return table;
}

let dynamicTable = createTable(rows,columns);
table.innerHTML = dynamicTable;