<template>
<section id="skills">
    <div data-aos="fade-up" data-aos-duration="1500">
        <div class="text-content">
            <h2>Mes différentes <strong>compétences</strong></h2>
        </div>
        <div id="container">
            <div id="stage" style="transform: translateZ(-200px);">
                <div id="shape" class=" backfaces ring">
                    <div class="shadow sone"></div>
                    <div class="plane one">
                        <a href="">
                            <img src="..\assets\icons\HTML5.png">
                        </a>
                    </div>
                    <div class="shadow stwo"></div>
                    <div class="plane two">
                        <a href="">
                            <img src="..\assets\icons\CSS3.png">
                        </a>
                    </div>
                    <div class="shadow sthree"></div>
                    <div class="plane three">
                        <a href="">
                            <img src="..\assets\icons\js.png">
                        </a>
                    </div>
                    <div class="shadow sfour"></div>
                    <div class="plane four">
                        <a href="">
                            <img src="..\assets\icons\php.png">
                        </a>
                    </div>
                    <div class="shadow sfive"></div>
                    <div class="plane five">
                        <a href="">
                            <img src="..\assets\icons\chevron-left.svg">
                        </a>
                    </div>
                    <div class="shadow ssix"></div>
                    <div class="plane six">
                        <a href="">
                            <img src="..\assets\icons\Vue.js.png">
                        </a>
                    </div>
                    <div class="shadow sseven"></div>
                    <div class="plane seven">
                        <a href="">
                            <img src="..\assets\icons\symfony.png">
                        </a>
                    </div>
                    <div class="shadow seight"></div>
                    <div class="plane eight">
                        <a href="">
                            <img src="..\assets\icons\chevron-left.svg">
                        </a>
                    </div>
                    <div class="shadow snine"></div>
                    <div class="plane nine">
                        <a href="">
                            <img src="..\assets\icons\React.png">
                        </a>
                    </div>
                    <div class="shadow sten"></div>
                    <div class="plane ten">
                        <a href="">
                            <img src="..\assets\icons\chevron-left.svg">
                        </a>
                    </div>
                    <div class="shadow seleven"></div>
                    <div class="plane eleven">
                        <a href="">
                            <img src="..\assets\icons\Wordpress.png">
                        </a>
                    </div>
                    <div class="shadow stwelve"></div>
                    <div class="plane twelve">
                        <a href="">
                            <img src="..\assets\icons\chevron-left.svg">
                        </a>
                    </div>
                    <div class="shadow sthirteen"></div>
                    <div class="plane thirteen">
                        <a href="">
                            <img src="..\assets\icons\github_logo.png">
                        </a>
                    </div>
                    <div class="shadow sfourteen"></div>
                    <div class="plane fourteen">
                        <a href="">
                            <img src="..\assets\icons\chevron-left.svg">
                        </a>
                    </div>
                    <div class="shadow sfiveteen"></div>
                    <div class="plane fiveteen">
                        <a href="">
                            <img src="..\assets\icons\Adobe_Premiere.png">
                        </a>
                    </div>
                    <div class="shadow ssixteen"></div>
                    <div class="plane sixteen">
                        <a href="">
                            <img src="..\assets\icons\indesign.png">
                        </a>
                    </div>
                    <div class="shadow sseventeen"></div>
                    <div class="plane seventeen">
                        <a href="">
                            <img src="..\assets\icons\Adobe_XD.png">
                        </a>
                    </div>
                    <div class="shadow seighteen"></div>
                    <div class="plane eighteen">
                        <a href="">
                            <img src="..\assets\icons\Adobe_Photoshop.png">
                        </a>
                    </div>
                    <div class="shadow snineteen"></div>
                    <div class="plane nineteen">
                        <a href="">
                            <img src="..\assets\icons\Adobe_Illustrator.png">
                        </a>
                    </div>
                    <div class="shadow stwenty"></div>
                    <div class="plane twenty">
                        <a href="">
                            <img src="..\assets\icons\chevron-left.svg">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'SectionSkillsRotate',
    components: {}
}
</script>

<style scoped>
.custom-container {
    padding-top: 50px;
    padding: 5%;
}

.custom-container .return {
    transition: 1s;
    transform: scale(0.00001);
}

.custom-container:hover .return {
    transform: scale(1);
    transition: 1s;
}

#container {
    width: 100%;
    height: 350px;
    perspective: 800px;
    perspective-origin: 50% 120px;
}

#stage {
    width: 100%;
    height: 100%;
    transition: transform 2s;
    transform-style: preserve-3d;
}

#shape {
    animation: spin 30s infinite linear;
    position: relative;
    top: 50px;
    margin: 0 auto;
    height: 200px;
    width: 200px;
    transform-style: preserve-3d;
}

#shape.backfaces .plane {
    backface-visibility: visible;
}

