//! This program was created for the Mixed Messages project in the Codecademy Full-Stack Engineer course.

// note: Output is a random-ish message like so: [greeting], [pronoun] [adjective1] [conjunction] [adjective2] [relationship][endingMark]
//* example: 'Hello, you weird but nice friend.'

function chooseOf(choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}

const questionGreetings = ['Sup', 'What\'s up', 'What now', 'What\'s going on', 'How\'s it going', 'What\'s new', 'How are you', 'What\'s happening', 'How\'ve you been', 'What\'s the latest'];
const normalGreetings = ['Hello', 'Greetings', 'Bye', 'Hi', '\'Ello', 'Hey', 'Howdy', 'Good day', 'Hiya', 'Salutations', 'Hey there'];
const pronouns = ['you', 'my', 'our', 'their', 'her', 'his'];
const niceAdjectives = ['nice', 'cool', 'interesting', 'smart', 'pretty', 'beautiful', 'handsome', 'funny', 'happy', 'active', 'kind', 'charming', 'graceful', 'brilliant', 'talented', 'thoughtful', 'creative', 'friendly', 'generous', 'lovely'];
const meanAdjectives = ['weird', 'strange', 'sad', 'angry', 'boring', 'dumb', 'crazy', 'lazy', 'tall', 'short', 'fat', 'skinny', 'ugly', 'stupid', 'annoying', 'rude', 'arrogant', 'selfish', 'mean', 'jealous', 'sneaky'];
const relationships = ['friend','colleague','neighbor','stranger','acquaintance','buddy','pal','companion','partner','teammate','classmate','roommate','coworker','peer','associate','ally','rival','enemy','mentor','student'];

function makeMessage() {
    const greeting = chooseOf(questionGreetings.concat(normalGreetings));
    const pronoun = chooseOf(pronouns);
    const adjective1 = chooseOf(niceAdjectives.concat(meanAdjectives));
    let adjective2 = chooseOf(niceAdjectives.concat(meanAdjectives));
    const isAdjectivesSameType = niceAdjectives.includes(adjective1) === niceAdjectives.includes(adjective2);
    const conjunction = isAdjectivesSameType ? 'and' : 'but';

    while (adjective1 === adjective2) { 
        adjective2 = chooseOf(niceAdjectives.concat(meanAdjectives));
    }

    const relationship = chooseOf(relationships);
    const endingMark = questionGreetings.includes(greeting) ? '?' : '.';

    const message = `${greeting}, ${pronoun} ${adjective1} ${conjunction} ${adjective2} ${relationship}${endingMark}`;
    document.getElementById('output').textContent = message;
}