<script>
  import PollDetails from "./PollDetails.svelte";
  // import { onMount, onDestroy } from "svelte";
  import PollStore from "../stores/PollStore";
  // export let polls = [];

  //subscribe to data in store - this fires callback function once we subscribe to the store,
  //callback function takes in a parameter a data that we get from a store.
  //when the data changes then refires callback function and pass the updated the data to us

  //store result of PollStore. subscribe to a variable, subscribes and returns a function and we put in
  //onDestroy hook
  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  //we have to unsubscribe from a store - everytime we go from current polls to add new polls
  //we destroy the component and every time we go to current polls we subscribe to store again
  //in background we will have three four and more subscription, so we will unsubscribe when we go from
  //current polls - lifecycle hooks

  //when component is injected into the DOM - takes a callback and fires when mount event happens
  // onMount(() => {
  //   //grab data from database
  //   console.log("hey");
  // });

  //fires everytime component is removed from DOM even when we switch to iother componennt
  // onDestroy(() => {
  //   //unsubscribe here
  //   console.log("destroyed");
  //   unsub();
  // });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
