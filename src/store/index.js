import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: {
      // front: {
      //   name: "Front End",
      //   tech: {
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
          },
        // }
      // },
      // back: {
      //   name: "Back End",
      //   tech: {
          py: {
            name: "Python",
            logo: require("../assets/python.png")
          },
        
          mysql: {
            name: "MySQL",
            logo: require("../assets/mysql.png")
          },
          dbeav: {
            name: "Databases",
            logo: require("../assets/db.svg")
          },
          mdb: {
            name: "MariaDB",
            logo: require("../assets/mariadb.png")
          },
          sql: {
            name: "SQL",
            logo: require("../assets/sql.svg")
          },
          api: {
            name: "API",
            logo: require("../assets/api.png")
          },
        
      // },
      // otherTools: {
      //   name: "Other Tools",
      //   tech: {
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
            logo: require("../assets/linux.svg")
          },
          bash: {
            name: "Bash/CLI",
            logo: require("../assets/bash.png")
          },
          vscode: {
            name: "VSCode",
            logo: require("../assets/vscode.png")
          }
        // }
      // }
    },
    projects: [
      {
        name: "The Brick: Buy the Matching Sofa",
        date: "January 2022",
        link: "https://www.thebrick.com", 
        star: "Public access dependent on The Brick’s current promotions",
        desc: "An ecommerce tool which assists users shopping a potentially puzzling promotion",
        stack: ["Shopify", "JavaScript", "Liquid", "SCSS", "Figma", "JQuery"],
        image: require("../assets/btm1.jpg"),
        page: "/brickbtm",
        case: require("../assets/btm-case.png"),
        wireLabel: "Early Wireframe",
        // fullScreen: true,
        // wireframe: require("../assets/wireframe-btm.jpg"),
        // wireAlt: "A",
        ask: "<p>The Brick's frequent “Buy the Matching Sofa” promotion can be difficult to explain concisely, the previous version of the tool was difficult to interact with, especially on mobile. I was tasked with designing and building a new application that would guide users through the promotion and provide greater clarity on the discounts they would receive. </p><br><p>The previous version also required a human hand to select a maximum 10 sofas to showcase in this tool, often leaving dozens of discount eligible sofas out of the customers reach</p><br><p>After brainstorming and discussing different approaches with the other developers and designers on my team. We determined that a collection page that opened a mobile friendly modal when the customer selected a sofa was the way to go.</p> ",
sol: "<p>The goal was to create a new version of the app that would clarify the promotion, streamline the customer’s mobile experience, and highlight the best deals in order to boost sales.</p><br><p>Finishing touches were added to the design to ensure a polished product; representative of The Brick brand.</p><br><p>I built the app to dynamically receive product data. Once connected the tool was then tested across the board to iron out any content inconsistencies and ensure any edge-case scenarios would be handled properly.</p>",
        // work: "<p>Once into the code, it became clear why the previous version  of this tool had been created the way it was. A lack of consistent product grouping had created a large roadblock in the quest for dynamic sofa collection data.<p><br></p>Utilizing Shopify’s templating language, Liquid, I was able to dynamically create two JSON sets. One that held the matching collections SKU’s and one that held the individual product data (accesible by each SKU). This then allowed me to use AJAX to get only the information relevant to the user’s selection to maintain site speed..<p><br></p>Once this data was accesible I spent my time building out the rest of the app, primarily using Javascript for functionality and SCSS for styling, </p>",
        results: " <p>A sleek, clear collection page that allows the customer to filter and view all the eligible furniture.</p><br><p>The signifcant and ardous process of hand selecting and entering the featured sofas has now been completely automated, reducing the workload of this frequent promotion significantly. </p>"

      },
      
      {
        name: "Tar Pit Park 3D Adventure",
        date: "July 2021",
        link: "https://www.tarpitpark.ml", 
        desc: "An experiment turned passion project fueled by my love for all things Pleistocene", 
        stack: ["Babylon.JS", "JavaScript", "SCSS", "Python", "MariaDB", "MySQL", "DBeaver"],
        description: "<p>Explore a scene frozen in time and get a glimpse of the greatness of the Ice Age Megafauna at Tar Pit Park. As my final project at Innotech College, my skills were put to the test as I conceptualized, designed, researched and developed an interactive educational tool. I taught myself Babylon.js, a 3D game rendering engine javascript framework that allows the user to learn in a unique environment.</p><br><p>To build the front end I used the JavaScript library babylon.js, a real time 3D engine. The backend API was built with Python and Flask to pass the dynamic data for the websites informtion pages from the database</p>",
        links: ["https://github.com/jacksonoviatt/tar_pit_park_front",
          "https://tarpitpark.ml/", "https://github.com/jacksonoviatt/tarpitpark_back"],
        image: require("../assets/tarpit.jpg"),
        page: "/tarpit",
        case: require("../assets/tarpitcase.png"),
        // wireLabel: "Early Wireframe",
        // fullScreen: true,
        // wireframe: require("../assets/wireframe-btm.jpg"),
        // wireAlt: "",
        // ask: "<p>The Brick's frequent “Buy the Matching Sofa” promotion can be difficult to explain concisely, the previous version of the tool was difficult to interact with, especially on mobile. I was tasked with designing and building a new application that would guide users through the promotion and provide greater clarity on the discounts they would receive. </p><br><p>The previous version also required a human hand to select a maximum 10 sofas to showcase in this tool, often leaving dozens of discount eligible sofas out of the customers reach</p><br><p>After brainstorming and discussing different approaches with the other developers and designers on my team. We determined that a collection page that opened a mobile friendly modal when the customer selected a sofa was the way to go.</p> ",

        
        // work: "<p>Once into the code, it became clear why the previous version  of this tool had been created the way it was. A lack of consistent product grouping had created a large roadblock in the quest for dynamic sofa collection data.<p><br></p>Utilizing Shopify’s templating language, Liquid, I was able to dynamically create two JSON sets. One that held the matching collections SKU’s and one that held the individual product data (accesible by each SKU). This then allowed me to use AJAX to get only the information relevant to the user’s selection to maintain site speed.<p><br></p>Once this data was accesible I spent my time building out the rest of the app, primarily using Javascript for functionality and SCSS for styling, </p>",
        // results: " <p>A sleek, clear collection page that allows the customer to filter and view all the eligible furniture.</p><br><p>The signifcant and ardous process of hand selecting and entering the featured sofas has now been completely automated, reducing the workload of this frequent promotion significantly. </p>"
      },
      {
        name: "The Brick: Compare Tool",
        stack: ["Shopify", "JavaScript", "Liquid", "SCSS", "Figma", "JQuery"],
        date: "November 2021",
        link: "https://tarpitpark.ml", 
        desc: "An updated design and build which improved user engagement by over 300%",
        // description: "Explore a scene frozen in time and get a glimpse of the greatness of the Ice Age Megafauna at Tar Pit Park. As my final project at Innotech College, my skills were put to the test as I conceptualized, designed, researched and developed an interactive educational tool. I taught myself Babylon.js, a 3D game rendering engine javascript framework that allows the user to learn in a unique environment.",
        links: ["https://github.com/jacksonoviatt/tar_pit_park_front",
          "https://tarpitpark.ml/", "https://github.com/jacksonoviatt/tarpitpark_back"],
        image: require("../assets/compare.jpg"),
        page: "/brickcom",
        case: require("../assets/compare-case.png"),
        wireLabel: "Mobile Experience:",
        fullScreen: true,
        fullImg: require("../assets/full-compare.jpg"),
        wireframe: require("../assets/wireframe-compare.jpg"),
        wireAlt: "",
        ask: "<p>The Bricks product comparison tool needed to be rebuilt. There were some annoying bugs on desktop that became total roadblocks on mobile; including fixed elements that did not stay in line, certain mobile browsers blocking CTA’s,  and horizontally scrolled tables.<p/><br><p>The businesses priority was to increase user engagement by clarifying the call to action and finding solutions to the bugs that prevented some users from properly accessing the page.<p/><br><p>I also wanted to design a mobile version that allowed the user to easily compare any combination of products with ease.</p>",

        work: "<p>Working alongside the content team and the lead designer, we collabortaed on a new design and selected the pertinent features to showcase.<p/><br><p>Not all products have the same set of features (ex. some mattresses have a spring count but foam mattresses don’t have springs at all), Using JavaScript logic up to four products data is sorted and displayed neatly, even if it does not match.<p/><br><p>For the mobile functionality, a touch controlled carousel with a  “locking” feature created  a clean and easy way to view products side by side.<p/>",
        results: "<h5>Mattresses<h5/><p>User engagement increased from 5.65% of visitors to 16.04% of visitors. An increase of <b>283.89%</b><p/><br><h5>Televisions<h5/><p>User engagement increased from 0.71% to 3.02%. An overall increase of <b>425.35%</b><p/>",
        sol: "<p>To clarify the user flow, the selector is initiated as soon as a user selects a product to compare, the user can easily navigate to the compare tool without ever opening the selector. The selector remains at the bottom of the page until the customer removes all items from the queue. </p><br><p>The primary concern identified with the original version of the compare tool was limited engagement from customers.  The changes implemented have shifted those scores and we have seen a significant lift in engagement (280~425%).</p>"
      },
      {
        name: "Pizza By Any Other Name",
        date: "February 2021",
        link: "https://www.sweetpizzaheat.ml", 
        desc: "A static website for a (pretend) local pizza restaurant which flexes design and HTML/CSS skills",
        stack: ["HTML5", "CSS3", "SASS"],
        description: "A mock website for an imaginary pizza restaurant, Pizza By Any Name. This project was created for an assignment at Innotech College, the objective was to practice and showcase my pure HTML and css abilities as well as challenge me to create an interesting UI/UX without using Javascript.",
        links: ["https://github.com/jacksonoviatt/pizzabyanyothername",
          "https://sweetpizzaheat.tk/"],
        image: require("../assets/pizza1.png"),
        page: "/pizza",
        // case: require("../assets/pizza-case.png"),
        // wireLabel: "Early Wireframe",
        // fullScreen: true,
        // wireframe: require("../assets/wireframe-btm.jpg"),
        // wireAlt: "A low fidelity wireframe of the buy the matching sofa tool",
        // ask: "A mock website for an imaginary pizza restaurant, Pizza By Any Name. This project was created for an assignment at Innotech College, the objective was to practice and showcase my pure HTML and css abilities as well as challenge me to create an interesting UI/UX without using Javascript.",

        // work: "<p>Once into the code, it became clear why the previous version  of this tool had been created the way it was. A lack of consistent product grouping had created a large roadblock in the quest for dynamic sofa collection data.<p><br></p>Utilizing Shopify’s templating language, Liquid, I was able to dynamically create two JSON sets. One that held the matching collections SKU’s and one that held the individual product data (accesible by each SKU). This then allowed me to use AJAX to get only the information relevant to the user’s selection to maintain site speed..<p><br></p>Once this data was accesible I spent my time building out the rest of the app, primarily using Javascript for functionality and SCSS for styling, </p>",
        // results: " <p>A sleek, clear collection page that allows the customer to filter and view all the eligible furniture.</p><br><p>The signifcant and ardous process of hand selecting and entering the featured sofas has now been completely automated, reducing the workload of this frequent promotion significantly. </p>"


      },
      {
        name: "Tweeter: A Twitter replica",
        date: "April 2021",
        link: "https://tweeterburb.ml", 
        desc: "My own full stack version of the well known CRUD social media",
        stack: ["Vue.js", "Python", "Flask", "MariaDB", "MySQL", "DBeaver"],
        description: "<p>A twitter clone. The first objective was to interact with a CRUD API and overcome the challenges that come with building a component based webiste. The next objective was to build my own database to interact with and a CRUD API using Python/Flask that was then integrated with the existing front end.</p> ",
        links: ["https://github.com/jacksonoviatt/tweeter",
          "https://tweeterburb.ml/#/welcome", "https://github.com/jacksonoviatt/tweeter_back_end"],
        image: require("../assets/tweeter1.png"),
        page: "/tweeter",
        case: require("../assets/tweeter-case.png"),
        // ask: "<p>A twitter clone. The first objective was to interact with a CRUD API and overcome the challenges that come with building a component based webiste. The next objective was to build my own database to interact with and a CRUD API using Python/Flask that was then integrated with the existing front end.</p> ",
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
