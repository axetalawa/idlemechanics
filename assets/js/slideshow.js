function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startSlideshow(iframe, works) {
  if (!works.length) return;
  const shuffled = shuffle(works);
  let index = 0;

  const loadNext = () => {
    iframe.classList.add('fade-out');
    setTimeout(() => {
      iframe.src = shuffled[index].path;
      iframe.classList.remove('fade-out');
      iframe.classList.add('fade-in');
    }, 1000);
    index = (index + 1) % shuffled.length;
  };

  iframe.addEventListener('load', () => {
    setTimeout(loadNext, 60000 + Math.random() * 15000); // 60-75s
  });

  loadNext();
}
