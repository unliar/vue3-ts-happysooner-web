import { mount } from "@vue/test-utils";
import Avatar from "../../src/components/common/Avatar/index.vue";
import EmptyContent from "../../src/components/common/EmptyContent.vue";

// The component to test
test("Avatar", () => {
    const src = "https://happysooner.com/api/v1/tools/ident-icon?key=test";
    const { element } = mount(Avatar, {
        props: {
            src: src,
        },
    });

    expect(element.tagName == "IMG");
    expect(element.getAttribute("src")).toEqual(src);
});

test("EmptyContent", () => {
    const title = "瓜皮";
    const { element } = mount(EmptyContent, {
        props: {
            title: title,
        },
    });
    console.log(element.innerHTML);
    expect(element.tagName).toEqual("DIV");
    expect(element.innerHTML).toContain(title);
});
