<script>
  import { gls, changeLanguage } from './lib/languages'
  import LanguageChanger from './components/LanguageChanger.svelte'
  import BlackSheep from './components/BlackSheep.svelte'
  import blackSheeps from './black_sheeps.json'

  const underConstruction = true;

</script>

<svelte:head>
  <title>{ gls('rcgd_shame') }</title>
</svelte:head>

{ #if !underConstruction }

<main>
  <h1 class="text-center mt-5 fw-bolder">{ gls('rcgd_shame') }</h1>
  <p class="text-center px-2">{ gls('site_description') }</p>
  <LanguageChanger />
  <br />
  <p class="text-center w-100 fs-6">{ gls('click_to_punch') }</p>
  { #each blackSheeps as blackSheepData }
    <BlackSheep sheepData={blackSheepData} />
  { /each }
</main>

{ :else }

CONTENT WILL APPEAR LATER

{ /if }