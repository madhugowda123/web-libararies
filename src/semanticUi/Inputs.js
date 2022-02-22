import React from "react";
import { Input, Icon } from "semantic-ui-react";

const Inputs = () => {
  return (
    <div>
      <Input loading icon="user" placeholder="Search..." />
      <Input icon="users" iconPosition="left" placeholder="Search users..." />
      <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
      />
    </div>
  );
};

export default Inputs;
