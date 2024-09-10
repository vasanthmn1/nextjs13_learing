

export async function GET() {
    return Response.json({ message: "Working" })
}

export async function POST(req: Request) {
    const reqBody = await req.json()
    
    console.log(reqBody);

    return Response.json({ message: "Working" })
}