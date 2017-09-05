import * as assert from "power-assert";
import * as OpenSearch from "../src/components/OpenSearch";

const testData = `
[
    "上坂すみれ",
    [
        "上坂すみれ",
        "上坂すみれの（はーと）をつければかわいかろう",
        "上坂すみれの文化部は夜歩く",
        "上坂すみれのヤバい○○",
        "上埜すみれ"
    ],
    [
        "上坂 すみれ（うえさか すみれ、1991年12月19日 - ）は、日本の女性声優、タレント、歌手。 スペースクラフト・エンタテインメント所属。",
        "上坂すみれの♡（はーと）をつければかわいかろう（うえさかすみれのはーとをつければかわいかろう）は、上坂すみれがパーソナリティを務めるラジオ番組である。2016年4月から、日本の文化放送などで放送。",
        "上坂すみれの文化部は夜歩く（うえさかすみれのぶんかぶはよるあるく）は、上坂すみれがパーソナリティを早瀬かながアシスタントパーソナリティを務める、『日本一知的なアニラジ』を宣言し知的な文化人ゲストに招いて送るラジオ番組。",
        "『上坂すみれのヤバい○○』（うえさかすみれのヤバいまるまる）は、TOKYO MXとBS11で2017年4月から6月まで放送されていたバラエティ番組。声優・上坂すみれ初の冠番組。全12回。",
        "上埜すみれ(うえのすみれ)は、日本の女優。[1][2]"
    ],
    [
        "https://ja.wikipedia.org/wiki/%E4%B8%8A%E5%9D%82%E3%81%99%E3%81%BF%E3%82%8C",
        "https://ja.wikipedia.org/wiki/%E4%B8%8A%E5%9D%82%E3%81%99%E3%81%BF%E3%82%8C%E3%81%AE%EF%BC%88%E3%81%AF%E3%83%BC%E3%81%A8%EF%BC%89%E3%82%92%E3%81%A4%E3%81%91%E3%82%8C%E3%81%B0%E3%81%8B%E3%82%8F%E3%81%84%E3%81%8B%E3%82%8D%E3%81%86",
        "https://ja.wikipedia.org/wiki/%E4%B8%8A%E5%9D%82%E3%81%99%E3%81%BF%E3%82%8C%E3%81%AE%E6%96%87%E5%8C%96%E9%83%A8%E3%81%AF%E5%A4%9C%E6%AD%A9%E3%81%8F",
        "https://ja.wikipedia.org/wiki/%E4%B8%8A%E5%9D%82%E3%81%99%E3%81%BF%E3%82%8C%E3%81%AE%E3%83%A4%E3%83%90%E3%81%84%E2%97%8B%E2%97%8B",
        "https://ja.wikipedia.org/wiki/%E4%B8%8A%E5%9F%9C%E3%81%99%E3%81%BF%E3%82%8C"
    ]
]
`;

const testJson = JSON.parse(testData);

describe("OpenSearchResults.create", () => {
    let subject = OpenSearch.OpenSearchResults.create(testJson);

    it("searchプロパティに検索で指定した値が格納される", () => {
        assert.equal(subject.Search, "上坂すみれ");
    });
});