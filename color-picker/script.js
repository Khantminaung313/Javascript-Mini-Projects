let colorPicker = document.querySelector("#color-picker")
colorPicker.addEventListener("input" ,()=> {
    let color = colorPicker.value;
    document.body.style.background = color;
})