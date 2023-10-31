player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1Name +  " : ";
document.getElementById("player2_name").innerHTML = player2Name +  " : ";

document.getElementById("player1Score").innerHTML = player1Score + " : ";
document.getElementById("player2Score").innerHTML = player2Score + " : ";

document.getElementById("PlayerQuestion").innerHTML = "Turno de Pergunta - " + player1Name;
document.getElementById("PlayerAnswer").innerHTML = "Turno de Responder - " + player2Name;

function enviar() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
}