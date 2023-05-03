import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {getProduct} from "../../redux/Reduser/reduser";

const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(() => {dispatch(getProduct())},[])
    return (
        <div className="container basis-3/12 py-10 bg-black">
            <div className="flex flex-wrap justify-center gap-14">
                {
                    product.map((el) => (
                            <ProductCard el={el}/>
                        ))
                }
            </div>
        </div>
    );
};

export default Product;