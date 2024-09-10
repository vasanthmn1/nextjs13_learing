"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"



function Page({ params }: { params: { slug: string } }) {
    const router = useRouter()
    // const params = useParams()
    return (
        <div>
            Settingss
            <h1>Slug {params.slug}</h1>
            <Link href={'/dashbord'}>DashBoard</Link>
            <button onClick={() => router.push("/dashbord")}>Navigate DashBoard</button>
        </div>
    )

}

export default Page
