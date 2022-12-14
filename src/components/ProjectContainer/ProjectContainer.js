import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <a href={project.sourceCode}>
    <div className='project'>
      <h3 className='project__name'>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* {project.sourceCode && (
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )} */}
    </div>
  </a>
)

export default ProjectContainer
