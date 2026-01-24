import { cookies } from 'next/headers'

const ADMIN_EMAIL = 'admin@filmproductionbahrain.com'
const ADMIN_PASSWORD = 'Admin1234!'
const AUTH_COOKIE_NAME = 'admin_session'
const AUTH_TOKEN = 'fpb_admin_authenticated_2024'

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export async function createSession(): Promise<string> {
  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE_NAME, AUTH_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })
  return AUTH_TOKEN
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(AUTH_COOKIE_NAME)
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(AUTH_COOKIE_NAME)
  return session?.value === AUTH_TOKEN
}
