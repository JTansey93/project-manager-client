import { useState, useEffect } from 'react'
import './App.css'
import DeleteButton from './components/DeleteButton';

type Project = {
    pk: number;
    name: string;
};

function App() {
    const [data, setData] = useState<Project[]>([]);
    const [name, setName] = useState();

    const getProjects = async () => {
        try {
            /* The URL is temporar for development purposes, see the project-manager-api project for api code */
            const response = await fetch('http://127.0.0.1:8000/projects/');
            const json = await response.json();
            setData(json);
        } catch(error) {
            console.error(error);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        const project = { name };


        fetch('http://127.0.0.1:8000/projects/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( project )
    })};

    useEffect(() => {
        getProjects();
    }, []);

    console.log(data);

    return (
        <div>My project's are:
            <ul>
            { data.map((project) => (<li key={project.pk}> Name: {project.name} <DeleteButton id={project.pk} /> </li>)) }
            </ul>
            <form onSubmit={handleClick}><label></label>
            <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <button>Add</button>
            </form>
            </div>
    )
}

export default App
