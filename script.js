/*
This project isn't done yet.
 */
function clear() {
    setTimeout(function() {
        for (var i = 0; i < 10; i++) {
            $('#box' + i).removeClass('x');
            $('#box' + i).removeClass('o');
            $('#box' + i).empty();
            $('#box' + i).css('background-color', 'whitesmoke');
        }
    }, 1000);
    newGame();
}

function checkIfGameOver(xOrO) {
    if ($('#box1').hasClass(xOrO) && $('#box2').hasClass(xOrO) && $('#box3').hasClass(xOrO)) {
        $('#box1').css('background-color', 'green');
        $('#box2').css('background-color', 'green');
        $('#box3').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box4').hasClass(xOrO) && $('#box5').hasClass(xOrO) && $('#box6').hasClass(xOrO)) {
        $('#box4').css('background-color', 'green');
        $('#box5').css('background-color', 'green');
        $('#box6').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box7').hasClass(xOrO) && $('#box8').hasClass(xOrO) && $('#box9').hasClass(xOrO)) {
        $('#box7').css('background-color', 'green');
        $('#box8').css('background-color', 'green');
        $('#box9').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box1').hasClass(xOrO) && $('#box4').hasClass(xOrO) && $('#box7').hasClass(xOrO)) {
        $('#box1').css('background-color', 'green');
        $('#box4').css('background-color', 'green');
        $('#box7').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box2').hasClass(xOrO) && $('#box5').hasClass(xOrO) && $('#box8').hasClass(xOrO)) {
        $('#box2').css('background-color', 'green');
        $('#box5').css('background-color', 'green');
        $('#box8').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box3').hasClass(xOrO) && $('#box6').hasClass(xOrO) && $('#box9').hasClass(xOrO)) {
        $('#box3').css('background-color', 'green');
        $('#box6').css('background-color', 'green');
        $('#box9').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box1').hasClass(xOrO) && $('#box5').hasClass(xOrO) && $('#box9').hasClass(xOrO)) {
        $('#box1').css('background-color', 'green');
        $('#box5').css('background-color', 'green');
        $('#box9').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    } else if ($('#box3').hasClass(xOrO) && $('#box5').hasClass(xOrO) && $('#box7').hasClass(xOrO)) {
        $('#box3').css('background-color', 'green');
        $('#box5').css('background-color', 'green');
        $('#box7').css('background-color', 'green');
        setTimeout(function() {
            alert(xOrO.toUpperCase() + ' Wins!');
        }, 100);
        clear();
    }
}

function newGame() {
    $(document).ready(function() {
        var clicks = 0;
        var oHasBeenPlaced = true;
        $('div').click(function(event) {
            const divClickedId = $(this).attr("id");
            if ($('#' + divClickedId).is(':empty')) {
                $(event.target).html('X');
                $('#' + divClickedId).addClass('x');
                checkIfGameOver('x');
                clicks++;
                oHasBeenPlaced = false;
                if (clicks >= 8) {
                    oHasBeenPlaced = true;
                }
            }
            while (oHasBeenPlaced === false) {
                var randomNumber = Math.floor((Math.random() * 9) + 1);
                var divId = '#box' + randomNumber;
                if ($(divId).is(':empty')) {
                    $(divId).html('O');
                    $(divId).addClass('o');
                    clicks++;
                    oHasBeenPlaced = true;
                    checkIfGameOver('o');
                }
            }
        });
    });
}
newGame();
