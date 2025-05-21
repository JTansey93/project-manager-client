import { useState, useEffect } from 'react'
import './App.css'

type Project = {
    name: string;
};

function App() {
    const [data, setData] = useState<Project[]>([]);

    const getProjects = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/projects/');
            const json = await response.json();
            setData(json);
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    console.log(data);

    return (
        <div>My project's are:
            <ul>
            { data.map((project) => (<li> {project.name} </li>)) }
            </ul>
            <button>Add Project</button>
            </div>
    )
}

export default App
