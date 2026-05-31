const IMGS = [
	'bobcat.jpg',
	'croatia.webp',
	'iceland.jpg',
	'lac-garda.jpg',
	'lake-george.jpg',
	'oceanside.jpg',
	'ogunquit.webp',
	'qqpart.jpg',
	'golf-floride.jpg',
];

document.addEventListener('DOMContentLoaded', () => {
	simplyCountdown('[data-countdown-wrapper]', {
		year: 2028,
		month: 5,
		day: 19,
		hours: 16,
		minutes: 0,
		seconds: 0,
		words: {
			days: { root: 'jour', lambda: (root, n) => n > 1 ? root + 's' : root },
			hours: { root: 'heure', lambda: (root, n) => n > 1 ? root + 's' : root },
			minutes: { root: 'minute', lambda: (root, n) => n > 1 ? root + 's' : root },
			seconds: { root: 'seconde', lambda: (root, n) => n > 1 ? root + 's' : root }
		},
	});

	const randomBackgroundIndex = Math.floor(Math.random() * IMGS.length);

	document.body.style.setProperty('background-image', `url(imgs/${IMGS[randomBackgroundIndex]})`);
});
