function getRandomImage() {
  const randomImg = Math.floor(Math.random() * 9) + 1;
  document.querySelector('img').src = 'images/' + randomImg + '.jpg'
}

getRandomImage();

document.querySelector('button').addEventListener('click', getRandomImage);