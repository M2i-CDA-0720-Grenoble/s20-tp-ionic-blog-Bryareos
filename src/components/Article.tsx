import {ArticleModel} from "../models";
import React, {FC} from "react";
import { IonItem } from "@ionic/react";

interface ArticleProps {
    article: ArticleModel
}

const Article: FC<ArticleProps> = ({article}) => {
    return (
        <IonItem>{article.title}</IonItem>
    )
}

export default Article;
