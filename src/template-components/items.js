
import { useEffect, useState } from "@wordpress/element";
export default function Items(props) {
	const { data, selectItem, setSelectItem, loading, setLoading } = props;

	useEffect(() => {
		setTimeout(()=> {
			setLoading(false)
		},1000)
	}, [loading])

	return (
		<div className={`eb-openverse-grid ${loading ? 'hide' : 'show'}`}>
			{typeof data === "object" &&
				data.map((item) => (
					<div
						className={`eb-openverse-grid-item ${
							selectItem == item ? "selected" : ""
						}`}
						onClick={() => setSelectItem(item)}
					>
						<div className="eb_openverse_item_thumbnail">
							<img src={item.url} />
						</div>
					</div>
				))}
		</div>
	);
}
