import { useState, useEffect } from "react";
import { View } from "./View";
import { Alerta } from "./Alerta";

export const Beam = () => {
  // extraer datos de Localstorage
  const getDatafromLS = () => {
    const data = localStorage.getItem("vigas");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  // Definicion de variables de entrada
  const [vigas, setVigas] = useState(getDatafromLS());
  const [nombre, setNombre] = useState("");
  const [altura, setAltura] = useState("");
  const [base, setBase] = useState("");
  const [largo, setLargo] = useState("");
  const [repite, setRepite] = useState(false);

  // Validacion si hay dato repetido
  const valRep = (nombre) => {
    return vigas.some((e) => e.nombre === nombre);
  };

  // Funcion para gestionar el Submit y validar dato repetido
  const handleSubmit = (e) => {
    e.preventDefault();
    let viga = {
      nombre,
      altura,
      base,
      largo,
      volumen: altura * base * largo,
    };
    if (valRep(viga.nombre)) {
      setRepite(true);
      setNombre("");
      document.getElementById("nombre").focus();
    } else {
      setVigas([...vigas, viga]);
      setNombre("");
      setAltura("");
      setBase("");
      setLargo("");
      document.getElementById("nombre").focus();
    }
  };

  // Identificar el cambio y guardar
  useEffect(() => {
    localStorage.setItem("vigas", JSON.stringify(vigas));
  }, [vigas]);

  // Eliminar vigas
  const deleteBeam = (nombre) => {
    const filteredBeams = vigas.filter((element) => {
      return element.nombre !== nombre;
    });
    setVigas(filteredBeams);
  };

  // Eliminar todas las vigas
  const deleteAll = () => {
    const confirm = window.confirm("Estas seguro?");
    if (confirm) {
      localStorage.clear();
      setVigas(getDatafromLS());
    } else {
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="h1 text-center">Qant 0.1</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="col-4">
          <input
            name="nombre"
            id="nombre"
            className="form-control mb-2"
            type="text"
            placeholder="Nombre viga"
            required
            value={nombre}
            autoComplete="off"
            autoFocus
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            name="altura"
            id="altura"
            className="form-control mb-2"
            type="text"
            placeholder="Altura viga"
            required
            value={altura}
            autoComplete="off"
            onChange={(e) => setAltura(e.target.value)}
          />
          <input
            name="base"
            id="base"
            className="form-control mb-2"
            type="text"
            placeholder="Base viga"
            required
            value={base}
            autoComplete="off"
            onChange={(e) => setBase(e.target.value)}
          />
          <input
            name="largo"
            id="largo"
            className="form-control mb-2"
            type="text"
            placeholder="Largo viga"
            required
            value={largo}
            autoComplete="off"
            onChange={(e) => setLargo(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mb-6 col-12">
            Calcular
          </button>
          <button
            type="button"
            className="btn btn-danger mb-6 mt-2 col-12"
            onClick={() => deleteAll()}
          >
            Borrar todo
          </button>
        </form>
      </div>
      <Alerta repite={repite} setRepite={setRepite} />
      <View vigas={vigas} deleteBeam={deleteBeam} />
    </div>
  );
};
