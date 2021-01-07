import React, {FC} from "react";
import { IonList } from "@ionic/react";
import {Article} from "./index";
import articles from "../data/articles"

interface ArticleListProps { }

const ArticleList: FC<ArticleListProps> = () => {

    return (
        <IonList>
            {
                articles.map(
                    (todo, index) =>
                        <Article key={index} article={todo} />
                )
            }
        </IonList>
    )
}

export default ArticleList;
