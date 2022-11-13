export const View = ({ vigas, deleteBeam }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {vigas.map((viga) => (
        <div key={viga.nombre} className="card col-lg-2 my-3 mx-2 border-info">
          <div className="card-body text-black">
            <h4 className="card-title">{viga.nombre}</h4>
            <p className="card-subtitle">Altura: {viga.altura} m</p>
            <p className="card-subtitle">Base: {viga.base} m</p>
            <p className="card-subtitle"> Largo: {viga.largo} m</p>
            <p className="card-subtitle">
              volumen: {viga.volumen.toFixed(2)} m³
            </p>
            <div className="d-flex flex-row-reverse">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => deleteBeam(viga.nombre)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
