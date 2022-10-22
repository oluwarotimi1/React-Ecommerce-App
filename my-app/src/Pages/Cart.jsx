import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX} from 'react-icons/bs';

const Cart = () => {
    const [theme] = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <Container className="py-4 mt-5">
            <h1 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>
                {isEmpty? 'Your Cart is Empty' : 'The Cart'}
            </h1>
            
        </Container>
    );
};

export default Cart;