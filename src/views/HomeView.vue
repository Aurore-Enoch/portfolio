<template>
<div class="home">
    <HomeHero></HomeHero>

    <!-- A propos -->
    <section class="about" id="about">
        <h2>Aurore<strong> Enoch</strong></h2>
        <div class="row" data-aos="fade-up" data-aos-duration="1500">

            <div>
                <img class="columns" src="../assets/images/computer_background.jpg">
            </div>
            <div class="columns">

                <div class="text">
                    <h3>Qui suis-je ?</h3>
                    <p>Après l'obtention de mon <strong>baccalauréat ES</strong>, j'ai décidé de faire un <strong>BTS Commerce International</strong> à cause de mon appétence pour les langues étrangères.
                        J'ai par la suite, fait un <strong>Bachelor en Marketing de Mode & Luxe</strong> où j'ai eu l'occasion de faire un stage chez l'Agence LUM en tant que <strong>Designer Web & Community Manager</strong>. Durant ce stage, j'ai eu la chance de découvrir l'univers de la création de site internet. Voulant en savoir plus et continuer dans le secteur, j'ai choisi de me réorienter.
                        Ainsi, je suis actuellement en <strong>Bachelor Développement Web</strong> à Digital Campus et en alternance en tant que <strong>Designer Web</strong> chez Vistalid.
                        Consciente de mon "retard", je me forme sur la plateforme "freecodecamp" pour pratiquer et acquérir de l'expérience en dehors de ma formation. </p>
                    <a href="#projects"><button>En savoir plus</button></a>
                </div>
            </div>
        </div>
    </section>

    <!-- Projets -->
    <SectionProjects :projects="projects"></SectionProjects>

    <!-- Compétences -->
    <section class="skill" id="skills">
        <div data-aos="fade-up" data-aos-duration="1500"></div>
        <div>
            <marquee width="100%" behavior="scroll" direction="left" scrollamount="8"> - HTML - CSS - SCSS - JS - Vue.js - React.js - Symfony - WordPress - Github - Suite Adobe - Canva - </marquee>
        </div>
    </section>
    <!-- <SectionSkills :datas="accordionDatas"></SectionSkills> -->

    <!-- <SectionSkillsRotate>
        <div data-aos="fade-up" data-aos-duration="1500"></div>
    </SectionSkillsRotate> -->

    <!-- Formations  -->
    <section class="section_formation">
        <div data-aos="fade-up" data-aos-duration="1500">
            <h2 class="">Diplômes & <strong>Formations</strong></h2>

            <div class="formation__container container">
                <div class="formation__section">
                    <div class="formation__content">
                        <!-- formation 1 -->
                        <div class="formation__data">
                            <div class="formation__text">
                                <h3 class="formation__date">2023-2025</h3>
                                <span class="formation__title">Mastère Développement Web Tech Lead </span>
                                <div class="formation__subtitle">Digital Campus, Bordeaux</div>
                            </div>

                            <div>
                                <span class="formation__rounder"></span>
                                <span class="formation__line"></span>
                            </div>
                        </div>

                        <!-- formation 2 -->
                        <div class="formation__data">
                            <div></div>

                            <div>
                                <span class="formation__rounder"></span>
                                <span class="formation__line"></span>
                            </div>

                            <div class="formation__text">
                                <h3 class="formation__date">2022-2023</h3>
                                <span class="formation__title">Bachelor Développement Web </span>
                                <div class="formation__subtitle">Digital Campus, Bordeaux</div>
                            </div>
                        </div>

                        <!-- formation 3 -->
                        <div class="formation__data">
                            <div class="formation__text">
                                <h3 class="formation__date">2021-2022</h3>
                                <span class="formation__title">Bachelor Marketing Luxe, Mode et Tourisme</span>
                                <div class="formation__subtitle">INSEEC, Bordeaux</div>
                            </div>

                            <div>
                                <span class="formation__rounder"></span>
                                <span class="formation__line"></span>
                            </div>
                        </div>

                        <!-- formation 4 -->
                        <div class="formation__data">
                            <div></div>

                            <div>
                                <span class="formation__rounder"></span>
                                <span class="formation__line"></span>
                            </div>

                            <div class="formation__text">
                                <h3 class="formation__date">2019-2021</h3>
                                <span class="formation__title">BTS Commerce International</span>
                                <div class="formation__subtitle">Lycée Condorcet, Bordeaux</div>
                            </div>
                        </div>
                        <!-- formation 5 -->
                        <div class="formation__data">
                            <div class="formation__text">
                                <h3 class="formation__date">2019</h3>
                                <span class="formation__title">Baccalauréat Economique et Social</span>
                                <div class="formation__subtitle">Lycée Grand Air, Arcachon</div>
                            </div>

                            <div>
                                <span class="formation__rounder"></span>
                                <span class="formation__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Certification -->
    <!-- <section class="certifications">
        <div data-aos="fade-up" data-aos-duration="1500">
            <h2>Nouvelles <strong>certifications</strong></h2>
            <div class="row">
                <div class="columns"><img src="@/assets/images/FCCLogo.png">
                    <p>Certification Responsive Web Design</p>
                </div>
                <div class="columns"><img src="@/assets/images/TOEIC_logo.png">
                    <p>Certificate of Achievement 965/990 points</p>
                </div>
                <div class="columns"><img src="@/assets/images/FCCLogo.png">
                    <p>Certification JavaScript Algorithms and Data Structures<br><strong>En cours d'apprentissage</strong></p>
                </div>
            </div>
        </div>
    </section> -->
    <!-- Experience -->
    <section class="experiences" id="experiences">
        <div data-aos="fade-up" data-aos-duration="1500">
            <h2><strong>Experience</strong> Professionneles</h2>
            <div class="row">
                <div class="columns">
                    <p class="logo">Vistalid</p>
                    <span>Septembre 2022 à Octobre 2023 </span><br>
                    <span>1 an</span>
                    <p>Webdesigner</p>
                    <p>Bègles</p>
                </div>
                <div class="columns">
                    <p class="logo">Agence LUM</p>
                    <span>Avril à Juillet 2022</span><br>
                    <span>4 mois</span>
                    <p>Webdesigner & Community Manager</p>
                    <p>Télétravail</p>
                </div>
                <div class="columns">
                    <p class="logo">Margaux Bagur </p>
                    <span>Novembre à Décembre 2020</span><br>
                    <span>1 mois</span>
                    <p>Assistante de Communication</p>
                    <p>Bordeaux</p>
                </div>
                <div class="columns">
                    <p class="logo">Château de Chelivette</p>
                    <span>2019 - 2021</span><br>
                    <span>2 ans</span>
                    <p>Assistante Export</p>
                    <p>St-Eulalie</p>
                </div>
                <div class="columns">
                    <p class="logo">McDonald's</p>
                    <span>été 2019</span><br>
                    <span>2 mois</span>
                    <p>Employée Polyvalente</p>
                    <p>Arcachon</p>
                </div>
            </div>
        </div>
    </section>

    <SectionContact>
        <div data-aos="fade-up" data-aos-duration="1500"></div>
    </SectionContact>

