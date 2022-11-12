export const Alerta = ({repite, setRepite}) => {
    if (repite) {
        return (
            <div>
                <div className="alert alert-danger alert-dismissible fade show col-4 mx-auto mt-4" role="alert">
                    <button className="btn-close" data-bs-dismiss="alert" onClick={() => setRepite(false)}></button>
                    <strong>Nombre repetido!</strong>
                </div>
            </div>
        )   
    }
}

