const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    // console.log(event)
    // const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    if (event.target.id === 'lightgreen') {
      body.style.backgroundColor = event.target.id;
      // document.getElementById('red').innerHTML = '#e63946';
    } else if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
      // document.getElementById('grey').innerHTML = '#e63946';
    } else if (event.target.id === 'orange') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'lightblue') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'yellow') {
      // body.style.backgroundColor = randomColor;
      body.style.backgroundColor =event.target.id;
    }else if(event.target.id ==='lightpink'){
        body.style.backgroundColor = event.target.id;
    }
  });
});

