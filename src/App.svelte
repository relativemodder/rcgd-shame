<script>
  import { onMount } from 'svelte';
  import { gls, changeLanguage } from './lib/languages'
  import { db } from './lib/database.js'
  import { ref, onValue, get } from "firebase/database";
  import LanguageChanger from './components/LanguageChanger.svelte'
  import BlackSheep from './components/BlackSheep.svelte'

  let blackSheeps = [];
  const underConstruction = false;

  const blackSheepsRef = ref(db, '/black_sheeps');

  onValue(blackSheepsRef, (snapshot) => {
    const data = snapshot.val();
    blackSheeps = data;
  });

</script>

<svelte:head>
  <title>{ gls('rcgd_shame') }</title>
</svelte:head>

{ #if !underConstruction }

<main class="mb-3">
  <h1 class="text-center mt-5 fw-bolder">{ gls('rcgd_shame') }</h1>
  <p class="text-center px-2">{ gls('site_description') }</p>
  <div class="d-flex justify-content-between mx-4">
    <LanguageChanger />
    <span class="opacity-50 fw-bold text-end d-flex align-items-center idea-n-created">{ gls('idea_n_created') }</span>
  </div>
  
  <br />
  <p class="text-center w-100 fs-6">{ gls('click_to_punch') }</p>
  { #each blackSheeps as blackSheepData }
    <BlackSheep sheepData={blackSheepData} />
  { /each }
</main>

{ :else }

CONTENT WILL APPEAR LATER

{ /if }

<style>
  @media screen and (max-width: 600px) {
    .idea-n-created {
      font-size: 12pt;
    }
  }
</style>