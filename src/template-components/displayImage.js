import { __ } from "@wordpress/i18n";

export default function DisplayImage(props) {
	const { attributes } = props;

	const { imageurl, imageAttr, displayAttribution } = attributes;

	return (
		<>
			<div className="image-wrapper">
				<img src={imageurl} alt={imageAttr.title} />
			</div>
			{displayAttribution && (
				<>
					<div className="image-attribution">
						{imageAttr.title && (
							<span>
								{imageAttr.foreignUrl && (
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={imageAttr.foreignUrl}
									>
										{imageAttr.title}
									</a>
								)}
								{!imageAttr.foreignUrl && imageAttr.title}
							</span>
						)}
						{/* // creator */}
						{imageAttr.creator && (
							<span>
								{__(" By ", "eb-openverse-block")}

								{imageAttr.creatorUrl && (
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={imageAttr.creatorUrl}
									>
										{imageAttr.creator}
									</a>
								)}
								{!imageAttr.creatorUrl && imageAttr.creator}
							</span>
						)}
						{/* // licensed */}
						{imageAttr.creator && (
							<span>
								{__(" By ", "eb-openverse-block")}

								{imageAttr.licenseUrl && (
									<>
										{__(" is licensed under ", "eb-openverse-block")}
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={imageAttr.licenseUrl}
											className="licensed-wrap"
										>
											{imageAttr.license + " " + imageAttr.licenseVersion}
										</a>
									</>
								)}
								{!imageAttr.licenseUrl &&
									imageAttr.license + " " + imageAttr.licenseVersion}

								{__(" .", "eb-openverse-block")}
							</span>
						)}
					</div>
				</>
			)}
		</>
	);
}
