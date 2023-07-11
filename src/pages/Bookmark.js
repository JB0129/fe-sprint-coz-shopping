import { Link } from "react-router-dom"
import List from './../component/List'

export default function Bookmark({ isBookmark }) {

    return (
        <>
            <Link to="/bookmark"><button className="listBtn" >북마크리스트</button></Link>
            <ul className='Bookmark'>
                {isBookmark.map(el => { return <List /> })}
            </ul>
        </>
    )
}