<template>
<section class="footer">
    <div class="main_footer">
        <div class="main_footer_1">
            <div>
                <h5>Contactez-Moi</h5>
                <p>aurore.enoch@gmail.com</p>
            </div>
            <div>
                <h4 class="name">
                    <p>Aurore</p>
                    <p>Enoch</p>
                </h4>
                <p>Web Designer & Développeuse Web Junior</p>
            </div>
            <div>
                <h5>Follow Me</h5>
                <div class="social_icons"><a href="https://www.linkedin.com/in/aurore-enoch-20b09a195/" target="_blank"><img src="../assets/icons/linkedin.svg"></a><a href="https://github.com/Aurore-Enoch" target="_blank"><img src="../assets/icons/github.svg"></a></div>
            </div>
        </div>
        <div class="main_footer_2">
            <div>
                <h5><a href="./mentions-legales" >Mentions Légales</a></h5>
            </div>
            <div>
                <h5>Tous droits réservés - 2023</h5>
            </div>
            <div class="madewith">
                <h5>Made with<img class="heart" src="../assets/icons/heart.svg"> by Aurore</h5>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "MainFooter",
};
</script>

<style scoped>
/* container */
.footer {
    min-height: fit-content !important;
    display: block;
}

.name {
    font-size: 100%;
}

.main_footer_1,
.main_footer_2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
}

.main_footer_1 {
    border-bottom: 1px solid var(--font-color);
    width: 75%;
    margin: auto;
}

/* columns */
.responsive-three-columns>* {
    width: 100%;
    padding: 1rem;
}

.heart {
    width: 16%;
    top: 8px;
    padding: 0.3em;
    position: relative;
    filter: var(--filter-color);
}

.madewith {
    top: -8px;
    position: relative;
}

/* tablet breakpoint */
@media (max-width:768px) {
    .responsive-three-columns>* {
        width: calc(100% / 3);
    }

}
</style>
