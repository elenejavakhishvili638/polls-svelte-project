<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/FOoter.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  //tabs

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (event) => {
    activeItem = event.detail;
  };

  //polls

  let polls = [
    {
      id: 1,
      question: "Python or JavaScript?",
      answerA: "Python",
      answerB: "JavaScript",
      votesA: 9,
      votesB: 15,
    },
  ];

  const addPoll = (event) => {
    const poll = event.detail;
    polls = [poll, ...polls];
    console.log(polls);
    activeItem = "Current Polls";
  };

  const handleVote = (event) => {
    const { option, id } = event.detail;

    let copiedPolls = [...polls];
    let upvotedPolls = copiedPolls.find((item) => item.id == id);

    if (option === "a") {
      upvotedPolls.votesA++;
    }
    if (option === "b") {
      upvotedPolls.votesB++;
    }

    polls = copiedPolls;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:handleVote={handleVote} />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:addPoll={addPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
