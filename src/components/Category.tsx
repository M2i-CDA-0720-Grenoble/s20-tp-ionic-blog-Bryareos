import React, {FC} from "react";
import { IonItem } from "@ionic/react";
import {CategoryModel} from "../models";

interface CategoryProps {
    category: CategoryModel
}

const Category: FC<CategoryProps> = ({category}) => {
    return (
        <IonItem>{category.name}</IonItem>
    )
}

export default Category
