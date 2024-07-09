function CalculateMaturity(){
    const principal = parseFloat(document.getElementById('principal').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // Corrected the formula for calculating maturity amount (assuming simple interest)
    const maturityAmount = principal + (principal * interest * tenure) / 100;

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
    document.getElementById('Calculatebtn').addEventListener('click', CalculateMaturity);

}
