import { FoodCardViewModel } from '@foodsapp/components/FoodCard/FoodCardViewModel';
import { DashboardViewModel } from '@foodsapp/pages/dahsboard/DashboardViewModel';
import { FoodEditPageViewModel } from '@foodsapp/pages/edit/FoodEditPageViewModel';
import { FoodDisplayPageViewModel } from '@foodsapp/pages/display/FoodDisplayPageViewModel';
import { asFunction, createContainer } from 'awilix';

const container = createContainer();
// cle: asFunction(Composant)
container.register({
  foodCard: asFunction(FoodCardViewModel),
  dashboard: asFunction(DashboardViewModel),
  edit: asFunction(FoodEditPageViewModel),
  display: asFunction(FoodDisplayPageViewModel),
});

export { container };
