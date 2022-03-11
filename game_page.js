player1_name=localStorage.getItem("player_1_name");
player2_name=localStorage.getItem("player_2_name");

player1_score=0;
player2_score=0;

document.getElementById("plyer1_name").innerHTML=player1_name+":";
document.getElementById("plyer2_name").innerHTML=player2_name+":";

document.getElementById("player_quest").innerHTML="Question Turn- " + player1_name;
document.getElementById("player_ans").innerHTML="Answer Turn- " + player2_name;

function send(){
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log("Word in Lower case =" + word);
CharAt1=word.charAt(1);
length_by2=Math.floor(word.length/2);
CharAt2=word.charAt(length_by2);
length_minus1=word.length-1;
CharAt3=word.charAt(length_minus1);


remove_CharAt1=word.replace(CharAt1,"_");
remove_CharAt2=remove_CharAt1.replace(CharAt2,"_");
remove_CharAt3=remove_CharAt2.replace(CharAt3,"_");

q_w="<h4 id='word_display'> Q. "+ remove_CharAt3 + "</h4>";
input_box="<br>Answer: <input type='text' id='input_checkbox'>";
check_btn="<br><br><button class='btn btn-warning' onclick='check()'>Check</button>"
row=q_w + input_box + check_btn ;
document.getElementById("output").innerHTML=row;

document.getElementById("word").value="";

}
question_turn="player_1";
answer_turn="player_2";

function check(){
get_answer=document.getElementById("input_checkbox").value;
answer=get_answer.toLowerCase();
if(answer==word){
if(answer_turn=="player_1"){
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;

}
else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
}
}
if(question_turn=="player_1"){
    question_turn="player_2"
    document.getElementById("player_quest").innerHTML="Question Turn- " + player2_name;
    
    }
    else{
        question_turn="player_1"
        document.getElementById("player_quest").innerHTML="Question Turn- " + player1_name;
    }
    if(answer_turn=="player_1"){
        answer_turn="player_2"
        document.getElementById("player_ans").innerHTML="Answer Turn- " + player2_name;
        
        }
        else{
            answer_turn="player_1"
            document.getElementById("player_ans").innerHTML="Answer Turn- " + player1_name;
        }
        document.getElementById("word").innerHTML="";
    }