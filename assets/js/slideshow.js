export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function startSlideshow(iframe, works, defaultDuration = 60000) {
  if (!iframe || !works?.length) return;

  const shuffled = shuffle(works);
  let i = 0;
  const fadeDuration = 1000;

  const next = () => {
    const current = shuffled[i];
    iframe.classList.add('fade-out');

    setTimeout(() => {
      iframe.src = `/${current.path}`;
      iframe.classList.remove('fade-out');
      iframe.classList.add('fade-in');
    }, fadeDuration);

    const hold = current.duration || defaultDuration;
    i = (i + 1) % shuffled.length;
    setTimeout(next, hold);
  };

  next();
}
