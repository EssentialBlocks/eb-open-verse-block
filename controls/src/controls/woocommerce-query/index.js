/**
 * External Dependencies
 */
import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import Select2 from "react-select";
import { getPosts, getProductCategory, getProductTag } from "./apiData";

/**
 * Internal Dependencies
 */
import { ORDER_BY, ORDER } from "./constants";

export default function WoocommerceQuery(props) {
  const { queryData, queryResults, setAttributes } = props;
  const [query, setQuery] = useState({});
  const [didMount, setDidMount] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [tagOptions, setTagOptions] = useState([]);

  useEffect(() => {
    setDidMount(true);

    //If Exixsting query data exists in Attributes, set existing data to current query data
    if (typeof queryData != "undefined" && Object.keys(queryData).length > 0) {
      setQuery({ ...queryData });
    } else {
      setQuery({
        categories: "",
        tags: "",
        per_page: "4",
        offset: "0",
        orderby: JSON.stringify([
          {
            label: __("Date", "essential-blocks"),
            value: "date",
          },
        ]),
        order: JSON.stringify([
          {
            label: __("Descending", "essential-blocks"),
            value: "desc",
          },
        ]),
      });
    }

    //Get Product Categories data and Set Product Categories Options Data
    getProductCategory().then((categoryData) => {
      let categoryDataForOptions = [];
      categoryData.length > 0 &&
        categoryData.forEach((item) => {
          let filterCategoryData = {};
          Object.keys(item).forEach((key) => {
            if (key === "name") {
              filterCategoryData.label = item[key];
            }
            if (key === "id") {
              filterCategoryData.value = item[key];
            }
          });
          categoryDataForOptions.push(filterCategoryData);
        });
      setCategoryOptions(categoryDataForOptions);
    });

    //Get Product Tags data and Set Product Tags Options Data
    getProductTag().then((tagData) => {
      let tagDataForOptions = [];
      tagData.length > 0 &&
        tagData.forEach((item) => {
          let filterTagData = {};
          Object.keys(item).forEach((key) => {
            if (key === "name") {
              filterTagData.label = item[key];
            }
            if (key === "id") {
              filterTagData.value = item[key];
            }
          });
          tagDataForOptions.push(filterTagData);
        });
      setTagOptions(tagDataForOptions);
    });

    return () => {
      setDidMount(false);
    };
  }, []);

  useEffect(() => {
    //Get Post data on query change and set to Attributes
    if (didMount) {
      getPosts(query).then((posts) => {
        setAttributes({ queryData: query });
        setAttributes({ queryResults: posts });
      });
    }
  }, [query]);

  const updateQuery = (selected, property, json, makeArray) => {
    const updateQuery = { ...query };
    updateQuery[property] =
      json && makeArray
        ? JSON.stringify([selected])
        : json
        ? JSON.stringify(selected)
        : selected;
    setQuery(updateQuery);
  };

  const updateIntegerQuery = (number, property) => {
    const updateQuery = { ...query };
    updateQuery[property] = number < 0 ? 0 : number;
    setQuery(updateQuery);
  };

  return (
    <PanelBody title={props.title} initialOpen={props.initialOpen}>
      {typeof query != "undefined" && didMount && (
        <>
          <div className="eb-control-item-wrapper">
            <PanelRow>{__("Order By", "essential-blocks")}</PanelRow>
            <Select2
              name="select-order-by"
              value={
                typeof query.orderby != "undefined" && query.orderby.length > 0
                  ? JSON.parse(query.orderby)
                  : ""
              }
              onChange={(selected) =>
                updateQuery(selected, "orderby", true, true)
              }
              options={ORDER_BY}
              isMulti={false}
            />
          </div>
          <div className="eb-control-item-wrapper">
            <PanelRow>{__("Order", "essential-blocks")}</PanelRow>
            <Select2
              name="select-order"
              value={
                typeof query.order != "undefined" && query.order.length > 0
                  ? JSON.parse(query.order)
                  : ""
              }
              onChange={(selected) =>
                updateQuery(selected, "order", true, true)
              }
              options={ORDER}
              isMulti={false}
            />
          </div>
          <TextControl
            label={__("Products Per Page", "essential-blocks")}
            type={"number"}
            value={query.per_page}
            onChange={(selected) => updateIntegerQuery(selected, "per_page")}
          />
          <TextControl
            label={__("Offset", "essential-blocks")}
            type={"number"}
            value={query.offset}
            onChange={(selected) => updateIntegerQuery(selected, "offset")}
          />
          <div className="eb-control-item-wrapper">
            <PanelRow>{__("Product Categories", "essential-blocks")}</PanelRow>
            <Select2
              name="select-categories"
              value={
                typeof query.categories != "undefined" &&
                query.categories.length > 0
                  ? JSON.parse(query.categories)
                  : ""
              }
              onChange={(selected) => updateQuery(selected, "categories", true)}
              options={categoryOptions}
              isMulti={true}
            />
          </div>
          <div className="eb-control-item-wrapper">
            <PanelRow>{__("Product Tags", "essential-blocks")}</PanelRow>
            <Select2
              name="select-tags"
              value={
                typeof query.tags != "undefined" && query.tags.length > 0
                  ? JSON.parse(query.tags)
                  : ""
              }
              onChange={(selected) => updateQuery(selected, "tags", true)}
              options={tagOptions}
              isMulti={true}
            />
          </div>
        </>
      )}
    </PanelBody>
  );
}
