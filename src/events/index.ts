import { Probot } from 'probot'

import issues from './issues'

const events = (app: Probot) => {
  issues(app)
}

export default events
