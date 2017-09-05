module constants {
    export const HOST = "https://ja.wikipedia.org";
}

export class OpenSearch {
    constructor() {}
    getUrl = (search: string) => (
        `${constants.HOST}/w/api.php?action=opensearch&format=json&search=${encodeURIComponent(search)}&utf8=1`
    );

    public async execute(search: string) : Promise<OpenSearchResults> {
        let response = await fetch(this.getUrl(search), { mode: "cors", headers: { "origin": "chrome:://extensions/wikipedia-headhunter" } });
        let json = await response.json();
        console.log(json);
        return OpenSearchResults.create(json);
    }
}

export class OpenSearchResult {
    constructor(keyword: string, description: string, url: string) {
        this._keyword = keyword;
        this._description = description;
        this._url = url;
    }

    private _keyword: string;
    get Keyword() { return this._keyword; }

    private _description: string;
    get Description() { return this._description; }

    private _url: string;
    get Url() { return this._url; }
}

export class OpenSearchResults {
    constructor(search: string, results: OpenSearchResult[]) {
        this._search = search;
        this._results = results;
    }

    private _search: string;
    get Search() { return this._search; }

    private _results: OpenSearchResult[];
    get Results() { return this._results; }

    static create(json: any) {
        // ugly...
        let search = json[0];
        let results = json[1] as string[];
        let resultsDesc = json[2] as string[];
        let resultsUrl = json[3] as string[];

        let searchResults = results.map((x, i) => new OpenSearchResult(x, resultsDesc[i], resultsUrl[i]));
        return new OpenSearchResults(search, searchResults);
    }
}