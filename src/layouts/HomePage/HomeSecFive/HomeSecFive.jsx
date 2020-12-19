import { MDBAnimation, MDBContainer } from "mdbreact";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import RightModal from "../../../components/RightModal/RightModal";
import "./HomeSecFive.scss";
function HomeSecFive() {
  const {t}=useTranslation();
  const [salom, setSalom] = useState(false);
  const [hello, setHello] = useState({
    componentName: "Login",
    nameBtn: "Sign in",
    iconName: "sign-in",
  });

  const callHandle = (item) => {
    console.log('salom')
    setHello({
      componentName: item.componentName,
      nameBtn: item.nameBtn,
      iconName: item.iconName,
    });
    setSalom(!salom);
  };
  return (
    <div className="my-3">
      <MDBAnimation reveal type="fadeInUp">
        <MDBContainer>
          <div className="home-sec-five-box">
            <div className="bg-shadow-box">
              <div className="left-box">
                <h3>{t(`HomeSecFive.Titul`)}</h3>
                <p>{t(`HomeSecFive.Titul1`)}</p>
              </div>
              <div className="right-box">
              
                <form action="#!">
                  <button type="submit" onClick={() =>
                      callHandle({
                        componentName: "SignUp",
                        nameBtn: "Sign up",
                        iconName: "sign-up",
                      })
                    }>
                    {t(`HomeSecFive.Titul3`)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </MDBContainer>
      </MDBAnimation>
    </div>
  );
}

export default HomeSecFive;
