<script lang="ts">
  import leden from "./gilde-store"
  import DeveloperLijst from './lib/DeveloperLijst.svelte';
  import type { DeveloperType } from './types/developer';

  let developers: Array<DeveloperType> = [
    {
      id: 'AL00001',
      voornaam: 'Bob',
      achternaam: 'de Bouwer',
      expertise: 'FE development in TS en svelte',
      avatar: '/man.png',
    },
    {
      id: 'AL00002',
      voornaam: 'Lisa',
      achternaam: 'Simpson',
      expertise: 'BE development in NodeJS',
      avatar: '/vrouw.png',
    },
    {
      id: 'AL00003',
      voornaam: 'Jane',
      achternaam: 'Doe',
      expertise: 'Lead developer',
      avatar: '/vrouw.png',
    },
    {
      id: 'AL00004',
      voornaam: 'Hannibal',
      achternaam: 'Smith',
      expertise: 'Architect',
      avatar: '/man.png',
    },
  ];

  function addLid(event: CustomEvent<DeveloperType>) {
    const nieuwLid = event.detail;
    leden.update((leden) => [...leden, nieuwLid]);
  }
</script>

<main>
  <h1>Welkom Collega's</h1>
  <h2>Typescript Gilde</h2>
  <ol>
    {#each $leden as { voornaam, ...rest }}
      <li>{voornaam} {rest.achternaam}</li>
    {/each}
  </ol>
  <div>
    <DeveloperLijst {developers} />
  </div>
</main>

<style>
  /* Styling is Scoped */
  div {
    width: 250px;
  }
</style>
