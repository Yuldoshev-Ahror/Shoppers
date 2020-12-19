import React, { useState } from "react";
import "./Orders.scss";
import ReactStars from "react-rating-stars-component";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

const arry = [
  {
    id: 1,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    bor: true,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 4,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 5,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 6,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 7,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    bor: true,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
];

function Orders() {
  const [state, setState] = useState({
    modal6: false,
    modal7: false,
  });

  const [message, setMessage] = useState("");

  const toggle = (nr) => {
    console.log("salom");
    let modalNumber = "modal" + nr;
    setState({
      ...state,
      [modalNumber]: !state[modalNumber],
    });
  };

  const hundlChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <div className="cart-page-one-1">
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <div className="my-cart-container">
          <div className="product-menu">
            <div>Adrress</div>
            <div>STATUS</div>
            <div>ARRIVED ON</div>
            <div>Buttons</div>
          </div>
          <div>
            {arry.map((element) => {
              return (
                <div key={element.id} className="product-one-list">
                  <div>
                    <div>salq bdawhkdkwk dkj kwkd jlw jjk lwljlk djlwljl</div>

                    <p>
                      <p className="bg-color-bz">{element.price}</p>
                      <div className="a-none">14 Jul. 2020 - 14:27 PM</div>
                    </p>
                    <div className="b-none">14 Jul. 2020 - 14:27 PM</div>
                    <div>
                      {element.bor ? (
                        <button
                          type="button"
                          class="btn btn-danger my-buuton-dcsd"
                          onClick={() => toggle(6)}
                        >
                          shikoyat
                        </button>
                      ) : (
                        <div>
                          <button
                            type="button"
                            class="btn btn-success my-buuton-dcsd"
                          >
                            qabul qildim
                          </button>
                          <button
                            type="button"
                            class="btn btn-warning my-buuton-dcsd"
                          >
                            qabul qilmadim
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MDBContainer>
        <MDBModal
          isOpen={state.modal6}
          toggle={() => toggle(6)}
          side
          position="bottom-right"
        >
          <MDBModalHeader toggle={() => toggle(6)}>Message</MDBModalHeader>
          <MDBModalBody>
            <div class="form-outline">
              <textarea
                value={message}
                onChange={hundlChange}
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>
              <label class="form-label" for="textAreaExample">
                Message
              </label>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={() => toggle(6)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Send message</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </div>
  );
}

export default Orders;
