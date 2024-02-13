function pentagonCalculation(){
    const pentagonP = getInputValueById("pentagonInputP");
    
    const pentagonB = getInputValueById("pentagonInputB")

    const pentagonArea = 0.5 * pentagonP * pentagonB;

    areaCaculate("pentagonSpan", pentagonArea)
    
}


function getInputValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.value;
    const elementNumber = parseFloat(elementText);
    return elementNumber;
}

function areaCaculate(elementId, pentagonArea){
    const result = document.getElementById(elementId);
    result.innerText = pentagonArea;
}