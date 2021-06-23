let count = 3;
const decrement = () => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
    return;
  }
  console.log(count);
  count--;
};

var interval = setInterval(decrement, 1000);
