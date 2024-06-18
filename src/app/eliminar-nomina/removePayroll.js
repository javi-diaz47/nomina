'use client'

import { redirect } from 'next/navigation'
import { createClient } from '../../../persistence/supabase/client'

export async function removePayroll(id) {
  const supabase = createClient()

  const { error } = await supabase.from('payroll').delete().eq('id', id)

  if (error) {
    console.log(error.message)
    redirect('/error')
  }
}
