'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../../persistence/supabase/client'

export async function login(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' })

  // const { data: user, error } = await supabase
  //   .from('admin')
  //   .select('*')
  //   .eq('email', data.email)
  //   .eq('password', data.password)

  if (error) {
    console.log(error.message)
    redirect('/error')
  }

  console.log(user)

  revalidatePath('/', 'layout')
  redirect('/private')
}

export async function signup(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { user, error } = await supabase.from('admin').insert([data]).select()
  // const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log(error.message)
    redirect('/error')
  }

  console.log(user)

  revalidatePath('/', 'layout')
  redirect('/')
}
