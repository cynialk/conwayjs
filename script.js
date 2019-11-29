function neighboring_cells(pos, findWith){
    let cellsFound = [];
    for (let x = pos[0]-1; x < pos[0]+1;x++){
        for (let y = pos[1]-1; y < pos[1]+1;y++){
            const lookOnTile = document.getElementById(x+"_"+y);
            console.log(x + "_" + y + lookOnTile);
            if (lookOnTile.classList.contains(findWith)){
                cellsFound.push(lookOnTile);
            }
        } 
    }
    return cellsFound;
}


function create_grid(size) {
    x_size = size[0];
    y_size = size[1];
    let table = document.createElement('table');
    table.classList.add("table");
    table.classList.add("table-bordered");
    table.classList.add("table-dark")
    for (let y = 0; y < y_size; y++) {
        let tr = document.createElement('tr');
        for (let x = 0; x < x_size; x++) {
            let td = document.createElement('td');
            td.classList.add("empty");
            tr.appendChild(td);
            td.id = x + "_" + y;
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

create_grid([100, 100]);
neighboring_cells([10,10],"empty");