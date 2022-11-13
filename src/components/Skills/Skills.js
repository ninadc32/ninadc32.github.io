import uniqid from 'uniqid'
import * as Icons from 'react-icons/si';
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  const DynamicFaIcon = ({ name }) => {
    const IconComponent = Icons[name];
    console.log(name)
    return <IconComponent  className="skills__list-icons" />;
  };

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item'>
            <DynamicFaIcon name={skill[0]}/>
            <p className='skills__list-text'>{skill[1]}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

