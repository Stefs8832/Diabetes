function calculateDeficit() {
    const weight = document.getElementById('weight').value;
    const kLevel = document.getElementById('kLevel').value;
    const kNormal = 4.0;

    if (weight && kLevel) {
        const kDeficit = (kNormal - kLevel) * weight;
        document.getElementById('result').innerHTML = `Patientens kaliumdeficit er ${kDeficit.toFixed(2)} mmol.<br><br>` + 
            `For at opnå kalium på 4,0 mmol/l kan deficit dækkes af:<br><br>` +
            `${(kDeficit / 10).toFixed(2)} kaliumklorid tabletter, á 750mg eller<br><br>` +
            `${(kDeficit / 1).toFixed(2)} ml kaliummikstur, eller<br><br>` +
            `${(kDeficit / 51).toFixed(2)} L Kalium-Natriumklorid (KNaCl).`;
    } else {
        document.getElementById('result').innerHTML = "Udfyld venligst alle felter.";
    }
}