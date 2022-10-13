import { __ } from "@wordpress/i18n";

export default function Search(props) {
	const { setQ, setOpenverseModal, q, componentClassName, openverseDataFetch } =
		props;

	const handleKeyPress = (event) => {
		if (event.key === "Enter" && event.target.value.length != 0) {
			setQ(event.target.value);
			openverseDataFetch(true);
			setOpenverseModal(true);
		}
	};

	const handleSearch = (event) => {
		if (q.length != 0) {
			openverseDataFetch(true);
			setOpenverseModal(true);
		}
	};

	return (
		<div className={componentClassName}>
			<input
				type="search"
				name="search-form"
				id="search-form"
				class="openverse-search-input"
				placeholder={__("Search for content", "eb-openverse-block")}
				value={q}
				onChange={(e) => setQ(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<button className="openverse-search-btn" onClick={handleSearch}>
				{__("Search", "eb-openverse-block")}
			</button>
		</div>
	);
}
