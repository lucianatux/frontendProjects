const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function updatePreview() {
    preview.innerHTML = editor.value;
  }
  editor.addEventListener('input', updatePreview);