(function () {
	function makeSVG(attrs, children) {
		var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		for (var k in attrs) svg.setAttribute(k, attrs[k]);
		children.forEach(function (child) {
			var el = document.createElementNS('http://www.w3.org/2000/svg', child.tag);
			for (var k in child.attrs) el.setAttribute(k, child.attrs[k]);
			svg.appendChild(el);
		});
		return svg;
	}

	var sharedSVGAttrs = {
		width: '14', height: '14', viewBox: '0 0 24 24',
		fill: 'none', stroke: 'currentColor',
		'stroke-linecap': 'round', 'stroke-linejoin': 'round',
		'aria-hidden': 'true'
	};

	function makeCopyIcon() {
		return makeSVG(Object.assign({}, sharedSVGAttrs, { 'stroke-width': '2' }), [
			{ tag: 'rect', attrs: { x: '9', y: '9', width: '13', height: '13', rx: '2', ry: '2' } },
			{ tag: 'path', attrs: { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' } }
		]);
	}

	function makeCopiedIcon() {
		return makeSVG(Object.assign({}, sharedSVGAttrs, { 'stroke-width': '2.5' }), [
			{ tag: 'polyline', attrs: { points: '20 6 9 17 4 12' } }
		]);
	}

	function addCopyButtonToCodeBlocks() {
		var snippets = document.getElementsByClassName('highlight');
		for (var i = 0; i < snippets.length; i++) {
			var button = document.createElement('button');
			button.appendChild(makeCopyIcon());
			button.setAttribute('aria-label', 'Copy code');
			button.addEventListener('click', function () {
				var code = this.previousElementSibling.innerText;
				navigator.clipboard.writeText(code);
				this.replaceChildren(makeCopiedIcon());
				this.classList.add('copied');
				this.setAttribute('aria-label', 'Copied!');
				var self = this;
				setTimeout(function () {
					self.replaceChildren(makeCopyIcon());
					self.classList.remove('copied');
					self.setAttribute('aria-label', 'Copy code');
				}, 2000);
			});
			snippets[i].appendChild(button);
		}
	}
	document.addEventListener('DOMContentLoaded', addCopyButtonToCodeBlocks);
})();
