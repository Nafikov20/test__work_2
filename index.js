
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalId;
  return (seconds) => {
    clearInterval(intervalId);
    let remainingSeconds = seconds;
    const interval = 1000;
    intervalId = setInterval(() => {
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        timerEl.textContent = '00:00:00';
        return;
      }
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      timerEl.textContent = formattedTime;
      remainingSeconds -= 1;
    }, interval);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});

console.log(inputEl.value);