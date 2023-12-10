export const tools = [
  {
    name: 'getUsers',
    description: 'Get users',
    parameters: {
      type: 'object',
      properties: {
        filter: {
          type: 'string',
          description: 'Filter'
        }
      },
      required: []
    }
  },
  {
    name: 'getUser',
    description: 'Get a specific user',
    parameters: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'User name'
        }
      },
      required: ['name']
    }
  }
];
