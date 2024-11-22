
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>ID: {props.id}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student