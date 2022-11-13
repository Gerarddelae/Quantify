export const Total = ({ vigas }) => {
    let volt = vigas
                .map(n => Number(n.volumen))
                .reduce((d, e) => d + e, 0)

    return (
        <div className="card col-lg-2 mx-3">
            <div className="card-body text-black">
                <h5 className="card-title">Cantidades totales:</h5>
                <p>Concreto: {volt} m³</p>
            </div>
        </div>
    )
}