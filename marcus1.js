// this is a comment

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
var latestcampaign = getParameterByName('Latest_Campaign');
 

    console.log('###campaign before default: '+ campaign);


if (!campaign) {
campaign = 'C-2021-HealthStream_Traffic_Care_Settings_Form';
}
    console.log('###campaign after null check: '+ campaign);

// Put the variable names into the hidden fields in the form. selector should be "full-selector input"

if (source) {
    document.querySelector("#pardot-form > div.form-field.utm_source.pd-hidden.hidden input").value = source;
}
if (medium) {
    document.querySelector("#pardot-form > div.form-field.utm_medium.pd-hidden.hiddeninput").value = medium;
}
    console.log('###campaign line 37: '+ campaign);
if (campaign) {
    console.log('###campaign line 39: '+ campaign);
    document.querySelector("#pardot-form > div.form-field.utm_campaign.pd-hidden.hidden input").value = campaign;
}
    console.log('###campaign line 41: '+ campaign);
    console.log('###document.querySelector("#pardot-form > div.form-field.utm_campaign.pd-hidden.hidden input").value: '+ document.querySelector("#pardot-form > div.form-field.utm_campaign.pd-hidden.hidden input").value);
if (term) {
    document.querySelector("#pardot-form > div.form-field.utm_term.pd-hidden.hidden input").value = term;
}
if (gclid) {
    document.querySelector("#pardot-form > div.form-field.gclid.pd-hidden.hidden input").value = gclid;
}
if (latestcampaign) {
    document.querySelector("#pardot-form > div.form-field.Latest_Campaign.pd-hidden.hidden input").value = latestcampaign;
}