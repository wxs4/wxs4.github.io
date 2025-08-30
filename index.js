const yesBtn = document.querySelector('#yesBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
yesBtn.addEventListener('click',function () {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})