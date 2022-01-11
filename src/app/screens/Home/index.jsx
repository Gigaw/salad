import React from "react";
import { useNavigate } from "react-router-dom";
import AppBtn from "../../components/AppBtn";
import Layout from "../../components/Layout";
import ScreenDefHeader from "../../components/ScreenDefHeader";
import "./styles.css";

const config = {
  title: "SalatsWebApp",
  description: `
  There is nothing tastier than a salad with molecules, 
  in our application you can order such a salad. You can choose 
  from the available varieties, or create your own salad from 
  the ingredients available in the warehouse.`,
};

function Home() {
  const navigate = useNavigate();

  return (
    // <Layout>
      <div className="home">
        <ScreenDefHeader
          title={config.title}
          description={config.description}
        />
        <div className="home__next-ways">
          <AppBtn
            text="ready salad"
            addClass="home__next-ways-bttn"
            onClick={() => navigate("/salads")}
          />
          <AppBtn
            text="your own salad"
            addClass="home__next-ways-bttn"
            onClick={() => navigate("/molecules")}
          />
        </div>
      </div>
    // </Layout>
  );
}

export default Home;
