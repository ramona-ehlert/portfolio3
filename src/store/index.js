import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: {
      front: {
        name: "Front End",
        tech: {
          js: {
            name: "Javascript",
            logo: require("../assets/javascript.png")
          },
          vue: {
            name: "Vue.js",
            logo: require("../assets/vue.svg")
          },
          shopify: {
            name: "Shopify",
            logo: require("../assets/shopify_glyph.svg")
          },
          babjs: {
            name: "Babylon.js",
            logo: require("../assets/babylon.png")
          },
          html: {
            name: "HTML5",
            logo: require("../assets/html5.png")
          },
          css: {
            name: "CSS3",
            logo: require("../assets/css3.png")
          },
          sass: {
            name: "SASS",
            logo: require("../assets/sass.png")
          },
          ajax: {
            name: "AJAX",
            logo: require("../assets/ajax.png")
          }
        }
      },
      back: {
        name: "Back End",
        tech: {
          py: {
            name: "Python",
            logo: require("../assets/python.png")
          },
          flask: {
            name: "Flask",
            logo: require("../assets/flask.png")
          },
          mysql: {
            name: "MySQL",
            logo: require("../assets/mysql.png")
          },
          dbeav: {
            name: "DBeaver",
            logo: require("../assets/dbeaver.png")
          },
          mdb: {
            name: "MariaDB",
            logo: require("../assets/mariadb.png")
          },
          sql: {
            name: "SQL",
            logo: require("../assets/SQL.png")
          },
          api: {
            name: "API",
            logo: require("../assets/api.png")
          },
        }
      },
      otherTools: {
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
          json: {
            name: "JSON",
            logo: require("../assets/json.gif")
          },
          github: {
            name: "GitHub",
            logo: require("../assets/github.png")
          },
          bit: {
            name: "Bitbucket",
            logo: require("../assets/github.png")
          },
          linux: {
            name: "Linux",
            logo: require("../assets/linux.jpg")
          },
          bash: {
            name: "Bash/CLI",
            logo: require("../assets/bash.png")
          },
          vscode: {
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
        page: "/brickbtm",
        case: require("../assets/btm-case.png"),
        wireframe: require("../assets/wireframe-btm.jpg"),
        wireAlt: "",
        ask: "<p>The Brick's frequent “Buy the Matching Sofa” promotion can be difficult to explain concisely, the previous version of the tool was difficult to interact with, especially on mobile. I was tasked with designing and building a new application that would guide users through the promotion and provide greater clarity on the discounts they would receive. </p><br><p>The previous version also required a human hand to select a maximum 10 sofas to showcase in this tool, often leaving dozens of discount eligible sofas out of the customers reach</p><br><p>After brainstorming and discussing different approaches with the other developers and designers on my team. We determined that a collection page that opened a mobile friendly modal when the customer selected a sofa was the way to go.</p> ",

        work: "<p>Once into the code, it became clear why the previous version  of this tool had been created the way it was. A lack of consistent product grouping had created a large roadblock in the quest for dynamic sofa collection data.<p><br></p>Utilizing Shopify’s templating language, Liquid, I was able to dynamically create two JSON sets. One that held the matching collections SKU’s and one that held the individual product data (accesible by each SKU). This then allowed me to use AJAX to get only the information relevant to the user’s selection to maintain site speed..<p><br></p>Once this data was accesible I spent my time building out the rest of the app, primarily using Javascript for functionality and SCSS for styling, </p>",
        results: " <p>A sleek, clear collection page that allows the customer to filter and view all the eligible furniture.</p><br><p>The signifcant and ardous process of hand selecting and entering the featured sofas has now been completely automated, reducing the workload of this frequent promotion significantly. </p>"

      },
      {
        name: "Tar Pit Park 3D Adventure",
        stack: ["Babylon.JS", "JavaScript", "SCSS", "Python", "MariaDB", "MySQL", "DBeaver"],
        description: "Explore a scene frozen in time and get a glimpse of the greatness of the Ice Age Megafauna at Tar Pit Park. As my final project at Innotech College, my skills were put to the test as I conceptualized, designed, researched and developed an interactive educational tool. I taught myself Babylon.js, a 3D game rendering engine javascript framework that allows the user to learn in a unique environment.",
        links: ["https://github.com/jacksonoviatt/tar_pit_park_front",
          "https://tarpitpark.ml/", "https://github.com/jacksonoviatt/tarpitpark_back"],
        image: require("../assets/tarpit.jpg"),
        page: "/tarpit",
        case: require("../assets/btm-case.png"),
        wireframe: require("../assets/wireframe-btm.jpg"),
        wireAlt: "",
        ask: "<p>The Brick's frequent “Buy the Matching Sofa” promotion can be difficult to explain concisely, the previous version of the tool was difficult to interact with, especially on mobile. I was tasked with designing and building a new application that would guide users through the promotion and provide greater clarity on the discounts they would receive. </p><br><p>The previous version also required a human hand to select a maximum 10 sofas to showcase in this tool, often leaving dozens of discount eligible sofas out of the customers reach</p><br><p>After brainstorming and discussing different approaches with the other developers and designers on my team. We determined that a collection page that opened a mobile friendly modal when the customer selected a sofa was the way to go.</p> ",

        
        work: "<p>Once into the code, it became clear why the previous version  of this tool had been created the way it was. A lack of consistent product grouping had created a large roadblock in the quest for dynamic sofa collection data.<p><br></p>Utilizing Shopify’s templating language, Liquid, I was able to dynamically create two JSON sets. One that held the matching collections SKU’s and one that held the individual product data (accesible by each SKU). This then allowed me to use AJAX to get only the information relevant to the user’s selection to maintain site speed.<p><br></p>Once this data was accesible I spent my time building out the rest of the app, primarily using Javascript for functionality and SCSS for styling, </p>",
        results: " <p>A sleek, clear collection page that allows the customer to filter and view all the eligible furniture.</p><br><p>The signifcant and ardous process of hand selecting and entering the featured sofas has now been completely automated, reducing the workload of this frequent promotion significantly. </p>"
      },
      {
        name: "Pizza By Any Other Name",
        stack: ["HTML5", "CSS3", "SASS"],
        description: "A mock website for an imaginary pizza restaurant, Pizza By Any Name. This project was created for an assignment at Innotech College, the objective was to practice and showcase my pure HTML and css abilities as well as challenge me to create an interesting UI/UX without using Javascript.",
        links: ["https://github.com/jacksonoviatt/pizzabyanyothername",
          "https://sweetpizzaheat.tk/"],
        image: require("../assets/pizza1.png"),
        page: "/pizza",
        case: require("../assets/btm-case.png"),
        wireframe: require("../assets/wireframe-btm.jpg"),
        wireAlt: "A low fidelity wireframe of the buy the matching sofa tool",
        ask: "<p>The Brick's frequent “Buy the Matching Sofa” promotion can be difficult to explain concisely, the previous version of the tool was difficult to interact with, especially on mobile. I was tasked with designing and building a new application that would guide users through the promotion and provide greater clarity on the discounts they would receive. </p><br><p>The previous version also required a human hand to select a maximum 10 sofas to showcase in this tool, often leaving dozens of discount eligible sofas out of the customers reach</p><br><p>After brainstorming and discussing different approaches with the other developers and designers on my team. We determined that a collection page that opened a mobile friendly modal when the customer selected a sofa was the way to go.</p> ",

        work: "<p>Once into the code, it became clear why the previous version  of this tool had been created the way it was. A lack of consistent product grouping had created a large roadblock in the quest for dynamic sofa collection data.<p><br></p>Utilizing Shopify’s templating language, Liquid, I was able to dynamically create two JSON sets. One that held the matching collections SKU’s and one that held the individual product data (accesible by each SKU). This then allowed me to use AJAX to get only the information relevant to the user’s selection to maintain site speed..<p><br></p>Once this data was accesible I spent my time building out the rest of the app, primarily using Javascript for functionality and SCSS for styling, </p>",
        results: " <p>A sleek, clear collection page that allows the customer to filter and view all the eligible furniture.</p><br><p>The signifcant and ardous process of hand selecting and entering the featured sofas has now been completely automated, reducing the workload of this frequent promotion significantly. </p>"


      },
      {
        name: "Tweeter: A full stack Twitter clone",
        stack: ["Vue.js", "Python", "Flask", "MariaDB", "MySQL", "DBeaver"],
        description: "A twitter clone. The first objective was to interact with a CRUD API and overcome the challenges that come with building a component based webiste. The next objective was to build my own database to interact with and a CRUD API using Python/Flask that was then integrated with the existing front end.",
        links: ["https://github.com/jacksonoviatt/tweeter",
          "https://tweeterburb.ml/#/welcome", "https://github.com/jacksonoviatt/tweeter_back_end"],
        image: require("../assets/tweeter1.png"),
        page: "/tweeter",
        case: require("../assets/btm-case.png"),
        wireframe: require("../assets/wireframe-btm.jpg"),
        wireAlt: "",
        ask: "<p>The Brick's frequent “Buy the Matching Sofa” promotion can be difficult to explain concisely, the previous version of the tool was difficult to interact with, especially on mobile. I was tasked with designing and building a new application that would guide users through the promotion and provide greater clarity on the discounts they would receive. </p><br><p>The previous version also required a human hand to select a maximum 10 sofas to showcase in this tool, often leaving dozens of discount eligible sofas out of the customers reach</p><br><p>After brainstorming and discussing different approaches with the other developers and designers on my team. We determined that a collection page that opened a mobile friendly modal when the customer selected a sofa was the way to go.</p> ",

        work: "<p>Once into the code, it became clear why the previous version  of this tool had been created the way it was. A lack of consistent product grouping had created a large roadblock in the quest for dynamic sofa collection data.<p><br></p>Utilizing Shopify’s templating language, Liquid, I was able to dynamically create two JSON sets. One that held the matching collections SKU’s and one that held the individual product data (accesible by each SKU). This then allowed me to use AJAX to get only the information relevant to the user’s selection to maintain site speed.<p><br></p>Once this data was accesible I spent my time building out the rest of the app, primarily using Javascript for functionality and SCSS for styling, </p>",
        results: " <p>A sleek, clear collection page that allows the customer to filter and view all the eligible furniture.</p><br><p>The signifcant and ardous process of hand selecting and entering the featured sofas has now been completely automated, reducing the workload of this frequent promotion significantly. </p>"
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
