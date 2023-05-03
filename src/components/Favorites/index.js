import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorites = () => {
    const {favorites} = useSelector(state => state.favorites)
    return (
        <div className="container basis-3/12 py-10 bg-black">
            <div className="flex flex-wrap justify-center gap-14">
                {
                    favorites.map(el => <ProductCard el={el}/> )
                }
        </div>
        </div>
    );
};

export default Favorites;