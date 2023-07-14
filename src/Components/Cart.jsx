import React, { useContext } from "react";
import "../styles/cart.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { context } from "../Store/Context";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setcart } = useContext(context);

  const navigate = useNavigate();

  //  *****************quantity change***************
  const addQty = (id) => {
    const newqty = cart.map((item) =>
      item.id == id ? { ...item, qty: item.qty + 1 } : item
    );

    setcart(newqty);

    console.log(cart);
  };

  const removeQty = (id) => {
    const newqty = cart.map((item) =>
      item.id == id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );

    setcart(newqty);
  };

  //*********************end******************************/

  // *********************payment*************************8

  const handleToken = (token) => {
    console.log(token);
    setcart([]); // You can perform further actions with the token, like sending it to your server for processing
  };
  const calculateTotalAmount = () => {
    const totalAmount = cart.reduce((sum, item) => {
      return sum + item.rate * item.qty;
    }, 0);

    return totalAmount * 100;

    // Stripe requires the amount in cents, so multiply by 100
  };

  // *****************end*****************************************

  // *****************delete item from cart *********************

  const removeitem = (id) => {
    const removeItmId = parseInt(id);

    const newItems = cart.filter((item) => item.id !== removeItmId);
    setcart(newItems);
    console.log("hy");
  };

  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {cart.reduce((sum, item) => {
                              return sum + item.qty;
                            }, 0)}{" "}
                            items
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />

                        {cart.map((product) => (
                          <MDBRow
                            key={product.id}
                            className="mb-4 d-flex justify-content-between align-items-center"
                          >
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={product.image}
                                fluid
                                className="rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {product.category}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                {product.name}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              style={{ textAlign: "center" }}
                              md="3"
                              lg="4"
                              xl="3"
                              className="d-flex align-items-center"
                            >
                              <MDBBtn color="link" className="px-2">
                                {/* <MDBIcon fas icon="minus" /> */}
                              </MDBBtn>
                              <button onClick={() => removeQty(product.id)}>
                                {" "}
                                -{" "}
                              </button>

                              {/* <MDBInput
                                type="number"
                                min="1"
                                defaultValue={product.qty}
                                size="sm"

                              /> */}

                              <input
                                placeholder={product.qty}
                                style={{ width: "30px", textAlign: "center" }}
                                type="text"
                              />

                              <button onClick={() => addQty(product.id)}>
                                {" "}
                                +{" "}
                              </button>
                              <MDBBtn color="link" className="px-2">
                                {/* <MDBIcon fas icon="plus" onClick={()=>addQty(product.id)} /> */}
                              </MDBBtn>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                $ {product.rate * product.qty}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              {/* <a href="#!" className="text-muted">
                                <MDBIcon fas icon="times"  onClick={removeitem}/>
                              </a> */}

                              <button
                                className="removebuttn"
                                onClick={() => removeitem(product.id)}
                              >
                                X
                              </button>
                            </MDBCol>
                          </MDBRow>
                        ))}

                        <hr className="my-4" />

                        <hr className="my-4" />

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText
                              tag="a"
                              href="#!"
                              className="text-body"
                            >
                              <MDBIcon
                                onClick={() => navigate("/")}
                                fas
                                icon="long-arrow-alt-left me-2"
                              />{" "}
                              Back to shop
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            {cart.length}
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            ${" "}
                            {cart.reduce((sum, item) => {
                              return sum + item.rate * item.qty;
                            }, 0)}
                          </MDBTypography>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Shipping
                        </MDBTypography>

                        <div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{ width: "100%" }}
                          >
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Give code
                        </MDBTypography>

                        <div className="mb-5">
                          <MDBInput size="lg" label="Enter your code" />
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            ${" "}
                            {cart.reduce((sum, item) => {
                              return sum + item.rate * item.qty;
                            }, 0)}
                          </MDBTypography>
                        </div>

                        {/* <MDBBtn color="dark" block size="lg"> */}

                        <button
                          onClick={() => {
                            if (calculateTotalAmount() !== 0) {
                              return (
                                <StripeCheckout
                                  token={handleToken}
                                  stripeKey="pk_test_51NFs2ASGzs5sMSCWpsCjE36jOmmfZCo4573jUp4yVSo2o2sI20QexCzUVtF8q4tpdRe61PIpGJT5pPmdOZAHgLb800GljwZC2c"
                                  amount={calculateTotalAmount()}
                                  name="Your Store"
                                  description="Payment for items in the cart"
                                  billingAddress={true}
                                  shippingAddress={true}
                                  successUrl="https://www.google.com/"
                                  cancelUrl="https://community.spotify.com/t5/image/serverpage/image-id/151609iB63315F09CA89489/image-size/medium?v=v2&px=400"
                                >
                                  Checkout
                                </StripeCheckout>
                              );
                            } else {
                              alert("Add something to the cart");
                            }
                          }}
                        >
                          Checkout
                        </button>

                        {/* </MDBBtn> */}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Cart;
