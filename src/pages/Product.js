import List from '../component/List'
import Type from '../component/Type'
import Footer from '../component/Footer'

export default function Product({ isData }) {

    return (
        <div className="product">
            <Type />
            <ul className='ProductList'>
                {isData ? isData.map((obj, idx) => { return <List key={idx} obj={obj} /> }) : ''}
            </ul>
            <Footer />
        </div>
    )
}