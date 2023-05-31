import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-cols-cols-1 row-cols-sm row-cols-md py-3 my-3 border-top '>
            <div className='col mb-2'>
                  <a className=''>
                      <img src='img/solnyshko.jpg' className='bi me-3' width={100} height={100}>
                      </img>
                  </a>
                <p>
                Детский мир - детство с нами 
                </p>
             </div>
                      <div className='col mb-2'>

                      </div>
                    <div className='col mb-3'>
                        <h6>Наши контакты:</h6>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> СПб Коломенская ул., 31, </a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> СПб Большая монетная ул., 12</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col mb-4'>
                        <h6>телефон:</h6>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> +7(812)333-33-33</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> +7(812)333-33-34</a>
                          </li>
                        </ul>
                    </div>
          
        </footer>
    </div>
  )
}

export default Footer
