import { useState, useEffect } from 'react'
import './App.css'

type Project = {
    name: string;
};

function App() {
    const [data, setData] = useState<Project[]>([]);
    const [name, setName] = useState();

    const getProjects = async () => {
        try {
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
            { data.map((project) => (<li> {project.name} </li>)) }
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
