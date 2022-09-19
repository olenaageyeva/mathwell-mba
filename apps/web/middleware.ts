import { NextResponse } from 'next/server';
import type { NextRequest } from "next/server"
import { selectAuthState } from "./store/authSlice";
import {useSelector } from "react-redux";

export async function middleware(req: NextRequest) {
    //const authState = useSelector(selectAuthState);
    const { pathname } = req.nextUrl
    if (pathname == '/profile') {
        return NextResponse.redirect(new URL("/", req.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/profile',
  }