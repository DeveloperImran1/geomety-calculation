/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and the display the area.
 * step-1: get base value of the triangle.
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field.
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number . use parseFloat
 */


function calculateTriangle(){
    // triangle base
    const baseInputField = document.getElementById("baseInput");
    const baseInputFieldText = baseInputField.value ;    // aikhane input field er value ta string hoia ase.
    const base = parseFloat(baseInputFieldText);
   

    // triangle height
    const heightInputField = document.getElementById("heightInput");
    const heightInputFieldText = heightInputField.value;
    const height = parseFloat(heightInputFieldText)

    // Calculate triangle area
    const area = 0.5 * height * base;

    const triangleSpnan = document.getElementById("triangleSpnan");
    triangleSpnan.innerText = area;
}