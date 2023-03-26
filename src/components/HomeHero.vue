<template>
<section class="home_hero row" id="home">
    <div class="columns" data-aos="fade-up" data-aos-duration="1500">
        <h1>Hi I'm <span>Aurore</span>, a
            <div class="animation">
                <div class="first">
                    <div>Student</div>
                </div>
                <div class="second">
                    <div>Web Designer</div>
                </div>
                <div class="third">
                    <div>Junior Developper</div>
                </div>
            </div> who likes to create things.</h1>

        <button><a href="/contact">Me contacter</a></button>
        <div class="social_icons">
            <a href="https://www.linkedin.com/in/aurore-enoch-20b09a195/"><img src="../assets/icons/linkedin.svg"></a>
            <a href="https://github.com/Aurore-Enoch"><img src="../assets/icons/github.svg"></a>
            <a href="mailto:aurore.enoch@gmail.com"><img src="../assets/icons/mail.svg"></a>
        </div>
    </div>
    <div class="columns" data-aos="fade-up" data-aos-duration="1500">
        <div class="circle">
            <img src="../assets/images/avatar.gif">
        </div>
    </div>
    <div class="arrow"></div>
</section>
</template>

<script>
export default {
    name: 'HomeHero',
    components: {}
}
</script>

<style scoped>
.home_hero {
    height: 100vh;
}

.animation {
    height: 60px;
    overflow: hidden;
}

.animation>div>div {
    padding: 0.25rem 0rem;
    height: 3.2rem;
    margin-bottom: 3.2rem;
    display: inline-block;
}

.animation div:first-child {
    animation: text-animation 9s infinite;
}

.first div {
    font-family: var(--font-family-3);
}

.second div {
    font-family: var(--font-family-3);
}

.third div {
    font-family: var(--font-family-3);
}

@keyframes text-animation {
    0% {
        margin-top: 0;
    }

    10% {
        margin-top: 0;
    }

    20% {
        margin-top: -5.62rem;
    }

    30% {
        margin-top: -5.62rem;
    }

    40% {
        margin-top: -11.24rem;
    }

    60% {
        margin-top: -11.24rem;
    }

    70% {
        margin-top: -5.62rem;
    }

    80% {
        margin-top: -5.62rem;
    }

    90% {
        margin-top: 0;
    }

    100% {
        margin-top: 0;
    }
}

.row {
    display: flex;
    flex-direction: row;
}

.row .columns {
    flex: 1;
    margin: auto;
}

.columns:nth-child(1) {
    padding: 10vh;
}

.columns:nth-child(2) {
    padding: 5vh;
    text-align: center;
}

.columns:nth-child(2) img {
    height: 70vh;
    padding: 1em;
}

.circle {
    background-color: var(--background-color-secondary);
    border-radius: 100em;
    border: 1px solid var(--font-color);
}

.social_icons img {
    padding: 2vh 2vh 0 0;
}

/* arrow */
.arrow,
.arrow:before {
    position: absolute;
    left: 50%;
}

.arrow {
    width: 40px;
    height: 40px;
    top: 93%;
    margin: -20px 0 0 -20px;
    transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
}

.arrow:before {
    content: '';
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
}

@keyframes arrow {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-10px, -10px);
    }
}

/* Responsive */
@media screen and (max-width: 1190px) {
    .columns:nth-child(2) img {
        height: 40vh;
    }

    .columns:nth-child(1) {
        padding: 5vh;
    }
}

@media screen and (max-width: 800px) {
    .row {
        flex-direction: inherit;
    }
}
</style>
