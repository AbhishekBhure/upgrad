const products = [
  {
    id: "B01MZ6OB21",
    name: "skullcandy SCS2DUFZ-385",
    type: "Headphones",
    cost: 7
  },
  {
    id: "B07HBD65YR",
    name: "skullcandy riff S5PXW-L003",
    type: "Headphones",
    cost: 65.2
  },
  {
    id: "B01MZ6OB44",
    name: "wd myBook 8 Tb hard hrive",
    type: "Hard Drives",
    cost: 268
  },
  {
    id: "B073SBQMCX",
    name: "wd blue 1 Tb Internal Drive",
    type: "Hard Drives",
    cost: 192
  },
  {
    id: "B01LXTH17U",
    name: "wd myCloud ex ultra 8Tb Bay",
    type: "Hard Drives",
    cost: 486
  },
  {
    id: "B073JHHNJ9",
    name: "netgear Nighthawk AC1900",
    type: "Routers",
    cost: 60
  },
  {
    id: "B07L3G9VHK",
    names: "netgear Orbi RBR 20",
    type: "Routers",
    cost: 145
  }
];

const getProducts = () => new Promise(resolve => resolve(products));

export default getProducts;