.plane {
    position: absolute;
    height: 50px;
    width: 200px;
    border-radius: 12px;
    box-sizing: border-box;
    text-align: center;
    font-family: Times, serif;
    font-size: 124pt;
    color: black;
    transition: -webkit-transform 2s, opacity 2s;
    backface-visibility: hidden;
}

.plane img {
    vertical-align: middle;
    border-radius: 12px;
    border: 1px solid var(--font-color);
    opacity: 0.7;
    box-shadow: 5px 5px 15px 0px var(--primary-color);
    transition: 0.5s;
    max-width: 100px;
    height: auto;
    padding: 4%;
}

.plane:hover img {
    opacity: 1;
    border: 1px solid var(--primary-color);
    transform: scale(1.2);
    transition: 0.5s;
}

.shadow {
    box-shadow: none !important;
    background: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.06766456582633051) 50%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    height: 30px;
    width: 100px;
    bottom: -30px;
    left: 50px;
}

.ring>.one {
    transform: translateZ(400px);
}

.ring>.sone {
    transform: translateZ(400px) rotateX(90deg);
}

.ring>.two {
    transform: rotateY(18deg) translateZ(400px);
}

.ring>.stwo {
    transform: rotateY(18deg) translateZ(400px) rotateX(90deg);
}

.ring>.three {
    transform: rotateY(36deg) translateZ(400px);
}

.ring>.sthree {
    transform: rotateY(36deg) translateZ(400px) rotateX(90deg);
}

.ring>.four {
    transform: rotateY(54deg) translateZ(400px);
}

.ring>.sfour {
    transform: rotateY(54deg) translateZ(400px) rotateX(90deg);
}

.ring>.five {
    transform: rotateY(72deg) translateZ(400px);
}

.ring>.sfive {
    transform: rotateY(72deg) translateZ(400px) rotateX(90deg);
}

.ring>.six {
    transform: rotateY(90deg) translateZ(400px);
}

.ring>.ssix {
    transform: rotateY(90deg) translateZ(400px) rotateX(90deg);
}

.ring>.seven {
    transform: rotateY(108deg) translateZ(400px);
}

.ring>.sseven {
    transform: rotateY(108deg) translateZ(400px) rotateX(90deg);
}

.ring>.eight {
    transform: rotateY(126deg) translateZ(400px);
}

.ring>.seight {
    transform: rotateY(126deg) translateZ(400px) rotateX(90deg);
}

.ring>.nine {
    transform: rotateY(144deg) translateZ(400px);
}

.ring>.snine {
    transform: rotateY(144deg) translateZ(400px) rotateX(90deg);
}

.ring>.ten {
    transform: rotateY(162deg) translateZ(400px);
}

.ring>.sten {
    transform: rotateY(162deg) translateZ(400px) rotateX(90deg);
}

.ring>.eleven {
    transform: rotateY(180deg) translateZ(400px);
}

.ring>.seleven {
    transform: rotateY(180deg) translateZ(400px) rotateX(90deg);
}

.ring>.twelve {
    transform: rotateY(198deg) translateZ(400px);
}

.ring>.stwelve {
    transform: rotateY(198deg) translateZ(400px) rotateX(90deg);
}

.ring>.thirteen {
    transform: rotateY(216deg) translateZ(400px);
}

.ring>.sthirteen {
    transform: rotateY(216deg) translateZ(400px) rotateX(90deg);
}

.ring>.fourteen {
    transform: rotateY(234deg) translateZ(400px);
}

.ring>.sfourteen {
    transform: rotateY(234deg) translateZ(400px) rotateX(90deg);
}

.ring>.fiveteen {
    transform: rotateY(252deg) translateZ(400px);
}

.ring>.sfiveteen {
    transform: rotateY(252deg) translateZ(400px) rotateX(90deg);
}

.ring>.sixteen {
    transform: rotateY(270deg) translateZ(400px);
}

.ring>.ssixteen {
    transform: rotateY(270deg) translateZ(400px) rotateX(90deg);
}

.ring>.seventeen {
    transform: rotateY(288deg) translateZ(400px);
}

.ring>.sseventeen {
    transform: rotateY(288deg) translateZ(400px) rotateX(90deg);
}

.ring>.eighteen {
    transform: rotateY(306deg) translateZ(400px);
}

.ring>.seighteen {
    transform: rotateY(306deg) translateZ(400px) rotateX(90deg);
}

.ring>.nineteen {
    transform: rotateY(324deg) translateZ(400px);
}

.ring>.snineteen {
    transform: rotateY(324deg) translateZ(400px) rotateX(90deg);
}

.ring>.twenty {
    transform: rotateY(342deg) translateZ(400px);
}

.ring>.stwenty {
    transform: rotateY(342deg) translateZ(400px) rotateX(90deg);
}

@keyframes spin {
    0% {
        transform: rotateY(0);
    }

    100% {
        transform: rotateY(-360deg);
    }
}
</style>
