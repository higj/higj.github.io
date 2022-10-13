window.MathJax = {
	chtml: {
		scale: 1.1
	},
	tex: {
		inlineMath: [["$","$"],["\\\\(","\\\\)"]],
		displayMath: [["$$","$$"],["\\[","\\]"]],
		processEscapes: !0,
		noundefined: {
			color: "red",
			background: "#FFEEEE",
			size: "90%"
		},
		macros: {
			href: "{}"
		}
	},
	options: {
		ignoreHtmlClass: "tex2jax_ignore|dno"
	}
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();
