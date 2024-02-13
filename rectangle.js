function calculateRectangle(){
    const rectangleWidthField = document.getElementById("rectangle-width");
    const rectangleWidthFieldText = rectangleWidthField.value;
    const width = parseFloat(rectangleWidthFieldText);
    
    const rectangleLengthField = document.getElementById('rectangle-length');
    const rectangleLengthFieldText = rectangleLengthField.value;
    const length= parseFloat(rectangleLengthFieldText);

    const area = width * length
    
    const rectangleSpan = document.getElementById('rectangleSpan');
    rectangleSpan.innerText= area;

}