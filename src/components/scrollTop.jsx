import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

export function ScrollToTop() {
    const { pathname } = useLocation()
    const navigationType = useNavigationType()

    useEffect(() => {
        // Don't reset scroll when using browser Back/Forward
        if (navigationType === "POP") {
            return
        }

        window.scrollTo(0, 0)
    }, [pathname, navigationType])

    return null
}
