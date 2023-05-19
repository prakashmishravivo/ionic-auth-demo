import { IonApp, setupIonicReact } from "@ionic/react";
import "./App.css";
import Navigation from "./routing/Navigation";
import { Suspense } from "react";

setupIonicReact();

const App: React.FC = () => (
  <Suspense fallback="Loading">
    <IonApp style={{ height: "100%" }}>
      <Navigation />
    </IonApp>
  </Suspense>
);

export default App;
