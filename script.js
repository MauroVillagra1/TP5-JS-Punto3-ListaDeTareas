// Función para agregar una tarea a la lista
function agregarTarea() {
    const tareaInput = document.getElementById('tareaInput');
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto !== '') {
        const listaTareas = document.getElementById('listaTareas');

        // Crear elementos para la tarea y el botón de eliminar
        const tareaElemento = document.createElement('li');
        tareaElemento.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        tareaElemento.innerText = tareaTexto;

        const eliminarBoton = document.createElement('button');
        eliminarBoton.classList.add('btn', 'btn-danger', 'btn-sm');
        eliminarBoton.innerText = 'Eliminar';
        eliminarBoton.onclick = function() {
            listaTareas.removeChild(tareaElemento);
        };

        // Agregar la tarea y el botón de eliminar a la lista
        tareaElemento.appendChild(eliminarBoton);
        listaTareas.appendChild(tareaElemento);

        // Limpiar el campo de entrada
        tareaInput.value = '';
    }
}
