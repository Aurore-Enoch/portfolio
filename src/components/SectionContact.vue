<template>
<section class="section_contact" id="contact">
    <div data-aos="fade-up" data-aos-duration="1500">
        <h2>Besoin d'informations ?</h2>
        <div class="text">
            <h4>Contactez-moi</h4>
            <h3>par mail</h3>
            <p> À la recherche d'une alternance pour mon mastère, si vous êtes intéressé, n'hésitez pas à me contacter en utilisant mon email ci-dessous. </p>
            <a href="mailto:aurore.enoch@gmail.com"><button>Me contacter</button></a>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'SectionContact',
    components: {}
}
</script>

<style scoped>
.section_contact {
    min-height: fit-content;
}
.text {
    padding: 5em;
    text-align: center;
    background-color: var(--background-color-secondary);
    margin: 2em 5em;
    backdrop-filter: blur(5px);
    border-radius: 0px;
    border: 1px dashed var(--font-color);
    /* background: url(../assets/images/computer_background.jpg);
  background-size: cover!important;   */
}

@media (max-width: 900px) {
    .text {
        margin: 2em;
    }
}
</style>
