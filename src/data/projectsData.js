import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import { AirplanemodeActive, ImageSearch, NextWeek, OpenInNewSharp } from '@material-ui/icons'


export const projectsData = [

    {
        id: 1,
        projectName: 'WhatToPaint?',
    projectDesc: 'This project is using "Openai"\'s api to ask for suggestions of what to paint/draw based on a general subject entered.  I started with a python version, then switched to Next.js after having a difficult time deploying it with Netlify.  Though I have the basic model deployed and working, I will be continuing to work on some issues such as wanting the responses on seperate lines, and the fact that it returned the input as well as the prompts in python and at first with next.js, but will no longer do so. I\'d also like photos either from openai\'s new photo based APIs if approved, or something like Getty\'s Images API.',
        tags: ['HTML', 'CSS','Javascript','Nextjs','next.js','netlify', 'api','python'],
        code: 'https://github.com/amycthomas/WhattoPaint',
        demo: 'https://whattopaint.netlify.app/',
        image: "https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/628a99b38372441a0f7a7617/screenshot_2022-05-22-20-15-47-0000.png"
    },

    {
        id: 2,
        projectName: 'ArtPod (Front end)',
        projectDesc: 'I will be doing some work to unify the styling between the news and art searches,  as they were originally part of seperate pojects. This I plan to do within the week, and am currently (May 24th-25th).  The backend will add log in and forum functionality, which is complete and should be up before the end of May, as Hroku currently is not allowing me to connect to Github for some reason, which hopefully will be resolved shortly. I\'d also like to add a database for art shows and contests, which will come from webscraping  Please check back soon for this, and for more projects being uploaded within the next few days! Thank you! -Amy Thomas, May 24th',
        tags: ['Django-Python','React-Node.js','PostgreSQL','HTML5 & CSS', 'and more'],
        code: 'https://github.com/amycthomas/ArtPodFull',
        demo: 'https://artpod.netlify.app/',
        image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/628d4740947a2b00091ded6f/screenshot_2022-05-24-21-00-46-0000.png"
    },
]

// {
//     id: 3,
//     projectName: '',
//     projectDesc: '',
//     tags: ['',''],
//     code: '',
//     demo: '',
//     image: ""
// },

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/