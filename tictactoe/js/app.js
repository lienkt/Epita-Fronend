let table = document.getElementById('table_game')
let cols = document.querySelectorAll(".col")
let current_player = 1;
let freeCells = 9;
let cells = {
    r1_c1: 0,
    r1_c2: 0,
    r1_c3: 0,
    r2_c1: 0,
    r2_c2: 0,
    r2_c3: 0,
    r3_c1: 0,
    r3_c2: 0,
    r3_c3: 0,
}
let first = 1
let last = 3
cols.forEach((col) => {
    col.onclick = (e) => {
        if (freeCells != 0) {
            if (e.target.innerHTML == "") {
                // Put the symbol in the cell
                e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

                // Remove the active class from the curent player
                document.querySelector('.player'+current_player).classList.remove("active");

                // Get row and column of the cell
                let row = e.target.parentElement.classList[0];
                let col = e.target.classList[1];
                cells[row+"_"+col] = current_player;
                let flag = 1;
                // Check for the cells in the same row
                for (let i = 1; i < 4; i++) {
                    if (cells[row+"_c"+i] != current_player) {
                        flag = 0;
                        break;
                    }
                }
                if (flag == 1) {
                    alert("Player" + current_player +" win!");
                    freeCells = 1;
                } else {
                    // Check for the cells in the same column
                    flag = 1;
                    for (let i = first; i <= last; i++) {
                        if (cells["r"+i+"_"+col] != current_player) {
                            flag = 0;
                            break;
                        }
                    }
                    if (flag == 1) {
                        alert("Player" + current_player +"win!");
                        freeCells = 1;
                    } else {
                        // Check for the cells in the first diagonal line
                        if (row.charAt(1) == col.charAt(1)) {
                            flag = 1;
                            for (let i = first; i <= last; i++) {
                                if (cells["r"+i+"_c"+i] != current_player) {
                                    flag = 0;
                                    break;
                                }
                            }
                            if (flag == 1) {
                                alert("Player" + current_player +"win!");
                                freeCells = 1;
                            } 
                        // Check for the cells in the second diagonal line
                        } else if (row.charAt(1) == first + last - col.charAt(1)) {
                            flag = 1;
                            for (let i = first; i <= last; i++) {
                                if (cells["r"+i+"_c"+(first + last - i)] != current_player) {
                                    flag = 0;
                                    break;
                                }
                            }
                            if (flag == 1) {
                                alert("Player" + current_player +"win!");
                                freeCells = 1;
                            }
                        }
                    }
                }
                freeCells -= 1;
                if(current_player == 1) {
                    current_player = 2;
                } else {
                    current_player = 1;
                }
                // Add the active class to the next player
                document.querySelector('.player'+current_player).classList.add("active");
            } else {
                alert("You can not play here someone already play here !")
            }
        } else {
            alert("The game is end!")
        }
    }
})