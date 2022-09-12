import { createStore } from 'vuex'

export default createStore({
  state: {
    profileUrl: 'https://i.postimg.cc/T14WmbzW/Micheala.jpg',
    projects: [
      {
        id: 1,
          img:"https://i.postimg.cc/fR5tBk2H/calculcator.png",
          title:'Calculator',
          skills:[
            'html' ,'css','bootstrap','javascript'
          ],
          link:{ 
              github:"https://github.com/MichaelaTarryn/calculatortask",
              live:"https://zippy-sawine-e77285.netlify.app",
          }
             
          
      },
      {
        id: 2,
          img:'https://i.postimg.cc/NFffyxYB/todoapp.jpg',
          title:'To Do App',
          skills:['html' ,'css','Boottrap','javascript'],
          link:{ 
              github:"https://github.com/MichaelaTarryn/todolistapp ",
              live:"https://todolistmichaelaward.netlify.app",
          }
             
          
      },
      {
        id: 3,
          img:'https://i.postimg.cc/SxBwqH3v/pro3.png',
          title:'Rainbow design',
          skills:['html', 'css'],
          link:{ 
              github:"https://github.com/MichaelaTarryn/rainbow",
              live:"https://frolicking-tapioca-8f74ea.netlify.app/",
          }
             
      },
      //second row
      {
        id: 4,
          img:'https://i.postimg.cc/8c6DfX98/portfolio-example.jpg',
          title:'Portfolio example',
          skills:['html' ,
          'css','bootstrap'
        ],
          link:{ 
              github:"https://github.com/MichaelaTarryn/mid-portfolio",
              live:"https://visionary-souffle-05eac0.netlify.app",
          }
             
      },
      {
        id: 5,
          img:'https://i.postimg.cc/kgF1wrbJ/rgbto-hex.jpg',
          title:'rgb to Hex',
          skills:['html', 'css','bootrap','javasrcipt'],
          link:{ 
              github:"https://github.com/MichaelaTarryn/rgbtohex",
              live:"https://michaelawardrgbtohex.netlify.app",
          }
             
      },
      {
        id: 6,
          img:'https://i.postimg.cc/VLMmfN3K/interestamount.jpg',
          title:'Interrest amount',
          skills:['html','css','javascript'],
          link:{ 
              github:"https://github.com/MichaelaTarryn/interestAmount",
              live:"https://interestamountmichaelaward.netlify.app ",
          }
             
      },
      //third row
      {
        id: 7,
          img:'https://i.postimg.cc/266xt2ZJ/captone.jpg',
          title:'Captone project',
          skills:['html', 'css','vue.js','bootstrap','node.js','express.js'],
          link:{ 
              github:"https://github.com/MichaelaTarryn/capstone-frontend",
              live:"https://mimmichaela-c6aef.firebaseapp.com/",
          }
             
      },
      {
        id: 8,
          img:'https://i.postimg.cc/ZRxMWJxq/wigs.jpg',
          title:'Wigs',
          skills:['html', 'css','Vue','Vuex','bootstrap',"the live link is not currently viewable ,I do apologize for that "],
          link:{ 
              github:"https://github.com/MichaelaTarryn/wigsprojects",
              live:"https://courageous-rolypoly-d63571.netlify.app",
          }
             
      },
      {
        id: 9,
          img:'https://i.postimg.cc/TYGvFKBW/pro9.png',
          title:'Digital Portfolio demo',
          skills:['html', 'css'],
          link:{ 
              github:"https://github.com/MichaelaTarryn/bootstrap-exercise1",
              live:"https://stalwart-madeleine-3f8aba.netlify.app",
          }
             
      },
  ],
  testimonials:[
    {
        img:'https://i.postimg.cc/5yP1N21t/Charles4.jpg',
        name:"Abdus-Samad Charles",
        testimonial:"Michaela is  a smart and diligent woman who always strives for perfection and has great attention to detail. - her co-worker"
    },
    {
        img:'https://i.postimg.cc/Yqtdfx7Y/Meagan.jpg',
        name:"Meagan Williams",
        testimonial:"Michaela is a hardworking ,dedicated women would always makes sure her work is complete. She sets out to achieve her goal through perseverance and determination."
    },
    {
        img:'https://i.postimg.cc/ZRqrv9Zt/joel2.jpg',
        name:"Joel Mukanya",
        testimonial:"Michaela is well-behaved, smart, kind, dedicated, and has skills that the organization will require to have.her coding lecturer"
    },
    {
       img:'https://i.postimg.cc/K8FqqCW8/Saleem2.jpg',
       name:"Mogamat Saleem Afriedien",
       testimonial:"Michaela is very well-behaved talented young lady  , who has the potential to be great at her work . - her co-worker"
    },
    {
        img:'https://i.postimg.cc/R0kvz42K/c5.png',
        name:"Clayton Adonis",
        testimonial:"Michaela is very talented,As someone who has witnessed her as work i could say she has a bright future ahead of her."
     },
     {
      img:'https://i.postimg.cc/BbNV0gkK/Ikhlaas.png',
      name:"Ikhlaas Rawoot",
      testimonial:"Michaela is an outgoing, hardworking, creative web developer. Who sets out to achieve her goal through perseverance and determination."
   },
        
],
resume : [
  {
    date: "22 April 2022",
    description: "Enrol At lifechoice Academy for full stack developement course.Life Choices is a small yet powerful NPObased in Cape Town. Since 2005, we have impacted over 200 000 people with choices, not charity.They invest in youth because they are 37% of the South African population… but 100% of its future. They work with youth from the Cape Flats communities to make choices that can change the world coursera coonsist of :",
    skills: [
          "Css",
            "Html",
            "Vue.js",
            "Bootstrap",
            "Web Host",
            "MySql",
            "Node.js",
            "Javascript"
       ]
   },

   {
      date: "Jun- September 2021",
      description: "Enrolled at online platform called Cousera.Coursera was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today,Coursera is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. I stuied It Support cover following:",
      skills: [
          "Techican Support Fundamentals",
          "The bits anad bytes of Computer Networking",
          "Operating Systems and You:Becoming a Power user",
          "Systen Adminstration and It infrastructure Services",
          "It Security"
         ]
     },
     {
      date: "Jan- Dec 2020",
      description: "Enrolled at College of Cape Town to study Web Application Development.Web application development is the complex process of designing, building, testing and deploying a web-based app. When a business wants to create an online presence, they may choose to create a custom web application. Web applications are interactive pages that enable user input and run on a web server. cover following topic:",
      skills: [
          "Adobe photoshop (cs6)",
          "Bootstrap",
          "C# Programming",
          "Javascript",
          "SQL Database developement"
         ]
     },
     {
      date: "June 2019-2020",
      description: "Sale Consulant , at YDE( YOUNG DESIGNER EMPORIUM) is at the forefront of identifying and supporting local fashion talent in South Africa",
      skills: [
          "Maintain excellent customer services",
            "ensure work environment representable",
            "promoting and selling products",
            "store target",
            "ensuring product are in good condition",
            "just listern to customer"
         ]
     },
     {
      date: "January 2013-2018",
      description: "Graduted from high school (Bontehewuel High School), did a short computer literacy course, then decided to focus on myself , where my main focus was too :",
      skills: [
           "maintain Good mental Health",
            "Get voluteer job",
            "work on getting Good Health, jog in the morning",
            "Work on my confident , by doing motivating speeches to primary school.",
            "read more what going on in the world , get to know my self more."
         ]
     },
]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
