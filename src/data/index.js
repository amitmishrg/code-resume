
const Data = {
    intoduction: {
        header: "import Intro from 'Introduction'",
        content: `
{ 
    .Introduction { 
        Namaste { 
            Name: 'Amit Mishra', 
            Designation: 'Senior Web Developer' 
        } 
    } 
} 
        `
    },

    experience: {
        header: "import Experience from 'Experience'",
        content: `
{
    .Experience {
        Media.net {
            company: 'Directi(Media.net)',
            designation: 'Senior Web Developer',
            period: 'Feb 2017 to Present'
        },
        Onlinemocks {
            company: 'Onlinemocks Pvt. Ltd.',
            designation: 'UI Developer',
            period: 'May 2016 to January 2017'
        },
        Collegedunia {
            company: 'Collegedunia Web Pvt. Ltd.',
            designation: 'UI Developer',
            period: 'October 2015 to April 2016'
        },
        Rising Hues {
            company: 'Rising Hues Technology LLP.',
            designation: 'Web Developer',
            period: 'July 2014 to September 2015'
        },
    }
}
        `
    },

    skills: {
        header: "import Skills from 'Skills'",
        content: `
{
    .Skills {
        Markup {
            html: 'Hyper Text Markup Language',
            version: 5
        }
        Styling {
            css: 'Cascading Style Sheets',
            sass: 'Syntactically Awesome Style Sheets',
            postCss: 'PostCSS',
            bootStrap: 'Bootstrap'
        }
        JavaScript {
            js: 'JavaScript',
            react: 'React JS',
            redux: 'Redux',
            saga: 'Redux-Saga',
            pwa: 'Prograsive Web App',
        }
        BuildTools {
            webpack: 'Webpack',
            gulp: 'Gulp'
        }
        Tools {
            seketch: 'Seketch',
            github: 'Github',
            gitlab: 'Gitlab',
            code: 'VS Code'
        }
    }
}
        `
    },

    projects: {
        header: "import Projects from 'Projects'",
        content: `
{
    .Projects {
        zeta {
            url: 'https://www.zeta.tech/zeta-spotlight/',
        }
        Collegedunia {
            url: 'https://collegedunia.com/',
        }
        lib4dev {
            url: 'http://www.lib4dev.in/',
        }
        Onlinemocks {
            url: 'http://onlinemocks.com/',
        }
    }
}
        `
    },

    playground: {
        header: "import Playground from 'Playground'",
        content: `
{
    .Playground {       
        offline News App {
            url: 'https://offline-news-app.herokuapp.com/'
        }
        CSS Animation {
            url: 'https://codepen.io/amitmishrg/pen/vxoWVd'
        }
        Wrist Watch {
            url: 'https://codepen.io/amitmishrg/pen/evqeQp'
        }
        Mini Portfolio {
            url: 'https://codepen.io/amitmishrg/pen/pLELXZ'
        }
    }
}
        `
    },

    contact: {
        header: "import Contact from 'Contact'",
        content: `
{
    .Contact {       
        {
            email: 'amitmishra009v@gmail.com',
            mobile: '8802100560',
        }
    }
}
        `
    }
}

export default Data;