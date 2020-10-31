document.addEventListener('DOMContentLoaded', () => {
  //cards
  const Array = [
    {
      name: 'BlackCircle',
      img: './images/1.1.png',
    },
    {
      name: 'BlackCircle',
      img: './images/1.1.png',
    },
    {
      name: 'GreyCircle',
      img: './images/2.1.png',
    },
    {
      name: 'GreyCircle',
      img: './images/2.1.png',
    },
    {
      name: 'RedCircle',
      img: './images/3.1.png',
    },
    {
      name: 'RedCircle',
      img: './images/3.1.png',
    },
    {
      name: 'PurpleCircle',
      img: './images/4.1.png',
    },
    {
      name: 'PurpleCircle',
      img: './images/4.1.png',
    },
    {
      name: 'BlueCircle',
      img: './images/5.1.png',
    },
    {
      name: 'BlueCircle',
      img: './images/5.1.png',
    },
    {
      name: 'GreenCircle',
      img: './images/6.1.png',
    },
    {
      name: 'GreenCircle',
      img: './images/6.1.png',
    },
    {
      name: 'TangerineCircle',
      img: './images/7.1.png',
    },
    {
      name: 'TangerineCircle',
      img: './images/7.1.png',
    },
    {
      name: 'OrangeCircle',
      img: './images/8.1.png',
    },
    {
      name: 'OrangeCircle',
      img: './images/8.1.png',
    },
  ];

  const grid = document.querySelector('.grid');

  console.log(Array.length);
  for (let index = 0; index < Array.length; index++) {
    console.log(Array[index].name);
  }

  function createBoard() {
    for (let i = 0; i < Array.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', './images/40.png');
      card.setAttribute('data-id', i);
      //   card.addEventListener('click', flip);
      grid.appendChild(card);
    }
  }
  createBoard();
});
