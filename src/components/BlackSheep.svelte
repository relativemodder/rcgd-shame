<script>
	import { getCurrentLanguage, gls } from '../lib/languages.js'
	import fistImage from '../assets/fist.png'
	import Swal from 'sweetalert2'

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
		Swal.fire(
		  gls('twenty_eight_title'),
		  gls('twenty_eight_text'),
		  'question'
		)
	}

	async function punchSheep(e) {
		e.preventDefault();
		if (!canPunch) return;

		punches++;

		if (punches == 28) {
			twentyEightPunches();
		}

		canPunch = false;
		isFistVisible = true;

		await sleep(50);
		isPunch = true;

		await sleep(50);
		isShaking = true;

		await sleep(500);
		isPunch = false;
		await sleep(500);

		isShaking = false;
		isFistVisible = false;
		canPunch = true;
	}

	export let sheepData;
</script>

<div class={"fist" + (isPunch ? " punch" : "") + (isFistVisible ? '' : " d-none")}>
	<img src={fistImage} />
</div>

<a href="#" class={"card black-sheep mx-4 mt-4" + (isShaking ? " shaking" : "")} on:click={punchSheep}>
	<div class="card-body d-flex align-items-center">
		<img class="avatar" src={sheepData.image_url} />
		<div class="ms-4">
			<h3 class="fw-bold">{ sheepData.name }</h3>
			<p class="fw-medium">
				{@html sheepData.description[getCurrentLanguage()] }
			</p>
			<small>{ gls('punches_count') + punches }</small>
		</div>
	</div>
</a>

<style>
	.black-sheep {
		transition: 0.5s;
		text-decoration: none;
	}

	.black-sheep.shaking {
		animation: shakinganimation 0.5s;
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