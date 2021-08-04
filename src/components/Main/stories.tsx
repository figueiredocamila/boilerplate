import { ReactElement } from 'hoist-non-react-statics/node_modules/@types/react'
import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (): ReactElement => <Main />
