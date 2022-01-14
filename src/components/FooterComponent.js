import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="directory">Locations</a>
              </li>
              <li>
                <a href="aboutus">About</a>
              </li>
              <li>
                <a href="contactus">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="https://www.instagram.com/the_bean_of_mesilla/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="https://www.facebook.com/BeanofMesilla"
            >
              <i className="fa fa-facebook" />
            </a>
          </div>
          <div className="col-sm-4 text-center">
            <a
              role="button"
              className="btn btn-link"
              href="tel:+(575) 527-5155"
            >
              <i className="fa fa-phone" /> (575) 527-5155
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:Thebeanroaster@gmail.com"
            >
              <i className="fa fa-envelope-o" /> Thebeanroaster@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
