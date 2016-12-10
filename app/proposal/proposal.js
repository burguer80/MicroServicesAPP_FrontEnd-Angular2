"use strict";
var Proposal = (function () {
    function Proposal(id, customer, portfolio_url, tools, estimated_hours, hourly_rate, weeks_to_complete, client_emaul) {
        if (portfolio_url === void 0) { portfolio_url = "file_url.doc"; }
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_emaul = client_emaul;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.js.map