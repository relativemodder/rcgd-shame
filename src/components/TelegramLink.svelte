<script>
	import { getCurrentLanguage, gls } from '../lib/languages.js'

</script>

<a href="https://t.me/rcgd_shame" class="mx-4 mt-4 card telegram-link" target="_blank">
	<i class="bi bi-telegram"></i>
	<span>{ gls('our_telegram') }</span>
</a>

<style>
	.telegram-link {
		display: flex!important;
		flex-direction: row;
		padding: 1em;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: 0.5s;
	}

	.telegram-link:hover {
		background-color: var(--bs-secondary-bg);
	}

	.telegram-link .bi-telegram {
		margin-right: 0.5em;
		font-size: 24pt;
	}
</style>