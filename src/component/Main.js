import { Link } from "react-router-dom"
import Bookmark from './../pages/Bookmark'
import ProductList from './../pages/ProductList'

import { data } from './../data/data.js'

export default function Main({ isProduct, isBookmark }) {

    return (
        <div className="main">
            <div className="container">
                <ProductList isProduct={isProduct} />
                <Bookmark isBookmark={isBookmark} />
            </div>
        </div>
    )
}