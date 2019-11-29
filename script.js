function neigboring_cells(pos, findWith) {
    return
}


//bingding chingping
//Hello its me

//
class Tile {
    constructor(coordinates){
        this.position = coordinates;
        this.state = "empty";
    }

    changeState(toState){
        this.state = toState;
    }
}

class Simulation {
    constructor(board, size){
        
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

        neighbors = neigboring_cells(tile.id.split("_"), "alive");
        
    }
}
