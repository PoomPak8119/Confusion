import React from "react";
function Contact(props) {
  return (
    <div className="container">
      
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa faenvelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a role="button" className="btn btnprimary" href="tel:+85212345678">
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btninfo">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btnsuccess"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelopeo"></i> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
