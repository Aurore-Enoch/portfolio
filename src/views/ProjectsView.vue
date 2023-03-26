<template>
<div id="app">
    <div v-if="error">
        {{ error }}
    </div>
    <ul v-else>
        <li v-for="project in projects" :key="project.id">
            <h1>{{ project.attributes.title }}</h1>
            {{ project.attributes.description }}
            <img :src="project.attributes.image.url" alt="">
            <a :href="project.attributes.link_git">Lien git</a>

        </li>
    </ul>
</div>
</template>

  
<script>
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
            projects: [],
            error: null
        }
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:1337/api/projects?populate=*')
            this.projects = response.data.data
        } catch (error) {
            this.error = error;
        }
    }
}
</script>
