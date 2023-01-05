import { Probot, ApplicationFunctionOptions } from 'probot'

import router from './router'
import gitidy from './gitidy'
import events from './events'

export = (app: Probot, { getRouter }: ApplicationFunctionOptions) => {
  const gitidyRouter = router(getRouter)('/gitidy')
  gitidy(gitidyRouter)
  events(app)
}
