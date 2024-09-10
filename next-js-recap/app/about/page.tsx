import About from "../components/about/About"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Page",
    description: "This IS About Page |||"
}
const Page = () => {
    return (
        <About />
    )
}


export default Page