import { sentence as importedSentence } from "./library";

const div: HTMLDivElement = document.createElement("div");
div.innerHTML = importedSentence;
document.body.appendChild(div);