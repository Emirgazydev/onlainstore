import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AiTwotoneHeart} from "react-icons/ai";
import {BsBasket2} from "react-icons/bs";

const ProductCard = ( {el} ) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(s => s.favorites)
    const {basket} = useSelector(s => s.basket)
    const heart = favorites.some(some => some.id === el.id)
    const bas = basket.some(some => some.id === el.id)
    const addBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const favoriteBtn = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: el})
    }
    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-white">
            <Link to={`/details/${el.id}`}>
                <img className="rounded-t-lg" src={el.image} alt=""/>
            </Link>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {el.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-red-500">
                    {el.price} сом
                </p>
                {
                    bas ?
                    <Link to={"/basket"}>
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <BsBasket2/>
                    </button>
                    </Link>
                    : <button onClick={addBasket}
                 className="ml-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                   Купить
                    </button>
                }
                <button onClick={ favoriteBtn }
                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <AiTwotoneHeart className={heart ? "text-red-600" : "text-white"}/>
                </button>
            </div>
        </div>

    );
};

export default ProductCard;