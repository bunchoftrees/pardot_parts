/* 
This script is a helper to parsing and setting campaign values.

Set the variables defaultLatestCampaign and defaultCampaignName to best use this script
*/

// Replace this value with desired default campaign ID
defaultLatestCampaign = '7014V000002hO2lQAF';
// Replace this value with desired default campaign name
defaultCampaignName = 'C-2022-HealthStream.com Traffic - Care Settings Form';

// Parses URL parameters by name
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// Give the URL parameters variable names
var source = getParameterByName('utm_source');
var medium = getParameterByName('utm_medium');
var campaign = getParameterByName('utm_campaign');
var term = getParameterByName('utm_term');
var gclid = getParameterByName('gclid');
var latestCampaign = getParameterByName('Latest_Campaign');

// Check for valid 18-char SF ID format
function testCampaignId(checkId) {
    if (checkId.length == 18) {
        var regexId = new RegExp(/^701[a-zA-Z0-9]{15}/gi);
        return regexId.test(checkId);
    }
    return false;
}

// Populates default campaign ID when ID is excluded/malformed
if (!testCampaignId(latestCampaign)) {
    // Sets hidden fields with default values
    document.querySelector("#pardot-form > div.form-field.Latest_Campaign.pd-hidden.hidden input").value = defaultLatestCampaign;
    document.querySelector("#pardot-form > div.form-field.utm_campaign.pd-hidden.hidden input").value = defaultCampaignName;
    console.log("ID was incorrect, default used: " + defaultLatestCampaign);
    console.log("ID was incorrect, default used: " + defaultCampaignName);
} else if (testCampaignId(latestCampaign) && !campaign) {
    // Sets hidden fields with found/validated value for latestCampaign and defaultCampaignName if campaign is null
    document.querySelector("#pardot-form > div.form-field.Latest_Campaign.pd-hidden.hidden input").value = latestCampaign;
    document.querySelector("#pardot-form > div.form-field.utm_campaign.pd-hidden.hidden input").value = defaultCampaignName;
    console.log("ID was correct, value stored: " + latestCampaign);
    console.log("ID was incorrect, default used: " + defaultCampaignName);
} else {
    document.querySelector("#pardot-form > div.form-field.Latest_Campaign.pd-hidden.hidden input").value = latestCampaign;
    document.querySelector("#pardot-form > div.form-field.utm_campaign.pd-hidden.hidden input").value = campaign;
    console.log("ID was correct, value stored: " + latestCampaign);
    console.log("ID was correct, value stored: " + campaign);
}

if (source) {
    document.querySelector("#pardot-form > div.form-field.utm_source.pd-hidden.hidden input").value = source;
}

if (medium) {
    document.querySelector("#pardot-form > div.form-field.utm_medium.pd-hidden.hidden input").value = medium;
}

if (term) {
    document.querySelector("#pardot-form > div.form-field.utm_term.pd-hidden.hidden input").value = term;
}

if (gclid) {
    document.querySelector("#pardot-form > div.form-field.gclid.pd-hidden.hidden input").value = gclid;
}
