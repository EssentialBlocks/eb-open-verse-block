import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
	const {
		blockId,
		horizontalAlign,
		verticalAlign,
		verticalAlignCap2,
		stylePreset,
		displayAttribution,
		attributionStyle,
		hoverEffect,
		classHook,
		imageurl,
		imageAttr,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			{imageurl && (
				<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
					<figure
						className={`eb-openverse-wrapper ${blockId} img-style-${stylePreset} ${attributionStyle} attribution-horizontal-${horizontalAlign} attribution-vertical-${verticalAlign} ${verticalAlignCap2} ${hoverEffect}`}
						data-id={blockId}
					>
						<div className="image-wrapper">
							<img src={imageurl} alt={imageAttr.title} />

							{displayAttribution && (
								<>
									<div className="image-attribution">
										{imageAttr.title && (
											<>
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
											</>
										)}
										{/* // creator */}
										{imageAttr.creator && (
											<>
												{__(" By ", "essential-blocks")}

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
											</>
										)}
										{/* // licensed */}
										{imageAttr.creator && (
											<>
												{__(" By ", "essential-blocks")}

												{imageAttr.licenseUrl && (
													<>
														{__(" is licensed under ", "essential-blocks")}
														<a
															target="_blank"
															rel="noopener noreferrer"
															href={imageAttr.licenseUrl}
															className="licensed-wrap"
														>
															{imageAttr.license +
																" " +
																imageAttr.licenseVersion}
														</a>
													</>
												)}
												{!imageAttr.licenseUrl &&
													imageAttr.license + " " + imageAttr.licenseVersion}

												{__(" .", "essential-blocks")}
											</>
										)}
									</div>
								</>
							)}
						</div>
					</figure>
				</div>
			)}
		</div>
	);
};

export default save;
