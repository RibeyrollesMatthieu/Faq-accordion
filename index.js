document.querySelectorAll('.faq-questions-question-title').forEach(element => {
  element.addEventListener('click', (event) => {
  
    /* if the active element is the current one, no need to check for other active questions */
    if (! event.target.parentElement.classList.contains('active')) {
      document.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');
      });
    } 

    event.target.parentElement.classList.toggle('active');
  })
});
