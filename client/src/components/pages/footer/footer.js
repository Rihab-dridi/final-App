import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'

const FooterPage = () => {
  return (
    <div className='footerContainer'>
    <MDBFooter  color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="footer">
        
          <div className="logo">
            <h1> <span>PFE</span></h1>
            <h1> Online</h1>
            <h1> Guide</h1>
          </div>
           <div className='links'>
          <MDBCol  md="6">
            <h5 className="titles"> useful Links</h5>
            <ul className= 'oneLink'>
              <li className="list-unstyled">
                <a href="#!">legal</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">help</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Reclamation</a>
              </li>
            </ul>
          </MDBCol>
          
          <MDBCol  md="6">
            <h5 className="titles">Contact Us</h5>
            <ul className="oneLink">
              <li className="list-unstyled">
                <a href="#!"><i className="fas fa-phone-volume"> +216 XX XXX XXX</i></a>
              </li>
              <li className="list-unstyled">
              <a href="#!"> <i className="fas fa-at"> email@gmail.com </i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fas fa-map-marker-alt"> city.street.code</i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
            </ul>
          </MDBCol>
         
        
          <MDBCol  md="6">
            <h5 className="titles">Social</h5>
            <ul className= 'oneLink'>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-facebook-f" /> Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-instagram" /> instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-youtube" /> Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-twitter" /> Twitter </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol  md="6">
            <h5 className="titles"> </h5>
            <ul className= 'oneLink'>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
            </ul>
          </MDBCol>
          
          
          
       
          </div>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a href="https://www.mdbootstrap.com"> developed by : Dridi Rihab</a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;