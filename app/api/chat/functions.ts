import {
  getProductsList,
  getProductDetails,
  searchProducts,
  getUserProfile,
  getUsersList
} from '@/lib/dummyApi'

export const functions = [
  {
    name: 'getProductsList',
    description: 'Fetches a list of all products.',
    parameters: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'getProductDetails',
    description:
      'Fetches details for a specific product identified by its product ID.',
    parameters: {
      type: 'object',
      properties: {
        productId: {
          type: 'number',
          description: 'The unique identifier of the product.'
        }
      },
      required: ['productId']
    }
  },
  {
    name: 'searchProducts',
    description: 'Searches for products based on a query string.',
    parameters: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'The query string used for searching products.'
        }
      },
      required: ['query']
    }
  },
  {
    name: 'getUserProfile',
    description:
      'Fetches the user profile for a specific user identified by their user ID.',
    parameters: {
      type: 'object',
      properties: {
        userId: {
          type: 'number',
          description: 'The unique identifier of the user.'
        }
      },
      required: ['userId']
    }
  },
  {
    name: 'getUsersList',
    description: 'Fetches a list of all users.',
    parameters: {
      type: 'object',
      properties: {},
      required: []
    }
  }
]

export async function runFunction(name: string, args: any) {
  console.log(`Running function ${name} with args ${args}`)

  switch (name) {
    case 'getUsersList':
      return await getUsersList()
    case 'getUserProfile':
      return await getUserProfile(args)
    case 'searchProducts':
      return await searchProducts(args)
    case 'getProductDetails':
      return await getProductDetails(args)
    case 'getProductsList':
      return await getProductsList()
    default:
      return null
  }
}
