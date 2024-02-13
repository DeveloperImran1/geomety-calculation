// every card er jonno aivabe kora jai. Abar aksathe function a call korar maddhome korte nicher niom a korte hobe.

// function calculateRombosArea(){
//     const rhombosD1input = document.getElementById("rhombosD1input");
//     const rhombosD1inputText = rhombosD1input.value;
//     const rhombosD1 = parseFloat(rhombosD1inputText)


//     const rhombosD2input = document.getElementById("rhombosD2input");
//     const rhombosD2inputText= rhombosD2input.value;
//     const rhombosD2 = parseFloat(rhombosD2inputText)

//     const area = 0.5*rhombosD1*rhombosD2;

//     const rhombosSpan= document.getElementById("rhombosSpan");
//     rhombosSpan.innerText = area;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// everay carder jonno akta kore function likha call korte hobe . 
function calculateRombosArea() {

    const rhombosD1input = getInputValueById("rhombosD1input");

    const rhombosD2input = getInputValueById("rhombosD2input");

    const area = 0.5 * rhombosD1input * rhombosD2input;

    // aikhane every shaper jonno korlew hobe. ba niche akta function nia oi function inner text change kore dilaw hobe. aijonno every shape er function thheke element er id and area er result ta dita hobe.
    // const rhombosSpan = document.getElementById('rhombosSpan');
    // rhombosSpan.innerText = area;

    // area er result er innerText change korar areaCaculate function k call korlam.
    areaCaculate('rhombosSpan', area);

    // Display er right site a show korar jonno call kortehobe
    leftSideResult(area)
}


// Nicher function gulo fixed thakbe. sudho perameter a value nia kaz korbe.
function getInputValueById(inputFieldId) {
    const rhombosD1input = document.getElementById(inputFieldId);
    const rhombosD1inputText = rhombosD1input.value;
    const d1Input = parseFloat(rhombosD1inputText)
    return d1Input;
}

function areaCaculate(areaId, area) {
    const result = document.getElementById(areaId);
    result.innerText = area;
}

// calculation-result and display inside the display

function leftSideResult(reuslt) {
    const newElement = document.createElement("p");

    newElement.innerText = "Your calculation result is: " + reuslt
    const resultDiv = document.getElementById("calculation-result");
    resultDiv.appendChild(newElement)

}


// jekono card a click korle background color change hoia jabe. ai kazta js dia korte hove.
const cards = document.getElementsByClassName("card");
for(let card of cards){
    card.addEventListener('click', function(){
        card.classList.remove("card");
        card.classList.add("bg-tomato")
    })
}
