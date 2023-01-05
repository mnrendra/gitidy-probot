import { Probot } from 'probot'

import opened from './opened'

const issues = (app: Probot) => {
  app.on('issues.opened', opened)
}

export default issues
