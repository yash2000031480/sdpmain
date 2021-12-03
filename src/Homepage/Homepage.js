import React, { useState } from 'react'
import './Homepage.css'
import Header from '../Header/Header'
import DravidPic from '../images/dravid.jpg'
import SachinPic from '../images/sachinbat.jpg'
import GangulyPic from '../images/ganguly.jpg'

const Homepage = () => {

    const biddingArr = [
        { id: 1, imgSrc: DravidPic, name: "Bid1" },
        { id: 2, imgSrc: SachinPic, name: "Bid2" },
        { id: 3, imgSrc: GangulyPic, name: "Bid3" },
        { id: 4, imgSrc: GangulyPic, name: "Bid4" },
        { id: 5, imgSrc: GangulyPic, name: "Bid5" },
        { id: 6, imgSrc: GangulyPic, name: "Bid6" }

    ]

    const [selectedItem, setSelectedItem] = useState([]);

    const bidNowHandler = (id) => {
        // console.log("done",id)
        biddingArr.map(item => {
            if (item.id === id) {
                setSelectedItem((prevState => {
                    return [
                        ...prevState,
                        {
                            id: item.id,
                            imgSrc: item.imgSrc,
                            name: item.name
                        }
                    ]
                }))
            }
        })
        alert("Added to cart")
    }

    // console.log(selectedItem,"sel")
    return (
        < >
            <Header onSelected={selectedItem} />
            {/* Inside page */}
            <div className="box-container">

                {
                    biddingArr.map(item => (
                        <div className="item-box" key={item.id} >
                            {/* {console.log(item)} */}
                            <p className="item-name">{item.name}</p>
                            <img className="bat-images" src={item.imgSrc} alt="bat" />
                            <button className="btn home-form-btn" onClick={() => { bidNowHandler(item.id) }}>Bid Now</button>
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default Homepage
