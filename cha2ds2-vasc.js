function calculateScore() {
    let score = 0;
    if (document.getElementById('heartFailure').checked) score += 1;
    if (document.getElementById('hypertension').checked) score += 1;
    if (document.getElementById('age75').checked) score += 2;
    if (document.getElementById('diabetes').checked) score += 1;
    if (document.getElementById('stroke').checked) score += 2;
    if (document.getElementById('vascularDisease').checked) score += 1;
    if (document.getElementById('age65').checked) score += 1;
    if (document.getElementById('sexCategory').checked) score += 1;

    document.getElementById('result').innerHTML = `Din CHA2DS2-VASc Score er: ${score}`;
}