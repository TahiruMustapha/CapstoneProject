import React from 'react'
import '../styles/LatestNews.css'
import { FaAddressBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import img16 from '../images/img16.jpg'
import img17 from '../images/img17.jpg'
const LatestNews = () => {
  return (    <div className="main-latestNews">
        <div className="latestNews">
       <h1>Latest <span>News</span></h1>
       <hr/>

       <div className="latestNews-items">
           <div className="latestNews-items1">
                 <img src={img16} alt='beauty'  />
                <div>
                    <p className="latestNews-admin"> <FaAddressBook style={{fontSize:"12px"}}/>September 11, 2022 | <FaUser/> <span>Admin</span> </p>
                    <h3>Once Drawn A Time In Kumasi</h3>
                    <p>lobrehjgfhndskfhcnehjdsmcnhdsfhcn dhsb c dhfb cv dfb
                    obrehjgfhndskfhcnehjdsmcnhdsfhcn dhsb c dhfb cv dfb
                    </p>
                    <h3 className="read-more">Read More<FaPlus  style={{fontSize:"10px"}}/></h3>
                </div>
           </div>
           <div className="latestNews-items2">
           <img src={img17} alt='beauty'  />
           <div>
                    <p className="latestNews-admin"> <FaAddressBook style={{fontSize:"12px"}}/>September 11, 2022 | <FaUser/> <span>Admin</span> </p>
                    <h3>Once Drawn A Time In Kumasi</h3>
                    <p>lobrehjgfhndskfhcnehjdsmcnhdsfhcn dhsb c dhfb cv dfb
                    obrehjgfhndskfhcnehjdsmcnhdsfhcn dhsb c dhfb cv dfb
                    
                    </p>
                    <h3 className="read-more">Read More<FaPlus  style={{fontSize:"10px"}}/></h3>
                </div>
           </div>
       </div>
      </div>
      <div className="newsLetter">
        <div className="latestNews1">
        <FaUser style={{fontSize:"40px"}}/>
          <p className="news"> We offer 24/7 dedicated support <br/>
          If you need support send us a message</p>
        </div>
        <div className="latestNews2">
        <FaNewspaper style={{fontSize:"40px"}}/>
          <p className="news">Suscribe  <br/>  Our Newsletter</p>
        </div>
        <div className="latestNews3">
          <input type="email" placeholder='Your Email'/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
