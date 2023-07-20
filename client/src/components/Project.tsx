import React from 'react'
import Projects, {ProjectTypes} from './Projects'

interface IProps {
    props: ProjectTypes;
}

const sabitLink = 'https://github.com/iambuvak/'

const Project : React.FC<IProps> = ({props}) => {
    const { title,description,languages,repolink } = props;
    return (
        <div className='project-box'>
            <h3> {title}  <a href={`${sabitLink}${repolink}`}>#</a> </h3>
            <p> {description} </p>
            <span> {languages} </span>
        </div>
    )
}

export default React.memo(Project)