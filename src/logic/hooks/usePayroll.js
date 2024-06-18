'use client'

import { useQuery } from '@tanstack/react-query'
import { createClient } from '../../../persistence/supabase/client'
import { useUser } from './useUser'

export const usePayroll = () => {
  const { data: user } = useUser()

  return useQuery({
    queryKey: ['payroll'],
    queryFn: async () => {
      const supabase = createClient()

      const { data: employees, error } = await supabase
        .from('payroll')
        .select('*')
        .eq('profile_id', user.id)

      if (error) {
        console.log(error.message)
      }
      console.log(employees)
      return employees
    },
  })
}
