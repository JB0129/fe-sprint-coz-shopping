export default function Modal({ obj, handlerModal, addBookmark }) {
    return (
        <div className="Modal" onClick={() => { handlerModal() }}>
            <img className="Modal_img" src={obj.brand_image_url ? obj.brand_image_url : obj.image_url} onClick={event => event.stopPropagation()} />
            <button className="Modal_cancel" onClick={handlerModal}>
                &times;
            </button>
            <button className="Modal_bookmark" onClick={(event) => {  event.stopPropagation(); addBookmark(obj); }}>
                <img src={obj.checked ? '../Bookmark_on.png' : '../Bookmark_off.png'} />
                <span>{obj.brand_name ? obj.brand_name : obj.title}</span>
            </button>
        </div>
    )
}