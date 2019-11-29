
function neighboring_cells(pos, findWith){
    let cellsFound = [];
    for (let x = pos[0]-1; x <= pos[0]+1;x++){
        for (let y = pos[1]-1; y <= pos[1]+1;y++){
            const lookOnTile = document.getElementById(x+"_"+y);
            console.log(x + "_" + y + lookOnTile);
            if (lookOnTile.classList.contains(findWith)){
                cellsFound.push(lookOnTile);
            }
        } 
    }
}

function conways(tile){
    const neighboringAliveCells = neighboring_cells(tile.id.split("_"), "alive");
    if ((neighboringAliveCells.length == 2 || neighboringAliveCells == 3) && tile.classList.contains("alive")){
        tile.classList.add("alive");
        return;
    }
    else if (neighboringAliveCells >= 3 && tile.classList.contains("empty")){
        tile.classList.remove("empty");
        tile.classList.add("alive");
        return;
    }
    else {
        tile.classList.remove("alive");
        tile.classList.add("empty");
    }
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
            td.id = x + "_" + y;
            tr.appendChild(td);
            td.id = x + "_" + y;
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

create_grid([100, 100]);

function place_object(pos, type) {
    x = pos[0];
    y = pos[1];

    tile = document.getElementById(x + "_" + y);

    if (tile.classList.contains("empty")) {
        tile.classList.remove("empty");
    }

    tile.classList.add(type);
}

function generation_step() {
    alive_tiles = document.querySelectorAll(".alive");
    for (let index = 0; index < alive_tiles.length; index++) {
        const tile = alive_tiles[index];

        //neighbors = neigboring_cells(tile.id.split("_"), "alive");
        
    }
}

neighboring_cells([10,10],"empty");