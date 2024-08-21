import MealsPage from "../screens/Meals";
import BottomNav from "./BottomNav";
import DrawerWrapper from "./DrawerWrapper";

export default function MealsDrawer() {

    return (
        <DrawerWrapper>
            <MealsPage />
            <BottomNav />
        </DrawerWrapper>
    );
}
