const postsQuery = `
{
  posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          category
          background
          date_timestamp: date
          date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
        }
        excerpt(pruneLength: 5000)
        timeToRead
      }
    }
  }
}
`
const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: "Posts",
    settings
  },
]

module.exports = queries