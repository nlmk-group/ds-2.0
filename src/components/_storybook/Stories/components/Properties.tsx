import React, { FC, useContext, useId, useState } from 'react';

import ArgumentsTable from '@components/_storybook/ArgumentsTable';
import { ComponentReference, getComponentDocs } from '@components/_storybook/ArgumentsTable/ComponentReference';
import { TArgsType } from '@components/_storybook/ArgumentsTable/types';
import { Button, Modal, Typography } from '@components/index';
import { FloatingPortal } from '@floating-ui/react';

import styles from '../Stories.module.scss';

type RelatedComponent = { name: string; component: unknown; args?: TArgsType };

const Properties: FC<{ argsTypes?: TArgsType; related?: RelatedComponent[] }> = ({ argsTypes = {}, related = [] }) => {
  const [open, setOpen] = useState(false);
  const headingId = useId();
  const component = useContext(ComponentReference);
  const docs = getComponentDocs(component);
  const name = docs?.displayName || (component as { componentType?: string })?.componentType;

  return (
    <>
      <div className={styles.properties}>
        <Button type="button" variant="secondary" aria-haspopup="dialog" onClick={() => setOpen(true)}>
          Свойства компонента
        </Button>
      </div>
      {open && (
        <FloatingPortal>
          <div className={styles.propertiesLayer}>
            <Modal
              aria-labelledby={headingId}
              isOpen
              onClose={() => setOpen(false)}
              disablePageScroll
              className={styles.propertiesDialog}
            >
              <Typography variant="Subheading2-Medium" id={headingId}>
                Свойства {name || 'компонента'}
              </Typography>
              <div className={styles.arguments}>
                <ArgumentsTable args={argsTypes} componentName={name} documentedProps={docs?.props} />
                {related.map(section => (
                  <section key={section.name}>
                    <h3>{section.name}</h3>
                    <ArgumentsTable
                      args={section.args}
                      componentName={section.name}
                      documentedProps={getComponentDocs(section.component)?.props}
                    />
                  </section>
                ))}
              </div>
            </Modal>
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export default Properties;
