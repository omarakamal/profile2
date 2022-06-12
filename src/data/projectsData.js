import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import braile from '../assets/svg/projects/braile.jpg'
import crypto from '../assets/svg/projects/crypto.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Crypto Aggregate Application',
        projectDesc: 'This is an application that aggregates the current top 50 crypto coins utilizing an API and filtering functions',
        tags: ['React', 'CSS','JavaScript'],
        code: 'https://github.com/omarakamal/Crypto_Aggregate_App',
        demo: 'https://cryptoaggregate.herokuapp.com/',
        image: crypto
    },
    {
        id: 2,
        projectName: 'Hearing Impaied Aid Applications',
        projectDesc: 'This is a freelance project to help hearing impaired individuals in the KSA',
        tags: ['React', 'CSS'],
        code: 'https://github.com/omartuwaiq/manalforntend2',
        demo: 'http://talkinghandplus.herokuapp.com/',
        image: braile
    }
   
]


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