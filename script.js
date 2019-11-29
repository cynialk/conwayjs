let isRightClick = false;
let isMouseDown = false;

document.onmousedown = () => isMouseDown = true; ;
document.onmouseup   = function() { isMouseDown = false; isRightClick = false; };

window.oncontextmenu = function ()
{
    return false;     // cancel default menu
}

function mouseDown(e) {
    e = e || window.event;
    if ( !e.which && e.button !== undefined ) {
      e.which = ( e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) ) );
    }
    if (e.which === 1) {
        isRightClick = false;
    }
  
    else if (e.which === 3) {
        isRightClick = true;
    }
  }


function neighboring_cells(pos, findWith){
    let cellsFound = [];

    for (let x = (pos[0]-1); x <= (pos[0]+1); x++){
        for (let y = (pos[1]-1); y <= (pos[1]+1); y++){

            const lookOnTile = document.getElementById(x + "_" + y);
            
            if (lookOnTile.classList.contains(findWith)){
                cellsFound.push(lookOnTile);
            }
        } 
    }
    return cellsFound;
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
            td.addEventListener('mousemove', function() {interact_with_tile(this, "alive", isRightClick)});
            td.addEventListener('click', function() {interact_with_tile(this, "alive", isRightClick, clicked=true)});

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

create_grid([100, 100]);

function interact_with_tile(tile, type, isRightClick, clicked=false) {

    if (isMouseDown || clicked || isRightClick) {
        if (isRightClick) {
            let neighbors = neighboring_cells(tile.id.split("_"), "alive");

            for (let index = 0; index < neighbors.length; index++) {
                const element = neighbors[index];
                element.className = "empty";
                
            }
            tile.className = "empty";
            return true;
        }
    
        if (tile.classList.contains("empty")) {
            tile.classList.remove("empty");
        }
    
        tile.classList.add(type);
        return true;
    }
    else {
        return false;
    }

}

function generation_step(step_function) {
    alive_tiles = document.querySelectorAll(".alive");
    for (let index = 0; index < alive_tiles.length; index++) {
        const tile = alive_tiles[index];

        step_function(tile);
        
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
