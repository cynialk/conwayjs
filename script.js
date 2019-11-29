let isRightClick = false;

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
    for (let x = pos[0]-1; x < pos[0]+1;x++){
        for (let y = pos[1]-1; y < pos[1]+1;y++){
            const lookOnTile = document.getElementById(x+"_"+y);
            console.log(x + "_" + y + lookOnTile);
            if (lookOnTile.classList.contains(findWith)){
                cellsFound.push(lookOnTile);
            }
        } 
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
            td.addEventListener('click', function() {interact_with_tile(this, "alive", isRightClick)});

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

create_grid([100, 100]);

function interact_with_tile(tile, type, isRightClick) {

    if (isMouseDown) {
        if (isRightClick) {
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
