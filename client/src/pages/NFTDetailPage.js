import React, { useState } from "react";
import {
  List,
  Container,
  Header,
  Grid,
  Image,
  Accordion,
} from "semantic-ui-react";
import mockImage from "../logo.svg";

export default function NFTDetailPage() {
  const [activeIndex, setActiveIndex] = useState([]);

  const handleClick = (e, data) => {
    const index = data.index;
    const mockArr = activeIndex;
    if (activeIndex.includes(index)) {
      const arr = mockArr.splice(mockArr.indexOf(index), 1);
      setActiveIndex([...arr]);
      console.log(activeIndex);
    } else {
      setActiveIndex([...activeIndex, index]);
    }

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
              <Accordion
                style={{ width: "37rem" }}
                className="nftDetailBox"
                styled
                exclusive={false}
              >
                <Accordion.Title
                  active={activeIndex.includes(0)}
                  index={0}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Description
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(0)}>
                  <p>This is NFT description</p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex.includes(1)}
                  index={1}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Traits
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(1)}>
                  <p>This is NFT traits</p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex.includes(2)}
                  index={2}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  About Blockchain Team Standard
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(2)}>
                  <p>This is About Blockchain Team Standard</p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex.includes(3)}
                  index={3}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Details
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(3)}>
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
              <Accordion
                style={{ width: "37rem" }}
                styled
                className="nftDetailBox"
              >
                <Accordion.Title
                  active={activeIndex.includes(4)}
                  index={4}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Current Price
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(4)}>
                  <p>Current Price is ...</p>
                </Accordion.Content>
              </Accordion>
            </Container>
            <Container>
              <Accordion
                style={{ width: "37rem" }}
                styled
                className="nftDetailBox"
              >
                <Accordion.Title
                  active={activeIndex.includes(5)}
                  index={5}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Price History
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(5)}>
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>
            </Container>
            <Container>
              <Accordion
                style={{ width: "37rem" }}
                styled
                className="nftDetailBox"
              >
                <Accordion.Title
                  active={activeIndex.includes(6)}
                  index={6}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Listings
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(6)}>
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>
            </Container>
            <Container>
              <Accordion
                style={{ width: "37rem" }}
                styled
                className="nftDetailBox"
              >
                <Accordion.Title
                  active={activeIndex.includes(7)}
                  index={7}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Offers
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(7)}>
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Container>
              <Accordion
                style={{ width: "97%" }}
                styled
                className="nftDetailBox"
              >
                <Accordion.Title
                  active={activeIndex.includes(8)}
                  index={8}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Item Activity
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(8)}>
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>
            </Container>
            <Container>
              <Accordion
                style={{ width: "97%" }}
                styled
                className="nftDetailBox"
              >
                <Accordion.Title
                  active={activeIndex.includes(9)}
                  index={9}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  More From This Collection
                </Accordion.Title>
                <Accordion.Content active={activeIndex.includes(9)}>
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
