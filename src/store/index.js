import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: [
      {
        name: "Front End",
        tech: [
          {
            name: "Javascript",
            logo: require("../assets/javascript.png")
          },
          {
            name: "Vue.js",
            logo: require("../assets/vue.svg")
          },
          {
            name: "Shopify",
            logo: require("../assets/shopify_glyph.svg")
          },
          {
            name: "Babylon.js",
            logo: require("../assets/babylon.png")
          },
          {
            name: "HTML5",
            logo: require("../assets/html5.png")
          },
          {
            name: "CSS3",
            logo: require("../assets/css3.png")
          },
          {
            name: "SASS",
            logo: require("../assets/sass.png")
          },
          {
            name: "AJAX",
            logo: require("../assets/ajax.png")
          }
        ]
      },
      {
        name: "Back End",
        tech: [
          {
            name: "Python",
            logo: require("../assets/python.png")
          },
          {
            name: "Flask",
            logo: require("../assets/flask.png")
          },
          {
            name: "MySQL",
            logo: require("../assets/mysql.png")
          },
          {
            name: "DBeaver",
            logo: require("../assets/dbeaver.png")
          },
          {
            name: "MariaDB",
            logo: require("../assets/mariadb.png")
          },
          {
            name: "SQL",
            logo: require("../assets/SQL.png")
          },
          {
            name: "API",
            logo: require("../assets/api.png")
          },
        ]
      },
      {
        name: "Other Tools",
        tech: [
          {
            name: "Figma",
            logo: require("../assets/figma.svg")
          },
          {
            name: "NPM",
            logo: require("../assets/npm.png")
          },
          {
            name: "Google Cloud Platform",
            logo: require("../assets/googleCloud.png")
          },
          {
            name: "JSON",
            logo: require("../assets/json.gif")
          },
          {
            name: "GitHub",
            logo: require("../assets/github.png")
          },{
            name: "Bitbucket",
            logo: require("../assets/github.png")
          },
          {
            name: "Linux",
            logo: require("../assets/linux.jpg")
          },
          {
            name: "Bash/CLI",
            logo: require("../assets/bash.png")
          },
          {
            name: "Visual Studio Code",
            logo: require("../assets/vscode.png")
          }
        ]
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
