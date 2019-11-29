
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
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

create_grid([100, 100]);
