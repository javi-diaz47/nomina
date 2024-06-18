'use server'
import { redirect } from 'next/navigation'
import { createClient } from '../../../persistence/supabase/client'

export async function postPayroll(formData, id, payroll) {
  const supabase = createClient()
  const data = {
    start: formData.get('start'),
    end: formData.get('end'),
    payroll: payroll.join(','),
    profile_id: id,
  }

  const { error } = await supabase.from('payroll').insert([data])

  if (error) {
    console.log(error.message)
  }

  redirect('/nomina')
}
