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
            className={`eb-openverse-wrapper ${blockId} img-style-${stylePreset} ${attributionStyle}  ${hoverEffect}`}
            data-id={blockId}
          >
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
                  {imageAttr.license && (
                    <span>
                      {imageAttr.licenseUrl && (
                        <>
                          {__(" Is licensed under ", "eb-openverse-block")}
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
          </figure>
        </div>
      )}
    </div>
  );
};

export default save;
