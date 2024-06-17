'use client'

import { useQuery } from '@tanstack/react-query'
import { createClient } from '../../../persistence/supabase/client'
import { useUser } from './useUser'

export const useEmployee = () => {
  const { data: user } = useUser()

  return useQuery({
    queryKey: ['employee'],
    queryFn: async () => {
      const supabase = createClient()

      const { data: employees, error } = await supabase
        .from('employee')
        .select('*')
        .eq('enterprise_id', user.enterprise_id)

      if (error) {
        console.log(error.message)
      }
      console.log(employees)
      return employees
    },
  })
}
