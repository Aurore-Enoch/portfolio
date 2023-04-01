<template>
  <section class="section_projects">
      <div data-aos="fade-up" data-aos-duration="1500">
          <h2>Quelques <strong>Projets</strong></h2>
          <div class="slider" id="projects">
            <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                  <div v-for="(project, index) in projects" :key="index" class="slide" >
                      <img class="principal" :src="project.image" alt="Project">
                      <div class="columns">
                          <h3>{{ project.title }}</h3>
                          <h5 class="languages">{{project.languages}}</h5>
                          <p>{{ project.description }}</p>
                          <a :href="project.gitlink"><img :src="project.giticon"></a>
                          <a :href="project.weblink"><img :src="project.webicon"></a>
                          <a :href="project.weblinks"><img :src="project.webicons"></a>
                      </div>
                  </div>
              </div>
              <span class="arrow left-arrow" @click="prevSlide"><img src="..\assets\icons\chevron-left.svg"></span>
              <span class="arrow right-arrow" @click="nextSlide"><img src="..\assets\icons\chevron-right.svg"></span>
          </div>
      </div>
  </section>
  </template>
  
  <script>
  export default {
      data() {
          return {
              projects: [{
                      title: 'Site Vitrine Wordpress',
                      languages: "Wordpress",
                      description: "Durant mon stage chez l'Agence LUM j'ai eu l'occasion de créer une dizaine de sites internet sur le CMS WordPress à l'aide de l'extension Divi. J'ai principalement réalisé des sites pour des entreprises de soins, bien-être et coiffure telle que Madana ou Les soins de Diane en n'oubliant pas de bien respecter les différentes chartes graphiques.",
                      image: require('@/assets/projects/site_wordpress.png'),
                      // gitlink: 'https://github.com/Aurore-Enoch',
                      // giticon: require('../assets/icons/github.svg'),
                      weblink: 'https://madana.fr/',
                      webicon: require('../assets/icons/link.svg'),
                      weblinks: 'http://lessoinsdediane.fr/',
                      webicons: require('../assets/icons/link.svg'),
                  },
                  {
                      title: 'Site Vitrine Vistalid',
                      languages: "HTML - SCSS",
                      description: "Durant mon alternance chez Vistalid, j'ai eu l'occasion de créer des dizaines de sites internet sur le CMS personnel de l'entreprise. J'ai réalisé des sites pour des entreprises de divers secteurs d'activités telles que 'La chouette tricheuse' ou 'l'Auberge des tilleuls' en n'oubliant pas de bien respecter les différentes chartes graphiques. J'utilisais quotidiennement l'HTML et le SCSS pour personnaliser les sites des clients.",
                      image: require('@/assets/projects/site_vistalid.png'),
                      // gitlink: 'https://github.com/Aurore-Enoch',
                      // giticon: require('../assets/icons/github.svg'),
                      weblink: 'https://hotel-restaurant-taverne-du-parvis.site-vistalid.fr/',
                      webicon: require('../assets/icons/link.svg'),
                      weblinks: 'https://paysagiste-19.fr/',
                      webicons: require('../assets/icons/link.svg'),
                  },
                  {
                      title: 'All Dev Long',
                      languages: "SCSS - Symfony",
                      description: 'Ce projet scolaire de groupe consisté à développer une plateforme CMS propriétaire permettant de générer une landing page en fonction des besoins d’un client. Nous avons utilisé le framework Symfony pour développer la plateforme.',
                      image: require('@/assets/projects/site_AllDevLong.png'),
                      gitlink: 'https://github.com/Aurore-Enoch/adlink.bio',
                      giticon: require('@/assets/icons/github.svg'),
                  },
                  {
                      title: 'Decathlon Caperlan',
                      languages: "React - SCSS",
                      description: "Dans le cadre des Grand Projets du Digital Campus, j'ai participé à la refonte du site de Decathlon Caperlan. Nous avons utilisé la librairie React ainsi que l'SCSS pour dynamiser le site.",
                      image: require('@/assets/projects/site_caperlan.png'),
                      weblink: 'https://caperlan-front-end.vercel.app/',
                      webicon: require('../assets/icons/link.svg')
                  },
                  {
                      title: 'Portfolio',
                      languages: "Vue.js - CSS",
                      description: "Dans le cadre de ma recherche d'alternance pour mon master, j'ai décidé de développer mon portfolio. J'ai utilisé le framework Vue.js pour me familiariser avec Javascript.",
                      image: require('@/assets/projects/site_portfolio.png'),
                      gitlink: 'https://github.com/Aurore-Enoch/portfolio',
                      giticon: require('@/assets/icons/github.svg'),
                      weblink: 'https://github.com/Aurore-Enoch',
                      webicon: require('../assets/icons/link.svg')
                  },
                  {
                      title: 'My Seasonal Outfits',
                      languages: "React - Symfony",
                      description: 'My Seasonal Outfits est le projet de mon année de bachelor en développement web. Le site est un blog de conseils de mode qui comprend un quiz personnalisé pour conseiller au maximum les utilisateurs dans leurs prochains achats. Il sera développé en React pour le front et en Symfony pour le back.',
                      image: require('@/assets/projects/site_MSO.png'),
                      // gitlink: 'https://github.com/Aurore-Enoch',
                      // giticon: require('@/assets/icons/github.svg'),
                      // weblink: 'https://github.com/Aurore-Enoch',
                      // webicon: require('../assets/icons/link.svg')
                  },
  
              ],
              currentSlide: 0,
          };
      },
     
      methods: {
          prevSlide() {
              this.currentSlide--;
              if (this.currentSlide < 0) {
                  this.currentSlide = this.projects.length - 1;
              }
          },
          nextSlide() {
              this.currentSlide++;
              if (this.currentSlide >= this.projects.length) {
                  this.currentSlide = 0;
              }
          }
      }
  };
  </script>
  
  <style scoped>
