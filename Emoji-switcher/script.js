const emoji = ['😁', '😍', '🤣', '😂', '😊', '😒', '😘', '😉', '😎', '😢'];

const btn = document.querySelector('#emoji-btn');

btn.addEventListener('mouseover', function () {
    btn.innerHTML = emoji[Math.floor(Math.random() * emoji.length)]
})

btn.addEventListener('click', function () {
    btn.innerHTML = emoji[Math.floor(Math.random() * emoji.length)]
})