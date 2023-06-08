import React from 'react'
import './My.css'
export default function Myproject() {
    return (
        <>
        <div id='container3'>
            <div className='what'>
                <h1 id='titre2'>My Project</h1>
                <div className='cards'>
                    <div className='card'>
                        <img src={require("../images/p3.jpeg")} alt='img' id='images' />

                    </div>
                    <div className='card'>
                        <img src={require("../images/p1.jpeg")} alt='img' id='image' />

                    </div>

                    <div className='card'>
                        <img src={require("../images/p2.jpeg")} alt='img' id='image' />
                    </div>
                </div>


            </div>
            {/* -----skiiiiiiilss------ */}
            <div className='skils'>
                <h1 id='titre3'>My Skils</h1>
                <div id='box'>
                    <div className='cadr'>
                        <div className='skil'>
                       <div className='l1'><img src={require("../images/html.png")} alt='img' className='imge' /><h1>50%</h1></div> 

                       <div className='l1'><img src={require("../images/css.png")} alt='img' className='imge' /> <h1>30%</h1> </div> 

                       <div className='l1'> <img src={require("../images/js.jpg")} alt='img' className='imge' /> <h1>20%</h1></div> 

                       <div className='l1'> <img src={require("../images/react.png")} alt='img' className='imge' /> <h1>2%</h1></div> 

                        </div>
                       
                    </div>
                </div>


            </div>
</div>
        </>
    )
}

