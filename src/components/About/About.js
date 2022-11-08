import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='Parent'>
      <div className='about'>
        {name && (
          <h1 className='about__name-out'>
            Hi, I am <br /><span className='about__name-in'>{name}.</span>
          </h1>
        )}

        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>

        <div className='about__contact center'>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}

              {social.codeforces && (
                <a
                  href={social.codeforces}
                  aria-label='codeforces'
                  className='link link--icon'
                >
                  {/* <img alt="CodeFroces" src="../../icon/code-forces.svg" width="150" height="70"/> */}
                  {/* <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="../../icon/code-forces"/></svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fill="#F44336" d="M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"/><path fill="#2196F3" d="M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z"/><path fill="#FFC107" d="M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z"/></svg>
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <div className='photo'>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGovcePZ1qPRA/profile-displayphoto-shrink_400_400/0/1663772330619?e=1673481600&v=beta&t=ajjWR-lNf05Ktw3E4gLKz05Byg7BwRsaNJfIkOqDGdk" width="100%" alt="Ninad Chavan"/>
        {/* <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGovcePZ1qPRA/profile-displayphoto-shrink_200_200/0/1663772330619?e=2147483647&v=beta&t=ffAqV8naloGTSK-o9YgTtxO_XVfg7CyhfHLMxJ6fDIw" width="00%" alt="Ninad Chavan"/> */}
      </div>
    </div>
  )
}

export default About