.section_projects {
  overflow-x: hidden;
}
  .languages,  .languages_2 {
      text-align: center;
  }
  
  .slider {
      position: relative;
      width: 100%;
      height: 400px;
      margin: 5em 0;
  }
  
  .slides {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease-in-out;
  }
  
  .slide {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: row !important;
      align-items: center;
      justify-content: center;
  
  }
  
  .slides .columns {
      padding: 3em;
      width: 50%;
      height: auto;
  }
  
  .slides .principal {
      width: 40%;
      height: auto;
      padding: 0.5em;
      border: 1px solid var(--font-color);
      transition: 0.4s ease-in-out;
  }
  
  .slide img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
  }
  
  .columns img {
      filter: var(--filter-color);
  }
  
  .slide h3 {
      margin-top: 1rem;
      font-size: 2rem;
  }
  
  .slide p {
      margin-top: 0.5rem;
      font-size: 1.2rem;
  }
  
  .arrow {
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.5rem;
      color: #000;
      cursor: pointer;
  }
  
  .left-arrow {
  
      left: 0%;
      filter: var(--filter-color);
  }
  
  .left-arrow img {
      width: 50px;
  }
  
  .right-arrow {
      width: 50px;
      right: 0%;
      filter: var(--filter-color);
  }
  
  .right-arrow img {
      width: 50px;
  }
  
  @media (max-width:1300px) {
      .slides .columns {
          padding: 1em;
      }
  
      .slider[data-v-4e2b8e02] {
          height: 300px;
          margin: 2em 0;
      }
  }
  
  @media (max-width:1090px) {
      .slides .columns[data-v-4e2b8e02] {
          padding: 0.3em;
      }
      .left-arrow {
       left: 7%;
      }
  
      .right-arrow {
        right: 7%;
      }
  }
  
  @media (max-width:768px) {
  
      .slide {
          flex-direction: column !important;
          ;
      }
  
      .slider {
          height: 70vh !important;
      }
  
      .slides .principal {
          width: 45%;
      }
  
      .slides .columns {
          padding: 2em;
          width: 60%;
  
      }
  
      .left-arrow {
       left: 20%;
      }
  
      .right-arrow {
        right: 20%;
      }
  }
  
  @media (max-width:562px) {
      .slides .principal {
          width: 30%;
      }
  
      .slides .columns {
          width: 35%;
      }
  
      .slide p {
          font-size: 1rem;
      }
  
      .left-arrow {
          left: 35%;
      }
  
      .right-arrow {
          right: 35%;
      }
  }
  </style>
  