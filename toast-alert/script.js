const toast = document.querySelector('.toast');
const btn = document.querySelector('button');

function openToast () {
    toast.style.transform = `translateX(0)`
    setTimeout(() => {
        closeToast();
    }, 3000);
}

function closeToast () {
    toast.style.transform = `translateX(400px)`
}