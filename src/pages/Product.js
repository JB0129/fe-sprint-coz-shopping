import List from '../component/List'
import Type from '../component/Type'
import Footer from '../component/Footer'
import { useState } from "react"

export default function Product({ isData, addBookmark }) {

    const [isType, setType] = useState('All')

    const filterbtn = (type) => {
        setType(type)
    }

    return (
        <div className="product">
            <Type filterbtn={filterbtn} />
            <ul className='ProductList'>
                {isData
                    ? isData
                        .filter(obj => {
                            if (isType === 'All') {
                                return true
                            } else {
                                return obj.type === isType
                            }
                        })
                        .map((obj, idx) => {
                            return <List key={idx} obj={obj} addBookmark={addBookmark} />
                        })
                    : null}
            </ul>
            <Footer />
        </div>
    )
}