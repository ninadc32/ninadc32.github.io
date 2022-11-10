import uniqid from 'uniqid'
import { FaJs } from 'react-icons/fa';  
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item'>
            <FaJs className="skills__list-icons" />
            <p className='skills__list-text'>{skill}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
