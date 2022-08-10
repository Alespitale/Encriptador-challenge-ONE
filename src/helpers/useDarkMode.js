const useDarkMode = () => {
  const moon = document.querySelector(".lnr-moon");
  const sun = document.querySelector(".lnr-sun");
  const lnr = document.querySelector(".lnr");
  const body = document.body.classList;
  moon !== null
    ? moon.addEventListener("click", (e) => {
        e.preventDefault();
        body.toggle("dark-mode");
        moon.classList.replace("lnr-moon", "lnr-sun");
      })
    : sun.addEventListener("click", (e) => {
        e.preventDefault();
        body.remove("dark-mode");
        sun.classList.replace("lnr-sun", "lnr-moon");
      });
};
