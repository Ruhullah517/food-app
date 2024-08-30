import { TouchableOpacity, StyleSheet, Text } from "react-native";



const BtnsList = ({ selectedButtons, setSelectedButtons, selectedCategory }) => {
    const snacksBtns = [
        { title: "Bruschetta" },
        { title: "Spring Rolls" },
        { title: "Crepes" },
        { title: "Wings" },
        { title: "Skewers" },
        { title: "Salmon" }
    ];
    const mealsBtns = [
        { title: "Sushi" },
        { title: "Pizza" },
        { title: "Chicken" },
        { title: "Curry" },
        { title: "Burger" },
        { title: "Cheese" }
    ];
    const dessertsBtns = [
        { title: "Crepes" },
        { title: "Macarons" },
        { title: "Cupcakes" },
        { title: "Ice Cream" },
        { title: "Flan" },
        { title: "Cheesecake" }
    ];
    const veganBtns = [
        { title: "Bean Burger" },
        { title: "Lagsana" },
        { title: "Pizza" },
        { title: "Mushroom" },
        { title: "Risotto" },
        { title: "Broccoli" }
    ];
    const drinksBtns = [
        { title: "Coffee" },
        { title: "Cocktail" },
        { title: "Milkshake" },
        { title: "Wine" },
        { title: "Piña Colada" },
        { title: "Mojito" }
    ];

    const toggleButton = (btnTitle) => {
        if (selectedButtons.includes(btnTitle)) {
            setSelectedButtons(selectedButtons.filter(title => title !== btnTitle));
        } else {
            setSelectedButtons([...selectedButtons, btnTitle]);
        }
    };
    return (<>
        {(selectedCategory === "Snacks" ? snacksBtns : selectedCategory === "Meal" ? mealsBtns : selectedCategory === "Vegan" ? veganBtns : selectedCategory === "Dessert" ? dessertsBtns : selectedCategory === "Drinks" ? drinksBtns : snacksBtns).map(btn =>
            <TouchableOpacity
                key={btn.title}
                style={[
                    styles.cancelButton,
                    selectedButtons.includes(btn.title) && styles.selectedButton
                ]}
                onPress={() => toggleButton(btn.title)}
            >
                <Text style={[
                    styles.cancelButtonText,
                    selectedButtons.includes(btn.title) && styles.selectedButtonText
                ]}>
                    {btn.title}
                </Text>
            </TouchableOpacity>
        )}
    </>)
};

export default BtnsList;

const styles = StyleSheet.create({
    cancelButton: {
        backgroundColor: '#FFDECF',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: 99,
        height: 24,
        alignItems: 'center'
    },
    cancelButtonText: {
        fontSize: 14,
        fontFamily: 'LeagueSpartanRegular',
        color: '#E95322',
        textAlign: 'center'
    },
    selectedButton: {
        backgroundColor: '#E95322',
    },
    selectedButtonText: {
        color: '#FFFFFF',
    },
})