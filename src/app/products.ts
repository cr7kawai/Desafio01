export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 4,
    name: 'PS4',
    price: 1024,
    description: 'A great console with the best processor of all'
  },
  {
    id: 5,
    name: 'Lenovo Ideapad 330S',
    price: 767,
    description: 'A special laptop for basic activities'
  },
  {
    id: 6,
    name: 'Nokia 6300',
    price: 200,
    description: 'A simple but useful cell phone with water resistance'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/