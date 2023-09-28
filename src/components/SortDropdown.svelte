<script>
	import { createEventDispatcher } from 'svelte'
	import { gls } from '../lib/languages'

	const dispatch = createEventDispatcher();

	async function onSelect(sort_type) {
		dispatch('select', sort_type);
	}


</script>

<div class="dropdown mx-4 mt-3">
  <a class="btn btn-secondary dropdown-toggle me-4 w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    { gls('sort') }
  </a>

  <ul class="dropdown-menu w-100">
    <li>
    	<a class="dropdown-item" 
    	href="#" on:click|preventDefault={() => onSelect(0)}
    		>{ gls('by_date_asc') }
    	</a>
    </li>
    <li>
    	<a class="dropdown-item" 
    	href="#" on:click|preventDefault={() => onSelect(1)}
    		>{ gls('by_date_desc') }
    	</a>
    </li>
    <li>
    	<a class="dropdown-item" 
    	href="#" on:click|preventDefault={() => onSelect(2)}
    		>{ gls('by_punches_asc') }
    	</a>
    </li>
    <li>
    	<a class="dropdown-item" 
    	href="#" on:click|preventDefault={() => onSelect(3)}
    		>{ gls('by_punches_desc') }
    	</a>
    </li>
  </ul>
</div>