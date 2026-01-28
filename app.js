const urlParams = new URLSearchParams(window.location.search);
const blockedUrl = urlParams.get('url') || window.location.hostname;

if (blockedUrl) {
  document.getElementById("website-name").innerText = blockedUrl;
}
const quotes = [
  "The soul has no silicon; it breathes in the gaps that data cannot fill.",
  "Art is not a result; it is the record of a human heart beating through a struggle.",
  "A machine can mimic a brushstroke, but it can never feel the tremor of the hand that made it.",
  "The magic of life lies in our imperfections—the very things an algorithm seeks to 'fix.'",
  "Consciousness is not a calculation.",
  "You cannot automate empathy without turning it into a script.",
  "The most beautiful things in life are inefficient.",
  "A digital ghost has no memory, only a database.",
  "True wisdom is earned through suffering, not downloaded through processing.",
  "If a machine creates it, it is a product. If a human creates it, it is a witness.",
  "Don't let a prompt replace your prose.",
  "The shortcut is the enemy of the craft.",
  "Real connection requires eye contact, not an interface.",
  "We are losing the art of being bored, which is where the best ideas are born.",
  "A tool should extend the hand, not replace the mind.",
  "Your intuition is a muscle; if you outsource it, it withers.",
  "The nuance of a 'vibe' cannot be captured in a string of ones and zeros.",
  "Protect your attention; it is the only currency the machines can't print.",
  "The goal of life is to live it, not to have it summarized for you.",
  "Deep work is a human superpower in an age of automated noise.",
  "Code has no conscience.",
  "We must not become the biological tech support for our own inventions.",
  "A world governed by probability has no room for the miraculous.",
  "Efficiency is the virtue of a machine; kindness is the virtue of a human.",
  "Don't trade your agency for convenience.",
  "An algorithm knows what you might like, but it doesn't know who you are.",
  "Technology should be our servant, not our architect.",
  "The danger is not that machines will think like men, but that men will think like machines.",
  "Data is a shadow; it is not the light that cast it.",
  "Keep your hands on the wheel of your own destiny.",
  "Hallucination is a bug in AI; imagination is a feature in humans.",
  "Style is the signature of a soul.",
  "A machine can give you an answer, but it can never ask a meaningful question.",
  "Greatness comes from breaking the rules, not following a pattern.",
  "The messiness of humanity is where the truth lives.",
  "Calculated 'creativity' is just sophisticated plagiarism.",
  "Let your mistakes be your own; they are your best teachers.",
  "A computer can simulate the ocean, but it can never get wet.",
  "Curation is an act of love; generation is an act of math.",
  "We don't need faster thoughts; we need deeper ones.",
  "Stay analog in a digital storm.",
  "Valuing the process over the output is an act of rebellion.",
  "A handwritten letter carries a weight no email can match.",
  "The most important parts of you are the ones that can’t be indexed.",
  "Choose the long way; the view is better when you've earned it.",
  "Don't let the 'average' of a dataset define your unique potential.",
  "The pulse of a live performance can never be synthesized.",
  "Your perspective is the only thing that isn't reproducible.",
  "Be the glitch in the system that proves humans are still here.",
  "The future belongs to those who still know how to feel."
];
let shuffle = Math.floor(Math.random() * quotes.length);
let randomizedquote = quotes[shuffle];
document.getElementById("quotes").innerText = randomizedquote;
const bgUrls = ["bush.png", "more-leaves-on-green.png", "5-dots.png", "y-so-serious.png", "moroccan-flower-dark.png", "double-bubble-dark.png", "webb-dark.png"];
let bgShuffle = Math.floor(Math.random() * bgUrls.length);
let randomBg = bgUrls[bgShuffle];
const element = document.querySelector('body');
element.style.backgroundImage = `url(${randomBg})`; 
