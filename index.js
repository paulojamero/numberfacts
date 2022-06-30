let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

//event listener
let numberInput = document.querySelector('#numberInput');
// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetch);


//AJAX / XHR to work with API
// function getFactAjax(){
//     let number = numberInput.value;
    

//     //REQUEST to API
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/'+number);
    
//     xhr.onload = function(){
//         if(this.status == 200 && number != ''){
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }
//     xhr.send();
// }

function getFactFetch(){
    let number = numberInput.value;

    fetch('https://cors-anywhere.herokuapp.com/http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
            if(number != ''){
                fact.style.display = 'block';
                factText.innerText = data;
            }
            if(number == 69){
                factText.innerText = 'bad yan';
            }
        })
        .catch(err => console.log(err));
}
    
