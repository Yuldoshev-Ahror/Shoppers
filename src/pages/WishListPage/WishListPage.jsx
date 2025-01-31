import { MDBAnimation, MDBCol, MDBContainer } from "mdbreact";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";
import "./WishListPage.scss";

const arry = [
  {
    id: 1,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 4,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 5,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 6,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 7,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
];

function WishListPage() {
  const { t } = useTranslation();


  const [productCount, setProductCount] = useState(false);

  const hundleClick = (id, item) => {
    if (item === 1) {
      arry.forEach((element) => {
        if (element.id === id) element.count = element.count + 1;
      });
      setProductCount(!productCount);
      return;
    }
    if (item === 0) {
      arry.forEach((element) => {
        if (element.id === id && element.count !== 0)
          element.count = element.count - 1;
      });
      setProductCount(!productCount);
      return;
    }

    return;
  };
  return (
    <div>
      <TitleHemlet title="Wish List Page"/>
      <OtherPageNav />
      <MDBAnimation type="fadeInUp">
        <MDBContainer>
          <div className="my-5 w-100 pt-5">
            <h1 className="w-100 text-center font-weight-bold">
             {t(`WishListPage.Titul`)}
            </h1>
          </div>

          <div className="d-flex justify-content-center">
            <MDBCol md="10" sm="12" className="p-0">
              <div className="cart-page-one-wish">
                <link
                  rel="stylesheet"
                  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                  crossorigin="anonymous"
                />
                <div className="my-cart-container">
                  <div className="product-menu">
                    <div>{t(`WishListPage.Titul1`)}</div>
                    <div>{t(`WishListPage.Titul2`)}</div>
                    <div>{t(`WishListPage.Titul3`)}</div>
                  </div>
                  <div>
                    {arry.map((element) => {
                      return (
                        <div key={element.id} className="product-one-list">
                          <div>
                            <div>
                              <img
                                src="https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg"
                                alt="wfefewfwe"
                              />
                            </div>
                            <h4><Link to={`productdetail/${123456}`}>{element.name}</Link></h4>
                            <p>
                              <p>${element.price}.00</p>
                            </p>
                            <div className='tdaakjndjn'>
                              9999
                            </div>
                            <div className='addtocardtdd'>
                              <p>ADD TO CARD</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </MDBCol>
          </div>
        </MDBContainer>
      </MDBAnimation>
    </div>
  );
}

export default WishListPage;
