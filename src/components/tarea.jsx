import '../styles/tarea.css';

const Tarea = ({ tarea, toggleCompletado, eliminarTarea }) => {
    return (
        <li className={`tarea ${tarea.completado ? 'completado' : ''}`}>
            <div className="tarea-contenido">
                <p className="tarea-texto">{tarea.texto}</p>
                <p className="tarea-responsable">
                    <strong>Responsable:</strong> {tarea.responsable}
                </p>
                {tarea.link && (
                    <p className="tarea-link">
                        <a href={tarea.link} target="_blank" rel="noopener noreferrer">
                            Ver enlace
                        </a>
                    </p>
                )}
                <p className="tarea-fecha">
                    <strong>Fecha de entrega:</strong> {tarea.fechaEntrega}
                </p>
            </div>
            <div className="tarea-acciones">
                <input
                    type="checkbox"
                    checked={tarea.completado}
                    onChange={() => toggleCompletado(tarea.id)}
                    className="tarea-checkbox"
                />
                <button 
                    onClick={() => eliminarTarea(tarea.id)} 
                    className="tarea-eliminar"
                    >
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Tarea