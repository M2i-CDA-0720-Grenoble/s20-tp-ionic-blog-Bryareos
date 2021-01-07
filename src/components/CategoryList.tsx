import React, {FC} from "react";
import { IonList } from "@ionic/react";
import categories from "../data/categories"
import Category from "./Category";

interface CategoryListProps {

}

const CategoryList: FC<CategoryListProps> = () => {
    return (
        <IonList>
            {
                categories.map(
                    (categories, index) =>
                        <Category category={categories} key={index}/>
                )
            }
        </IonList>
    )
}

export default CategoryList
