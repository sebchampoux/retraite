const IMGS = [
	'bobcat.jpg',
	'lake-george.jpg',
	'comet.webp',
];

document.addEventListener('DOMContentLoaded', () => {
	simplyCountdown('[data-countdown-wrapper]', {
		year: 2067,
		month: 12,
		day: 11,
		hours: 16,
		minutes: 0,
		seconds: 0,
		words: {
			months: { root: 'mois', lambda: (root) => root },
			days: { root: 'jour', lambda: (root, n) => n > 1 ? root + 's' : root },
			hours: { root: 'heure', lambda: (root, n) => n > 1 ? root + 's' : root },
			minutes: { root: 'minute', lambda: (root, n) => n > 1 ? root + 's' : root },
			seconds: { root: 'seconde', lambda: (root, n) => n > 1 ? root + 's' : root }
		},
	});

	const randomBackgroundIndex = Math.floor(Math.random() * IMGS.length);

	document.body.style.setProperty('background-image', `url(imgs/${IMGS[randomBackgroundIndex]})`);
});
