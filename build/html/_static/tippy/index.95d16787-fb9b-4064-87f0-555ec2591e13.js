selector_to_html = {"a[href=\"#id13\"]": "<figure class=\"align-center\" id=\"id13\">\n<a class=\"reference internal image-reference\" href=\"_images/skip_certificate_information.png\"><img alt=\"Skip Certificate Information\" src=\"_images/skip_certificate_information.png\" style=\"width: 315.7px; height: 171.5px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Skip Certificate Information</span><a class=\"headerlink\" href=\"#id13\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id9\"]": "<figure class=\"align-center\" id=\"id9\">\n<a class=\"reference internal image-reference\" href=\"_images/security_code_field.png\"><img alt=\"Security Code\" src=\"_images/security_code_field.png\" style=\"width: 650.25px; height: 243.75px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Security Code field</span><a class=\"headerlink\" href=\"#id9\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"_images/register_for_online_access_page.png\"><img alt=\"Register Online Access Page\" src=\"_images/register_for_online_access_page.png\" style=\"width: 293.0px; height: 213.0px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Register Online Access Page</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"_images/get_started_today.png\"><img alt=\"Get Started Today\" src=\"_images/get_started_today.png\" style=\"width: 725.0px; height: 154.0px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Get Started Today</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id11\"]": "<figure class=\"align-center\" id=\"id11\">\n<a class=\"reference internal image-reference\" href=\"_images/security_code_next_button.png\"><img alt=\"Security Code, Next Button\" src=\"_images/security_code_next_button.png\" style=\"width: 605.25px; height: 237.75px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Security Code, Next Button</span><a class=\"headerlink\" href=\"#id11\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id15\"]": "<figure class=\"align-center\" id=\"id15\">\n<a class=\"reference internal image-reference\" href=\"_images/certificate_information_fields.png\"><img alt=\"Certificate Information\" src=\"_images/certificate_information_fields.png\" style=\"width: 315.7px; height: 171.5px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Certificate Information</span><a class=\"headerlink\" href=\"#id15\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"_images/sign_up_here_shareholders.png\"><img alt=\"Sign Up Here\" src=\"_images/sign_up_here_shareholders.png\" style=\"width: 414.0px; height: 385.0px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Sign Up Here</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id17\"]": "<figure class=\"align-center\" id=\"id17\">\n<a class=\"reference internal image-reference\" href=\"_images/certificate_information_next_button.png\"><img alt=\"Certificate Information, Next Button\" src=\"_images/certificate_information_next_button.png\" style=\"width: 315.7px; height: 171.5px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Certificate Information, Next Button</span><a class=\"headerlink\" href=\"#id17\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#transfer-online-inc-shareholder-onboarding-instructions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Transfer Online, Inc. Shareholder Onboarding Instructions<a class=\"headerlink\" href=\"#transfer-online-inc-shareholder-onboarding-instructions\" title=\"Link to this heading\">#</a></h1><p><strong>How To Register For Online Access</strong></p>", "a[href=\"#id7\"]": "<figure class=\"align-center\" id=\"id7\">\n<a class=\"reference internal image-reference\" href=\"_images/skip_security_code.png\"><img alt=\"Skip Security Code Option\" src=\"_images/skip_security_code.png\" style=\"width: 624.75px; height: 240.0px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Skip Security Code Option</span><a class=\"headerlink\" href=\"#id7\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
