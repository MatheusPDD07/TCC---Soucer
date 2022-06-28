import { Story, Meta } from '@storybook/react'

import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="Action"
        labelFor="action"
        id="action"
        name="nome"
        value="Action"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Adventure"
        labelFor="adventure"
        id="adventure"
        name="nome"
        value="Adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Strategy"
        labelFor="strategy"
        id="strategy"
        name="nome"
        value="Strategy"
        {...args}
      />
    </div>
  </>
)
