import { defineComponent } from "vue"
import { DEFAULT_LAYOUT_NAME } from "../../constants"
import Footer from "../../components/common/Footer.vue"
import Header from "../../components/common/Header.vue"

import "./index.css"
const DefaultLayout = defineComponent({
    name: DEFAULT_LAYOUT_NAME,
    render() {
        return (
            <>
                <div class="main-container">
                    <div class="sticky-container">
                        <Header
                            title="远浅"
                            brief="理解他人，内省自己。"
                        ></Header>
                    </div>
                    <div class="default-layout-container">
                        {this.$slots.default?.()}
                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    },
})

export default DefaultLayout
