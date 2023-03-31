<template>
<div class="nav-menu" :class="{ 'onScroll': !view.topOfPage}">
    <div class="burger" v-on:click="showMenu()">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
    </div>
    <nav class="nav-content" v-bind:class="showMobileMenu ? 'open-menu' : 'closed-menu'">
        <ul class="nav-items">
            <!-- <li v-bind:class="$route.fullPath === '/' ? 'nav-items-active' : ''">
                <router-link to="/">
                    <span>Accueil</span>
                </router-link>
            </li> -->

            <div v-for="(link, index) in links" v-bind:key="index">
                <li v-bind:class="$route.fullPath === '/' + link.ancre ? 'nav-items-active' : ''" v-if="$route.fullPath !== '/contact'">
                    <a v-bind:href="link.ancre">{{link.name}}</a>
                </li>
            </div>

            <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox" />
            <label for="checkbox" class="switch-label">
                <span><img src="@\assets\icons\moon.svg" /></span>
                <span><img src="@\assets\icons\sun.svg" /></span>
                <div class="switch-toggle" :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"></div>
            </label>

            <button class="download"><a href="https://ibb.co/tpQkRwy" download>Curriculum</a></button>
            <!-- <button class="download"><a href="src/assets/documents/Aurore_ENOCH_CV_Alternance.pdf"  @click.prevent="downloadItem({ url: 'src/assets/documents/Aurore_ENOCH_CV_Alternance.pdf', label: 'download'})">Curriculum </a> </button> -->

        </ul>
    </nav>
</div>
</template>

<script>
// import axios from "axios"
export default {
    mounted() {
        this.setTheme("light-theme");
    },
    name: "MainHeader",
    el: '#navbar',
    data() {
        return {
            userTheme: "light-theme",
            view: {
                topOfPage: true
            },
            showMobileMenu: false,
            links: [{
                    ancre: '/',
                    name: 'Accueil'
                },
                {
                    ancre: '#about',
                    name: 'A propos'
                },
                {
                    ancre: '#projects',
                    name: 'Projets'
                },
                {
                    ancre: '#skills',
                    name: 'Compétences'
                },
                {
                    ancre: '#experiences',
                    name: 'Expériences'
                },
                {
                    ancre: '#contact',
                    name: 'Contact'
                },
            ]
        };
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)

    },
    methods: {
        // downloadItem({
        //     url,
        //     label
        // }) {
        //     console.log(true)
        //     axios.get(url, {
        //             responseType: 'blob'
        //         })
        //         .then(response => {
        //             const blob = new Blob([response.data], {
        //                 type: 'application/pdf'
        //             })
        //             const link = document.createElement('a')
        //             link.href = URL.createObjectURL(blob)
        //             link.download = label
        //             link.click()
        //             URL.revokeObjectURL(link.href)
        //         }).catch(console.error)
        // },
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
        handleScroll() {
            if (window.pageYOffset > 0) {
                if (this.view.topOfPage) this.view.topOfPage = false
            } else {
                if (!this.view.topOfPage) this.view.topOfPage = true
            }
        },
        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },
        toggleTheme() {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                this.setTheme("dark-theme");
            } else {
                this.setTheme("light-theme");
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Megrim&family=Poiret+One&family=Poppins:wght@500;600&display=swap');

.download {
    margin: 0 1em !important;
    padding: 0.3em 1em;
}

a {
    color: black;
}

.burger {
    display: none;
}

.burger span {
    display: block;
    width: 25px;
    height: 3px;
    border-radius: 20px;
    background-color: var(--primary-color);
    position: absolute;
    transition: all .4s ease;
}

.burger .top {
    transform: translateY(-8px);
}

.burger .bottom {
    transform: translateY(8px);
}

.nav-menu {
    background-color: transparent;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

.onScroll {
    background-color: var(--background-color-primary) !important;
    border-bottom: 1px solid var(--font-color);
}

.nav-menu a {
    font-family: var(--font-family-1);
    color: var(--font-color);
}

.nav-content {
    display: flex;
    justify-content: center;
    padding: 15px 30px;
    align-items: center;
}

.nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-items li {
    padding: 0.3em 0.9em;
    text-align: center;
}

.nav-items li:hover {
    background: rgba(127, 85, 57, 0.2);
    color: var(--primary-color)
}

.nav-items-active {
    background: transparent;
    border-radius: 0;
    border: 1px solid var(--font-color);
    color: white;
    padding: 0.3em 1.5em;
    font-weight: bold;
}

i {
    display: none;
}

/* Dark mode  */
.switch-checkbox {
    display: none;
}

.switch-label {
    /* for width, use the standard element-size */
    width: var(--element-size);
    /* for other dimensions, calculate values based on it */
    border-radius: var(--element-size);
    font-size: calc(var(--element-size) * 0.3);
    height: calc(var(--element-size) * 0.35);

    align-items: center;
    background: var(--text-primary-color);
    cursor: pointer;
    display: flex;
    position: relative;
    transition: background 0.5s ease;
    justify-content: space-between;
    z-index: 1;
}

.switch-toggle {
    position: absolute;
    background-color: var(--background-color-primary);
    border-radius: 50%;
    top: calc(var(--element-size) * -0.12);
    left: calc(var(--element-size) * 0.00);
    height: calc(var(--element-size) * 0.6);
    width: calc(var(--element-size) * 0.6);
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
    transform: translateX(calc(var(--element-size) * 0.6)) !important;
}

/* // Mobile version - hidden hamburger menu */
@media screen and (max-width: 768px) {
    .nav-menu {
        position: fixed;
        width: 100%;
        height: 5vh;
        z-index: 1;
    }

    .open-menu {
        opacity: 1;
        height: 400px;
        background-color: var(--background-color-primary);
        border-bottom: 1px solid var(--font-color);
    }

    .closed-menu {
        opacity: 0;
        height: 0;
        padding: 0;
    }

    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.2s ease-out;
    }

    .nav-items {
        flex-direction: column;
    }

    .nav-items li {
        margin: 0.5em;
    }

    .switch-label {
        margin: 0.5em;
    }

    li {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
    }

    .burger {
        display: block;
        width: 5vh;
        height: 5vh;
        margin: 0 0 0 auto;
    }

    .burger span {
        margin: 2.2vh 0 0 auto;
    }

}
</style>
