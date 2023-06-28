import React, { useState } from "react";
import SlideCollectionList from "../componenets/SlideCollectionList";
import { Header as H, Form, Menu } from "semantic-ui-react";

export default function MainPage() {
  const [activeItem, setActiveItem] = useState("All");

  return (
    <div>
      <div style={{ margin: "1rem 4rem" }}>
        <Menu secondary>
          <Menu.Item
            name="All"
            active={activeItem === "All"}
            onClick={() => setActiveItem("All")}
          />
          <Menu.Item
            name="Art"
            active={activeItem === "Art"}
            onClick={() => setActiveItem("Art")}
          />
          <Menu.Item
            name="Gaming"
            active={activeItem === "Gaming"}
            onClick={() => setActiveItem("Gaming")}
          />
          <Menu.Item
            name="Memberships"
            active={activeItem === "Memberships"}
            onClick={() => setActiveItem("Memberships")}
          />
          <Menu.Item
            name="PFP"
            active={activeItem === "PFP"}
            onClick={() => setActiveItem("PFP")}
          />
          <Menu.Item
            name="Photography"
            active={activeItem === "Photography"}
            onClick={() => setActiveItem("Photography")}
          />
          <Menu.Item
            name="Music"
            active={activeItem === "Music"}
            onClick={() => setActiveItem("Music")}
          />
        </Menu>
        <Form style={{ margin: "2rem 0" }}>
          <H as="h2">Notable Collections</H>
          <SlideCollectionList />
        </Form>
        <Form>
          <H as="h2">Trending in Art</H>
          <SlideCollectionList />
        </Form>
      </div>
    </div>
  );
}
