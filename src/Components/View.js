export const View = ({ vigas, deleteBeam }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {vigas.map((viga) => (
        <div key={viga.nombre} className="card col-3 my-3 mx-2 border-info">
          <div className="card-body text-black">
            <h5 className="card-title">{viga.nombre}</h5>
            <p className="card-subtitle">Altura: {viga.altura}</p>
            <p className="card-subtitle">Base: {viga.base}</p>
            <p className="card-subtitle"> Largo: {viga.largo}</p>
            <p className="card-subtitle">volumen: {viga.volumen}</p>
            <button
              className="btn btn-danger"
              onClick={() => deleteBeam(viga.nombre)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
