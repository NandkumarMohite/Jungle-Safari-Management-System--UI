import React from "react";
import { useNavigate } from "react-router-dom";

const InformationComponant = () => {
  // const navigate = useNavigate();
  return (
    <>
    
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="head1">
          <h1 style={{alignContent:"center"}}>Contact Us</h1>
          <p />
          <div className="text-center" style={{border: "5px solid green"}}>
            <h3> Corporate Office:</h3>
            <p style={{ textAlign: "center" }}>
              <b>Jungle Safari</b>
            </p>
            <p style={{ textAlign: "center" }}>
              C - 81C
              <br />
              Sector - 8, Satara
              <br />
              MH. - 415002
              <br />
              Tel : + 91- 120 - 4052601 - 99 (85 hunting lines are available)
              <br />
              Fax: + 91 - 120 - 4052600
              <br />
              Email: junglesafaricdac@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default InformationComponant;
