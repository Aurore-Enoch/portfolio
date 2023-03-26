<template>
<section>
    <div class="section_skills" id="skills" data-aos="fade-up" data-aos-duration="1500">
        <h2>Mes différentes <strong>compétences</strong></h2>
        <div class="accordion-item" v-for="(data, index) in datas" :key="index">
            <header class="accordion-header" @click="toggleVisibility(index)">
                <p>{{ data.title }}</p> <span class="accordion-item-trigger-icon"></span>
            </header>
            <div class="accordion-body" v-show="index == opened">
                <img v-bind:src="data.content" alt="image content">
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "SectionSkills",
    props: {
        datas: Array,
    },
    data() {
        return {

            opened: null,
        };
    },
    methods: {
        toggleVisibility(index) {
            if (this.opened != index) {
                this.opened = index;
            } else {
                this.opened = null;
            }
        },
    },
};
/* if index == this.opened{
      this.opened=null;
    }else{
      this.opened = index;
    }
   */
</script>

<style scoped>
.accordion-item {
    margin: 1vh auto;
    width: 50%;

}

.accordion-header {
    border-radius: 10px;
    background-color: var(--background-color-secondary);
    backdrop-filter: blur(5px);

}

.accordion-header:hover {
    cursor: pointer;
}

.accordion-header,
.accordion-body {
    padding: 0.75rem;
}

.accordion-item-trigger-icon {
    cursor: pointer;
    font-size: 8px;
    display: block;
    position: relative;
    float: right;
    top: -25px;
    right: 0;
    margin: auto;
    width: 8px;
    height: 8px;
    border-right: 2px solid #363636;
    border-bottom: 2px solid #363636;
    transform: rotate(45deg);
    transition: transform 0.2s ease;
    filter: var(--filter-color);
}

.accordion-item-trigger-icon:active {
    transform: rotate(225deg);
}
</style>
