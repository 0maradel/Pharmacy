import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:pd-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn
