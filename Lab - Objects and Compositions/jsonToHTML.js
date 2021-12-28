function solve(json) {

    let result = JSON.parse(json);
    let initHTML = '<table>\n';
    let generalTR = general(result);
    let simpleTR = [];
    result.forEach(obj => simpleTR.push(simple(obj)));
    initHTML += generalTR;
    initHTML += simpleTR.join("");
    initHTML += '</table>';

    console.log(initHTML);

    function general(array) {
        let result = '<tr>';
        let keys = Object.keys(array[0]);
        for (let key of keys) {
            result += `<th>${escapeHtml(key)}</th>`;
        }
        result += "</tr>\n";
        return result;
    };

    function simple(obj) {
        let result = '<tr>'
        let keys = Object.keys(obj);
        for (keyy of keys) {
            result += `<td>${escapeHtml(obj[keyy])}</td>`;
        }
        result += '</tr>\n';
        return result;
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

}