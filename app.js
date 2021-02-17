const loader = document.querySelector('.loader');
const currencyElOne = document.querySelector('#currency1');
const currencyElTwo = document.querySelector('#currency2');
const inputElOne = document.querySelector('#input1');
const inputElTwo = document.querySelector('#input2');
const dispalyEl = document.querySelector('.display');
const currencyHistory = document.querySelector('#currencyHistory');
const date = document.querySelector('#datePicker');

// date.addEventListener('change', getExchangeHistory)




// function getExchangeHistory() {

//     const baseHistory = currencyHistory.value;
//     const dateHistory = date.value;

//     fetch(`https://api.exchangeratesapi.io/${dateHistory}`)
//         .then(res => res.json())
//         .then(data => {






//             // let DisplayOutput = `<p>1 ${currency1} is ${rated} ${currency2}</p> `




//             // dispalyEl.innerHTML = DisplayOutput;

//             // loader.style.visibility = "hidden";
//         });


// }




function ConvertCurrency() {


    const currency1 = currencyElOne.value;
    const currency2 = currencyElTwo.value;


    loader.style.visibility = "visible";

    fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`)
        .then(res => res.json())
        .then(data => {

            console.log(data.rates)

            const rated = (Number(data.rates[currency2])).toFixed(2);

            let DisplayOutput = `<p>1 ${currency1} is ${rated} ${currency2}</p> `

            inputElTwo.value = parseFloat((inputElOne.value) * rated);


            dispalyEl.innerHTML = DisplayOutput;

            loader.style.visibility = "hidden";
        });



};


// function getHistory() {

// }


window.addEventListener('load', () => {

    loader.style.visibility = "hidden";
})




currencyElOne.addEventListener('input', ConvertCurrency)
currencyElTwo.addEventListener('input', ConvertCurrency)
inputElOne.addEventListener('change', ConvertCurrency)
inputElTwo.addEventListener('change', ConvertCurrency)
currencyHistory.addEventListener('change', getHistory);