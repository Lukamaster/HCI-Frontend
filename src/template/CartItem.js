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
import {useShoppingCart} from "../context/ShoppingCartContext";
import AxiosRepository from "../axiosRepo/axiosRepository";
import React, {useEffect, useState} from "react";



function CartItem(props) {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

    useEffect(()=> {
        const fetchData = async () => {

            setLoading(true);
            try {
                const response = await AxiosRepository.fetchProduct(props.id).then(result => setProduct(result.data))
                console.log(product)
            } catch (error) {
                console.log(error)
                console.log(product)
            }
            setLoading(false);
        };
        fetchData();

        console.log(product)
    }, [])

    const {removeFromCart} = useShoppingCart()

    return (
        <MDBCard className="mb-3">
            <MDBCardBody>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                fluid className="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                            <MDBTypography tag="h5">
                                {product.productName}
                            </MDBTypography>
                            <p className="small mb-0">{product.manufacturer}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">

                        <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                                {product.price}
                            </MDBTypography>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon fas icon="trash-alt" />
                        </a>
                    </div>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}

export default CartItem;
