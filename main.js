const btn = document.querySelector('.open');
const postContainer = document.querySelector('.container');
let closeBtn = '<i class="fas fa-times"></i>';
let openBtn = '<i class="fas fa-bars"></i>'

btn.addEventListener('click', () => {
      if(btn.innerHTML == openBtn) {
          postContainer.classList.add('show-nav');
          btn.innerHTML = closeBtn;
      }else if(btn.innerHTML == closeBtn) {
          postContainer.classList.remove('show-nav');
          postContainer.style.transition = "transform 2s ease";
          btn.innerHTML = openBtn;
      }
})



//  console.log('clicked');
//       postContainer.classList.add('show-nav');
//       open.innerHTML = '<i class="fas fa-times"></i>';
//     open.addEventListener('click', () => {
//       postContainer.classList.remove('show-nav');
//       postContainer.style.transition = "transform 2s ease";
//       open.innerHTML = '<i class="fas fa-bars"></i>';
//     })