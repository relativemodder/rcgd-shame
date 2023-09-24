<script>
	import { gls, changeLanguage, getCurrentLanguage } from '../lib/languages.js'

	let currentLanguage = getCurrentLanguage();

	function switchLanguage(toLang) {
		currentLanguage = toLang;
		changeLanguage(toLang);
		location.reload();
	}
</script>

<div class="btn-group">
	{ #each ["en", "ru"] as lang, index }
		<a 
			on:click={() => {switchLanguage(lang)}}
			href="#" 
			class={"d-flex align-items-center btn btn-" + (lang !== currentLanguage ? "outline-" : "") + "light"} 
			>
			{ gls('title', lang) }
		</a>
	{ /each }
</div>

<style>
	.language-changer {
		text-decoration: none;
		font-size: 12pt;
	}
	.language-changer img {
		scale: 0.8;
	}
</style>