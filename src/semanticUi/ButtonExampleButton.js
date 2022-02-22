import React from "react";
import { Button, Icon, Segment } from "semantic-ui-react";

const ButtonExampleButton = () => {
  return (
    <div>
      <div>
        <Button>Click Here</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
      <br />
      <div>
        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
        <Button animated="vertical">
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
        <Button animated="fade">
          <Button.Content visible>Sign-up for a Pro account</Button.Content>
          <Button.Content hidden>$12.99 a month</Button.Content>
        </Button>
      </div>
      <br />
      <div>
        {" "}
        <Segment inverted>
          <Button inverted>Standard</Button>
          <Button inverted color="red">
            Red
          </Button>
          <Button inverted color="orange">
            Orange
          </Button>
          <Button inverted color="yellow">
            Yellow
          </Button>
          <Button inverted color="olive">
            Olive
          </Button>
          <Button inverted color="green">
            Green
          </Button>
          <Button inverted color="teal">
            Teal
          </Button>
          <Button inverted color="blue">
            Blue
          </Button>
          <Button inverted color="violet">
            Violet
          </Button>
          <Button inverted color="purple">
            Purple
          </Button>
          <Button inverted color="pink">
            Pink
          </Button>
          <Button inverted color="brown">
            Brown
          </Button>
          <Button inverted color="grey">
            Grey
          </Button>
          <Button inverted color="black">
            Black
          </Button>
        </Segment>
      </div>
    </div>
  );
};

export default ButtonExampleButton;
