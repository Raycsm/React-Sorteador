import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Listar-usuarios/Listar-usuarios.css"
import Sorteador from "../Sorteador-numero/Sorteador";


function ListarUsuarios() {
    const [Dados, setDados] = useState([]);
  
    useEffect(() => {
  
      const intervalo = setInterval(() => {
  
        axios.get(`https://jsonplaceholder.typicode.com/users/${Sorteador(1, 10, 1)}`)
          .then(res => {
            setDados(res.data);
          });
  
      }, 3000);
  
      return () => clearInterval(intervalo);
  
    });
  
    return (
      <div className='container'>
        <div className="titulo">
          <h1 className='text-principal'>id: {Dados.id}</h1>
          <h1 className='text-principal'>Nome: {Dados.name}</h1>
        </div>
        <h2 className='text'>User name: {Dados.username}</h2>
        <h2 className='text'>Email: {Dados.email}</h2>
        <h2 className='text'>Endereço: {Dados?.address?.street}, {Dados?.address?.suite}, 
        {Dados?.address?.city}, {Dados?.address?.zipcode}</h2>
        <h2 className='text'>GEO: lat{Dados?.address?.geo?.lat}, lng{Dados?.address?.geo?.lng}</h2>
        <h2 className='text'>Telefone: {Dados.phone}</h2>
        <h2 className='text'>Site: {Dados.website}</h2>
        <h2 className='text'>Empresa: {Dados?.company?.name}, {Dados?.company?.catchPhrase}, <br/> {Dados?.company?.bs}</h2>
      </div>
  
    );
  }
  
  export default ListarUsuarios;