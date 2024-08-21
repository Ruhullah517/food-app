import HomePage from "../screens/Home";
import BottomNav from "./BottomNav";
import DrawerWrapper from "./DrawerWrapper";

export default function HomeDrawer() {


  return (
    <DrawerWrapper>
      <HomePage />
      <BottomNav/>
    </DrawerWrapper>
  );
}
