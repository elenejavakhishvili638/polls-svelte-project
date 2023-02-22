<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore";
  export let polls = [];

  //subscribe to data in store - this fires callback function once we subscribe to the store,
  //callback function takes in a parameter a data that we get from a store.
  //when the data changes then refires callback function and pass the updated the data to us

  PollStore.subscribe((data) => {
    polls = data;
  });
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <div>
      <PollDetails {poll} on:handleVote />
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
