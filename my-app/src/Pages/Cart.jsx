import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
import { Link } from '@reach/router';

const Cart = () => {
    const {theme} = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <Container className="py-4 mt-5 mb-5">
            <h1 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>
                {isEmpty?
                 <span>
                <div className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>
                    <span> Your cart is empty</span>
                    <div className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>
                        <Link to="/"> 
                            <Button 
                                className={`${theme? 'bg-dark-primary text-black':'bg-light-primary' }`}
                            >View Products</Button>
                        </Link>
                    </div>
                </div>
                </span> : 'Your Cart'}
            </h1>
            
            
            
            
            <Row className="justify-content-center mb-5">
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                    <tbody>
                        {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {!isEmpty &&
                    <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className={`${theme? 'bg-light-black text-light' : 'bg-light text-black'} justify-content-center w-100`}
                    >
                        <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                className="m-2"
                                onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                            {/* /***************** CHECK OUT FORM IS HERE */ }
                            <Link to='/cart/checkout'>
                                <Button variant="success"
                                        className="m-2"
                                    >
                                        <BsCartCheck size="1.7rem" />
                                        Checkout
                                </Button>
                            </Link>
                            
                        </Col>
                    </Row>}
            </Row>
        </Container>
    );
};

export default Cart;