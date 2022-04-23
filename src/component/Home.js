import React, { useState, useEffect } from 'react'
import { NavbarComponent, ListCategories, Menus, CarouselComponent, AlertComp } from "./index"
import { Container, Row } from 'react-bootstrap'
import './Home.css'
import axios from 'axios'
import { API_URL } from '../utils/constant'

const Home = () => {
    const [menus, setMenus] = useState([])
    const isLoginTrue = JSON.parse(localStorage.getItem("login"))
    
  const [logoutUser, setLogout]=useState(false)


    useEffect(() => {
        updateProduct()
    }, [])

    const updateProduct = () => {
        
        axios.get(API_URL + 'product').then(response => {
            if (response.data.length > 0) {
                setMenus(response.data)
            }
        }).catch((error) => {
            //error handle here
            alert("Turn on the server")
        })
    }
    return (
        <div>
            <NavbarComponent logoutUser={logoutUser} setLogout={setLogout} />
            <div className='main'>
                <Container>
                    <AlertComp />
                    <div className="container-carousel">
                        <div className="a">
                            <CarouselComponent />
                        </div>
                        <div className="b">
                            <div className="c">
                                <img src="./assets/images/banner5.png" style={{ width: '100%', 'border-radius': '5px' }} alt=""></img>
                            </div>
                            <div className="d">
                                <img src="./assets/images/banner3.png" style={{ width: '100%', 'border-radius': '5px' }} alt=""></img>
                            </div>
                        </div>
                    </div>
                    {isLoginTrue && isLoginTrue.userLogin ?
                        <>
                            <div className='mt-4' style={{ 'backgroundColor': 'white', 'borderRadius': '5px' }}>
                                <ListCategories />
                            </div>
                            <div className="mt-4">
                                <div className='kategori'>
                                    <h6 style={{ 'fontSize': '24px' }}>Product Catalogue</h6>
                                    <hr />
                                    <Row>
                                        {menus && menus.map((menu) => (
                                            <Menus
                                                key={menu.id}
                                                menu={menu}
                                            />
                                        ))}
                                    </Row>
                                </div>
                            </div></>
                        :
                        <>
                            <div className="mt-4">
                                <div className='kategori'>
                                    <h6 style={{ 'fontSize': '24px' }}>Product Catalogue</h6>
                                    <hr />
                                    <Row>
                                        {menus && menus.map((menu) => (
                                            <Menus
                                                key={menu.id}
                                                menu={menu}
                                            />
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </>
                    }
                </Container>

            </div>



        </div>
    )
}

export default Home