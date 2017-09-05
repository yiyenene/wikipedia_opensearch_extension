import * as React from "react";
import "../style.scss";

export interface FindResultProps {
    title: string;
    description: string;
    url: string;
    onUrlClick: (url: string) => void;
    onDescClick: (desc: string) => void;
}

const FindResult: React.SFC<FindResultProps> = props => (
    <div className="panel panel-success findresult">
        <div className="panel-heading">
            <a className="link findresult-link" href="#" onClick={_ => props.onUrlClick(props.url)}>
                {props.title}
            </a>
        </div>
        <div className="panel-body">
            <div className="findresult-desc">
                {props.description}
            </div>
        </div>
        <div className="panel-footer findresult-footer">
            <button className="btn btn-info findresult-button" onClick={_ => props.onDescClick(props.description)}>
                <span className="glyphicon glyphicon-send"/>
                <span className="findresult-button-text">TWEET</span>
            </button>
        </div>
    </div>
);

export default FindResult;
