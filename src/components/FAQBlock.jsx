import '../css/FAQ.css'
import Plus from '../assets/priceListImg/plus.svg'
import { useState } from 'react';

function FAQBlock({question, answer}) {
    const [open, setOpen] = useState(null);

    return(
        <div className={`containerFAQ ${open ? "open" : null}`}>
            <div className='question'>
                <p>
                    {question}
                </p>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img className={`plusSVG ${open ? "open" : null}`} onClick={() => setOpen(!open)} src={Plus} alt="" />
                </div>
            </div>
            <p style={{color:'rgba(255, 107, 0, 1)'}}>
                {answer}
            </p>
        </div>
    )
}

export default FAQBlock