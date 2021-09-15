function compute() {
    const principalElement = document.getElementById('principal');
    const principal = parseFloat(principalElement.value);
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;
    const interest = (principal * years * rate) / 100;
    const year = new Date().getFullYear() + parseInt(years);
    const resultElement = document.getElementById('result');

    if (principal < 1 || isNaN(principal)) {
        alert('Enter a positive number');
        principalElement.focus();
        return;
    }

    resultElement.innerHTML = `If you deposit <mark>${principal}</mark>, <br/>
                            at an interest rate of <mark>${rate}%</mark>. <br/>
                            You will receive an amount of <mark>${interest}</mark>, <br/>
                            in the year <mark>${year}</mark>`;

    principalElement.focus();
}

function updateRate() {
    const rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval + '%';
}