module.exports = {
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
		{
			text: 'Tooling',
			children: [
				{ text: 'Introduction', link: '/frontend/' },
				{ text: 'Command Line Interface', link: '/frontend/cli' },
				{ text: 'IDE-s', link: '/frontend/configuration' },
				{ text: 'Versioning', link: '/frontend/assets' },
				{ text: 'Project managing', link: '/frontend/markdown' },
				{ text: 'Debuging tools', link: '/frontend/using-vue' },
				{ text: 'Deploying', link: '/frontend/deploy' }
			]
		},
		{
			text: 'HTML',
			children: [
				{ text: 'History and standards', link: '/frontend/frontmatter' },
				{ text: 'Syntax', link: '/frontend/global-computed' },
				{ text: 'Document object model aka DOM', link: '/frontend/global-component' },
				{ text: 'Elements', link: '/frontend/customization' },
			]
		}
	]
}