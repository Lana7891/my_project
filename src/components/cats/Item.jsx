import React from 'react'
const Item = (props) => {
  return (
    <div className='conteiner py-3'>
    <main>
      <div className='row cols-1 justify-content-evenly row-cols-md row-cols-sm-2 text-center'>
        <div className='col px-3 py-3'>
          <div className='card md-6 rounded'>
            <div className='card-header py-2 px-3'>
              <button type="button" className='w-100 btn btn-lg btn-info'>
                Избранное 
              </button>
              <p>{props.title}</p>
              <img className='round' src={props.img} alt="" width={'85%'}></img>
            
              <p>{props.description}</p>
              <p>{props.price}</p>
              
              <button type="button" className='w-100 btn btn-lg btn-outline-info'>
                Добавить в корзину
              </button>
             </div>
            </div>
          </div>
        </div>
    </main>
  </div>
  )
}

export default Item