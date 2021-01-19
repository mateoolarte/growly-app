// vendors
import { useState } from "react";

// components
import Modal from "../ui/Modal";

// styled
import {
  Wrapper,
  TabsContainer,
  Tabs,
  TabItem,
  TabButton,
  TabContent,
} from "./styled";
import { Features, FeatureItem } from "../HeroTemplates/styled";
import { Icon } from "../HeroSingleTemplate/styled";

// assets
import InfoIcon from "../../assets/icons/info.svg";

const FEATURES = "features";
const TERMS = "terms";

export default function TermsTemplateSection({ features }) {
  const [activeTab, setActiveTab] = useState(FEATURES);
  const [hostingModal, setHostingModal] = useState(false);

  return (
    <Wrapper>
      <Modal isActive={hostingModal} handleClose={setHostingModal}>
        Contenido modal hosting y dominio
      </Modal>
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
        <TabContent isActive={activeTab === FEATURES}>
          <Features>
            {features?.map((feature, index) => {
              return (
                <FeatureItem key={feature}>
                  {index === 4 && (
                    <>
                      {feature}
                      <Icon type="button" onClick={() => setHostingModal(true)}>
                        <InfoIcon />
                      </Icon>
                    </>
                  )}
                  {index !== 4 && feature}
                </FeatureItem>
              );
            })}
          </Features>
        </TabContent>
        <TabContent isActive={activeTab === TERMS}>
          Terminos y condiciones
        </TabContent>
      </TabsContainer>
    </Wrapper>
  );
}
