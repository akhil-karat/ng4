export class HomeService{
  products = [{
    desc:'new deal in ebay',
    icon:'camera',
    price:200
  },
  {
    desc:'30% off in amazone',
    icon:'watch',
    price:100
  },
  {
    desc:'$25 off in smapdeal',
    icon:'plates',
    price:20
  },
  {
    desc:'no dicount in apple',
    icon:'mac',
    price:20
  },
  {
    desc:'full discount in walmart',
    icon:'plates',
    price:10
  }];

   getProducts(){
    return this.products;
  }
}
