/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jesna K Elizabeth Jolly",
  title: "Hi all, I'm Jesna ",
  subTitle: emoji(
    "A passionate Full Stack Software Developer  having an experience of building Web applications with JavaScript and Reactjs ."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NR8BwdPuSAZi-nzAiCl8O73wWkdbF1sK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jesna-Dev",
  linkedin: "https://www.linkedin.com/in/jesna-k-elizabeth-jolly/",
  gmail: "jesnakelizabethjolly@gmail.com",
  instagram: "https://www.instagram.com/ted.eliz/",
  stackoverflow: "https://stackoverflow.com/users/17119170/jesna-k-elizabeth-jolly",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "CRAZY FULL STACkkK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Santhigiri College Of Computer Sciences Vazhithala, Thodupuzha",
      logo: require("./assets/images/santhigiri.png"),
      subHeader: " Bachelor of Computer Application",
      duration: "March 2020",
    },
    {
      schoolName: "St.Sebastin Higher Secondary School Vazhithala,Thodupuzha",
      logo: require("./assets/images/stsebastin.png"),
      subHeader: "Higher Secondary",
      duration: "March 2017",
    },
    {
      schoolName: "St.Sebastin Higher Secondary School Vazhithala,Thodupuzha",
      logo: require("./assets/images/stsebastin.png"),
      subHeader: "SSLC",
      duration: "March 2015",
      
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Nexibit Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/nexi.jfif"),
      date: "July 2020 – Present",
      descBullets: [
        "Identifying areas for modification in existing programs and subsequently developing these modifications.",
        "Researching, designing, implementing, and managing software programs",
        "Testing and evaluating new programs",
        
      ]
    },
    
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: " Projects",
  subtitle: "SOME OF THE PROJECT THAT I WORKED IN MY COMPANY",
  projects: [
    {
      image: require("./assets/images/shipdone.png"),
      projectName: "ShipDone",
      projectDesc: "Shipdone is one of the best online food delivery service providers across the USA. Shipdone is an American restaurant aggregator and an online food delivery service. Customers can order food through our mobile app or the web. They provide two types of delivery methods, delivery, and pickup. Using delivery customers can get ordered items at your doorstep within a short time period. In pickup, customers can order food in the usual way and grab your order from the restaurant",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Manage your activities, improvise and collabrate.We know that you would like simplify your activities. That’s why we created the platform to manage activities efficientlySelfaie is simple and easy to use Simplifies your daily activties Improves collabration with your contacts Improves productivity",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Certifications 🏆 "),
  subtitle:
    " Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NPTEL Online Certificate On Cloud computing ",
      subtitle:
        "Cloud computing is a scalable services consumption and delivery platform that provides on-demand computing service for shared pool of resources, namely servers, storage, networking, software, database, applications etc., over the Internet",
      image: require("./assets/images/nptel.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15dT8BrYf1DIqXk8tvV5z9gVDk1pvXuKI/view?usp=sharing"
        },
      ]
    },
    {
      title: "Google Ads Skillshop On Fundamentals of digital marketing",
      subtitle:
        "Gaining the skills of  digitalisation plans speeding up globally to improve people’s lives, businesses now need strong marketing practitioners to reach a digital audience and promote their offerings",
      image: require("./assets/images/googlead.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1dgSGof0S5e_4qnjpg7OlErGVf1Q2xPSt/view?usp=sharing"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  
};

// Talks Sections

const talkSection = {
  
};

// Podcast Section

const podcastSection = {
  
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  email_address: "jesnakelizabethjolly@gmail.com"
};

// Twitter Section

const twitterDetails = {
  
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
