import { uuid } from './utils';

export default {
  name: 'workshop',
  columns: [
    {
      name: 'column 1',
      tasks: [
        {
          name: 'task 1',
          description: 'create a user with basic info',
          id: uuid(),
          userAssigned: null
        },
        {
          name: 'task 2',
          description: '',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'column 2',
      tasks: [
        {
          name: 'task 2.1',
          description: '',
          id: uuid(),
          userAssigned: null
        },
        {
          name: 'task 2.2',
          description: '',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
        name: 'column 3',
        tasks: [
          {
            name: 'task 3.1',
            description: '',
            id: uuid(),
            userAssigned: null
          },
          {
            name: 'task 3.2',
            description: '',
            id: uuid(),
            userAssigned: null
          }
        ]
      }
  ]
};
