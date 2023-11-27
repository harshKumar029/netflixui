import React from 'react'
import './ontv.css'

const ontv = () => {
    return (
    <>
            <div className='ontv'>
                <div className='ontv-content'>
                    <h2>Enjoy on your TV</h2>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast,<br /> Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='tvimg'>
                    <img src='./assets/img/tv-netflix.png' alt='' />
                    <video  autoPlay playsInline muted loop>
                    <source  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' type="video/mp4"/>
                            </video>
                        </div>
                </div>
            </>
            )
}

            export default ontv