import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  List,
  Header as H,
  Grid,
  Image,
  Accordion,
  Divider,
  Button,
  Icon,
} from "semantic-ui-react";
import mockImage from "../logo.svg";
import SlideItemList from "../componenets/SlideItemList";
// import Footer from "../componenets/Footer";
import Header from "../componenets/Header";

export default function NFTDetailPage() {
  const { id, name } = useParams();
  const [activeIndex, setActiveIndex] = useState([1, 5, 7, 8, 9]);

  const handleClick = (e, data) => {
    const index = data.index;
    console.log(data.index);
    const mockArr = activeIndex;
    const curIdxPosition = mockArr.indexOf(index);
    if (curIdxPosition > -1) {
      mockArr.splice(curIdxPosition, 1);
      setActiveIndex([...mockArr]);
      console.log(activeIndex);
    } else {
      setActiveIndex([...mockArr, index]);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ margin: "1rem 4rem" }}>
        <Grid textAlign="left" style={{ height: "100vh" }}>
          <Grid.Row columns={2}>
            <Grid.Column width={7}>
              <Image
                className="nftDetailBox"
                src={mockImage}
                size="massive"
                bordered
                rounded
              ></Image>
              <Accordion
                style={{ width: "41rem" }}
                className="nftDetailBox"
                styled
              >
                <Accordion.Title
                  active={true}
                  index={0}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Description
                </Accordion.Title>
                <Accordion.Content className="accordionContent" active={true}>
                  <p>
                    By <b>Chris Park</b>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex.includes(1)}
                  index={1}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Traits
                </Accordion.Title>
                <Accordion.Content
                  className="accordionContent"
                  active={activeIndex.includes(1)}
                >
                  <p>This is NFT traits</p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex.includes(2)}
                  index={2}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  About Blockchain Team Standard
                </Accordion.Title>
                <Accordion.Content
                  active={activeIndex.includes(2)}
                  className="accordionContent"
                >
                  <p>This is About Blockchain Team Standard</p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex.includes(3)}
                  index={3}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  Details
                </Accordion.Title>
                <Accordion.Content
                  active={activeIndex.includes(3)}
                  className="accordionContent"
                >
                  <p>This is Details of Blockchain Team Standard</p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
            <Grid.Column width={9}>
              <div style={{ marginLeft: "1rem", display: "flex" }}>
                <div style={{ flex: "10" }}>BTS</div>
                <div style={{ flex: "1" }}>
                  <Icon name="share alternate"></Icon>
                </div>
                <div style={{ flex: "1" }}>
                  <Icon name="ellipsis horizontal"></Icon>
                </div>
              </div>
              <H as="h2" className="nftDetailBox">
                {`${name}`} {`#${id}`}
              </H>

              <List horizontal className="nftDetailBox">
                <List.Item>owners</List.Item>
                <List.Item>items</List.Item>
                <List.Item>views</List.Item>
                <List.Item>favorites</List.Item>
                <List.Item>Art</List.Item>
              </List>

              <Accordion
                style={{ width: "50rem" }}
                styled
                className="nftDetailBox"
              >
                <Accordion.Title
                  active={true}
                  index={4}
                  onClick={(e, data) => handleClick(e, data)}
                >
                  <div style={{ color: "grey" }}>
                    Sale ends June 30, 2023 at 6:00 PM
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: "1 1 0" }}>
                      <div>60</div>
                      <div style={{ color: "grey" }}>Hours</div>
                    </div>
                    <div style={{ flex: "1 1 0" }}>
                      <div>51</div>
                      <div style={{ color: "grey" }}>Minutes</div>
                    </div>
                    <div style={{ flex: "1 1 0" }}>
                      <div>24</div>
                      <div style={{ color: "grey" }}>Seconds</div>
                    </div>
                  </div>
                </Accordion.Title>
                <Accordion.Content className="accordionContent" active={true}>
                  <div>Current price</div>
                  <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                    10 ETH
                  </div>
                  <Button primary style={{ margin: "0.5rem 0" }}>
                    Buy Now
                  </Button>
                </Accordion.Content>
              </Accordion>

              <Accordion
                style={{ width: "50rem" }}
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
                <Accordion.Content
                  active={activeIndex.includes(5)}
                  className="accordionContent"
                >
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>

              <Accordion
                style={{ width: "50rem" }}
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
                <Accordion.Content
                  active={activeIndex.includes(6)}
                  className="accordionContent"
                >
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>

              <Accordion
                style={{ width: "50rem" }}
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
                <Accordion.Content
                  active={activeIndex.includes(7)}
                  className="accordionContent"
                >
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
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
                <Accordion.Content
                  active={activeIndex.includes(8)}
                  className="accordionContent"
                >
                  <p>Price Graph</p>
                </Accordion.Content>
              </Accordion>

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
                <Accordion.Content
                  active={activeIndex.includes(9)}
                  className="accordionContent"
                >
                  <SlideItemList />
                  <Divider />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to={`/collection/${name}`}>
                      <Button>View collection</Button>
                    </Link>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
