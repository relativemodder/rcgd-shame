import enStrings from '../languages/en.json'
import ruStrings from '../languages/ru.json'

function getCurrentLanguage() {
	return localStorage.getItem("language") ?? navigator.language.split('-')[0];
}

function gls(key, lang = null) {
	let current_language = getCurrentLanguage();
	if (lang !== null) {
		current_language = lang
	}
	
	if (current_language === "en") {
		return enStrings[key];
	}

	if (current_language === "ru") {
		return ruStrings[key];
	}

	return `${current_language} : ${key}`;
}

function changeLanguage(language) {
	localStorage.setItem("language", language);
	//window.location.reload();
}

export { gls, changeLanguage, getCurrentLanguage }