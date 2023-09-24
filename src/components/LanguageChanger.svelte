<script>
	import ruFlag from '../assets/ru-flag.png'
	import enFlag from '../assets/en-flag.png'
	import { gls, changeLanguage, getCurrentLanguage } from '../lib/languages.js'

	const currentLanguage = getCurrentLanguage();

	function switchLanguage() {
		changeLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
	}
</script>

<a href="/" class="language-changer ms-4" on:click={switchLanguage}>
{ #if currentLanguage === "ru" }
	<img src={enFlag} />
	{ gls('switch_to', 'en') }
{ :else }
	<img src={ruFlag} />
	{ gls('switch_to', 'ru') }
{ /if }	
</a>

<style>
	.language-changer {
		text-decoration: none;
		font-size: 12pt;
	}
	.language-changer img {
		scale: 0.8;
	}
</style>