import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: {
      front: {
        name: "Front End",
        tech: {
          js:{
            name: "Javascript",
            logo: require("../assets/javascript.png")
          },
          vue:{
            name: "Vue.js",
            logo: require("../assets/vue.svg")
          },
          shopify:{
            name: "Shopify",
            logo: require("../assets/shopify_glyph.svg")
          },
          babjs: {
            name: "Babylon.js",
            logo: require("../assets/babylon.png")
          },
          html:{
            name: "HTML5",
            logo: require("../assets/html5.png")
          },
          css:{
            name: "CSS3",
            logo: require("../assets/css3.png")
          },
          sass:{
            name: "SASS",
            logo: require("../assets/sass.png")
          },
          ajax: {
            name: "AJAX",
            logo: require("../assets/ajax.png")
          }
        }
      },
      back:{
        name: "Back End",
        tech: {
          py:{
            name: "Python",
            logo: require("../assets/python.png")
          },
          flask: {
            name: "Flask",
            logo: require("../assets/flask.png")
          },
          mysql:{
            name: "MySQL",
            logo: require("../assets/mysql.png")
          },
          dbeav:{
            name: "DBeaver",
            logo: require("../assets/dbeaver.png")
          },
          mdb:{
            name: "MariaDB",
            logo: require("../assets/mariadb.png")
          },
          sql:{
            name: "SQL",
            logo: require("../assets/SQL.png")
          },
          api:{
            name: "API",
            logo: require("../assets/api.png")
          },
        }
      },
      otherTools:{
        name: "Other Tools",
        tech: {
          fig: {
            name: "Figma",
            logo: require("../assets/figma.svg")
          },
          npm: {
            name: "NPM",
            logo: require("../assets/npm.png")
          },
        gcp: {
            name: "Google Cloud Platform",
            logo: require("../assets/googleCloud.png")
          },
          json:{
            name: "JSON",
            logo: require("../assets/json.gif")
          },
          github:{
            name: "GitHub",
            logo: require("../assets/github.png")
          }, 
          bit:{
            name: "Bitbucket",
            logo: require("../assets/github.png")
          },
          linux:{
            name: "Linux",
            logo: require("../assets/linux.jpg")
          },
          bash:{
            name: "Bash/CLI",
            logo: require("../assets/bash.png")
          },
          vscode:{
            name: "VSCode",
            logo: require("../assets/vscode.png")
          }
        }
      },
    },
    projects: [
      {
        name: "The Brick: Buy the Matching Sofa",
        stack: ["Shopify", "JavaScript", "Liquid", "SCSS", "Figma", "JQuery"],
        description: "Explore a scene frozen in time and get a glimpse of the greatness of the Ice Age Megafauna at Tar Pit Park. As my final project at Innotech College, my skills were put to the test as I conceptualized, designed, researched and developed an interactive educational tool. I taught myself Babylon.js, a 3D game rendering engine javascript framework that allows the user to learn in a unique environment.",
        links: ["https://github.com/jacksonoviatt/tar_pit_park_front",
          "https://tarpitpark.ml/", "https://github.com/jacksonoviatt/tarpitpark_back"],
        image: require("../assets/btm1.jpg"),
        page: "/brickbtm"

      },  
      {
        name: "Tar Pit Park 3D Adventure",
        stack: ["Babylon.JS", "JavaScript", "SCSS", "Python", "MariaDB", "MySQL", "DBeaver"],
        description: "Explore a scene frozen in time and get a glimpse of the greatness of the Ice Age Megafauna at Tar Pit Park. As my final project at Innotech College, my skills were put to the test as I conceptualized, designed, researched and developed an interactive educational tool. I taught myself Babylon.js, a 3D game rendering engine javascript framework that allows the user to learn in a unique environment.",
        links: ["https://github.com/jacksonoviatt/tar_pit_park_front",
          "https://tarpitpark.ml/", "https://github.com/jacksonoviatt/tarpitpark_back"],
        image: require("../assets/tarpit.jpg"),
        page: "/tarpit"

      },
      {
        name: "Pizza By Any Other Name",
        stack: ["HTML5", "CSS3", "SASS"],
        description: "A mock website for an imaginary pizza restaurant, Pizza By Any Name. This project was created for an assignment at Innotech College, the objective was to practice and showcase my pure HTML and css abilities as well as challenge me to create an interesting UI/UX without using Javascript.",
        links: ["https://github.com/jacksonoviatt/pizzabyanyothername",
          "https://sweetpizzaheat.tk/"],
        image: require("../assets/pizza1.png"),
        page: "/pizza"

      },
      {
        name: "Tweeter: A full stack Twitter clone",
        stack: ["Vue.js", "Python", "Flask", "MariaDB", "MySQL", "DBeaver"],
        description: "A twitter clone. The first objective was to interact with a CRUD API and overcome the challenges that come with building a component based webiste. The next objective was to build my own database to interact with and a CRUD API using Python/Flask that was then integrated with the existing front end.",
        links: ["https://github.com/jacksonoviatt/tweeter",
          "https://tweeterburb.ml/#/welcome", "https://github.com/jacksonoviatt/tweeter_back_end"],
        image: require("../assets/tweeter1.png"),
        page: "/tweeter"
      },

    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
