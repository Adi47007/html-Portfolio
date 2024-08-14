document.addEventListener('DOMContentLoaded', function() {
    const commentForms = document.querySelectorAll('.comment-form');
  
    commentForms.forEach(form => {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const postId = this.getAttribute('data-post-id');
        const name = this.querySelector('input').value;
        const comment = this.querySelector('textarea').value;
  
        if (name && comment) {
          const commentSection = document.querySelector(`#${postId} .comments-list`);
          const newComment = document.createElement('div');
          newComment.classList.add('comment');
          newComment.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
          commentSection.appendChild(newComment);
  
          this.querySelector('input').value = '';
          this.querySelector('textarea').value = '';
        }
      });
    });
  });
  