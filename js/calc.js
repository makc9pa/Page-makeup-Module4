export const calc = () => {
    const calcForm = document.querySelector('#form-calc');
    const mathOperators = document.querySelectorAll('.calc__btn');
    const result = document.querySelector('.calc__result');

    const addition = (e) => {
        e.preventDefault();
        const firstNum = +document.getElementById('x').value;
        const secondNum = +document.getElementById('y').value;
        result.textContent = (firstNum + secondNum).toFixed(2);
        calcForm.reset();
    }

    const subtraction = (e) => {
        e.preventDefault();
        const firstNum = +document.getElementById('x').value;
        const secondNum = +document.getElementById('y').value;
        result.textContent = (firstNum - secondNum).toFixed(2);
        calcForm.reset();
    }

    const multiplication = (e) => {
        e.preventDefault();
        const firstNum = +document.getElementById('x').value;
        const secondNum = +document.getElementById('y').value;
        result.textContent = (firstNum * secondNum).toFixed(2);
        calcForm.reset();
    }

    const division = (e) => {
        e.preventDefault();
        const firstNum = +document.getElementById('x').value;
        const secondNum = +document.getElementById('y').value;
        result.textContent = (firstNum / secondNum).toFixed(2);
        calcForm.reset();
    }

    mathOperators[0].addEventListener('click', addition);
    mathOperators[1].addEventListener('click', subtraction);
    mathOperators[2].addEventListener('click', multiplication);
    mathOperators[3].addEventListener('click', division);
};