import * as React from "react";
import * as classNames from "classnames";
import Base from "../PropsBase";
import "../style.scss";

export interface FindBoxProps extends Base {
    text: string;
    onTextChange: (text: string) => void;
    onClick: () => void;
}

const FindBox: React.SFC<FindBoxProps> = props => (
    <div className={classNames(props.className, "findbox")}>
        <input type="text" className="findbox-text" value={props.text}
               onChange={e => props.onTextChange(e.target.value)}
               onKeyPress={e => { if (e.charCode == 13) props.onClick(); }} />
        <button className="btn btn-success findbox-button" onClick={_ => props.onClick()}>
            Find
        </button>
    </div>
);

export default FindBox;