/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  BlockControls,
  useBlockProps,
  BlockAlignmentToolbar,
} from "@wordpress/block-editor";
import { ToolbarButton, Toolbar } from "@wordpress/components";
import { edit } from "@wordpress/icons";
import { useEffect, useState } from "@wordpress/element";
import { select, useSelect } from "@wordpress/data";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";
import Style from "./style";

const { duplicateBlockIdFix } = window.EBOpenverseControls;

import SeachModal from "./template-components/searchModal";
import DisplayImage from "./template-components/displayImage";
import Search from "./template-components/search";
import { OpenverseMainIcon } from "./template-components/icons/openverseMainIcon";
import { ApiInfo } from "./template-components/apiInfo";

export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const {
    resOption,
    blockId,
    blockMeta,
    horizontalAlign,
    verticalAlign,
    stylePreset,
    attributionStyle,
    hoverEffect,
    imageAlign,
    classHook,
    imageurl,
    apiInfo,
  } = attributes;

  const [loadingApi, setLoadingApi] = useState(false);
  const [openverseRegError, setOpenverseRegError] = useState({ status: false });
  const [showForm, setShowForm] = useState(false);

  const [openverseData, setOpenverseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openverseImage, setOpenverseImage] = useState("");
  const [openverseError, setOpenverseError] = useState({
    status: false,
    type: "",
  });

  const [openverseModal, setOpenverseModal] = useState(false);

  const [pagination, setPagination] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // search
  const [q, setQ] = useState("");
  const [filterData, setFilterData] = useState({
    licenseType: [],
    licenses: [],
    category: [],
    extension: [],
    aspectRatio: [],
    size: [],
  });

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  useEffect(() => {
    const BLOCK_PREFIX = "eb-openverse";
    duplicateBlockIdFix({
      BLOCK_PREFIX,
      blockId,
      setAttributes,
      select,
      clientId,
    });
  }, []);

  const blockProps = useBlockProps({
    className: classnames(className, `eb-guten-block-main-parent-wrapper`),
  });

  const setimageAlign = (newAlign) => {
    switch (newAlign) {
      case "left":
        setAttributes({ imageAlign: "0" });
        break;
      case "right":
        setAttributes({ imageAlign: "0 0 0 auto" });
        break;
      default:
        setAttributes({ imageAlign: "0 auto" });
    }
  };

  //Initial UseEffect
  useEffect(() => {
    setLoadingApi(true);
    //Get Openverse Email, Name
    let data = new FormData();
    data.append("action", "openverse_email_name_DB");
    data.append("openverse_nonce", EssentialBlocksLocalize.openverse_nonce);
    fetch(EssentialBlocksLocalize.ajax_url, {
      method: "POST",
      body: data,
    }) // wrapped
      .then((res) => res.text())
      .then((data) => {
        const response = JSON.parse(data);

        if (response.success && response.data) {
          if (response.data.client_id) {
            setShowForm(false);
          } else {
            setShowForm(true);
          }
          setAttributes({
            apiInfo: {
              ...apiInfo,
              email: response.data.email,
              name: response.data.name,
            },
          });
          setLoadingApi(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const openverseDataFetch = (event) => {
    if (event) {
      setLoading(true);
      let data = new FormData();
      data.append("action", "eb_get_collections");
      data.append("openverse_nonce", EssentialBlocksLocalize.openverse_nonce);

      // search
      data.append("openverseQ", q);
      data.append("openverseFilterLicensesType", filterData.licenseType);
      data.append("openverseFilterLicenses", filterData.licenses);
      data.append("openverseFilterImgtype", filterData.category);
      data.append("openverseFilterExtension", filterData.extension);
      data.append("openverseFilterRatio", filterData.aspectRatio);
      data.append("openverseFilterSize", filterData.size);
      data.append("openversePage", pagination);

      fetch(EssentialBlocksLocalize.ajax_url, {
        method: "POST",
        body: data,
      }) // wrapped
        .then((res) => res.text())
        .then((data) => {
          const response = JSON.parse(data);

          if (response.success) {
            const responseData = JSON.parse(response.data);

            if (responseData.result_count == 0) {
              setOpenverseError({
                status: true,
                message: "We couldn't find anything.",
              });
            } else {
              const passData = responseData.results;
              setOpenverseData(passData);
              setOpenverseError({
                status: false,
              });
            }
            setTotalPages(responseData.page_count);
            setLoading(false);
          } else {
            const error =
              typeof response.data === "object"
                ? response.data
                : JSON.parse(response.data);

            console.log(error);
            setOpenverseError({
              status: true,
              message:
                typeof error === "string" ? error : "Request was throttled.",
            });
            setLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // fetch
  useEffect(() => {
    openverseDataFetch(true);
  }, [filterData]);

  // fetch pagination data
  useEffect(() => {
    if (pagination > 1) {
      setLoading(true);
      let data = new FormData();
      data.append("action", "eb_get_collections");
      data.append("openverse_nonce", EssentialBlocksLocalize.openverse_nonce);

      // search
      data.append("openverseQ", q);
      data.append("openverseFilterLicensesType", filterData.licenseType);
      data.append("openverseFilterLicenses", filterData.licenses);
      data.append("openverseFilterImgtype", filterData.category);
      data.append("openverseFilterExtension", filterData.extension);
      data.append("openverseFilterRatio", filterData.aspectRatio);
      data.append("openverseFilterSize", filterData.size);
      data.append("openversePage", pagination);

      fetch(EssentialBlocksLocalize.ajax_url, {
        method: "POST",
        body: data,
      }) // wrapped
        .then((res) => res.text())
        .then((data) => {
          const response = JSON.parse(data);

          if (response.success) {
            const responseData = JSON.parse(response.data);
            const passData = responseData.results;
            setTotalPages(responseData.page_count);
            setOpenverseData([...openverseData, ...passData]);
            setLoading(false);
            setOpenverseError({
              status: false,
            });
          } else {
            const error =
              typeof response.data === "object"
                ? response.data
                : JSON.parse(response.data);

            console.log(error);
            setOpenverseError({
              status: true,
              message:
                typeof error === "string" ? error : "Request was throttled.",
            });
            setLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [pagination]);

  return (
    <>
      {isSelected && imageurl && <Inspector {...props} />}
      <BlockControls>
        <BlockAlignmentToolbar
          value={imageAlign}
          onChange={(newAlign) => setimageAlign(newAlign)}
          controls={["left", "center", "right"]}
        />
      </BlockControls>

      <div {...blockProps}>
        <Style {...props} />

        {imageurl && (
          <>
            <BlockControls>
              <Toolbar>
                <ToolbarButton
                  className="components-toolbar__control"
                  label={__("Replace Image", "eb-openverse-block")}
                  icon={edit}
                  onClick={() => setOpenverseModal(true)}
                />
              </Toolbar>
            </BlockControls>
          </>
        )}

        <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
          <div
            className={`eb-openverse-wrapper ${blockId} img-style-${stylePreset} ${attributionStyle} ${hoverEffect}`}
            data-id={blockId}
          >
            {imageurl && <DisplayImage attributes={attributes}></DisplayImage>}

            {!imageurl && (
              <>
                <div className="openverse-placheholderbox">
                  <div className="openverse-placheholderbox__label">
                    <OpenverseMainIcon></OpenverseMainIcon>
                  </div>

                  <div
                    className={`eb-openverse-form-wrapper ${
                      loadingApi ? "loading-circle" : ""
                    }`}
                  >
                    {showForm && (
                      <>
                        <div className="openverse-placheholderbox__description">
                          {__(
                            "Provide your Email ID & unique project Name to get access to Openverse  using API, these are required field",
                            "eb-openverse-block"
                          )}

                          <span style={{ color: "#ff0000" }}>*</span>
                        </div>

                        <ApiInfo
                          attributes={attributes}
                          setAttributes={setAttributes}
                          loadingApi={loadingApi}
                          setLoadingApi={setLoadingApi}
                          openverseRegError={openverseRegError}
                          setOpenverseRegError={setOpenverseRegError}
                          setShowForm={setShowForm}
                        ></ApiInfo>
                      </>
                    )}

                    {!showForm && !loadingApi && (
                      <>
                        {openverseRegError.status &&
                          openverseRegError.type == "Success" && (
                            <div className="eb-alert eb-alert-success">
                              <strong>Congratulations!</strong> You have
                              generated a API. Please verify your Email
                              <span className="eb-alert-warning">
                                Without verifying your email ID, you can get
                                access to Openverse as anonymous & your
                                searching limit will be 100 requests/day and 5
                                requests/hr.
                              </span>
                              {/* {openverseRegError.message} */}
                            </div>
                          )}
                        <div className="openverse-placheholderbox__description">
                          {__(
                            "Explore more than 600 million creative works",
                            "eb-openverse-block"
                          )}
                        </div>

                        <Search
                          setOpenverseModal={setOpenverseModal}
                          openverseDataFetch={openverseDataFetch}
                          q={q}
                          setQ={setQ}
                          componentClassName="openverse-search-section"
                        ></Search>
                        <p className="openverse-placheholderbox__note">
                          All Openverse content is under a{" "}
                          <a href="https://creativecommons.org/licenses/">
                            {" "}
                            Creative Commons license
                          </a>{" "}
                          or is in the public domain.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            <SeachModal
              trigger={openverseModal}
              setTrigger={setOpenverseModal}
              loading={loading}
              openverseData={openverseData}
              q={q}
              setQ={setQ}
              filterData={filterData}
              setFilterData={setFilterData}
              setOpenverseImage={setOpenverseImage}
              attributes={attributes}
              setAttributes={setAttributes}
              pagination={pagination}
              setPagination={setPagination}
              totalPages={totalPages}
              openverseError={openverseError}
              setOpenverseModal={setOpenverseModal}
              openverseDataFetch={openverseDataFetch}
            ></SeachModal>
          </div>
        </div>
      </div>
    </>
  );
}
