import * as React from "react";
import { OpenSearchResult } from "./OpenSearch";
import FindResult from "./FindResult";
import * as classNames from "classnames";
import Base from "../PropsBase";
import "../style.scss";

export interface FindResultsProps extends Base {
    results: OpenSearchResult[];
    onUrlClick: (url: string) => void;
    onDescClick: (desc: string) => void;
}

const FindResults: React.SFC<FindResultsProps> = props => (
    <div className={classNames(props.className, "findresults")}>
        {(() => {
            if (props.results == null) return null;
            if (props.results.length == 0) return <div className="alert alert-warning">not found...</div>
            return props.results.map((x, i) => <FindResult key={i} title={x.Keyword} description={x.Description} url={x.Url} onUrlClick={props.onUrlClick} onDescClick={props.onDescClick} />)
        })()}
    </div>
);

export default FindResults;