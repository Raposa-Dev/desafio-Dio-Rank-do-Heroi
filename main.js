
window.onload = function () {
    function calculateRank(victory, defeat) {
        let balance = victory - defeat;
    
        if (balance < 10) {
            return 'Ferro';
        } else if (balance >= 11 && balance <= 20) {
            return 'Bronze';
        } else if (balance >= 21 && balance <= 50) {
            return 'Prata';
        } else if (balance >= 51 && balance <= 80) {
            return 'Ouro';
        } else if (balance >= 81 && balance <= 90) {
            return 'Diamante';
        } else if (balance >= 91 && balance <= 100) {
            return 'Lendário';
        } else if (balance >= 101) {
            return 'Imortal';
        }
    }
    
    let keepPlaying = true;
    
    while (keepPlaying) {
        let victory = prompt("Digite o número de vitórias:");
        let defeat = prompt("Digite o número de derrotas:");
    
        let rank = calculateRank(victory, defeat);
    
        alert("O heroi tem o rank de : " + rank + " e " + victory + " de vitorias!");
    
        let response = prompt("Deseja continuar jogando? (s/n)");
    
        if (response.toLowerCase() !== 's') {
            keepPlaying = false;
        } 
    }

}
