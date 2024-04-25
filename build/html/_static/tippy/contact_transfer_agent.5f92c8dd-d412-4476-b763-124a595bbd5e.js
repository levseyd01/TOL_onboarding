selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"_static/pdf_images/contact_transfer_agent_menu.png\"><img alt=\"Contact Transfer Agent menu selection.\" src=\"_static/pdf_images/contact_transfer_agent_menu.png\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Contact Transfer Agent menu selection.</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"_static/pdf_images/transfer_agent_details_screen.png\"><img alt=\"Contact Transfer Agent details screen\" src=\"_static/pdf_images/transfer_agent_details_screen.png\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Contact Transfer Agent details screen</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#contact-transfer-agent\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Contact Transfer Agent<a class=\"headerlink\" href=\"#contact-transfer-agent\" title=\"Link to this heading\">#</a></h1><p>Use this option to find out contact info for the Transfer Agent.</p>"}
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
