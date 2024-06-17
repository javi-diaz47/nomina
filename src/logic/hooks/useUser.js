'use client'

import { useQuery } from '@tanstack/react-query'
import { createClient } from '../../../persistence/supabase/client'

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const supabase = createClient()

      const { data } = await supabase.auth.getSession()
      console.log(data.session)

      const { data: user, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data?.session?.user?.id)
        .single()

      if (error) {
        console.log(error.message)
      }
      console.log(user)
      return user
    },
  })
}
