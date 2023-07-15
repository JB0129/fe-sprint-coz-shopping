import { Link } from "react-router-dom"
import List from '../component/List'
import Footer from '../component/Footer'

export default function Main({ isData, isBookmark, addBookmark }) {

    return (
        <div className="main">
            <div className="container">
                <Link to="/product"><button className="ListBtn" >상품리스트</button></Link>
                <ul className='ProductList'>
                    {isData ? isData.map((obj, idx) => { if (idx <= 3) { return <List key={idx} obj={obj} addBookmark={addBookmark} /> } }) : ''}
                </ul>
                <Link to="/bookmark"><button className="ListBtn" >북마크리스트</button></Link>
                <ul className='BookmarkList'>
                    {isBookmark.length ? isBookmark.map((obj, idx) => { if (idx <= 3) { return <List key={idx} obj={obj} addBookmark={addBookmark} /> } }) : <div className="empty">존재하는 리스트가 없습니다.</div>}
                </ul>
            </div>
            <Footer />
        </div>
    )
}