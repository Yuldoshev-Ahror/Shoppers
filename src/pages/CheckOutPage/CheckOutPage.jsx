import { MDBBtn, MDBCol, MDBContainer, MDBRow, Sele } from "mdbreact";
import React from "react";
import "./CheckOutPage.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
// import { MDBAnimation } from "mdbreact";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";
import { useTranslation } from "react-i18next";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";

function CheckOutPage() {
  const { t } = useTranslation();
  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    aptSuit: "",
    city: "",
    postcodeZip: "",
    state: "",
    email: "",
    phone: "",
    createAnAccount: false,
    createAnAccountTwo: false,
    orderNotes: "",
    productName: "adidas",
    productPrice: "300$",
    productCount: 5,
    subtotal: 1500,
    shipping: 300,
    total: 1800,
    payment: "",
    readAgree: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t(`CheckOutPage.Titul20`)),
    lastName: Yup.string().required(t(`CheckOutPage.Titul20`)),
    streetAddress: Yup.string().required(t(`CheckOutPage.Titul20`)),
    city: Yup.string().required(t(`CheckOutPage.Titul20`)),
    phone: Yup.string()
      .min(7, t(`CheckOutPage.Titul22`))
      .max(20, t(`CheckOutPage.Titul23`))
      .required(t(`CheckOutPage.Titul20`)),
    postcodeZip: Yup.string().required(t(`CheckOutPage.Titul20`)),
    state: Yup.string().required(t(`CheckOutPage.Titul20`)),

    // country: Yup.string().required(t(`CheckOutPage.Titul20`)),
    // aptSuit: Yup.string().required(t(`CheckOutPage.Titul20`)),
    // email: Yup.string().email(t(`CheckOutPage.Titul21`)).required("Required !"),
    // payment: Yup.string().required(t(`CheckOutPage.Titul20`)),

    // payment: Yup.string().required("Required !"),
    // readAgree: Yup.string().required("Required !"),
  });

  return (
    <div className="check-out-page">
      <TitleHemlet title="Check Out Page" />
      <OtherPageNav />
      <MDBContainer>
        <div className="my-5 w-100 pt-5">
          <h1 className="w-100 text-center font-weight-bold">
            {t(`CheckOutPage.Titul`)}
          </h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <h3 className="text-uppercase font-weight-bold">
                {t(`CheckOutPage.Titul1`)}
              </h3>
              <MDBRow>
                <MDBCol md="8" sm="12">
                  <MDBRow>
                    <MDBCol md="6" sm="12">
                      <div>
                        <label htmlFor="firstName">
                          <small>
                            <b>{t(`CheckOutPage.Titul2`)}</b>
                          </small>
                        </label>
                        <select
                          name="region"
                          class="browser-default custom-select"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="firstName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" sm="12">
                      <div>
                        <label htmlFor="lastName">
                          <small>
                            <b>{t(`CheckOutPage.Titul3`)}</b>
                          </small>
                        </label>
                        <select
                          name="region"
                          class="browser-default custom-select"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="lastName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="8" sm="12">
                      <div className="mt-3">
                        <label htmlFor="streetAddress">
                          <small>
                            <b>{t(`CheckOutPage.Titul7`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="streetAddress"
                          name="streetAddress"
                          placeholder={t(`CheckOutPage.Titul7`)}
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="streetAddress">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="phone">
                          <small>
                            <b>{t(`CheckOutPage.Titul18`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="phone"
                          id="phone"
                          name="phone"
                          placeholder={t(`CheckOutPage.Titul18`)}
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="phone">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="5" sm="12">
                      <div className="mt-3">
                        <label htmlFor="city">
                          <small>
                            <b>{t(`CheckOutPage.Titul16`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="city"
                          name="city"
                          placeholder={t(`CheckOutPage.Titul16`)}
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="city">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="7" sm="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="postcodeZip">
                          <small>
                            <b>{t(`CheckOutPage.Titul17`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="postcodeZip"
                          name="postcodeZip"
                          placeholder={t(`CheckOutPage.Titul17`)}
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="postcodeZip">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="state">
                          <small>
                            <b>{t(`CheckOutPage.Titul9`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="texxt"
                          id="state"
                          name="state"
                          placeholder={t(`CheckOutPage.Titul9`)}
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="state">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBCol md="12">
                    <div className="mt-3">
                      <Field
                        type="checkbox"
                        id="createAnAccount"
                        name="createAnAccount"
                      />
                      <label className="ml-3" htmlFor="createAnAccount">
                        <div className="d-flex flex-column">
                          <p className="m-0 p-0">
                            <b>{t(`CheckOutPage.Titul11`)}</b>
                          </p>
                          <small>{t(`CheckOutPage.Titul12`)}</small>
                        </div>
                      </label>
                    </div>
                  </MDBCol>
                  <div className="my-3">
                    <hr />
                  </div>

                  <h3 className="text-uppercase font-weight-bold">
                    {t(`CheckOutPage.Titul13`)}
                  </h3>

                  <MDBCol md="12">
                    <div className="mt-3">
                      <Field
                        type="checkbox"
                        id="createAnAccountTwo"
                        name="createAnAccountTwo"
                      />
                      <label className="ml-3" htmlFor="createAnAccountTwo">
                        <div className="d-flex flex-column">
                          <p className="m-0 p-0">
                            <b>{t(`CheckOutPage.Titul14`)}</b>
                          </p>
                        </div>
                      </label>
                    </div>
                  </MDBCol>

                  <div className="my-3">
                    <label htmlFor="orderNotes">
                      <small>
                        <b>
                          {t(`CheckOutPage.Titul19`)} (
                          {t(`CheckOutPage.Titul5`)})
                        </b>
                      </small>{" "}
                    </label>
                    <Field
                      className="form-control"
                      as="textarea"
                      id="orderNotes"
                      name="orderNotes"
                      placeholder={t(`CheckOutPage.Titul19`)}
                      rows="4"
                    />
                    <small style={{ color: "red" }}>
                      <ErrorMessage name="Notes about your order, e.g. special notes for delivery.">
                        {(msg) => <div>{msg}</div>}
                      </ErrorMessage>
                    </small>
                  </div>
                </MDBCol>

                <MDBCol md="4" sm="12">
                  <div className="rounded border  p-4 mt-3">
                    <h4 className="text-uppercase font-weight-bold">
                      {t(`CheckOutPage.Titul26`)}
                    </h4>

                    <div className="d-flex justify-content-between">
                      <p className="font-weight-bold">
                        {t(`CheckOutPage.Titul27`)}
                      </p>
                      <p className="font-weight-bold">
                        {t(`CheckOutPage.Titul28`)}
                      </p>
                    </div>

                    <div>
                      {/* map buladigan joy */}
                      <div className=" d-flex justify-content-between">
                        <p>{initialValues.productName}</p>
                        <p>${initialValues.productPrice}</p>
                      </div>
                      <div className=" d-flex justify-content-between">
                        <p>{initialValues.productName}</p>
                        <p>${initialValues.productPrice}</p>
                      </div>
                      <div className=" d-flex justify-content-between">
                        <p>{initialValues.productName}</p>
                        <p>${initialValues.productPrice}</p>
                      </div>
                    </div>
                    <div className="mt-3 d-flex justify-content-between">
                      <p className="text-uppercase font-weight-bold">
                        {t(`CheckOutPage.Titul29`)}
                      </p>
                      <p>$12354</p>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p className="text-uppercase font-weight-bold">
                        {t(`CheckOutPage.Titul30`)}
                      </p>
                      <div>
                        <small>{t(`CheckOutPage.Titul31`)}</small>
                        <p>$12300</p>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p className="text-uppercase font-weight-bold">
                        {t(`CheckOutPage.Titul32`)}
                      </p>
                      <p>$12354</p>
                    </div>

                    <div className="mt-3 d-flex flex-column">
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="One payment"
                          className="mr-2"
                        />
                        <small>{t(`CheckOutPage.Titul33`)}</small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Two payment"
                          className="mr-2"
                        />
                        <small>{t(`CheckOutPage.Titul34`)}</small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Three payment"
                          className="mr-2"
                        />
                        <small>{t(`CheckOutPage.Titul35`)}</small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Four payment"
                          className="mr-2"
                        />
                        <small>
                          PayPal <Link>{t(`CheckOutPage.Titul36`)}</Link>
                        </small>
                      </label>

                      <small style={{ color: "red" }}>
                        <ErrorMessage name="payment">
                          {(msg) => <div>{msg}</div>}
                        </ErrorMessage>
                      </small>
                    </div>
                    <div className="mt-3 d-flex p-0">
                      <Field type="checkbox" id="readAgree" name="readAgree" />
                      <label className="ml-3 p-0" htmlFor="readAgree">
                        <small>
                          <b> {t(`CheckOutPage.Titul37`)}</b>
                        </small>
                      </label>
                    </div>

                    <div className="mt-3 w-100">
                      <MDBBtn
                        color="primary"
                        className="rounded-pill w-100"
                        rounded
                        type="submit"
                      >
                        {t(`CheckOutPage.Titul38`)}
                      </MDBBtn>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </Form>
          )}
        </Formik>
      </MDBContainer>
    </div>
  );
}

export default CheckOutPage;
