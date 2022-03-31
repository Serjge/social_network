import { PureComponent, ReactElement } from 'react';

export type ContactTypeProps = {
  contactTitle: string;
  contactValue: string | null;
};

export class Contact extends PureComponent<ContactTypeProps> {
  render(): ReactElement {
    const { contactTitle, contactValue } = this.props;
    return (
      <div>
        <b>{contactTitle}</b>: {contactValue}
      </div>
    );
  }
}
