var whoseTurn = 0;  /* 0 = O and 1 = X */

$('#current-turn').text('It\'s X\'s turn');

const cells = document.querySelectorAll('td');
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', (event) => {
        drawItem(event.target.id);
    })
}

$('#reset').on('click', () => {
    whoseTurn = 0;
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
    $('#current-turn').text('It\'s X\'s turn');
    
})

function drawItem(item) {
    if (whoseTurn == 3) {
        $('#current-turn').text('Game is over.  Can\'t continue.');
        return;
    }
    if (($('#' + item).text() == 'X' && whoseTurn == 1)
        || ($('#' + item).text() == 'O' && whoseTurn == 0)) {
        youCheated();
        return;
    } else if ($('#' + item).text() != '') {
        $('#current-turn').text('Try again in a blank cell.');
        return;
    }
    if (whoseTurn == 0) {
        $('#' + item).text('X');
        whoseTurn = 1;
        checkForWinner()
        whoseNext();
    } else {
        $('#' + item).text('O');
        whoseTurn = 0;
        checkForWinner()
        whoseNext();
    }
}

function whoseNext() {
    if (whoseTurn == 3) {
        return;
    }
    if (whoseTurn == 0) {
        $('#current-turn').text('It\'s X\'s turn');
    } else {
        $('#current-turn').text('It\'s O\'s turn');
    }
}

function youCheated() {
    $('#current-turn').text('You tried to cheat.  You\'ll have to try harder.');
}

function checkForWinner() {
    if (
        ($('#r0c0').text() == 'X' && $('#r0c1').text() == 'X' && $('#r0c2').text() == 'X') ||
        ($('#r1c0').text() == 'X' && $('#r1c1').text() == 'X' && $('#r1c2').text() == 'X') ||
        ($('#r2c0').text() == 'X' && $('#r2c1').text() == 'X' && $('#r2c2').text() == 'X') ||
        ($('#r0c0').text() == 'X' && $('#r1c0').text() == 'X' && $('#r2c0').text() == 'X') ||
        ($('#r0c1').text() == 'X' && $('#r1c1').text() == 'X' && $('#r2c1').text() == 'X') ||
        ($('#r0c2').text() == 'X' && $('#r1c2').text() == 'X' && $('#r2c2').text() == 'X') ||
        ($('#r0c0').text() == 'X' && $('#r1c1').text() == 'X' && $('#r2c2').text() == 'X') ||
        ($('#r0c2').text() == 'X' && $('#r1c1').text() == 'X' && $('#r2c0').text() == 'X')
    ) {
        /* winner, winner, chicken dinner */
        $('#current-turn').text('X is the winner!!!');
        whoseTurn = 3;
    } else if (
        ($('#r0c0').text() == 'O' && $('#r0c1').text() == 'O' && $('#r0c2').text() == 'O') ||
        ($('#r1c0').text() == 'O' && $('#r1c1').text() == 'O' && $('#r1c2').text() == 'O') ||
        ($('#r2c0').text() == 'O' && $('#r2c1').text() == 'O' && $('#r2c2').text() == 'O') ||
        ($('#r0c0').text() == 'O' && $('#r1c0').text() == 'O' && $('#r2c0').text() == 'O') ||
        ($('#r0c1').text() == 'O' && $('#r1c1').text() == 'O' && $('#r2c1').text() == 'O') ||
        ($('#r0c2').text() == 'O' && $('#r1c2').text() == 'O' && $('#r2c2').text() == 'O') ||
        ($('#r0c0').text() == 'O' && $('#r1c1').text() == 'O' && $('#r2c2').text() == 'O') ||
        ($('#r0c2').text() == 'O' && $('#r1c1').text() == 'O' && $('#r2c0').text() == 'O')
    ) {
        /* winner, winner, chicken dinner */
        $('#current-turn').text('O is the winner!!!');
        whoseTurn = 3;
    } else {
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].innerHTML == '') {
                /* skip calling it a draw */
                return;
            } 
        }

        $('#current-turn').text('It\'s a draw!!!');

        whoseTurn = 3;
    }
}