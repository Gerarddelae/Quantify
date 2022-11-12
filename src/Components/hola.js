import { useState } from "react";

export const Hola = () => {
  const [altura, setAltura] = useState('');
  const [base, setBase] = useState('');
  const [largo, setLargo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <h1>Hola mundo</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Altura viga"
        required 
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Base viga"
        required
        value={base}
        onChange={(e) => setBase(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Largo viga"
        required
        value={largo}
        onChange={(e) => setLargo(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>
    </>
  );
};
