export const createComment = /* GraphQL */ `
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      text
      addedBy
      dateTime
      commentId
      ideaId
    }
  }
`;

export const createReply = /* GraphQL */ `
  mutation CreateReply($input: CreateReplyInput!) {
    createReply(input: $input) {
      id
      text
      addedBy
      dateTime
      commentId
      ideaId
    }
  }
`;