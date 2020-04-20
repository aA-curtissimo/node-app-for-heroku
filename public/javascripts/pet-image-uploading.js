window.addEventListener('DOMContentLoaded', () => {

  document
    .getElementById('pet-image-form')
    .addEventListener('submit', async function (event) {
      event.preventDefault();

      const formData = new FormData();
      const fileField = document.getElementById('image');

      formData.append('image', fileField.files[0]);

      const response = await fetch(this.action, {
        method: 'PATCH',
        body: formData,
      });
      if (response.ok) {
        window.location.reload(true);
      }
    });


});
