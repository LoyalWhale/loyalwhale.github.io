<template>
    <div class="question-container">
        <!-- Display the question -->
        <h1 id="question-header">{{ this.questions[this.currentQuestionNumber] }}</h1>
        <!-- Display the end screen and results, if there are no more questions to display -->
        <div v-if="this.currentQuestionNumber === this.questions.length">
            done! please return to home. results: {{ this.results }}
            <a href="/start-page">
                <button>Back</button>
            </a>
        </div>
    </div>
    <!-- 4 buttons for the 4 possible answer choices. Each call the handleClick method with their respective ids -->
    <div v-if="this.currentQuestionNumber !== this.questions.length" class="button-container">
        <!-- Each button is populated with its corresponding answer choice -->
        <button :disabled="buttonDisabled" @click="handleClick('a')" id="a">
            {{ this.answers['a'][this.currentQuestionNumber] }}
        </button>
        <button :disabled="buttonDisabled" @click="handleClick('b')" id="b">
            {{ this.answers['b'][this.currentQuestionNumber] }}
        </button>
        <button :disabled="buttonDisabled" @click="handleClick('c')" id="c">
            {{ this.answers['c'][this.currentQuestionNumber] }}
        </button>
        <button :disabled="buttonDisabled" @click="handleClick('d')" id="d">
            {{ this.answers['d'][this.currentQuestionNumber] }}
        </button>
    </div>
</template>

<script>
    export default {
        name: 'TriviaHandler',
        props: {
            // an array of questions of the form:
            // ["Q1", "Q2", "Q3", ...]
            questions: Array,
            // a map of answers of the form:
            // { "a": ["A1", ...], "b": ["B1", ...], "c": ["C1", ...], "d": ["D1", ...] }
            answers: Object,
            // a map of which answer is correct for each question of the form:
            // { "a": [0, 1, 0, ...], "b": [1, 0, 0, ...], "c": [0, 0, 1, ...], "d": [0, 0, 0, ...] }
            // where the 1 in each column represents the correct answer choice for that question
            correctnessMatrix: Object
        },
        data() {
            return {
                // current question number. Initialize to 0
                currentQuestionNumber: 0,
                // results array to keep track of correctness of each question. Initialized to [null, null, ...]
                results: Array(this.questions.length).fill(null),
                // boolean to disable button clicks while processing a click. Initially false (click enabled)
                buttonDisabled: false
            }
        },
        methods: {
            // Handle button clicks, process correctness, and keep track of current question number and results
            async handleClick(input) {
                // disable click
                this.buttonDisabled = true;
                // extract the result value for this button from the correctness matrix: 0 or 1
                let result = this.correctnessMatrix[input][this.currentQuestionNumber]
                if (result === 1) { // correct answer selected
                    this.flashGreen(900)
                    // wait 1250ms and increment the question number, moving on to the next question
                    await this.sleep(1250)
                    this.currentQuestionNumber++

                    // put O in results array if this question has not been answered incorrectly yet
                    if (this.results[this.currentQuestionNumber] !== 'X') {
                        this.results[this.currentQuestionNumber] = 'O'
                    }

                    // if this was the last question, set all buttons invisible. Else, set all visible
                    if(this.currentQuestionNumber === this.questions.length) {
                        this.setAllInvisible()
                    }
                    else {
                        this.setAllVisible()
                    }

                    // enable click
                    this.buttonDisabled = false
                }
                else { // incorrect answer selected
                    this.flashRed(750)
                    // hide the button that was clicked and put X in the results array
                    document.getElementById(input).style.visibility = 'hidden'
                    this.results[this.currentQuestionNumber] = 'X'

                    // wait 750ms and enable button clicks
                    await this.sleep(750)
                    this.buttonDisabled = false
                }
            },
            // Method to set all buttons visible
            setAllVisible() {
                document.getElementById('a').style.visibility = 'visible'
                document.getElementById('b').style.visibility = 'visible'
                document.getElementById('c').style.visibility = 'visible'
                document.getElementById('d').style.visibility = 'visible'
            },
            // Method to hide all buttons
            setAllInvisible() {
                document.getElementById('a').style.visibility = 'hidden'
                document.getElementById('b').style.visibility = 'hidden'
                document.getElementById('c').style.visibility = 'hidden'
                document.getElementById('d').style.visibility = 'hidden'
            },
            // Method to flash the question header red for {ms} milliseconds
            flashRed(ms) {
                document.getElementById('question-header').style.color = 'red'
                setTimeout(() => {
                    document.getElementById('question-header').style.color = 'white'
                }, ms)
            },
            // Method to flash the question header green for {ms} milliseconds
            flashGreen(ms) {
                document.getElementById('question-header').style.color = '#20f535'
                setTimeout(() => {
                    document.getElementById('question-header').style.color = 'white'
                }, ms)
            },
            // Method that returns a Promise to sleep for {ms} milliseconds
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms))
            },
        }
    }
</script>

<style scoped>
    .button-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .button-container button {
        width: 25%;
        height: 72vh;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #ffffff;
        background-color: #000000;
        border: none;
        border-top: 3px solid #ffffff;
    }
    .button-container button:hover {
        cursor: pointer;
        color: #000000;
    }

    #question-header {
        font-size: 300%;
        padding-top: 2.5%;
        padding-left: 5%;
        padding-right: 5%;
    }

    #a:hover {
        background-color: #daebff;
    }
    #b:hover {
        background-color: #dcffd2;
    }
    #c:hover {
        background-color: #feffa9;
    }
    #d:hover {
        background-color: #ffcccc;
    }
</style>