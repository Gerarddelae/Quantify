export const Total = ({ vigas }) => {
  let volt = vigas.map((n) => Number(n.volumen)).reduce((d, e) => d + e, 0);

  return (
    <div className="card bg-light col-lg-2 mx-3">
      <div className="card-body text-black">
        <h5 className="card-title">Cantidades totales:</h5>
        <p className="text-nowrap"><small>Concreto: {volt} m³</small></p>
      </div>
    </div>
  );
};
