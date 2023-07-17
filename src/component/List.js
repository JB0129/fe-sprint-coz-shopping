import Modal from "../overlay/Modal";
import { useState } from "react";

export default function List({ obj, addBookmark }) {

    const [isModal, setModal] = useState(false)

    const handlerModal = () => {
        setModal(!isModal)
        return false
    }

    return (
        <li className="List">
            <img className="List_img" src={obj.brand_image_url ? obj.brand_image_url : obj.image_url} onClick={handlerModal}/>
            <button className="starMark_button" onClick={() => { addBookmark(obj); }}>
                <img className="starMark starMark_on" src={obj.checked ? '../Bookmark_on.png' : '../Bookmark_off.png'} />
            </button>
            <div className="List_content">
                <span className="name">{obj.brand_name ? obj.brand_name : obj.title}</span>
                <span className="per">{obj.discountPercentage ? `${obj.discountPercentage}%` : ''}</span>
            </div>
            <div className="List_content">
                <span className="discribe">{obj.sub_title ? obj.sub_title : ''}</span>
                <span className="price">{obj.price ? `${Number(obj.price).toLocaleString('ko-KR')}원` : ''}</span>
            </div>
            {isModal ? <Modal obj={obj} handlerModal={handlerModal} addBookmark={addBookmark} /> : ''}
        </li>
    )
}