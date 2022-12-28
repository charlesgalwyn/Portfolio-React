import React from "react";
import { Jumbotron } from "./migration";
//import { mainBody } from "../../editable-stuff/config";

const GetInTouch = ({ heading, message, email,phone }) => {
  //console.log(mainBody.icons)
  //const icons =mainBody.icons;
  //console.log(phone)
  return (
    <Jumbotron id="contact">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>
        <br/>or call me at
        <a className="text-decoration-none" href={`mailto:${email}`}>{phone}</a>.
      </p>

      {/* <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[2]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
      </div> */}
      <div style={{display : "flex", justifyContent:"space-around"}}>
              <a
                className="btn btn-outline-dark btn-lg"
                href="https://github.com/charlesgalwyn"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="github"
              >
                GITHUB
              </a>

              <a
                className="btn btn-outline-dark btn-lg"
                href="https://www.linkedin.com/in/charles-p-067a74178/"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="linkedin"
              >
                LINKED IN
              </a>

              <a
                className="btn btn-outline-dark btn-lg"
                href="https://www.twitter.com/java_offl/"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="twitter"
              >
                TWITTER
              </a>
    </div>  
    </Jumbotron>
  );
};

export default GetInTouch;
