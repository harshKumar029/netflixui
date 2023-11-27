import React from 'react'
import './watchev.css'

const watchev = () => {
    return (
    <>
            <div className='watchev'>
                <div className='watchev-content'>
                    <h2>Watch everywhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone,<br/> tablet, laptop, and TV.</p>
                </div>
                <div className='watchevimg'>
                    <img src='./assets/img/device-pile-in.png' alt='' />
                    <video  autoPlay playsInline muted loop>
                    <source  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' type="video/mp4"/>
                            </video>
                        </div>
                </div>
            </>
            )
}

            export default watchev