</div>
</template>

<script>
import SectionProjects from '@/components/SectionProjects.vue'
// import SectionSkills from '@/components/SectionSkills.vue'
import HomeHero from '@/components/HomeHero.vue'
import SectionContact from '@/components/SectionContact.vue'
// import SectionSkillsRotate from '@/components/SectionSkillsRotate.vue'
import AOS from 'aos'

export default {
    name: 'HomeView',
    components: {
        HomeHero,
        SectionProjects,
        // SectionSkills,
        SectionContact,
        // SectionSkillsRotate,
    },

    mounted() {
        console.log(this.$route.fullPath)
        AOS.init()
    },
    data() {
        return {
            userTheme: "light-theme",
            accordionDatas: [{
                    title: 'Langages',
                    content: 'HTML, CSS, JS, PHP'
                },
                {
                    title: 'Frameworks',
                    content: require("@/assets/icons/heart.svg")
                },
                {
                    title: 'Librairies',
                    content: 'React.js'
                },
                {
                    title: 'CMS',
                    content: 'Wordpress'
                },
                {
                    title: 'Autre',
                    content: 'Github'
                },
                {
                    title: 'Suite Adobe',
                    content: 'HTML, CSS, JS, PHP'
                },
                {
                    title: 'Langues',
                    content: 'HTML, CSS, JS, PHP'
                },
                {
                    title: 'Marketing & Commerce',
                    content: 'HTML, CSS, JS, PHP'
                },

            ],
        }
    },
}
const threshold = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.remove('reveal')
            observer.unobserve(entry.target)
        }
    })
}

document.documentElement.classList.add('reveal-loaded')

window.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(handleIntersect, options)
    const targets = document.querySelectorAll('.reveal')
    targets.forEach(function (target) {
        observer.observe(target)
    })
})
</script>


