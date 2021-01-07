import React from "react";
import {IonContent, IonHeader, IonToolbar, IonTitle, IonPage} from "@ionic/react";
import CategoryList from "../components/CategoryList";

const Categories: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Categories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Categories</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <CategoryList/>
            </IonContent>
        </IonPage>
    )
}

export default Categories;
