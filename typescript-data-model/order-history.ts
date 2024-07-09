interface amazonOrders {
  orderNumber: string;
  orderPlaced: string;
  orderDelivered: string;
  numberOfItems: number;
  priceOfItem1: number;
  priceOfItem2?: number;
  totalPrice: number;
  shippedTo: string;
  item1Title?: string;
  item2Title?: string;
  deliveryMethod?: string;
  productSupportAvailable?: boolean;
  returnWindowDate?: string;
  optionToBuyAgain?: boolean;
}

const orderHistory: amazonOrders[] = [
  {
    orderNumber: '114-3941689-8772232',
    orderPlaced: 'August 4th 2020',
    orderDelivered: 'August 8th 2020',
    numberOfItems: 1,
    priceOfItem1: 31.55,
    priceOfItem2: 0,
    totalPrice: 34.0,
    shippedTo: 'JS Masher',
    item1Title: ' JavaScript for Impatient Programmers',
    item2Title: '',
    deliveryMethod: 'Left on porch',
    productSupportAvailable: false,
    returnWindowDate: 'September 7th 2020',
    optionToBuyAgain: true,
  },

  {
    orderNumber: '113-9984268-1280257',
    orderPlaced: 'July 19, 2020',
    orderDelivered: 'July 20, 2020',
    numberOfItems: 1,
    priceOfItem1: 41.33,
    priceOfItem2: 0,
    totalPrice: 44.53,
    shippedTo: 'JS Masher',
    item1Title: 'The Timeless Way of Building',
    item2Title: '',
    deliveryMethod: 'Handed directly to Resident',
    productSupportAvailable: false,
    returnWindowDate: 'Aug 19, 2020',
    optionToBuyAgain: true,
  },

  {
    orderNumber: '114-2875557-9059409',
    orderPlaced: 'July 4, 2020',
    orderDelivered: 'July 7, 2020',
    numberOfItems: 1,
    priceOfItem1: 15.98,
    priceOfItem2: 0,
    totalPrice: 17.22,
    shippedTo: 'JS Masher',
    item1Title:
      'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-GameCube Adapter',
    item2Title: '',
    deliveryMethod: ' handed directly to a resident',
    productSupportAvailable: false,
    returnWindowDate: 'August 5, 2020',
    optionToBuyAgain: true,
  },

  {
    orderNumber: '11-2883177-2648248',
    orderPlaced: 'July 3, 2020',
    orderDelivered: 'July ',
    numberOfItems: 2,
    priceOfItem1: 94.95,
    priceOfItem2: 33.99,
    totalPrice: 138.93,
    shippedTo: 'JM Masher',
    item1Title:
      'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
    item2Title: 'The Art of Sql',
    deliveryMethod: 'left of porch',
    productSupportAvailable: true,
    returnWindowDate: 'August 4, 2020',
    optionToBuyAgain: true,
  },
];

console.log(orderHistory);
