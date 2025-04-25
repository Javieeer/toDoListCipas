import { useState, useEffect, useRef } from "react";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import db from './firebase.js';
import './styles/app.css';
import FooterJavi from "./components/footer.jsx";
import Tarea from "./components/tarea.jsx";
import tareasIniciales from "./data/tasks.json";

function App() {
    /* Definimos la estructura de las tareas y creamos algunas de Ejemplo */

    /* Sin local storage */
    const [tareas, setTareas] = useState(tareasIniciales);

    /* Con local storage */
    /* const [tareas, setTareas] = useState(() => {
        const savedTareas = localStorage.getItem('tareas');
        return savedTareas ? JSON.parse(savedTareas) : tareasIniciales;
    }); */

    /* Cargamos las tareas iniciales de la aplicación con la base de datos desde firebase */
    useEffect(() => {
        const fetchTareas = async () => {
            const tareasCollection = collection(db, "tareas");
            const tareasSnapshot = await getDocs(tareasCollection);
            const tareasList = tareasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTareas(tareasList);
        };
    
        fetchTareas();
    }, []);

    /* Definimos los responsables de las tareas */
    const responsables = ["Javier Zapata", "Jhonatan Rojas", "Michael Martinez"];

    /* Definimos los estados para el modal y la nueva tarea */
    const [modalVisible, setModalVisible] = useState(false);
    const [nuevaTareaTexto, setNuevaTareaTexto] = useState('');
    const [nuevoResponsable, setNuevoResponsable] = useState('');
    const [nuevoLink, setNuevoLink] = useState('');
    const [nuevaFechaEntrega, setNuevaFechaEntrega] = useState('');
    const inputRef = useRef(null);

    /* Guardamos las tareas en el localStorage cada vez que cambian */
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    /* Manejamos el evento de tecla para cerrar el modal */
    useEffect(() => {
        if (modalVisible) {
            window.addEventListener('keydown', handleKeyDown);
            if (inputRef.current) {
                inputRef.current.focus();
            }
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalVisible]);

    /* Función para alternar el estado de completado de una tarea */
    const toggleCompletado = async (id) => {
        const tareaRef = doc(db, "tareas", id);
        const tarea = tareas.find(t => t.id === id);
        await updateDoc(tareaRef, { completado: !tarea.completado });
    
        // Actualiza el estado local
        const nuevasTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completado: !tarea.completado };
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };

    /* Función para agregar una nueva tarea */
    const agregarTarea = async () => {
        if (nuevaTareaTexto.trim() && nuevoResponsable.trim() && nuevaFechaEntrega.trim()) {
            const nuevaTarea = {
                texto: nuevaTareaTexto.toUpperCase(),
                completado: false,
                responsable: nuevoResponsable.toUpperCase(),
                link: nuevoLink,
                fechaEntrega: nuevaFechaEntrega
            };
    
            // Agrega la tarea a Firestore
            const docRef = await addDoc(collection(db, "tareas"), nuevaTarea);
    
            // Actualiza el estado local
            setTareas([...tareas, { id: docRef.id, ...nuevaTarea }]);
            setNuevaTareaTexto('');
            setNuevoResponsable('');
            setNuevoLink('');
            setNuevaFechaEntrega('');
            setModalVisible(false);
        }
    };

    /* Función para manejar el evento de tecla Enter */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    };

    /* Función para manejar el evento de tecla Escape */
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setModalVisible(false);
        }
    };

    /* Función para manejar el evento de clic fuera del modal */
    const handleOutsideClick = (e) => {
        if (modalVisible && e.target.className === 'modal') {
            setModalVisible(false);
        }
    }

    const eliminarTarea = async (id) => {
        await deleteDoc(doc(db, "tareas", id));
    
        // Actualiza el estado local
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    const tareasCompletadas = tareas.filter(tarea => tarea.completado);

    return (
        <>
            {/* Contenedor principal */}
            <h1 className="titulo">Pendientes UT - The Police</h1>
            {/* Contenedor lista de tareas */}
            <div className="todolist">
                {/* Contenedor de tareas pendientes */}
                <div className="listaNoDone">
                    <h2>Lista de Tareas</h2>
                    <ul>
                        {tareas
                            .filter(tarea => !tarea.completado)
                            .map(tarea => (
                                <Tarea 
                                    key = { tarea.id } 
                                    tarea = { tarea } 
                                    toggleCompletado = { toggleCompletado }
                                    eliminarTarea = { eliminarTarea }
                                />
                            ))}
                    </ul>
                </div>
                {/* Contenedor de tareas completadas */}
                <div className="listaDone">
                    {tareasCompletadas.length > 0 && (
                        <>
                            <h2>Tareas Completadas</h2>
                            <ul>
                                {tareasCompletadas.map(tarea => (
                                    <Tarea 
                                        key = { tarea.id } 
                                        tarea = { tarea } 
                                        toggleCompletado = { toggleCompletado }
                                        eliminarTarea = { eliminarTarea }
                                    />
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
            {/* Contenedor de botones */}
            <div className="buttons">
                <button className="añadirTarea" onClick={() => setModalVisible(true)}>Añadir Tarea</button>
                <button className="borrarTarea" onClick={() => setTareas([])}>Borrar todas las tareas</button>
            </div>
            {/* Ventana de añadir tarea */}
            {modalVisible && (
                <div className="modal" onKeyDown={handleKeyDown} onClick={handleOutsideClick} tabIndex="0">
                    <div className="modal-content">
                        <h3>Nueva Tarea</h3>
                        <input 
                            type="text" 
                            value={nuevaTareaTexto} 
                            onChange={(e) => setNuevaTareaTexto(e.target.value)} 
                            onKeyPress={handleKeyPress}
                            placeholder="Descripción de la tarea" 
                            ref={inputRef}
                        />
                        <select
                            value = {nuevoResponsable}
                            onChange = { (e) => setNuevoResponsable(e.target.value) } 
                            >
                            <option value="" disabled>Selecciona un responsable</option>
                            { responsables.map((responsable, index) => (
                                <option key={index} value={responsable}>
                                    {responsable}
                                </option>
                            ))}
                        </select>
                        <input 
                            type="url" 
                            value={nuevoLink} 
                            onChange={(e) => setNuevoLink(e.target.value)} 
                            placeholder="Enlace (opcional)"
                        />
                        <input 
                            type="date" 
                            value={nuevaFechaEntrega} 
                            onChange={(e) => setNuevaFechaEntrega(e.target.value)} 
                            placeholder="Fecha de entrega"
                        />
                        <button onClick={agregarTarea}>Agregar</button>
                        <button onClick={() => setModalVisible(false)}>Cancelar</button>
                    </div>
                </div>
            )}
            {/* Pie de pagina */}
            <FooterJavi />
        </>
    );
};

export default App;