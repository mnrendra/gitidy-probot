import { Context } from 'probot'

const opened = async (ctx: Context) => {
  const issueComment = ctx.issue({
    body: 'This comment is coming from Gitidy bot!'
  })

  await ctx.octokit.issues.createComment(issueComment)
}

export default opened
