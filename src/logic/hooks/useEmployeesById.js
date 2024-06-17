'use client'

import { useQuery } from '@tanstack/react-query'
import { createClient } from '../../../persistence/supabase/client'

export const useEmployeeById = (id) => {
  return useQuery({
    queryKey: ['employee'],
    queryFn: async () => {
      const supabase = createClient()

      const { data: employees, error } = await supabase
        .from('employee')
        .select('*')
        .eq('id', id)

      if (error) {
        console.log(error.message)
      }
      console.log(employees)
      return employees
    },
  })
}
