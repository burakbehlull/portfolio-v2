import React, { useState } from 'react'
import Project from './Project'


export interface ProjectTypes {
    title: string;
    description: string;
    languages: string;
    repolink: string;
}


const GithubArr : ProjectTypes[] = [
    {
        title: 'discover-technology-science',
        description: 'A site written in Tailwind for practice. It is completely imaginary.',
        languages: 'HTML, CSS, Tailwindcss',
        repolink: 'discover-technology-science'
    },
    {
        title: 'login-and-registration',
        description: 'Example of a login register, project made with Django and React',
        languages: 'React, Django, SCSS',
        repolink: 'login-and-registration'
    },
    {
        title: 'leogram-live-chat-with-nodejs',
        description: 'Instant chat application and multi-user support with nodejs',
        languages: 'NodeJS, SCSS',
        repolink: 'leogram-live-chat-with-nodejs'
    },
    {
        title: 'so',
        description: 'Portfolio cross platform trial',
        languages: 'React, React-Native, Electron, NodeJS',
        repolink: 'so'
    },
    {
        title: 'Kozmetikablasi-Ltd',
        description: 'A small web application experiment.',
        languages: 'Svelte, Flask, SCSS',
        repolink: 'Kozmetikablasi-Ltd'
    },
    {
        title: 'Mern-Todo-App',
        description: 'In this project, it was actually to create a trial application with all the technologies I learned.',
        languages: 'React, NodeJS',
        repolink: 'mern-todo-app'
    },
]


const GithubProjects = () => {
    return(
        <>
            {GithubArr?.map((items, index)=> <>
                <Project props={items} key={index} />
            </>
            )}

        </>
    )
}

const LiveProjects = () => {
    return(
        <h1>Live Projects</h1>
    )
}


const Projects : React.FC = () => {
    const [content, setContent] = useState(false)

    return(
        <section id='projects'>

            <h1 className='projects-text'>Projects</h1>

            <div className='projects'>
                <div className='projects-head'>
                    <ul>
                        <li onClick={()=> setContent(false)}>Github Projects</li>
                        <li onClick={()=> setContent(true)}>Live Projects</li>
                    </ul>
                </div>

                <div className='projects-body'>
                    {content ? <LiveProjects /> : <GithubProjects />}
                </div>

            </div>

        </section>
    )
}

export default Projects
