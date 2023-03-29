import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline, lockClosedOutline } from 'ionicons/icons';
import { signInUser } from '../../APIcalls/UsersCalls';

import Modal from '../../shared/components/UIElements/Modal';

import './css/login.css';

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);

  const closeModalHandler = () => setShowModal(false);

  const signInHandler = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        title={'test'}
        children={
          <div>
            <h1>Test działania modala</h1>
          </div>
        }
        footer={<button onClick={closeModalHandler}>Zamknij</button>}
      />
      <section>
        <div className='form-box'>
          <form action=''>
            <h2>Login</h2>
            <div className='inputbox'>
              <IonIcon icon={personOutline} />
              <input type='email' id='email' required></input>
              <label htmlFor=''>email</label>
            </div>
            <div className='inputbox'>
              <IonIcon icon={lockClosedOutline} />
              <input type='password' id='password' required></input>
              <label htmlFor=''>Password</label>
            </div>
            <div className='forget'>
              <label htmlFor=''>
                <input type='checkbox' name='' id='' />
                Remember me <a href='#'>Forget password</a>
              </label>
            </div>
            <button onClick={openModalHandler}>Log in</button>
            <div className='register'>
              <p>
                Don't have a account <a href='#'>Register</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
