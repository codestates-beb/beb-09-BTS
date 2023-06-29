import "../assets/NFTCreatePage.css";
import React, { useState } from "react";
import {
  Header as H,
  Grid,
  Form,
  Segment,
  Icon,
  Button,
  Input,
  Dropdown,
  Modal,
  Divider,
  Radio,
} from "semantic-ui-react";
// import Footer from "../componenets/Footer";
// import Header from "../componenets/Header";

export default function NFTMintPage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [checkUnlockable, setCheckUnlockable] = useState(false);
  const [inputSupply, setInputSupply] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null); // eslint-disable-line no-unused-vars
  const [fileName, setFileName] = useState(null); // eslint-disable-line no-unused-vars

  const categoryOptions =[
    {key:1, text:'Art', value:1},
    {key:2, text:'Gaming', value:2},
    {key:3, text:'Memberships', value:3},
    {key:4, text:'PFPs', value:4},
    {key:5, text:'Photography', value:5},
    {key:6, text:'Music', value:6},
  ]

  const handleRadioClick = () => {
    if (checkUnlockable === false) {
      setCheckUnlockable(true);
    } else {
      setCheckUnlockable(false);
    }
  };

  const fileInput = React.useRef(null);

  const handleClickAdd = () =>{
    fileInput.current.click();
  }

  const handleAddChange=(e)=>{
    const fileUploaded = e.target.files[0];

    if(fileUploaded.type ==="image/png" || fileUploaded.type ==="image/jpg" || fileUploaded.type ==="image/jpeg"){
      setSelectedFile(fileUploaded);
      setFileName(fileUploaded.name);
      console.log(fileUploaded);

      const imgEL = document.querySelector('.imgBox');
      const reader = new FileReader();

      reader.onload = () =>
          (imgEL.style.backgroundImage = `urL(${reader.result})`);

      reader.readAsDataURL(fileUploaded);
    }else{
      alert("File Format must be [PNG],[JPG],[JPEG]");
      return;
    }
  }


  return (
    <div>
      <Grid
        centered
        style={{ width: "646px", margin: "0 auto", padding: "2rem" }}
      >
        <Grid.Column>
          <H as="h1">Create New Item</H>
          <Form>
            <p>* Required Fields</p>
            <Form.Field>
              <H>Image, Video, Audio, or 3D Model *</H>
              <p>
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF. Max size: 100MB
              </p>
              <Segment placeholder>
                <div className="imgBox" ></div>
              </Segment>
              <Button primary onClick={handleClickAdd}>Add File</Button>
              <input type ="file"
                     ref={fileInput}
                     onChange={handleAddChange}
                     style={{display:"none"}}/>
            </Form.Field>
            <Form.Field
              control={Input}
              label="Name *"
              placeholder="item name"
            ></Form.Field>
            <Form.Field>
              <label>External Link</label>
              <p>
                {`OpenSea will include a link to this URL on this item's detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details.`}
              </p>
              <input
                type="url"
                placeholder="http://yoursite.io/item/123"
              ></input>
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <p>
                {`The description will be included on the item's detail page
                underneath its image. Markdown syntax is supported.`}
              </p>
              <textarea placeholder="Provide a detail description of your item."></textarea>
            </Form.Field>
            <Form.Field>
              <label>Collection</label>
              <p>This is the collection where your item will appear.</p>
              <Dropdown
                search
                fluid
                selection
                placeholder="Select collection"
              ></Dropdown>
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <p>This is the collection category.</p>
              <Dropdown
                  search
                  fluid
                  options={categoryOptions}
                  selection
                  placeholder="Select category"
              >
              </Dropdown>
            </Form.Field>
            <Form.Field>
              <div style={{ display: "flex" }}>
                <Icon name="list ul"></Icon>
                <div>
                  <p style={{ fontWeight: "bold" }}>Properties</p>
                  <p>Textual traits that show up as rectangles</p>
                </div>
                <Modal
                  closeIcon={true}
                  open={open1}
                  onClose={() => setOpen1(false)}
                  onOpen={() => setOpen1(true)}
                  trigger={<Button style={{ marginLeft: "auto" }}>+</Button>}
                >
                  <Modal.Header>Add Properties</Modal.Header>
                  <Modal.Content>
                    <p>
                      Properties show up underneath your item, are clickable,
                      and can be filtered in your collections sidebar.
                    </p>
                    <Form.Group inline={true} widths="equal">
                      <Form.Input
                        fluid
                        label="Type"
                        placeholder="Character"
                      ></Form.Input>
                      <Form.Input
                        fluid
                        label="Name"
                        placeholder="Male"
                      ></Form.Input>
                    </Form.Group>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button primary onClick={() => setOpen1(false)}>
                      Save
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </Form.Field>
            <Divider />
            <Form.Field>
              <div style={{ display: "flex" }}>
                <Icon name="star outline"></Icon>
                <div>
                  <p style={{ fontWeight: "bold" }}>Levels</p>
                  <p>Numerical traits that show as a progress bar</p>
                </div>
                <Modal
                  closeIcon={true}
                  open={open2}
                  onClose={() => setOpen2(false)}
                  onOpen={() => setOpen2(true)}
                  trigger={<Button style={{ marginLeft: "auto" }}>+</Button>}
                >
                  <Modal.Header>Add Properties</Modal.Header>
                  <Modal.Content>
                    <p>
                      Properties show up underneath your item, are clickable,
                      and can be filtered in your collections sidebar.
                    </p>
                    <Form.Group inline={true} widths="equal">
                      <Form.Input
                        fluid
                        label="Type"
                        placeholder="Character"
                      ></Form.Input>
                      <Form.Input
                        fluid
                        label="Name"
                        placeholder="Male"
                      ></Form.Input>
                    </Form.Group>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button primary onClick={() => setOpen1(false)}>
                      Save
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </Form.Field>
            <Divider />
            <Form.Field>
              <div style={{ display: "flex" }}>
                <Icon name="chart bar"></Icon>
                <div>
                  <p style={{ fontWeight: "bold" }}>Stats</p>
                  <p>Numerical traits that just show as numbers</p>
                </div>
                <Modal
                  closeIcon={true}
                  open={open3}
                  onClose={() => setOpen3(false)}
                  onOpen={() => setOpen3(true)}
                  trigger={<Button style={{ marginLeft: "auto" }}>+</Button>}
                >
                  <Modal.Header>Add Properties</Modal.Header>
                  <Modal.Content>
                    <p>
                      Properties show up underneath your item, are clickable,
                      and can be filtered in your collections sidebar.
                    </p>
                    <Form.Group inline={true} widths="equal">
                      <Form.Input
                        fluid
                        label="Type"
                        placeholder="Character"
                      ></Form.Input>
                      <Form.Input
                        fluid
                        label="Name"
                        placeholder="Male"
                      ></Form.Input>
                    </Form.Group>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button primary onClick={() => setOpen1(false)}>
                      Save
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </Form.Field>
            <Divider />
            <Form.Field>
              <div style={{ display: "flex" }}>
                <Icon name="unlock"></Icon>
                <div>
                  <p style={{ fontWeight: "bold" }}>Unlockable Content</p>
                  <p>
                    Include unlockable content that can only be revealed by the
                    owner of the item.
                  </p>
                </div>
                <Radio
                  toggle
                  value="unlockable"
                  checked={checkUnlockable}
                  onChange={() => handleRadioClick()}
                  style={{ marginLeft: "auto" }}
                />
              </div>
              {checkUnlockable ? (
                <div style={{ padding: "1rem" }}>
                  <textarea placeholder="Enter content(access key, code to redeem, link to file, etc)"></textarea>
                  Markdown syntax is supported
                </div>
              ) : (
                <></>
              )}
            </Form.Field>
            <Divider />
            <Form.Field>
              <div style={{ display: "flex" }}>
                <Icon name="exclamation triangle"></Icon>
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    Explicit & Sensitive Content
                  </p>
                  <p>Set this item as explicit and sensitive content</p>
                </div>
                <Radio
                  toggle
                  value="sensitive"
                  style={{ marginLeft: "auto" }}
                />
              </div>
            </Form.Field>
            <Divider />
            <Form.Field>
              <label>Supply</label>
              <p>The number of items that can be minted. No gas cost to you!</p>
              <input
                value={inputSupply}
                onChange={(e) => setInputSupply(e.target.value)}
              ></input>
            </Form.Field>
            <Form.Field>
              <label>Blockchain</label>
              <Dropdown
                selection
                options={[
                  { key: "Ethereum", text: "Ethereum", value: "Ethereum" },
                ]}
                defaultValue="Ethereum"
              ></Dropdown>
            </Form.Field>
            <Form.Field>
              <label>Freeze metadata</label>
              <p>
                {`Freezing your metadata will allow you to permanently lock and
                store all of this item's content in decentralized file storage.`}
              </p>
              <Segment>
                To freeze your metadata, you must create your item first.
              </Segment>
            </Form.Field>
          </Form>
          <Divider />
          <Button primary size="huge" style={{ borderRadius: "1rem" }}>
            Create
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  );
}
