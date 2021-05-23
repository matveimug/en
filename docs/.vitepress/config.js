module.exports = {
	base: '/en/',
	title: 'Interactive Graphics | Erasmus E-Design',
	description: 'Study materials for the course',
	themeConfig: {
		nav: [
			{ text: '01.Introduction', link: '/intro/', activeMatch: '^/intro/' },
			{ text: '02.Front End', link: '/frontend/', activeMatch: '^/frontend/' },
			{ text: '03.Design', link: '/design/', activeMatch: '^/design/' },
		],
		sidebar: {
			'/intro/': getIntroSidebar(),
			'/design/': getDesignSidebar(),
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

function getIntroSidebar() {
	return [
		{ text: 'Before we start', link: '/intro/' },
		{
			text: 'The Introduction',
			children: [
				{ text: 'What is Interactive Graphics?', link: '/intro/intro/what' },
				{ text: 'History of IG', link: '/intro/intro/history' }
			]
		},
		{
			text: 'The Process',
			children: [
				{ text: 'The Brief', link: '/intro/planning/brief' },
				{ text: 'Setting up the project', link: '/intro/planning/setup' },
				{ text: 'Time schedule', link: '/intro/planning/schedule' },
				{ text: 'Pricing', link: '/intro/planning/pricing' },
				{ text: 'Documenting and archiving', link: '/intro/planning/documenting' },
			]
		},
		{
			text: 'The Ergonomics',
			children: [
				{ text: 'This', link: '/intro/ergonomics/this' },
				{ text: 'That', link: '/intro/ergonomics/that' },
			]
		},
		{
			text: 'The Community',
			children: [
				{ text: 'Inspiration, know-how, communication', link: '/intro/community/inspiration' },
				{ text: 'Tools', link: '/intro/community/tools' },
				{ text: 'Resources', link: '/intro/community/resources' },
			]
		},
	]
}

function getDesignSidebar() {
	return [
		{ text: 'UI/UX design and prototyping', link: '/design/' },
		{
			text: 'Usability and accessibility',
			children: [
				{ text: 'Usability', link: '/design/usability/usability' },
				{ text: 'Accessibility', link: '/design/usability/accessibility' },
				{ text: 'Color and contrast', link: '/design/usability/color' },
				{ text: 'Typography', link: '/design/usability/typography' },
				{ text: 'Semantics', link: '/design/usability/semantics' },
			]
		},
		{
			text: 'Composition',
			children: [
				{ text: 'Design patterns', link: '/design/composition/patterns' },
				{ text: 'Layout / grid', link: '/design/composition/layout' },
				{ text: 'Visual hierarchy', link: '/design/composition/hierarchy' },
			]
		},
		{
			text: 'Animation',
			children: [
				{ text: 'Types of web animation', link: '/design/animation/types' },
				{ text: 'Animation principles', link: '/design/animation/principles' },
				{ text: 'Main concepts', link: '/design/animation/concepts' },
			]
		},
		{
			text: 'Prototyping',
			children: [
				{ text: 'Analyze', link: '/design/prototype/analyze' },
				{ text: 'Pen and paper', link: '/design/prototype/paper' },
				{ text: 'Lo-Fi prototypes', link: '/design/prototype/lofi' },
				{ text: 'Software', link: '/design/prototype/software' },
				{ text: 'Interaction', link: '/design/prototype/interaction' },
				{ text: 'Hi-Fi prototypes', link: '/design/prototype/hifi' },
			]
		},
	]
}