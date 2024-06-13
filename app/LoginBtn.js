'use client'
import { signIn } from 'next-auth/react'

export default function LoginBtn() {
    return (
        <button className='Loginbtn' onClick={() => { signIn() }}>로그인</button>
    )
}