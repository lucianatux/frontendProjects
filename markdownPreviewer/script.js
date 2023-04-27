
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

  function updatePreview() {
    preview.innerHTML = editor.value;
    preview.innerHTML = marked(editor.value); 
  }
  
  editor.addEventListener('input', updatePreview);
  
  preview.innerHTML = marked(editor.value); // Mostrar el contenido de muestra al cargar la página