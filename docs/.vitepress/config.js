module.exports = {
	base: '/en/',
	title: 'Interactive Graphics | Erasmus E-Design',
	description: 'Study materials for the course',
	themeConfig: {
		nav: [
			{ text: 'Introduction', link: '/intro/', activeMatch: '^/intro/' },
			{ text: 'Front End', link: '/frontend/', activeMatch: '^/frontend/' }
		],
		sidebar: {
			'/frontend/': getFrontEndSidebar(),		   
		}
	}
}

function getFrontEndSidebar() {
	return [
		{ text: 'Introduction', link: '/frontend/' },
		{
			text: 'Tooling',
			children: [
				{ text: 'Command Line Interface', link: '/frontend/tooling/cli' },
				{ text: 'IDE-s', link: '/frontend/tooling/ide' },
				{ text: 'Versioning', link: '/frontend/tooling/versioning' },
				{ text: 'Project managing', link: '/frontend/tooling/project-management' },
				{ text: 'Debuging tools', link: '/frontend/tooling/debugging' },
			]
		},
		{
			text: 'HTML',
			children: [
				{ text: 'History and standards', link: '/frontend/html/history' },
				{ text: 'Syntax', link: '/frontend/html/syntax' },
				{ text: 'Document object model aka DOM', link: '/frontend/html/dom' },
				{ text: 'Elements', link: '/frontend/html/elements' },
			]
		},
		{
			text: 'CSS',
			children: [
				{ text: 'Syntax', link: '/frontend/css/syntax' },
				{ text: 'Layout', link: '/frontend/css/layout' },
				{ text: 'Responsiveness / mobile-first', link: '/frontend/css/responsive' },
				{ text: 'Units', link: '/frontend/css/units' },
				{ text: 'Designing in CSS', link: '/frontend/css/design' },
				{ text: 'Transitions and animations', link: '/frontend/css/transitions' },
				{ text: 'Frameworks', link: '/frontend/css/frameworks' },
			]
		},
		{
			text: 'Javascript',
			children: [
				{ text: 'Syntax', link: '/frontend/js/syntax' },
				{ text: 'DOM manipulation', link: '/frontend/js/dom' },
				{ text: 'Events', link: '/frontend/js/events' },
				{ text: 'Frameworks', link: '/frontend/js/frameworks' },
			]
		},
	]
}