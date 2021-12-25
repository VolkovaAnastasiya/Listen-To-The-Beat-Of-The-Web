(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-log]'),
    closeModalBtn: document.querySelector('[data-modal-close-log]'),
    modal: document.querySelector('[data-modal-log]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal(event) {
    //   event.preventDefault()
    refs.modal.classList.toggle('is-hidden');
    }
    
    

})();