//write and read from the store
import { writable } from "svelte/store";

//pass the initial data to writable
const PollStore = writable([
  {
    id: 1,
    question: "Python or JavaScript?",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
