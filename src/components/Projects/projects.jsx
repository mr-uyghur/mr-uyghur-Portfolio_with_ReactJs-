import { useEffect, useState } from 'react'
import {
  faAngular,
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './projects.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 's']}
              idx={15}
            />
          </h1>
          <div style = {{display: 'flex', flexDirection: 'column'}}>
          <h2  style = {{color: 'white'}}>Instagram Clone</h2>
          <img style = {{width:'350px'}} src = "http://www.alihalmamat.com/media/images/insta.gif" alt = "project image"/>

          <h2  style = {{color: 'white'}}>Plan your trip</h2>
          <img style = {{width:'350px'}} src = "http://www.alihalmamat.com/media/images/trip_1.gif" alt = "project image"/>

          <h2  style = {{color: 'white'}}>Carzone dealership ecomerce </h2>
          <img style = {{width:'350px'}} src = "http://www.alihalmamat.com/media/images/test4.gif" alt = "project image"/>

          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
