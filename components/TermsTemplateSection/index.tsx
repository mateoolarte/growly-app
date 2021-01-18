// vendors
import { useState } from "react";

// styled
import {
  Wrapper,
  TabsContainer,
  Tabs,
  TabItem,
  TabButton,
  TabContent,
} from "./styled";

const FEATURES = "features";
const TERMS = "terms";

export default function TermsTemplateSection() {
  const [activeTab, setActiveTab] = useState(FEATURES);

  return (
    <Wrapper>
      <TabsContainer>
        <Tabs>
          <TabItem>
            <TabButton
              type="button"
              isActive={activeTab === FEATURES}
              onClick={() => setActiveTab(FEATURES)}
            >
              Qué incluye
            </TabButton>
          </TabItem>
          <TabItem>
            <TabButton
              type="button"
              isActive={activeTab === TERMS}
              onClick={() => setActiveTab(TERMS)}
            >
              Términos y condiciones
            </TabButton>
          </TabItem>
        </Tabs>
        <TabContent isActive={activeTab === FEATURES}>Que incluye</TabContent>
        <TabContent isActive={activeTab === TERMS}>
          Terminos y condiciones
        </TabContent>
      </TabsContainer>
    </Wrapper>
  );
}
