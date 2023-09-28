<script>
	import { getCurrentLanguage, gls } from '../lib/languages.js'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher();

	let isPunch = false;
	let isFistVisible = false;
	let isShaking = false;
	let canPunch = true;
	let punches = 0;

	function sleep(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, ms)
		})
	}

	async function twentyEightPunches() {
		alert(gls('twenty_eight_title') + " " + gls('twenty_eight_text'))
		//Swal.fire(
		//  gls('twenty_eight_title'),
		//  gls('twenty_eight_text'),
		//  'question'
		//)
	}

	async function dovisMother() {
		const screamer = document.createElement("audio")
		screamer.src = '/screamer.mp3'

		screamer.addEventListener("play", async() => {
			setTimeout(() => {
				const intervalID = setInterval(() => {
				    document.querySelector(".dovi-s-mother").classList.toggle("d-none")
				}, 40)
				setTimeout(() => {
				    clearInterval(intervalID)
					document.querySelector(".dovi-s-mother").remove();
				}, 2000)
			}, 650);
		})

		screamer.play()
	}

	async function rickRoll() {
		document.querySelector("#hidden-rickroll-link").click();
	}

	export let sheepData;

	async function punchSheep(e) {
		e.preventDefault();
		if (!canPunch) return;

		punches++;

		dispatch('punch', sheepData.name);

		if (punches == 28) {
			twentyEightPunches();
		}

		if (punches == 500) {
			await rickRoll();
		}

		if (punches == 666) {
			await dovisMother();
		}

		canPunch = false;
		isFistVisible = true;

		await sleep(50);
		isPunch = true;

		await sleep(50);
		isShaking = true;

		await sleep(100);
		isPunch = false;
		await sleep(100);

		isShaking = false;
		isFistVisible = false;
		canPunch = true;
	}

</script>

<div class={"fist" + (isPunch ? " punch" : "") + (isFistVisible ? '' : " d-none")}>
	<img src="/fist.png" />
</div>

<a href="#" class={"card black-sheep mx-4 mt-4" + (isShaking ? " shaking" : "")} on:click={punchSheep}>
	<div class="card-body d-flex align-items-center">
		<img class="avatar" src={sheepData.image_url} />
		<div class="ms-4">
			<h3 class="fw-bold">{ sheepData.name }</h3>
			<p class="fw-medium">
				{@html sheepData.description[getCurrentLanguage()] }
			</p>
			<small>{ gls('punches_count') + punches }, { gls('total_punches') + (sheepData.punches != null ? sheepData.punches : 0) }</small>
		</div>
	</div>
</a>

<style>
	.black-sheep {
		transition: 0.5s;
		text-decoration: none;
	}

	.black-sheep.shaking {
		animation: shakinganimation 0.2s;
	}

	@keyframes shakinganimation {
		from {
			background-color: red;
			transform: translateX(-5px) translateY(0px);
		}
		50% {
			transform: translateX(5px) translateY(30px);
		}
		to {
			transform: translateX(0px) translateY(0px);
		}
	}

	.black-sheep .avatar {
		border-radius: 100%;
		width: 90px;
	}

	.black-sheep:hover {
		background-color: var(--bs-secondary-bg);
	}

	.fist {
		transition: 0.1s;
		margin-left: 40vw;
		opacity: 0.0;
		transform: translateY(0px);
	}

	.fist.punch {
		opacity: 1.0;
		transform: translateY(27px);
	}

	.fist img {
		transform: rotate(-90deg);
	}
</style>