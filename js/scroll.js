const fixedDiv = document.getElementById("fixedDiv");
const startScroll = 1000;
const stopScroll = 4000;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop >= startScroll && scrollTop <= stopScroll) {
    
    fixedDiv.classList.add("fixed");
    fixedDiv.classList.remove("stopped");
  } else if (scrollTop > stopScroll) {
    
    fixedDiv.classList.remove("fixed");
    fixedDiv.classList.add("stopped");
  } else {
    
    fixedDiv.classList.remove("fixed", "stopped");
  }
});
