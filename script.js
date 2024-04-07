const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');

yesBtn.addEventListener('click', () => {
    question.innerHTML = "I love you too!"
    gif.src = "https://i.giphy.com/iCM6GqQTImr8RgdIXV.webp"

    yesBtn.remove();
    noBtn.remove();
});

noBtn.addEventListener("mouseover", () => {
    const noBtnReaction = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReaction.width;
    const maxY = window.innerHeight - noBtnReaction.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});