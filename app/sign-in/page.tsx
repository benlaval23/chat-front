import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { LoginButtonGoogle } from '@/components/login-button-google'
import { redirect } from 'next/navigation'
import Image from 'next/image'


export default async function SignInPage() {
  const session = await auth()

  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex h-full items-center justify-center py-10">
      <div className="flex flex-col p-8 h-auto mx-auto items-center rounded-lg border bg-background p-2">
        <Image
          className="h-12 w-12 select-none rounded-full hover:opacity-80"
          alt="Chat Front"
          src="/chat-front.png"
          height={24}
          width={24}
        />
        <h1 className="my-8 ml-2 text-left text-lg font-semibold"> Log in</h1>
        <LoginButton className="mb-4" />
        <LoginButtonGoogle />
      </div>
    </div>
  )
}


