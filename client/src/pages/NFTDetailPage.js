import React, { useState } from "react";
import {
  List,
  Container,
  Header,
  Grid,
  Image,
  Accordion,
  Segment,
} from "semantic-ui-react";
import mockImage from "../logo.svg";

export default function NFTDetailPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, data) => {
    const index = data.index;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
    console.log(data.index);
  };

  return (
    <Container>
      <Grid textAlign="left" style={{ height: "100vh" }}>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image
              className="nftDetailBox"
              src={mockImage}
              size="medium"
              bordered
              rounded
            ></Image>
            <Container>
              <Accordion className="nftDetailBox" styled exclusive={false}>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Description
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>This is NFT description</p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Traits
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>This is NFT traits</p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  About Blockchain Team Standard
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>This is About Blockchain Team Standard</p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Details
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <p>This is Details of Blockchain Team Standard</p>
                </Accordion.Content>
              </Accordion>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container>
              <List horizontal className="nftDetailBox">
                <List.Item style={{ width: "15rem" }}>BTS</List.Item>
                <List.Item>Share</List.Item>
                <List.Item>Option</List.Item>
              </List>
              <Header className="nftDetailBox">
                Blockchain Team Standard (BTS)
              </Header>
            </Container>
            <Container>
              <List horizontal className="nftDetailBox">
                <List.Item>owners</List.Item>
                <List.Item>items</List.Item>
                <List.Item>views</List.Item>
                <List.Item>favorites</List.Item>
                <List.Item>Art</List.Item>
              </List>
            </Container>
            <Container className="nftDetailBox">
              <Segment className="nftDetailBox">Current Price</Segment>
            </Container>
            <Container className="nftDetailBox">
              <Segment className="nftDetailBox">Price History</Segment>
            </Container>
            <Container className="nftDetailBox">
              <Segment className="nftDetailBox">Listings</Segment>
            </Container>
            <Container className="nftDetailBox">
              <Segment className="nftDetailBox">Offers</Segment>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
