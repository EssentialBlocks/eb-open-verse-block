/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState, Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";
import { select, useSelect, withSelect } from "@wordpress/data";
// import {
//     useBlockProps,
//     InspectorControls,
//     getColorObjectByColorValue,
//     PanelColorSettings
// } from "@wordpress/block-editor";
import { addFilter } from "@wordpress/hooks";

/**
 * Internal Dependencies
 */
import {
  softMinifyCssStrings,
  // generateTypographyStyles,
  // generateDimensionsControlStyles,
  // generateBorderShadowStyles,
  // generateResponsiveRangeStyles,
  // generateBackgroundControlStyles,
  // duplicateBlockIdFix,
} from "../helpers";
import classNames from "classnames";

/**
 * Add custom attribute for Essential Block
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes(settings) {
  if (typeof settings.attributes === "undefined") {
    return settings;
  }
  if (
    settings.attributes.blockRoot &&
    settings.attributes.blockRoot.default == "essential_block"
  ) {
    settings.attributes = {
      ...settings.attributes,
      classHook: {
        type: "string",
        default: "",
      },
      commonStyles: {
        type: "object",
      },
      hideOnDesktop: {
        type: "boolean",
        default: false,
      },
      hideOnTab: {
        type: "boolean",
        default: false,
      },
      hideOnMobile: {
        type: "boolean",
        default: false,
      },
      customCss: {
        type: "string",
      },
      animationData: {
        type: "object",
        default: {
          style: "none",
          speed: 1000,
          delay: 0,
        },
      },
    };
  }

  return settings;
}


/**
 * Add controls and generate styles on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const { attributes, setAttributes, isSelected } = props;

    const {
      blockRoot,
      blockId,
      resOption,
      commonStyles,
      hideOnDesktop,
      hideOnTab,
      hideOnMobile,
      classHook,
      customCss,
      animationData,
    } = attributes;

    const [editorStoreForGettingPreivew, setEditorStoreForGettingPreview] = useState();
    //
    useEffect(() => {
      if (!window?.eb_conditional_localize) {
        setEditorStoreForGettingPreview(false);
        return;
      }

      if (eb_conditional_localize.editor_type === "edit-site") {
        setEditorStoreForGettingPreview("core/edit-site");
      }
      else if (eb_conditional_localize.editor_type === "edit-post") {
        setEditorStoreForGettingPreview("core/edit-post");
      }
      else {
        setEditorStoreForGettingPreview(false);
      }
    }, []);

    //Get Device type from "__experimentalGetPreviewDeviceType" Function
    const deviceType = useSelect((select) => {
      if (editorStoreForGettingPreivew && editorStoreForGettingPreivew !== false) {
        return select(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType();
      }
      return "Desktop";
    });

    // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
    useEffect(() => {
      if (blockRoot === "essential_block") {
        setAttributes({
          resOption: deviceType,
        });
      }
    }, [deviceType]);

    useEffect(() => {
      const classes =
        classHook &&
        classHook
          .split(" ")
          .filter((className) => !className.includes("eb___"))
          .join(" ");
      if (typeof animationData === "object" && animationData.style != "none") {
        const addClasses = classNames(
          classes,
          "eb_animation",
          "eb___animated",
          animationData.style
        );
        setAttributes({
          classHook: removeDuplicateClasses(addClasses),
        });
      }

      if (typeof animationData === "object" && animationData.style === "none") {
        const removeAnimateClass = classes.replace("eb_animation", "");
        setAttributes({
          classHook: removeDuplicateClasses(removeAnimateClass),
        });
      }
    }, [animationData]);

    //Generate Styles for Animation
    const animationAllStyles =
      animationData && animationData.style != "none"
        ? `
            /* Css for Animation */
            body:not(.wp-admin) .eb-parent-${blockId}.eb_animation {
                visibility: hidden;
                opacity: 0;
                transition: ease-in ${animationData.speed}ms;
            }
            body:not(.wp-admin) .eb-parent-${blockId}.eb_animation.eb__animated {
                visibility: visible;
                opacity: 1;
            }
            .eb-parent-${blockId}.eb_animation.eb__animated {
                animation-duration: ${animationData.speed}ms;
                animation-delay: ${animationData.delay}ms;
            }
        `
        : "";

    //Remove Duplicate words Function
    const removeDuplicateClasses = (string) => {
      if (typeof string !== "string") {
        return string;
      }
      if (string.length === 0) {
        return string;
      }

      return string
        .split(" ")
        .filter(function (item, pos, self) {
          return self.indexOf(item) == pos;
        })
        .join(" ");
    };

    // Set All Style in "blockMeta" Attribute
    if (blockRoot === "essential_block") {
      //Responsive Control CSS
      const responsiveStyleDesktop = `
                .wp-admin .eb-parent-${blockId} {
                    display: block;
                    opacity: ${hideOnDesktop ? 0.4 : 1};
                }
                .eb-parent-${blockId} {
                    display: ${hideOnDesktop ? "none" : "block"};
                }
            `;

      const responsiveStyleTab = `
                .editor-styles-wrapper.wp-embed-responsive .eb-parent-${blockId} {
                    display: block;
                    opacity: ${hideOnTab ? 0.4 : 1};
                }
                .eb-parent-${blockId} {
                    display: ${hideOnTab ? "none" : "block"};
                }
            `;

      const responsiveStyleMobile = `
                .editor-styles-wrapper.wp-embed-responsive .eb-parent-${blockId} {
                    display: block;
                    opacity: ${hideOnMobile ? 0.4 : 1};
                }
                .eb-parent-${blockId} {
                    display: ${hideOnMobile ? "none" : "block"};
                }
            `;

      // all css styles for large screen width (desktop/laptop) in strings ⬇
      let desktopAllStyles = softMinifyCssStrings(`
                ${responsiveStyleDesktop}
                ${animationAllStyles}
            `);

      // all css styles for Tab in strings ⬇
      let tabAllStyles = softMinifyCssStrings(`
                ${responsiveStyleTab}
            `);

      // all css styles for Mobile in strings ⬇
      let mobileAllStyles = softMinifyCssStrings(`
                ${responsiveStyleMobile}
            `);

      // Set All Style in "blockMeta" Attribute
      useEffect(() => {
        const styleObject = {
          desktop: desktopAllStyles,
          tab: tabAllStyles,
          mobile: mobileAllStyles,
        };
        if (JSON.stringify(commonStyles) != JSON.stringify(styleObject)) {
          setAttributes({
            commonStyles: styleObject,
          });
        }
      }, [attributes]);

      return (
        <Fragment>
          <BlockEdit {...props} />
          <style>
            {`
                  ${desktopAllStyles}

                  /* mimmikcssStart */

                  ${resOption === "Tablet" ? tabAllStyles : " "}
                  ${resOption === "Mobile"
                ? tabAllStyles + mobileAllStyles
                : " "
              }

                /* mimmikcssEnd */

                @media all and (max-width: 1024px) {	

                    /* tabcssStart */			
                    ${softMinifyCssStrings(tabAllStyles)}
                    /* tabcssEnd */			
                
                }
                
                @media all and (max-width: 767px) {
                    
                    /* mobcssStart */			
                    ${softMinifyCssStrings(mobileAllStyles)}
                    /* mobcssEnd */			
                
                }

                /* Custom CSS*/
                ${customCss}

            `}
          </style>

        </Fragment>
      );
    } else {
      return <BlockEdit {...props} />;
    }
  };
}, "withAdvancedControls");

/**
 * Add Attributes Filter
 */
addFilter("blocks.registerBlockType", "essential-blocks/global", addAttributes);

/**
 * Filter for modification of Edit Function
 */
addFilter("editor.BlockEdit", "essential-blocks/global", withAdvancedControls);
