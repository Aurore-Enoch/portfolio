<template>
<section class="home_hero row">
    <div class="columns">
        <h1>Hi I'm <span>Aurore</span>, a <strong>Web Designer</strong> and <strong>Junior Developper</strong> who likes to create things</h1>
        <button><a href="/contact">Me contacter</a></button>
        <div class="social_icons">
            <a href="https://www.linkedin.com/in/aurore-enoch-20b09a195/"><img src="../assets/icons/linkedin.svg"></a>
            <a href="https://github.com/Aurore-Enoch"><img src="../assets/icons/github.svg"></a>
            <a href="mailto:aurore.enoch@gmail.com"><img src="../assets/icons/mail.svg"></a>
        </div>
    </div>
    <div class="columns">
        <img src="../assets/icons/Avatar.svg">
    </div>

</section>
</template>

<script>
export default {
    name: 'HomeHero',
    components: {}
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
}

.home .row {
    margin-top: 10vh;
}

.row .columns {
    flex: 1;
    margin: auto;
}

.columns:nth-child(1) {
    padding: 5vh;
}

.social_icons img {
    padding: 2vh 2vh 0 0;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
    .row {
        flex-direction: column;
    }
}
</style>
