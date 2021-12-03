import React from 'react'
import './Homepage.css'
import Header from '../Header/Header'
import DravidPic from '../images/dravid.jpg'

const Homepage = () => {

    const biddingArr = [
        { id: 1, imgSrc: DravidPic, name: "Bid1" },
        { id: 2, imgSrc: DravidPic, name: "Bid2" },
        { id: 3, imgSrc: DravidPic, name: "Bid3" }
    ]
    return (
        <div>
            <Header />
            {/* Inside page */}
            {
                biddingArr.map(item => (
                    <div>
                        {/* {console.log(item)} */}
                        <p>{item.id}</p>
                        <img className="bat-images" src={item.imgSrc} alt="bat" />
                    </div>

                ))
            }
        </div>
    )
}

export default Homepage
