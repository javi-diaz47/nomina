'use client'

import { redirect } from 'next/navigation'
import { createClient } from '../../../persistence/supabase/client'

export async function removeEmployee(id) {
  const supabase = createClient()

  const { data: user, error } = await supabase
    .from('employee')
    .delete()
    .eq('id', id)

  if (error) {
    console.log(error.message)
    redirect('/error')
  }
}
