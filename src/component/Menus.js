import { React } from 'react'
import { Col } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils'
import './card.css'

const Menus = ({ menu }) => {
    
    return (
        
        <Col md={2} xs={6} className={'mb-4'}>
           
                        <div className="card">
                            <div className="imgBox">
                                <img src={menu.image} class="mouse" alt='' />
                            </div>
                            <div className="contentBox">
                                <h3>{menu.name.length > 15 ?
                                    `${menu.name.substring(0, 13)}...` : menu.name
                                }</h3>
                                <h2 className="price"> Rp.{numberWithCommas(menu.price)}</h2>
                                <h2 className="price"> Stock ({menu.quantity})</h2>
                                <div className='buy'>
                                    
                                </div>
                            </div>
                        </div>

        </Col>
    )
}

export default Menus