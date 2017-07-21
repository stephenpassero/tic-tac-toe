/*
AI picks a random spot and moves there...
I didn't really have time to make the AI block the player or stuff like that...
 */
function clear() {
    setTimeout(function() {
        for (let i = 0; i < 10; i++) {
            $('#box' + i).removeClass('x');
            $('#box' + i).removeClass('o');
            $('#box' + i).empty();
            $('#box' + i).css('background-color', 'whitesmoke');
            gameOver = false;
        }
    }, 1000);

    newGame();
}

function checkIfGameOver(xOrO) {
    if ($('#box1').hasClass(xOrO) && $('#box2').hasClass(xOrO) && $('#box3').hasClass(xOrO)) {
        $('#box1').css('background-color', 'green');
        $('#box2').css('background-color', 'green');
        gameOver = true;
        $('#box3').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box4').hasClass(xOrO) && $('#box5').hasClass(xOrO) && $('#box6').hasClass(xOrO)) {
        gameOver = true;
        $('#box4').css('background-color', 'green');
        $('#box5').css('background-color', 'green');
        $('#box6').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box7').hasClass(xOrO) && $('#box8').hasClass(xOrO) && $('#box9').hasClass(xOrO)) {
        gameOver = true;
        $('#box7').css('background-color', 'green');
        $('#box8').css('background-color', 'green');
        $('#box9').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box1').hasClass(xOrO) && $('#box4').hasClass(xOrO) && $('#box7').hasClass(xOrO)) {
        gameOver = true;
        $('#box1').css('background-color', 'green');
        $('#box4').css('background-color', 'green');
        $('#box7').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box2').hasClass(xOrO) && $('#box5').hasClass(xOrO) && $('#box8').hasClass(xOrO)) {
        gameOver = true;
        $('#box2').css('background-color', 'green');
        $('#box5').css('background-color', 'green');
        $('#box8').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box3').hasClass(xOrO) && $('#box6').hasClass(xOrO) && $('#box9').hasClass(xOrO)) {
        gameOver = true;
        $('#box3').css('background-color', 'green');
        $('#box6').css('background-color', 'green');
        $('#box9').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box1').hasClass(xOrO) && $('#box5').hasClass(xOrO) && $('#box9').hasClass(xOrO)) {
        gameOver = true;
        $('#box1').css('background-color', 'green');
        $('#box5').css('background-color', 'green');
        $('#box9').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box3').hasClass(xOrO) && $('#box5').hasClass(xOrO) && $('#box7').hasClass(xOrO)) {
        gameOver = true;
        $('#box3').css('background-color', 'green');
        $('#box5').css('background-color', 'green');
        $('#box7').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    }
}
let gameOver = false;
function newGame() {
    $(document).ready(function() {
        let oHasBeenPlaced = true;
        $('div').click(function(event) {
            const divClickedId = $(this).attr("id");
            if ($('#' + divClickedId).is(':empty')) {
                $(event.target).html('X');
                $('#' + divClickedId).addClass('x');
                checkIfGameOver('x');
                oHasBeenPlaced = false;
            }
            let numbersTried = [];
            while (oHasBeenPlaced === false) {
                let randomNumber = Math.floor((Math.random() * 9) + 1);
                numbersTried.push(randomNumber);
                let divId = '#box' + randomNumber;
                if ($(divId).is(':empty')) {
                    numbersTried = [];
                    if(gameOver === false){
                        $(divId).html('O');
                        $(divId).addClass('o');
                        oHasBeenPlaced = true;
                        checkIfGameOver('o');
                    }
                    return;
                }else if($.inArray( 1, numbersTried ) > -1 && $.inArray( 2, numbersTried ) > -1 &&
                    $.inArray( 3, numbersTried ) > -1 && $.inArray( 4, numbersTried ) > -1 &&
                    $.inArray( 5, numbersTried ) > -1 && $.inArray( 6, numbersTried ) > -1 &&
                    $.inArray( 7, numbersTried ) > -1 && $.inArray( 8, numbersTried ) > -1 &&
                    $.inArray( 9, numbersTried ) > -1){
                    clear();
                    return;
                }
            }
        });
    });
}
newGame();
