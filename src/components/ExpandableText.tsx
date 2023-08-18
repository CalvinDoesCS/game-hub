import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expandText, setExpandText] = useState(false);
  const max = 300;

  if (!children) return null;

  if (children.length <= max) {
    return <Text>{children}</Text>;
  }

  const summary = expandText
    ? children
    : children.substring(0, max) + "...";

  return (
    <Text>
      {summary}
      <Button
        size='xs'
        marginLeft={2}
        fontWeight='bold'
        colorScheme='yellow'
        onClick={() => setExpandText(!expandText)}
      >
        {" "}
        {expandText ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
