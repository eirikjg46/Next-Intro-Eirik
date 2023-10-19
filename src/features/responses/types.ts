type Quiz = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export type Response = {
    title: string
    price: number
    category: string
  }
  
  // How the Response object will look like
  // const response: Response = {
  //   title: "1",
  //   price: 1,
  //   category: "1",
  // }
  
  export type Faker = {
    price: () => number
    category: () => string
    title: () => string
  }
  
  // How the Faker type will look like
  // const faker: Faker = {
  //   price: () => 1,
  //   category: () => "",
  //   title: () => "",
  // }
  
  export type CreateResponseParams = {
    existingResponses?: Map<string, Response>
    count: number
    faker: Faker
  }
  
  // const faker: Faker = {
  //   price: () => 1,
  //   category: () => "",
  //   title: () => "",
  // }
  
  // const response: Response = {
  //   title: "1",
  //   price: 1,
  //   category: "1",
  // }
  
  // const existingResponses = new Map<string, Response>([["response-id", response]])
  
  // How the CreateResponseParams will be used
  // const createResponseParams: CreateResponseParams = {
  //   existingResponses,
  //   count: 10,
  //   faker,
  // }
  
  export type CreateResponses = (
    params: CreateResponseParams,
  ) => Map<string, Response>
  