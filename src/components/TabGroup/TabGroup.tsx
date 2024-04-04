import { createRef, useEffect, useRef, useState } from 'react';
import Tab from '../Tab/Tab';
import { Container, Glider } from './TabGroup.styled';

interface ITabGroup {
  labels: string[];
  chosen: string;
  handleChange: (label: string) => void;
}

function TabGroup({ labels, chosen, handleChange }: ITabGroup) {
  const [tabsRefs, setTabsRefs] = useState<
    Record<string, React.RefObject<HTMLButtonElement>>
  >({});

  const gliderRef = useRef<HTMLSpanElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const labelsRefs: Record<string, React.RefObject<HTMLButtonElement>> = {};
    labels.forEach((label) => {
      labelsRefs[label] = createRef<HTMLButtonElement>();
    });

    setTabsRefs({
      ...tabsRefs,
      ...labelsRefs,
    });
  }, [labels]);

  useEffect(() => {
    // Make the glider's width same as the width of the chosen tab
    const chosenTabRef = tabsRefs[chosen];
    if (chosenTabRef) {
      const chosenTabRect = chosenTabRef.current?.getBoundingClientRect();

      if (chosenTabRect && gliderRef.current) {
        gliderRef.current.style.width = `${chosenTabRect?.width}px`;
      }
    }
  }, [tabsRefs, chosen]);

  const handleTabClick = (label: string) => {
    handleChange(label);
    const chosenTabRef = tabsRefs[label];

    const chosenTabRect = chosenTabRef.current?.getBoundingClientRect();
    const gliderRect = gliderRef.current?.getBoundingClientRect();
    const tabsContainerRect = tabsContainerRef.current?.getBoundingClientRect();

    if (chosenTabRect && gliderRef.current && gliderRect && tabsContainerRect) {
      gliderRef.current.style.left = `${chosenTabRect?.left - tabsContainerRect?.left}px`;
      gliderRef.current.style.width = `${chosenTabRect?.width}px`;
    }
  };

  const tabs = labels.map((label, index) => (
    <Tab
      label={label}
      key={index}
      onClick={handleTabClick}
      chosen={chosen === label}
      ref={tabsRefs[label]}
    />
  ));

  return (
    <Container ref={tabsContainerRef}>
      {tabs}
      <Glider ref={gliderRef} />
    </Container>
  );
}

export default TabGroup;
