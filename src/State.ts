import { OpenSearchResult, OpenSearchResults } from 'components/OpenSearch';

export interface State {
    keyword: string;
    results: OpenSearchResult[];
};

export const defaultState: State  = {
    keyword: "",
    results: null
};