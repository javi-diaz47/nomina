'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../../persistence/supabase/client'

export async function logout(formData) {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
