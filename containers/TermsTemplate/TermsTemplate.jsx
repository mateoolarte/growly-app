// vendors
import { useState } from 'react';
import Image from 'next/image';

// components
import { Modal } from '../../components/ui/Modal';

// styled
import {
  Wrapper,
  TabsContainer,
  Tabs,
  TabItem,
  TabButton,
  TabContent,
} from './TermsTemplate.styles';
import { Features, FeatureItem } from '../HeroTemplates/HeroTemplates.styles';
import { Icon } from '../HeroTemplate/HeroTemplate.styles';

// assets
const infoIcon = '/icons/info.svg';

const FEATURES = 'features';
const TERMS = 'terms';

export function TermsTemplate({ features }) {
  const [activeTab, setActiveTab] = useState(FEATURES);
  const [hostingModal, setHostingModal] = useState(false);

  return (
    <Wrapper>
      <Modal isActive={hostingModal} handleClose={setHostingModal}>
        Cada sitio web se entrega con dominio y alojamiento por un año. Luego
        del año habrá un costo de renovación para el dominio y el alojamiento
        por <strong>$170.000 COP</strong>
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
                  {index === 5 && (
                    <>
                      {feature}
                      <Icon type="button" onClick={() => setHostingModal(true)}>
                        <Image
                          src={infoIcon}
                          alt="icono"
                          width={10}
                          height={10}
                        />
                      </Icon>
                    </>
                  )}
                  {index !== 5 && feature}
                </FeatureItem>
              );
            })}
          </Features>
        </TabContent>
        <TabContent isActive={activeTab === TERMS}>
          <ul>
            <li className="terms-item">
              Growly es un servicio para crear sitios web profesionales bajo
              plantillas prediseñadas, por lo cual, no se hacen sitios web
              personalizados o desarrollos a la medida.
            </li>
            <li className="terms-item">
              La entrega del sitio web se dará a los 5 días hábiles luego de
              entregado el contenido y los recursos requeridos por el equipo de
              Growly para su configuración.
            </li>
            <li className="terms-item">
              Todas las plantillas están diseñadas y desarrolladas por el equipo
              de Growly, con el objetivo de ofrecer un producto moderno y que
              cumpla con altos estándares de experiencia de usuario.
            </li>
            <li className="terms-item">
              Al comprar una plantilla de Growly, estás comprando el servicio
              completo de configuración del sitio web y el acompañamiento del
              equipo. Aparte de esto, en lo técnico te estás llevando una copia
              de la plantilla. Las plantillas son propiedad de Growly, que las
              pone a disposición para todos los clientes pero personalizando sus
              colores, tipografía, logo y contenido de acuerdo a cada marca.
            </li>
            <li className="terms-item">
              Cada plantilla está construida con un objetivo y un propósito de
              acuerdo al mercado al que está dirigido. La estructura ya se
              encuentra desarrollada y no se puede modificar; excepto, si por
              algún motivo, hay un módulo que se quiera eliminar.
            </li>
            <li className="terms-item">
              El sitio web entregado por el equipo de Growly no requiere
              renovación, lo único que requiere renovación al año siguiente, es
              el alojamiento y el dominio. Este tiene un costo de $170.000 COP /
              año.
            </li>
            <li className="terms-item">
              Los derechos intelectuales de diseño y el código de cada plantilla
              son propiedad de Growly, queda prohibida su reproducción total o
              parcial sin previa autorización.
            </li>
            <li className="terms-item">
              El soporte técnico solo estará disponible para capacitar y
              solucionar problemas técnicos, no abarca cambios del sitio web y/o
              administración de contenidos.
            </li>
            <li className="terms-item">
              La entrega del sitio web se dará a los 5 días hábiles luego de
              entregado el contenido y los recursos requeridos por el equipo de
              Growly para su configuración.
            </li>
            <li className="terms-item">
              Growly no se hará responsable de cambios o modificaciones que el
              cliente quiera hacer después de su compra. Si el cliente decide
              hacer cambios al código por sus propios medios, inmediatamente
              perderá la garantía y el soporte técnico.
            </li>
            <li className="terms-item">
              Para cualquier comunicación externa, el correo dispuesto para
              servicio al cliente es:
              <a href="mailto:admin@getgrowly.com"> admin@getgrowly.com</a>
            </li>
          </ul>
        </TabContent>
      </TabsContainer>
    </Wrapper>
  );
}
