export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      text
      addedBy
      dateTime
      commentId
      ideaId
    }
  }
`;

export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply {
    onCreateReply {
      id
      text
      addedBy
      dateTime
      commentId
      ideaId
    }
  }
`;