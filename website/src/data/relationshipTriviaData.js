export const triviaData = {
    questions: [
        'Where did we have our first date?',
        'Where did we have our second date?',
        'Where did we meet?',
        'Which of these did you say when I gave you my phone to put your name and number in?'
    ],
    answers: {
        a: ['Pho Time', 'Pho Time', 'Lecture', '"Should I put the last name too?"'],
        b: ['Libe Slope', 'Libe Slope', 'Staircase of Beta Theta Pi', '"I\'m so tipsy right now"'],
        c: ['Libe Cafe', 'Uris Library', 'Great Hall of Beta Theta Pi', '"I\'m not giving you my number"'],
        d: ['Collegetown Bagels', 'The Movie Theater', 'Basement of Beta Theta Pi', '"Long Island number"']
    },
    correctnessMatrix: {
        a: [0, 1, 0, 1], 
        b: [0, 0, 0, 0], 
        c: [1, 0, 0, 0], 
        d: [0, 0, 1, 0]
    },
}