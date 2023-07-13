import { Link } from "react-router-dom"

export default function Dropdown({ checkedMenu }) {

    return (
        <div className="dropdown">
            <div className="dropdown_title top">
                <span>OOO님, 안녕하세요!</span>
            </div>
            <Link to="/product" className="Link">
                <button className="dropdown_button" onClick={checkedMenu}>
                    <img src="../상품 아이콘.png" />
                    <span>상품리스트 페이지</span>
                </button>
            </Link>
            <Link to="/bookmark" className="Link">
                <button className="dropdown_button bottom" onClick={checkedMenu}>
                    <img src="../북마크 아이콘.png" />
                    <span>북마크 페이지</span>
                </button>
            </Link>
        </div>
    )
}