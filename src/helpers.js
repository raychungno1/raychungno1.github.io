export const fromDefaults = {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
};

export const toDefaults = {
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power4.out",
};

export const isElementInViewport = (el) => {
  var rect = el.getBoundingClientRect();

  if (
    rect.right < 0 ||
    rect.left > (window.innerWidth || document.documentElement.clientWidth)
  )
    return false;

  if (
    rect.bottom < 0 ||
    rect.top > (window.innerHeight || document.documentElement.clientHeight)
  )
    return false;

  return true;
};
