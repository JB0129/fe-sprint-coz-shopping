import { useState } from "react"
import List from '../component/List'
import Type from '../component/Type'
import Footer from '../component/Footer'

export default function Bookmark({ isBookmark, addBookmark }) {

    const [isType, setType] = useState('All')

    const filterbtn = (type) => {
        setType(type)
    }

    return (
        <div className="bookmark">
            <Type filterbtn={filterbtn} />
            <ul className='BookmarkList Bookmark_page'>
                {isBookmark.length && isBookmark
                    .filter(obj => {
                        if (isType === 'All') {
                            return true
                        } else {
                            return obj.type === isType
                        }
                    }).length
                    ? isBookmark
                        .filter(obj => {
                            if (isType === 'All') {
                                return true
                            } else {
                                return obj.type === isType
                            }
                        })
                        .map((obj, idx) => <List key={idx} obj={obj} addBookmark={addBookmark} />)
                    : <div className="empty empty_book">북마크에 해당되는 리스트가 없습니다.</div>}
            </ul>
            <Footer />
        </div>
    )
}