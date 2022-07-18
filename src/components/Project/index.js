

function Project () {
    const projects = [
        {
            title: 'LoveMe',
            image: '../../assets/images/lovemeadoptionscreenshot.png',
            altText: 'Full-stack website for an adoption agency. Add animals, success stories, and users to the database.',
            repo: 'https://github.com/cthomas265/Love-Me',
            deployURL: 'https://damp-hamlet-43644.herokuapp.com/'
        },
        {
            title: 'Where2',
            image: '../../assets/images/where2.png',
            altText: 'Comparisons of the time, currency exchange rate, and 6 day forecast of two different cities',
            repo: 'https://github.com/bennettem/where2',
            deployURL: 'https://bennettem.github.io/where2/'
        },
        {
            title: 'Weather Dashboard',
            image: '../../assets/images/weather-dashboard-screenshot.png',
            altText: 'Current day weather details and 5 day forecast for Madison Wisconsin',
            repo: 'https://github.com/michaelsamm/weather-dashboard',
            deployURL: 'https://michaelsamm.github.io/weather-dashboard/'
        },
        {
            title: 'Work Day Scheduler',
            image: '../../assets/images/workday-scheduler.png',
            altText: 'Hourly rows for scheduling your workday',
            repo: 'https://github.com/michaelsamm/work-day-scheduler',
            deployURL: 'https://michaelsamm.github.io/work-day-scheduler/'
        },
        {
            title: 'Javascript Quiz',
            image: '../../assets/images/quiz-screenshot.png',
            altText: 'Javascipt Quiz home page with start button',
            repo: 'https://github.com/michaelsamm/javascript-quiz',
            deployURL: 'https://michaelsamm.github.io/javascript-quiz/'
        },
        {
            title: 'Robot Gladiators',
            image: '../../assets/images/robot-gladiators.png',
            altText: 'The Robot Gladiators browser game prompt to name your robot.',
            repo: 'https://github.com/michaelsamm/robot-gladiators',
            deployURL: 'https://michaelsamm.github.io/robot-gladiators/'
        }
    ]

    return (
        <div>
            {projects.map((project) => {
                <div>
                    <a href={project.deployURL} target='_blank'>
                        <img src={project.image} alt={image.alt} />
                    </a>
                    <div>
                        <h3>{project.title}</h3>
                        <a href={project.repo} target='_blank'>GitHub</a>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Project;