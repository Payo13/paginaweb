import {
  MDBBtn,
  MDBContainer,
  MDBFooter
} from 'mdb-react-ui-kit';

import React from 'react';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#6fabe2' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Reg&iacute;strate aqu&iacute;</span>
            <MDBBtn type='button' outline color="light" rounded>
                Reg&iacute;strate
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}