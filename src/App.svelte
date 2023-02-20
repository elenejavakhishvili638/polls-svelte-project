<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/FOoter.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  //tabs

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (event) => {
    activeItem = event.detail;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <p>Poll list component goes here</p>
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
