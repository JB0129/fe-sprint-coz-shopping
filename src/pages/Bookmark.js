import List from '../component/List'
import Type from '../component/Type'
import Footer from '../component/Footer'

export default function Bookmark({ isBookmark }) {

    return (
        <div className="bookmark">
            <Type />
            <ul className='BookmarkList'>
                {isBookmark ? isBookmark.map((obj, idx) => { return <List key={idx} obj={obj} /> }) : ''}
            </ul>
            <Footer />
        </div>
    )
}