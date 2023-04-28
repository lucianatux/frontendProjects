
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

  function updatePreview() {
    preview.innerHTML = marked(editor.value, { breaks: true });
  }
  
  
  editor.addEventListener('input', updatePreview);

  preview.innerHTML = marked(editor.value, { breaks: true });
  
  window.addEventListener('load', function() {
    preview.innerHTML = marked(editor.value);
  });
  