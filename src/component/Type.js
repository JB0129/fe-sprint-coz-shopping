export default function Type({ filterbtn }) {

    return (
        <ul className="type">
            <li className="typeList" onClick={() => {filterbtn("All")}}>
                <img src="../전체.png" />
                <div className="typeName">전체</div>
            </li>
            <li className="typeList" onClick={() => {filterbtn("Product")}}>
                <img src="../상품.png" />
                <div className="typeName">상품</div>
            </li>
            <li className="typeList" onClick={() => {filterbtn("Category")}}>
                <img src="../카테고리.png" />
                <div className="typeName">카테고리</div>
            </li>
            <li className="typeList" onClick={() => {filterbtn("Exhibition")}}>
                <img src="../기획전.png" />
                <div className="typeName">기획전</div>
            </li>
            <li className="typeList" onClick={() => {filterbtn("Brand")}}>
                <img src="../브랜드.png" />
                <div className="typeName">브랜드</div>
            </li>
        </ul>
    )
}