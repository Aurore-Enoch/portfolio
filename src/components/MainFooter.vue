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
                <div class="social_icons"><a href="https://www.linkedin.com/in/aurore-enoch-20b09a195/"><img src="../assets/icons/linkedin.svg"></a><a href="https://github.com/Aurore-Enoch"><img src="../assets/icons/github.svg"></a></div>
            </div>
        </div>
        <div class="main_footer_2">
            <div>
                <h5>Mentions Légales</h5>
            </div>
            <div>
                <h5>Tout droits réservés - 2023</h5>
            </div>
            <div>
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
    height: fit-content !important;
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
}

/* tablet breakpoint */
@media (min-width:768px) {
    .responsive-three-columns>* {
        width: calc(100% / 3);
    }
}
</style>
