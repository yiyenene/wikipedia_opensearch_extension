import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import { State, defaultState } from "./State";
import { OpenSearch } from "./components/OpenSearch";
import FindBox from "./components/FindBox";
import FindResults from "./components/FindResults";

class WikipediaHeadhunter extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = defaultState;

        this.search = new OpenSearch();
    }

    private search: OpenSearch;

    handleTextChange(text: string) {
        this.setState({ keyword: text });
    }

    async handleFindClick() {
        let result = await this.search.execute(this.state.keyword);
        this.setState({ keyword: result.Search, results: result.Results });
    }

    handleUrlClick(url: string) {
        chrome.tabs.create({
            url: url,
            active: true
        });
    }

    handleDescClick(desc: string) {
        let encoded = encodeURIComponent(desc);
        let url = `https://twitter.com/intent/tweet?text=${encoded}`;
        chrome.tabs.create({
            url: url,
            active: true
        });
    }

    render() {
        return (
            <div className="wikipedia-headhunter">
                <FindBox className="l-findbox" text={this.state.keyword} onTextChange={x => this.handleTextChange(x)} onClick={() => this.handleFindClick()} />
                <FindResults results={this.state.results} onUrlClick={x => this.handleUrlClick(x)} onDescClick={x => this.handleDescClick(x)} />
            </div>
        )
    };
}

let container = document.getElementById('content');

ReactDOM.render(
    <WikipediaHeadhunter />,
    container
);
