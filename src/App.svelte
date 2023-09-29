<script>
  import { onMount } from 'svelte'
  import { gls, changeLanguage } from './lib/languages'
  //import { db } from './lib/database.js'
  //import { ref, onValue, get, set } from "firebase/database"
  import { sortByPunchesAsc, sortByPunchesDesc } from './lib/sortlib.js'

  import LanguageChanger from './components/LanguageChanger.svelte'
  import BlackSheep from './components/BlackSheep.svelte'
  import TelegramLink from './components/TelegramLink.svelte'
  import SortDropdown from './components/SortDropdown.svelte'
  import DovisMotherScreamer from './components/DovisMotherScreamer.svelte'

  let blackSheeps = [];
  let blackSheepsVisible = [];

  const underConstruction = false;
  let blackSheepsSortType = 0;

  //const blackSheepsRef = ref(db, '/black_sheeps');

  function sortSheeps(sortType) {
    if (blackSheepsSortType === 0) {
      blackSheepsVisible = [...blackSheeps];
    }

    if (blackSheepsSortType === 1) {
      blackSheepsVisible = [...blackSheeps].reverse();
    }

    if (blackSheepsSortType === 2) {
      blackSheepsVisible = [...blackSheeps].sort(sortByPunchesAsc);
    }

    if (blackSheepsSortType === 3) {
      blackSheepsVisible = [...blackSheeps].sort(sortByPunchesDesc);
    }
  }

  async function syncSheepsInstantly() {
    const sheepsRequest = await fetch('//api.hall-of-shame-rc.ru/black_sheeps')
    const sheepsData = await sheepsRequest.json()

    blackSheeps = sheepsData;
    sortSheeps(blackSheepsSortType);
  }

  onMount(async() => {
    syncSheepsInstantly();

    setInterval(() => {
      syncSheepsInstantly()
    }, 1000);
  })

  //onValue(blackSheepsRef, (snapshot) => {
  //  const data = snapshot.val();
  //  blackSheeps = data;
  //
  //  sortSheeps(blackSheepsSortType);
  //});

  async function onSheepPunch(eventData) {
    const sheepName = eventData.detail;

    const punchRequest = await fetch('//api.hall-of-shame-rc.ru/black_sheeps/' + sheepName + '/punch', {
      method: 'POST'
    })
    const newData = await punchRequest.json();
    //console.log("Punching sheep:", sheepName);

    let searchIndex = 0;

    blackSheeps.forEach((sheep, index) => {
      if (sheep.name === sheepName) {
        searchIndex = index;
      }
    })

    blackSheeps[searchIndex].punches = newData.updated_count;
    sortSheeps(blackSheepsSortType);

    //const punchesRef = ref(db, '/black_sheeps/' + searchIndex + '/punches');
    //let oldCount = (await get(punchesRef)).val();

    //if (oldCount === null) oldCount = 0;

    //set(punchesRef, oldCount + 1);
  }

  async function onSortSelect(sortType) {
    blackSheepsSortType = sortType.detail;
    sortSheeps(blackSheepsSortType);
    console.log("Selected:", blackSheepsSortType);
  }
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

  <TelegramLink />
  <SortDropdown on:select={onSortSelect} />
  
  <br />
  <p class="text-center w-100 fs-6">{ gls('click_to_punch') }</p>
  { #each blackSheepsVisible as blackSheepData }
    <BlackSheep sheepData={blackSheepData} on:punch={onSheepPunch} />
  { /each }
</main>

{ :else }

CONTENT WILL APPEAR LATER

{ /if }

<a id="hidden-rickroll-link" class="d-none" href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Hidden rickroll lmao</a>
<a id="hidden-tilt-link" class="d-none" href="https://youtu.be/aucr0xZj5P4?t=5" target="_blank">ВСЁ ЭТО ТИЛЬТ АНЛАК</a>

<DovisMotherScreamer />

<style>
  @media screen and (max-width: 600px) {
    .idea-n-created {
      font-size: 12pt;
    }
  }
</style>