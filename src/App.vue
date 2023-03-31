<template>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<MainHeader />
<RouterView />
<MainFooter />
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
    name: 'App',
    components: {
        MainHeader,
        MainFooter
    }
};

</script>

<style>
@import '@/assets/css/styles.css';
@import 'aos/dist/aos.css';
</style>