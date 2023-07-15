import List from '../component/List'
import Type from '../component/Type'
import Footer from '../component/Footer'

export default function Bookmark({ isBookmark, addBookmark }) {

    return (
        <div className="bookmark">
            <Type />
            <ul className='BookmarkList'>
            {isBookmark.length ? isBookmark.map((obj, idx) => <List key={idx} obj={obj} addBookmark={addBookmark} /> ) : <div className="empty">북마크에 해당되는 리스트가 없습니다.</div>}
            </ul>
            <Footer />
        </div>
    )
}