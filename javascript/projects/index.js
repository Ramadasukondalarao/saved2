
// First attempt ------- 1

/*let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new option(voice.name, i)));
};

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})*/

 //second attempt --------2

/*let speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector("select");

// Populate the voice options dynamically
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // Clear existing options

    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = index;
        voiceSelect.appendChild(option);
    });

    // Set the default voice
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
}

// Ensure voices are loaded before populating
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
}

// Listen to button click to speak text
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;

    // Set the selected voice
    const selectedVoiceIndex = voiceSelect.value;
    speech.voice = voices[selectedVoiceIndex];

    window.speechSynthesis.speak(speech);
});  */



//Third attempt ---------- 3

let speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector("select");

// Function to populate the available voices into the dropdown
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // Clear existing options

    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = index;
        voiceSelect.appendChild(option);
    });

    // Set a default voice if voices are available
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
}

// Ensure voices are loaded before populating the dropdown
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
}

// Function to handle speaking text
document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();

    if (!text) {
        alert("Please enter some text to convert to speech.");
        return;
    }

    const selectedVoiceIndex = voiceSelect.value;
    speech.voice = voices[selectedVoiceIndex];
    speech.text = text;

    // Ensure the entire paragraph is read by breaking into chunks if necessary
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    splitAndSpeak(text, speech);
});

// Function to split large text into smaller chunks
function splitAndSpeak(text, speech) {
    const MAX_CHAR = 1000; // Safe character limit for most browsers
    const chunks = splitTextIntoChunks(text, MAX_CHAR);

    let currentIndex = 0;

    const speakNextChunk = () => {
        if (currentIndex < chunks.length) {
            speech.text = chunks[currentIndex];
            currentIndex++;
            window.speechSynthesis.speak(speech);
        }
    };

    // Speak each chunk sequentially
    speech.onend = speakNextChunk;

    // Start with the first chunk
    speakNextChunk();
}

// Utility function to split text into chunks
function splitTextIntoChunks(text, maxLength) {
    const sentences = text.match(/[^\.!\?]+[\.!\?]+|\s*$/g); // Split by sentences
    const chunks = [];
    let currentChunk = "";

    sentences.forEach((sentence) => {
        if ((currentChunk + sentence).length <= maxLength) {
            currentChunk += sentence;
        } else {
            chunks.push(currentChunk.trim());
            currentChunk = sentence;
        }
    });

    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }

    return chunks;
}
