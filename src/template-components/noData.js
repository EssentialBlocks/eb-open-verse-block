import { __ } from "@wordpress/i18n";
import { NoDataIcon } from "./icons/noDataIcon";

export default function NoData(props) {
  return (
    <div className="eb-openverse-no-data">
      <NoDataIcon></NoDataIcon>
      <p>{__("We couldn't find anything", "eb-openverse-block")}</p>
      <span>
        {__(
          "Try a different query or use one of the external sources to expand your search.",
          "eb-openverse-block"
        )}
      </span>
    </div>
  );
}
