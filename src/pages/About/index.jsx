import about from '../../assets/about.png'
import Collapse from '../../components/Collapse'
import AboutDescriptions from '../../components/AboutDescriptions'
/**
 * About page
 * @returns  {React.ReactElement} JSX.Element
 */

function About() {
  return (
    <>
      <div className="banner">
        <div className="banner__image banner__image--tall">
          <img
            src={about}
            alt="Kluane national park and reserve of canada, canada"
          />
        </div>
      </div>

      <div className="about">
        {AboutDescriptions.map((item) => (
          <Collapse title={item.title} content={item.text} key={item.title} />
        ))}
      </div>
    </>
  )
}

export default About
