/**
 * External Dependencies
*/
import StyleEditor from 'react-style-editor';

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    TextareaControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal Dependencies
*/
import AnimationControls from '../../controls/animation-control';

export default function AdvancedControls(props) {
    const { attributes, setAttributes } = props;

    const {
        blockId,
        customCss,
        hideOnDesktop,
        hideOnTab,
        hideOnMobile,
    } = attributes;

    return (
        <>
            <PanelBody title={__("Responsive Control", "essential-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__("Hide on Desktop", "essential-blocks")}
                    checked={hideOnDesktop}
                    onChange={() =>
                        setAttributes({ hideOnDesktop: !hideOnDesktop })
                    }
                />
                <ToggleControl
                    label={__("Hide on Tab", "essential-blocks")}
                    checked={hideOnTab}
                    onChange={() =>
                        setAttributes({ hideOnTab: !hideOnTab })
                    }
                />
                <ToggleControl
                    label={__("Hide on Mobile", "essential-blocks")}
                    checked={hideOnMobile}
                    onChange={() =>
                        setAttributes({ hideOnMobile: !hideOnMobile })
                    }
                />
            </PanelBody>

            <AnimationControls attributes={attributes} setAttributes={setAttributes} />

            <PanelBody title={__("Custom CSS", "essential-blocks")} initialOpen={false}>
                <StyleEditor
                    defaultValue={`
                        .${blockId} {
                            /*position: relative;*/
                        }
                        @media (max-width: 767px) {
                            .${blockId} {
                                /*display: block;*/
                            }
                        }
                    `}
                    value={customCss}
                    onChange={(value) => setAttributes({ customCss: value })}
                />
            </PanelBody>
        </>
    )
}