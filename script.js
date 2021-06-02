const container = document.querySelector('.h-500');
const box = document.querySelector('.box');
ScrollTrigger.create({
  trigger: ".pin-container",
  pin: true,
  start: 'top 10%',
  end:"+=140%",
  // end: () => `+=${container.offsetHeight - box.offsetHeight}`,
  markers: true,
  id: "box"
});

// function resizeBox() {
//   gsap.set('.box', {height: 50});
//   ScrollTrigger.refresh();
// }
// document.querySelector('button').addEventListener('click', resizeBox);