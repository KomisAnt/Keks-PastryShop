
export const MAX_STARS_COUNT = 5;

export enum CategoryName {
  Бисквит = 'bisque',
  Чизкейк = 'cheesecake',
  Песочное = 'shortbread',
  Десерт = 'dessert',
}

// export enum ProductType {
//   Chocolate = 'chocolate',
//   Vanilla = 'vanilla',
//   Vegetarian = 'vegetarian',
//   HoneyCake = 'honey-cake',
//   Lemon = 'lemon',
//   NewYork = 'new-york',
//   Tart = 'tart',
//   FunnelCake = 'funnel-cake',
//   BasketCake = 'basket-cake',
//   ChocolateMuffin = 'chocolate-muffin',
//   BrandMuffin = 'brand-muffin'
// }

export enum ProductType {
  Шоколадный = 'chocolate',
  Ваниль = 'vanilla',
  Вегетарианский = 'vegetarian',
  Медовый = 'honey-cake',
  Лимонный = 'lemon',
  'Нью-Йорк' = 'new-york',
  Терпкий = 'tart',
  Воронка = 'funnel-cake',
  Корзинка = 'basket-cake',
  'Шоколадный маффин' = 'chocolate-muffin',
  'Фирменный маффин' = 'brand-muffin'
}

export enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
  Card = '/card',
  Favourite = '/favourite',
  Login = '/login',
  Register = '/register'
}

export enum AutorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth'
}

export enum APIRoute {
  Products = '/products',
  Categories = '/categories',
  Favorites = '/favorites',
  Reviews = '/reviews',
  LastReview = '/reviews/getLast',
  UserRegistration = '/users/registration',
  UserAvatar = '/users/upload',
  UserLogin = '/users/login',
  UserLogout = '/users/logout'
}

export enum SliceName {
  Product = 'product-data',
  Category = 'category-data',
  Favorite = 'favorite-data',
  Review = 'review-data',
  User = 'user-data',
}
