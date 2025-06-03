type props = {
    id: number;
}
function DeleteButton(props){
    const handleClick = (e) => {
        e.preventDefault();
        const id = String(props.id);

        
        const url = 'http://127.0.0.1:8000/projects/' + id + '/';

        fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
    })};


    return(
        <button onClick={handleClick}>Delete</button>
    )
}

export default DeleteButton
