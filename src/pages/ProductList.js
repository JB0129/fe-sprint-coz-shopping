import { Link } from "react-router-dom"
import List from './../component/List'

export default function ProductList({ isProduct }) {

    return (
        <>
            <Link to="/product"><button className="listBtn" >상품리스트</button></Link>
            <ul className='ProductList'>
                {isProduct.map(el => { return <List /> })}
            </ul>
        </>
    )
}