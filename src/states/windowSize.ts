import { ref } from "vue"
import sideBarState from "./sideBar.ts"

const sidebar = sideBarState.sideBar
const windowSize = ref<number>(window.innerWidth)

window.addEventListener("resize", () => {
    windowSize.value = window.innerWidth
    if (windowSize.value > 1400) {
        sidebar.value = false
    }
})

export default {
    windowSize
}