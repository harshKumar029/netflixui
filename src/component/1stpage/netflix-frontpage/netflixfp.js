import React from 'react'
import './netflixfp.css'
import { Link } from 'react-router-dom';

const netflixfp = () => {
  return (
    <div className='hero'>
      <img src='./assets/img/netflix-background.jpg' alt='' />
      <div className='shadow1'></div>      
      <div className='shadow'></div>
      <div className='content'> 
        <h1>Unlimited movies, TV shows and more
        </h1>
        <p>Watch anywhere. Cancel anytime.

        </p>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        {/* <div className='inputdat'> */}
          {/* <input autocomplete="email" minlength="5" maxlength="50" type="email" id="994a637cd07f9" name="email" data-uia="field-email" value="" data-autofill="true"></input>
          <div>
            <button>Get Started</button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
          </div> */}

          <div className='inputdata'>

          <Link smooth to="/action"><button>
              Get Started
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-mirrorinrtl="true"
                className="default-ltr-cache-4z3qvp e1svuwfo1"
                data-name="ChevronRight"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button></Link>
            <div>

              <input

                autoComplete="email"
                minLength="5"
                maxLength="50"
                type="email"
                id="8cacd2f02eab6"
                name="email"
                data-uia="field-email"
                value=""
                data-autofill="true"
              ></input>
              <label for="8cacd2f02eab6" data-uia="field-email+label" class="default">Email address</label>
            </div>


          {/* </div> */}


        </div>
      </div>
    </div>
  )
}

export default netflixfp