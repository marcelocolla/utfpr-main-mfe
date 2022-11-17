import useUserStore from 'shared/utfpr-core-shared-mfe/UserStore'

import { signIn } from 'services/signIn'

async function handleSubmit({ email, password }) {
  const { updateUser } = useUserStore()
  const result = await signIn({ email, password })

  updateUser(result.data)
}

export { handleSubmit }
