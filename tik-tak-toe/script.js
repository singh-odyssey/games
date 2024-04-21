let btn = document.querySelectorAll('.btn');
let turnO = true; // initializing first player with O
let winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

//logic for each button 
btn.forEach(button => {
    button.addEventListener('click', () => {
        if (turnO == true) {
            button.innerHTML = 'O';
            turnO = false;
        } else {
            button.innerHTML = 'X';
            turnO = true;
        }
        button.disabled = true;   
        
        //checking the winning pattern
        winPattern.forEach(element => {
            if (btn[element[0]].innerHTML == btn[element[1]].innerHTML && btn[element[1]].innerHTML == btn[element[2]].innerHTML && btn[element[0]].innerHTML != '') {
                alert('Player ' + btn[element[0]].innerHTML + ' wins');
                btn.forEach(button => {
                    button.disabled = true;
                });
            resetGame();
            }
        });
        //checking the draw
        let draw = true;
        btn.forEach(button => {
            if (button.innerHTML === '') {
                draw = false; // If any cell is empty, it's not a draw
            }
        });
         
        if (draw) {
            alert('Match Draw');
            resetGame();
        }
    });
});

let reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame);

function resetGame() {
    location.reload();
}
