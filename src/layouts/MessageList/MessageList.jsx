import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import "./MessageList.scss";

function MessageList() {
  return (
    <MDBContainer>
      <MDBListGroup style={{ width: "100%" }}>
        <MDBListGroupItem hover href="#">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">12.02.2020</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="text-muted">Donec id elit non mi porta.</small>
          <div className="my-delete-btn">
            <button type="button" class="btn btn-danger btn-sm">
              DELETE
            </button>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem hover href="#">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">12.02.2020</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="text-muted">Donec id elit non mi porta.</small>
          <div className="my-delete-btn">
            <button type="button" class="btn btn-danger btn-sm">
              DELETE
            </button>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem hover href="#">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">12.02.2020</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="text-muted">Donec id elit non mi porta.</small>
          <div className="my-delete-btn">
            <button type="button" class="btn btn-danger btn-sm">
              DELETE
            </button>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem hover href="#">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">12.02.2020</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="text-muted">Donec id elit non mi porta.</small>
          <div className="my-delete-btn">
            <button type="button" class="btn btn-danger btn-sm">
              DELETE
            </button>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
  );
}

export default MessageList;
