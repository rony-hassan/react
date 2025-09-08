export default MyList;

const fruits = ['apple','orange','banana'];

function MyList(){

    return (
        <ul>
            {fruits.map(fruit =>
                <li key={fruit}>{fruit}</li>
            )}
        </ul>
    )

}