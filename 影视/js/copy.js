
  const cards = document.querySelectorAll('.grid [data-config]');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const configValue = card.getAttribute('data-config');

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(configValue)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: '复制成功',
              showConfirmButton: false,
              timer: 1000
            });
          })
          .catch(err => {
            fallbackCopyTextToClipboard(configValue);
          });
      } else {
        fallbackCopyTextToClipboard(configValue);
      }
    });
  });

  function fallbackCopyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
      if (successful) {
        Swal.fire({
          icon: 'success',
          title: '复制成功',
          showConfirmButton: false,
          timer: 1000
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: '复制失败',
          showConfirmButton: false,
          timer: 1000
        });
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
      Swal.fire({
        icon: 'error',
        title: '复制失败',
        showConfirmButton: false,
        timer: 1000
      });
    }

    document.body.removeChild(textarea);
  }
