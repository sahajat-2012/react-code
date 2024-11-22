
function List(){

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "kaki", calories: 85},
                    {id: 5, name: "grap", calories: 35}]

    //fruits.sort((a,b) => a.name.localeCompare(b.name));//Alpabetical sort (localeCompare for alphabet)
    //fruits.sort((a,b) => b.name.localeCompare(a.name));//Reverse alphabetic
    //fruits.sort((a,b) => a.calories - b.calories);// numeric
    fruits.sort((a,b) => b.calories - a.calories);// numeric 
    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            {fruit.calories}</li>);
    
    fruits.sort((a,b) => a.calories - b.calories);// numeric 
    const listItems1 = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            {fruit.calories}</li>);
    return(
        <div>
            <ol>{listItems}</ol>
            <ol>{listItems1}</ol>
        </div>
    );
}
export default List