var wins = prompt("Quantas vitorias tem seu herói? ");
var losses = prompt("Quantas derrotas tem seu herói? ");

wins = parseInt(wins);
losses = parseInt(losses);

let rankeadas = rank(wins,losses);

if (rankeadas <= 0){
    console.log("O seu herói ainda não ganhou nenhuma partida");
}
else if ((rankeadas > 0 ) && (rankeadas <=10)){
    var level = "Ferro";
    console.log("O herói tem saldo de " + rankeadas +" está no nível de " + level);
}
else if ((rankeadas > 10 ) && (rankeadas <=20)){
    var level = "Bronze";
    console.log("O herói tem saldo de " + rankeadas +" está no nível de " + level); 
}
else if ((rankeadas > 20 ) && (rankeadas <=40)){
    var level = "Prata";
    console.log("O herói tem saldo de " + rankeadas +" está no nível de " + level);
}
else if ((rankeadas > 40 ) && (rankeadas <=80)){
    var level = "Ouro";
    console.log("O herói tem saldo de " + rankeadas +" está no nível de " + level);
}
else if ((rankeadas > 80 ) && (rankeadas <=90)){
    var level = "Diamante";
    console.log("O herói tem saldo de " + rankeadas +" está no nível de " + level);
}
else if ((rankeadas > 90 ) && (rankeadas <=100)){
    var level = "Lendario";
    console.log("O herói tem saldo de " + rankeadas +" está no nível de " + level);
}
else {
    var level = "Imortal";
    console.log("O herói tem saldo de " + rankeadas +" está no nível de " + level);
}
    function rank (vit,der){
    return vit-der
}