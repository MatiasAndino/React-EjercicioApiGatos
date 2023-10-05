import React from 'react';
import { useFetch } from './hooks/useFetch';
import { useCounter } from './components/useCounter';


function ApiCats() {

  // const urlCats = `https://api.thecatapi.com/v1/images/search?api_key=live_qKhXllvqZ0599kI61wCiz9Fz5YBxU7uLy8pVPZZ19owU61tQJRAN06HYsxlrbGTo&limit=100`;
  const urlCats = 'https://api.thecatapi.com/v1/images/search';
  const { loading, data } = useFetch( urlCats );
  // const { counter, increment } = useCounter();
  const { url, id } = !!data && data[ 0 ];

 function update(){
  useFetch(urlCats);
 }

  return (
    <>
      <h1 className='text-center'>GATOS EVERYWHERE</h1>
      <hr />
      {
        loading
        ?
          <h3 className='text-center'>Cargando...</h3>
        :
          <div className='card'>
            <img src={ url } alt={ id } />
            {/* <button onClick={ increment } className='btn btn-primary'>SIGUIENTE MISHI POR FAVOR</button> */}
            <button onClick={ update } className='btn btn-primary'>SIGUIENTE MISHI POR FAVOR</button>
          </div>
      }
    </>
  )
}

export default ApiCats
