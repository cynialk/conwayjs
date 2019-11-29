
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
            td.id = x + " " + y;
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

    tile = document.querySelector("#" + x + " " + y);

    if (tile.classList.contains("empty")) {
        tile.classList.remove("empty");
    }

    tile.classList.add(type);
}

