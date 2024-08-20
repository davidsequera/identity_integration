import { NextResponse } from "next/server";

export async function POST(request) {
    let data
    try{
       data = await request.json()
    }catch(e){
        return NextResponse.json({
            error: "Please enter a correct json body"
        })
    }
    const response_message = data.secret == process.env.SECRET? process.env.API_KEY: 'unauthorized'
    return NextResponse.json({
        key: response_message
    })
    
}