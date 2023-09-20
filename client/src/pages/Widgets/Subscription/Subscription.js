import React from 'react';


import { useNavigate } from'react-router-dom';


const Subscription = () => {
  const navigate = useNavigate();

  const handlefreePayment = (e) => {
    e.preventDefault();
        try {
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    
    const handlePayment = (e) => {
      e.preventDefault();
          try {
              navigate("/payment");
          } catch (error) {
              console.log(error.message);
          }
      };
    

  return (
    <div className='container'>
        <header>
          <div className='text-center w-75 my-4 mx-auto'>
            <h1>Pricing</h1>
          </div>
        </header>
        <main>
          <div className='row row-cols-1 row-cols-md-3'>
            <div className='col'>
              <div className='card text-center'>
                <div className='card-header'>
                  <h4 className='fw-normal'>Free</h4>
                </div>
                <div className='card-body'>
                  <h1 className='card-title'>
                    Rs.0 <small className='text-muted fw-light'>/mo</small>
                  </h1>
                  <ul className='list-unstyled py-3'>
                    <li>Users can post</li>
                    <li>only 1 Tweet per day</li>
                  </ul>
                  <button onClick={handlefreePayment} className='btn btn-lg w-100'>Sign Up free</button>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card text-center'>
                <div className='card-header'>
                  <h4 className='fw-normal'>Silver Plan</h4>
                </div>
                <div className='card-body'>
                  <h1 className='card-title'>
                    Rs.100 <small className='text-muted fw-light'>/mo</small>
                  </h1>
                  <ul className='list-unstyled py-3'>
                    <li>Users can post</li>
                    <li>5 Tweet per day</li>
                  </ul>
                  <button onClick={handlePayment} className='btn btn-lg w-100'>Get started</button>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card text-center'>
                <div className='card-header'>
                  <h4 className='fw-normal'>Gold Plan</h4>
                </div>
                <div className='card-body'>
                  <h1 className='card-title'>
                    Rs.1000<small className='text-muted fw-light'>/mo</small>
                  </h1>
                  <ul className='list-unstyled py-3'>
                    <li>Users can post</li>
                    <li>Unlimited Tweet per day</li>
                  </ul>
                  <button onClick={handlePayment}  className='btn btn-lg w-100'>Get started</button>
                </div>
              </div>
            </div>


          </div>
        </main>
    </div>
  )
}

export default Subscription
