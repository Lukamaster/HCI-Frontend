import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import {useShoppingCart} from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import {Modal, ModalBody, Stack} from "react-bootstrap";

function Cart({ isOpen }) {
    const {closeCart, cartItems, cartQuantity} = useShoppingCart()
    return (
        <Modal show={isOpen} onHide={closeCart} size="lg">
            <ModalBody>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {cartQuantity} items in your cart</p>
                    </div>
                </div>
                <Stack gap={1}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} id={item.id}/>
                    ))}
                </Stack>
            </ModalBody>
        </Modal>
    );
}

export default Cart;