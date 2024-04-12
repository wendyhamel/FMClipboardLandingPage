tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Bai Jamjuree', 'sans-serif'],
		},
		extend: {
			colors: {
				'cyan': 'hsl(171, 66%, 44%)',
				'dark-cyan': 'hsl(167, 34%, 46%)',
				'blue': 'hsl(233, 100%, 69%)',
				'dark-blue': 'hsl(233, 59%, 58%)',
				'dark-gray-blue': 'hsl(210, 10%, 33%)',
				'gray-blue': 'hsl(201, 11%, 66%)',
			},
			borderWidth: {
				'3': '3px'
			},
			fontSize: {
				'1.5xl': ['1.45rem', {lineHeight: '2rem'}],
				'2.5xl': ['1.675rem', {lineHeight: '2.25rem'}],
				'3.5xl': ['1.95rem', {lineHeight: '2.5rem'}],
				'4.5xl': ['2.8rem', {lineHeight: '2.8rem'}],
			}
		}
	}
}