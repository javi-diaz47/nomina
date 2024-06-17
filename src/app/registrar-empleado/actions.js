'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../../persistence/supabase/client'

export async function register(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    name: formData.get('first-name') + formData.get('second-name'),
    lastname: formData.get('first-lastname') + formData.get('second-lastname'),
    cc: formData.get('cc'),
    phone: formData.get('phone'),
    enterprise_id: formData.get('enterprise_id'),
  }

  const { data: user, error } = await supabase.from('employee').insert([data])

  if (error) {
    console.log(error.message)
    redirect('/error')
  }

  console.log(user)

  revalidatePath('/', 'layout')
  redirect('/private')
}
