export const List = () => {
    const lista = localStorage.getItem("vigas"); 
    const data = JSON.parse(lista)
    console.log(data)
    console.log(data.length);

    return(
        <div>
            {data.length}
        </div>
    )
} 