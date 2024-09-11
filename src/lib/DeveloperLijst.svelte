<script lang="ts">
  import type { DeveloperType } from '../types/developer';
  import Developer from './Developer.svelte';

  export let developers: Array<DeveloperType> = [];
</script>

<div>   
  {#each developers as developer, index (developer.id)}
    <Developer {...developer}/> 
  {/each}
</div>

<style>
  div {
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 300px;
    grid-gap: 2rem;
  }
</style>
