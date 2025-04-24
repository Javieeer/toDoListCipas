import '../styles/tarea.css';

const Tarea = ({ tarea, toggleCompletado, eliminarTarea }) => {
    return (
        <li className={tarea.completado ? 'completado' : ''}>
            <p>{tarea.texto}</p>
            <p><strong>Responsable:</strong> {tarea.responsable}</p>
            {tarea.link && (
                <p><a href = {tarea.link} target = "_blank" rel = "noopener noreferrer">Ver enlace</a></p>
            )}
            <p><strong>Fecha de entrega:</strong> {tarea.fechaEntrega}</p>
            {/* Checkbox para marcar la tarea como completada */}
            <input 
                type="checkbox" 
                checked={tarea.completado} 
                onChange={() => toggleCompletado(tarea.id)} 
            />
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
        </li>
    );
};

export default Tarea