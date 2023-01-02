import { Probot } from 'probot'

export = (app: Probot, { getRouter }: any) => {
  app.on('issues.opened', async (context) => {
    const issueComment = context.issue({
      body: 'Thanks for opening this issue!',
    })

    console.log('issueComment:', issueComment)

    await context.octokit.issues.createComment(issueComment)
  })

  const router = getRouter('/gitidy')

  router.get('/', (req: any, res: any) => {
    res.status(200).json({
      name: 'Gitidy',
      description: 'A tool for tidying Gitflow.'
    })
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
