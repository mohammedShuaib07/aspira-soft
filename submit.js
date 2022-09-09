const close = document.querySelector(".closing");
const modal = document.querySelector(".modal");
const blur = document.querySelector("#blur");
const close11 = document.querySelector(".btn-close");
const modal2 = document.querySelector(".m_1");
const close2 = document.querySelector(".clse");
const close22 = document.querySelector("#clse_");



function submit() {
   
    modal.style.display = "block";
    blur.classList.toggle('active');
    modal.classList.toggle('active');

    close.addEventListener('click', () => {
        modal.style.display = "none";
        blur.classList.remove('active');
    })
    close11.addEventListener('click', () => {
        modal.style.display = "none";
        blur.classList.remove('active');
    })
}

function submit1(){

    modal2.style.display="block";
    blur.classList.toggle('active');
    modal2.classList.toggle('active');

    close2.addEventListener('click', () => {
        modal2.style.display = "none";
        blur.classList.remove('active');
    })

    close22.addEventListener('click', () => {
        modal2.style.display = "none";
        blur.classList.remove('active');
    })

}