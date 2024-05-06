(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
   
   
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
   
   
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();

document.addEventListener("DOMContentLoaded", function() {
  function highlightLink(link) {
      let links = document.querySelectorAll('.nav-link');
      links.forEach(function(item) {
          item.classList.remove('active');
          item.style.color = '#2E2F42';
      });
      
      link.classList.add('active');
      link.style.color = '#404BBF';
  }
  
  let links = document.querySelectorAll('.nav-link');
  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          highlightLink(this);
      });
  });
});

