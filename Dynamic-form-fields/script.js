let input = document.querySelector('#servey_option');
let add = document.querySelector('.add')
let remove = document.querySelector('.remove')
let input_tags = input.getElementsByTagName('input');



add.onclick = function(){
    if(input_tags.length < 7) {
    let newFields = document.createElement('input')
    newFields.setAttribute('type', 'text');
    newFields.setAttribute('class', 'servey_option');
    newFields.setAttribute('placeholder', 'Another Field')

    input.appendChild(newFields);
    }
}

remove.onclick = function(){
    if(input_tags.length > 2) {
        input.removeChild(input_tags[input_tags.length - 1])
    }
}