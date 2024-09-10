"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"


function Setting() {

    const router = useRouter()

    return (
        <div>
            Setting

            <Link href={'/dashbord'}>DashBoard</Link>
            <button onClick={() => router.push("/dashbord")}>Navigate DashBoard</button>
        </div>
    )

}

export default Setting
