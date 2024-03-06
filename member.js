function skillMember() {
  return {
    name: 'member',
    type: 'member',
    description: 'Member',
    fields: [
      {
        name: 'id',
        type: 'ID',
        description: 'Member ID',
      },
      {
        name: 'name',
        type: 'String',
        description: 'Member Name',
      },
      {
        name: 'age',
        type: 'Int',
        description: 'Member Age',
      },
    ],
  };
}