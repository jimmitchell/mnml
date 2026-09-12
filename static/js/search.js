var resultsContainer = document.getElementById("list_results");
var maxResults = parseInt(resultsContainer.dataset.maxResults, 10) || 5;

var archive_results = {};

function runSearch(q) {
	resultsContainer.innerHTML = "";

	if (q.length > 0) {
		var resultsFound = false;
		var resultCount = 0;

		for (var i = 0; i < archive_results.items.length; i++) {
			var item = archive_results.items[i];
			var title_lower = item.title.toLowerCase();
			var text_lower = item.content_text.toLowerCase();

			if (title_lower.includes(q) || text_lower.includes(q)) {
				var p_node = document.createElement("p");
				var link_node = document.createElement("a");
				var d = Date.parse(item.date_published);
				var date_s = new Date(d).toLocaleDateString().substr(0, 10);
				var date_node = document.createTextNode(date_s);
				link_node.appendChild(date_node);
				link_node.href = item.url;
				var title_node = null;

				if (item.title.length > 0) {
					title_node = document.createElement("span");
					title_node.appendChild(document.createTextNode(": "));
					var bold_node = document.createElement("b");
					bold_node.textContent = item.title;
					title_node.appendChild(bold_node);
				}

				var s = item.content_text;
				if (s.length > 200) {
					s = s.substr(0, 200) + "...";
				}

				var text_node = document.createElement("span");
				text_node.textContent = ": " + s;

				p_node.appendChild(link_node);

				if (title_node != null) {
					p_node.appendChild(title_node);
				}

				p_node.appendChild(text_node);
				resultsContainer.appendChild(p_node);

				resultCount++;
				resultsFound = true;

				if (resultCount >= maxResults) {
					break;
				}
			}
		}

		resultsContainer.style.display = resultsFound ? "block" : "none";
	} else {
		resultsContainer.style.display = "none";
	}
}

function submitSearch(q) {
	runSearch(q);

	const url = new URL(window.location.href);
	url.searchParams.set("q", q);
	history.pushState({}, "", url);
}

document.addEventListener("DOMContentLoaded", function () {
	fetch("/archive/index.json")
		.then(response => response.json())
		.then(data => {
			archive_results = data;

			const url = window.location.href;
			const params = new URLSearchParams(new URL(url).search);
			const q = params.get("q");

			if (q && q.length > 0) {
				document.getElementById("input_search").value = q;
				runSearch(q);
			}
		});
});