<script lang="ts">
  import leden from '../gilde-store';

  import type { DeveloperType } from '../types/developer';
  export let id = 'AL12345';
  export let voornaam = 'Bob';
  export let achternaam = 'de Bouwer';
  export let expertise = 'FE';
  export let avatar = './man.png';
  let pluim = false;

  function geefPluim() {
    pluim = !pluim;
  }

  let hasLid=false;

  leden.subscribe((leden: DeveloperType[]) => {
    if (leden.find((lid) => lid.id === id)) {
      hasLid = true;
    }
  });

  function addLid() {
    if (!hasLid) leden.update((leden: DeveloperType[]) => [...leden, { id, voornaam, achternaam, expertise, avatar }]);
    else {
      leden.update((leden: DeveloperType[]) => leden.filter((lid) => lid.id !== id));
      hasLid = false;
    }
  }

  $: lidText = hasLid ? 'Ga weg' : 'Wordt lid!';

  $: buttonText = pluim ? 'Pak de pluim af van' : 'Geef een pluim aan';
</script>

<div class="card">
  <img src={avatar} alt="Avatar van {voornaam}" />
  <div class="container">
    <h4 class:highlight={pluim}>{voornaam} {achternaam} ({id})</h4>
    <p>{expertise}</p>
    <div class="controls">
      <button on:click={geefPluim}>{buttonText} {voornaam}</button>
      <button on:click={addLid}>{lidText}</button>
    </div>
  </div>
</div>

<style>
  .highlight {
    color: green;
    font-weight: bold;
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 2px 16px 16px 6px;
  }

  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  p {
    margin: 0 0 16px 0;
  }

  h4 {
    margin: 4px 0 0 0;
  }
</style>
