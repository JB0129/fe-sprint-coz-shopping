import { Link } from "react-router-dom"
import { useState } from "react"
import Dropdown from "../overlay/Dropdown"

export default function Header() {

    const [isMenu, setMenu] = useState(false)

    const checkedMenu = () => {
        setMenu(!isMenu);
    }

    return (
        <header>
            <Link to="/">
                <button className="title">
                    <img className="logo" src='../로고.png' />
                    <span>COZ Shopping</span>
                </button>
            </Link>
            <button className="menu" onClick={checkedMenu}>
                <img src='../햄버거 버튼.png' />
            </button>
            {isMenu ? <Dropdown checkedMenu={checkedMenu} /> : null}
        </header>
    )
}