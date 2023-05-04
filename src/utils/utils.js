const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const scrollToTarget = (id) => {
  setTimeout(() => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, 10);
};

export { scrollTop, scrollToTarget };
