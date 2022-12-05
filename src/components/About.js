import React from 'react';
import './styles.css';
import Footer from "./Footer";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="main">
            <div className="mountain" ></div>
            <div className="wrapper">
                <div className="accordion">
                    {data.map((item, i) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}>
                                <h2 key={item.id}>{item.title}</h2>
                                <div className="icon">{selected === i ? <FontAwesomeIcon className="icon" icon={faAngleDown} /> : <FontAwesomeIcon className="icon" icon={faAngleUp} />}</div>
                            </div>
                            <div key={item.id} className={selected === i ? 'content show' : 'content'}>
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

const data = [
    {
        id: "1",
        title: 'Reliablity',
        content: 'The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.'
    },
    {
        id: "2",
        title: 'Respect',
        content: 'Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.'
    },
    {
        id: "3",
        title: 'Service',
        content: "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions."
    },
    {
        id: "4",
        title: 'Safety',
        content: "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests. Miguel"
    },
]

export default About;