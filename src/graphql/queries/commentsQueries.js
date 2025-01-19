export const getComments = /* GraphQL */ `
  query GetComments {
    getComments {
      id
      text
      addedBy
      dateTime
      commentId
      ideaId
    }
  }
`;

export const getReplies = /* GraphQL */ `
  query GetReplies {
    getReplies {
      id
      text
      addedBy
      dateTime
      commentId
      ideaId
    }
  }
`;

export const getCommentsByIdeaId = /* GraphQL */ `
  query GetCommentsByIdeaId($ideaId: String!) {
    getCommentsByIdeaId(ideaId: $ideaId) {
      id
      text
      addedBy
      dateTime
      commentId
      ideaId
    }
  }
`;