<template>
    <div v-if="!ready" class="ready-page">
        <h1>Welcome to: Film Trivia!!!!</h1>
        <button @click="ready = true">
            <span>Ready, set, </span>
        </button>
    </div>
    <div v-if="ready">
        <TriviaHandler :questions="questions" :answers="answers" :correctnessMatrix="correctnessMatrix"/>
    </div>
</template>

<script>
    import TriviaHandler from '../components/TriviaHandler.vue'
    import { triviaData } from '../data/filmTriviaData.js';


    export default {
        name: 'TriviaPage',
        data() {
            return {
                ...triviaData,
                ready: false
            }
        },
        components: {
            TriviaHandler
        }
    }
</script>

<style scoped>
    div {
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .ready-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    h1 {
        font-size: 60px;
        padding-bottom: 4%;
    }

    button {
        width: 25%;
        height: 100px;
        color: #000000;
        background-color: #b8b8b8;
        border: none;
        border-radius: 5px;
        font-size: 20px;
    }
    button:hover {
        color: #000000;
        background-color: #e1e1e1;
    }
    button:hover span {
        content: none;
    }
    button:hover ::after {
        content: 'GO!!!!!';
    }
</style>
