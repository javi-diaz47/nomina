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
        .eq('id', 'e43f92bb-ca09-4e81-8b98-f448ffbd37ab')
        .single()

      if (error) {
        console.log(error.message)
      }
      console.log(user)
      return user
    },
  })
}
